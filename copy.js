// One-time copy of accounts and progress to another database (used when moving the site).
// Runs on start when COPY_TO_DATABASE_URL is set. Copies only into an empty target.
const { Pool } = require("pg");

module.exports = async function copyTo(srcPool, srcSchema) {
  const url = process.env.COPY_TO_DATABASE_URL;
  if (!url) return;
  const dstSchema = (process.env.COPY_TO_SCHEMA || "english_steps").replace(/[^a-z0-9_]/gi, "");
  const S = (t) => `"${srcSchema}".${t}`;
  const D = (t) => `"${dstSchema}".${t}`;
  const dst = new Pool({ connectionString: url, ssl: process.env.COPY_NO_SSL ? false : { rejectUnauthorized: false }, max: 2 });
  try {
    await dst.query(`CREATE SCHEMA IF NOT EXISTS "${dstSchema}"`);
    await dst.query(`
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
    const existing = await dst.query(`SELECT count(*)::int AS n FROM ${D("users")}`);
    if (existing.rows[0].n > 0) { console.log(`COPY: target already has ${existing.rows[0].n} users, skipping`); return; }
    const users = (await srcPool.query(
      `SELECT id, username, password_hash, display_name, created_at, google_sub, telegram_id, email FROM ${S("users")} ORDER BY id`)).rows;
    const progress = (await srcPool.query(`SELECT user_id, data, updated_at FROM ${S("progress")}`)).rows;
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
  } catch (e) {
    console.error("COPY failed:", e.message);
  } finally {
    await dst.end().catch(() => {});
  }
};
