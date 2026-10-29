// One-time copy of accounts and progress between databases (used when moving the site).
//  - COPY_FROM_DATABASE_URL (+ COPY_FROM_SCHEMA): pull data from the old database into this site's database
//  - COPY_TO_DATABASE_URL (+ COPY_TO_SCHEMA): push this site's data to a new database
// Copies only into an empty target, so it is safe to leave the variable set.
const { Pool } = require("pg");
const clean = (s, d) => String(s || d).replace(/[^a-z0-9_]/gi, "");
const sslOpt = () => (process.env.COPY_NO_SSL ? false : { rejectUnauthorized: false });

async function ensureTables(pool, schema) {
  const D = (t) => `"${schema}".${t}`;
  const ex = await pool.query("SELECT 1 FROM information_schema.schemata WHERE schema_name = $1", [schema]);
  if (!ex.rowCount) await pool.query(`CREATE SCHEMA "${schema}"`);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${D("users")} (
      id SERIAL PRIMARY KEY, username TEXT NOT NULL, password_hash TEXT, display_name TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(), google_sub TEXT, telegram_id BIGINT, email TEXT);
    CREATE UNIQUE INDEX IF NOT EXISTS users_username_lower ON ${D("users")} (lower(username));
    CREATE UNIQUE INDEX IF NOT EXISTS users_google_sub ON ${D("users")} (google_sub) WHERE google_sub IS NOT NULL;
    CREATE UNIQUE INDEX IF NOT EXISTS users_telegram_id ON ${D("users")} (telegram_id) WHERE telegram_id IS NOT NULL;
    CREATE TABLE IF NOT EXISTS ${D("sessions")} (
      token TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES ${D("users")}(id) ON DELETE CASCADE, expires_at TIMESTAMPTZ NOT NULL);
    CREATE TABLE IF NOT EXISTS ${D("progress")} (
      user_id INTEGER PRIMARY KEY REFERENCES ${D("users")}(id) ON DELETE CASCADE,
      data JSONB NOT NULL DEFAULT '{}'::jsonb, updated_at TIMESTAMPTZ NOT NULL DEFAULT now());
  `);
}

async function copy(src, srcSchema, dst, dstSchema) {
  const S = (t) => `"${srcSchema}".${t}`;
  const D = (t) => `"${dstSchema}".${t}`;
  await ensureTables(dst, dstSchema);
  const existing = await dst.query(`SELECT count(*)::int AS n FROM ${D("users")}`);
  if (existing.rows[0].n > 0) { console.log(`COPY: target already has ${existing.rows[0].n} users, skipping`); return; }
  const users = (await src.query(
    `SELECT id, username, password_hash, display_name, created_at, google_sub, telegram_id, email FROM ${S("users")} ORDER BY id`)).rows;
  const progress = (await src.query(`SELECT user_id, data, updated_at FROM ${S("progress")}`)).rows;
  const c = await dst.connect();
  try {
    await c.query("BEGIN");
    for (const u of users)
      await c.query(`INSERT INTO ${D("users")} (id, username, password_hash, display_name, created_at, google_sub, telegram_id, email)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`, [u.id, u.username, u.password_hash, u.display_name, u.created_at, u.google_sub, u.telegram_id, u.email]);
    for (const p of progress)
      await c.query(`INSERT INTO ${D("progress")} (user_id, data, updated_at) VALUES ($1,$2,$3)`, [p.user_id, p.data, p.updated_at]);
    await c.query(`SELECT setval(pg_get_serial_sequence('${D("users")}', 'id'), GREATEST((SELECT COALESCE(max(id),0) FROM ${D("users")}), 1))`);
    await c.query("COMMIT");
    console.log(`COPY: done — ${users.length} users, ${progress.length} progress rows`);
  } catch (e) { await c.query("ROLLBACK"); throw e; } finally { c.release(); }
}

module.exports = async function runCopies(ownPool, ownSchema) {
  for (const dir of ["FROM", "TO"]) {
    const url = process.env[`COPY_${dir}_DATABASE_URL`];
    if (!url) continue;
    const other = new Pool({ connectionString: url, ssl: sslOpt(), max: 2 });
    const otherSchema = clean(process.env[`COPY_${dir}_SCHEMA`], "english_steps");
    try {
      if (dir === "FROM") await copy(other, otherSchema, ownPool, ownSchema);
      else await copy(ownPool, ownSchema, other, otherSchema);
    } catch (e) {
      console.error(`COPY ${dir} failed:`, e.message);
    } finally {
      await other.end().catch(() => {});
    }
  }
};
