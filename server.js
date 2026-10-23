// English Steps / Ступени английского — server with accounts and progress storage
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const SESSION_DAYS = 60;
const SCHEMA = (process.env.DB_SCHEMA || "public").replace(/[^a-z0-9_]/gi, "");
const q = (name) => `"${SCHEMA}".${name}`;

const pool = DATABASE_URL
  ? new Pool({
      connectionString: DATABASE_URL,
      ssl: process.env.PGSSL === "1" ? { rejectUnauthorized: false } : false,
      max: 5,
    })
  : null;

async function migrate() {
  if (!pool) return;
  await pool.query(`CREATE SCHEMA IF NOT EXISTS "${SCHEMA}"`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${q("users")} (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      display_name TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE UNIQUE INDEX IF NOT EXISTS users_username_lower ON ${q("users")} (lower(username));
    CREATE TABLE IF NOT EXISTS ${q("sessions")} (
      token TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES ${q("users")}(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL
    );
    CREATE TABLE IF NOT EXISTS ${q("progress")} (
      user_id INTEGER PRIMARY KEY REFERENCES ${q("users")}(id) ON DELETE CASCADE,
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  await pool.query(`DELETE FROM ${q("sessions")} WHERE expires_at < now()`);
}

const app = express();
app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(express.json({ limit: "300kb" }));
app.use((req, res, next) => {
  res.set("X-Content-Type-Options", "nosniff");
  res.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.set("X-Frame-Options", "SAMEORIGIN");
  next();
});

// --- helpers ---
function parseCookies(req) {
  const out = {};
  (req.headers.cookie || "").split(";").forEach((p) => {
    const i = p.indexOf("=");
    if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return out;
}
function setSession(req, res, token) {
  const secure = req.secure ? "; Secure" : "";
  res.set("Set-Cookie", `sid=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}${secure}`);
}
function clearSession(res) {
  res.set("Set-Cookie", "sid=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
}
async function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  await pool.query(`INSERT INTO ${q("sessions")} (token, user_id, expires_at) VALUES ($1, $2, now() + $3::interval)`, [
    token, userId, `${SESSION_DAYS} days`,
  ]);
  return token;
}
async function currentUser(req) {
  const sid = parseCookies(req).sid;
  if (!sid || !/^[a-f0-9]{64}$/.test(sid)) return null;
  const r = await pool.query(
    `SELECT u.id, u.username, u.display_name FROM ${q("sessions")} s JOIN ${q("users")} u ON u.id = s.user_id
     WHERE s.token = $1 AND s.expires_at > now()`, [sid]);
  return r.rows[0] || null;
}
async function getProgress(userId) {
  const r = await pool.query(`SELECT data FROM ${q("progress")} WHERE user_id = $1`, [userId]);
  return r.rows[0] ? r.rows[0].data : null;
}
const publicUser = (u) => ({ username: u.username, display_name: u.display_name });

// simple in-memory rate limit for auth endpoints
const hits = new Map();
function limited(req) {
  const key = req.ip + req.path;
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < 10 * 60 * 1000);
  arr.push(now);
  hits.set(key, arr);
  return arr.length > 20;
}
function needDb(req, res, next) {
  if (!pool) return res.status(503).json({ error: "Database is not configured" });
  next();
}

// --- routes ---
app.get("/api/health", async (req, res) => {
  let db = false;
  if (pool) { try { await pool.query("SELECT 1"); db = true; } catch (e) { db = false; } }
  res.json({ ok: true, db, time: new Date().toISOString() });
});

app.post("/api/register", needDb, async (req, res) => {
  if (limited(req)) return res.status(429).json({ error: "Too many attempts. Try again later." });
  const username = String(req.body.username || "").trim();
  const password = String(req.body.password || "");
  const display_name = String(req.body.display_name || "").trim().slice(0, 40) || null;
  if (!/^[A-Za-z0-9_.\-а-яА-ЯёЁ]{3,32}$/.test(username))
    return res.status(400).json({ error: "Логин: 3–32 символа, буквы, цифры, _ . - / Username: 3–32 letters, digits, _ . -" });
  if (password.length < 6 || password.length > 200)
    return res.status(400).json({ error: "Пароль от 6 символов / Password needs 6+ characters" });
  try {
    const hash = await bcrypt.hash(password, 10);
    const r = await pool.query(
      `INSERT INTO ${q("users")} (username, password_hash, display_name) VALUES ($1, $2, $3) RETURNING id, username, display_name`,
      [username, hash, display_name]);
    const user = r.rows[0];
    await pool.query(`INSERT INTO ${q("progress")} (user_id, data) VALUES ($1, '{}'::jsonb) ON CONFLICT DO NOTHING`, [user.id]);
    setSession(req, res, await createSession(user.id));
    res.json({ user: publicUser(user), progress: null });
  } catch (e) {
    if (e.code === "23505") return res.status(409).json({ error: "Такой логин уже занят / Username is taken" });
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/login", needDb, async (req, res) => {
  if (limited(req)) return res.status(429).json({ error: "Too many attempts. Try again later." });
  const username = String(req.body.username || "").trim();
  const password = String(req.body.password || "");
  const r = await pool.query(`SELECT id, username, display_name, password_hash FROM ${q("users")} WHERE lower(username) = lower($1)`, [username]);
  const user = r.rows[0];
  if (!user || !(await bcrypt.compare(password, user.password_hash)))
    return res.status(401).json({ error: "Неверный логин или пароль / Wrong username or password" });
  setSession(req, res, await createSession(user.id));
  res.json({ user: publicUser(user), progress: await getProgress(user.id) });
});

app.post("/api/logout", needDb, async (req, res) => {
  const sid = parseCookies(req).sid;
  if (sid) await pool.query(`DELETE FROM ${q("sessions")} WHERE token = $1`, [sid]).catch(() => {});
  clearSession(res);
  res.json({ ok: true });
});

app.get("/api/me", needDb, async (req, res) => {
  const user = await currentUser(req);
  if (!user) return res.json({ user: null });
  res.json({ user: publicUser(user), progress: await getProgress(user.id) });
});

app.put("/api/progress", needDb, async (req, res) => {
  const user = await currentUser(req);
  if (!user) return res.status(401).json({ error: "Not logged in" });
  const p = req.body && req.body.progress;
  if (!p || typeof p !== "object" || Array.isArray(p)) return res.status(400).json({ error: "Bad progress" });
  const data = { ex: p.ex || {}, hw: p.hw || {}, test: typeof p.test === "string" ? p.test.slice(0, 4) : null, skin: typeof p.skin === "string" ? p.skin.slice(0, 16) : null };
  await pool.query(
    `INSERT INTO ${q("progress")} (user_id, data, updated_at) VALUES ($1, $2, now())
     ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`, [user.id, data]);
  res.json({ ok: true });
});

app.use("/api", (req, res) => res.status(404).json({ error: "Not found" }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "5m" }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

migrate()
  .then(() => app.listen(PORT, () => console.log(`English Steps listening on ${PORT} (db: ${pool ? "on" : "off"})`)))
  .catch((e) => { console.error("Migration failed", e); process.exit(1); });
