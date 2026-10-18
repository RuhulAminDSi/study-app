import type { Pool } from "pg";
import type { Migration } from "./migrations/types.js";

/** Arbitrary app-wide key; concurrent runners queue on it instead of racing. */
const MIGRATION_LOCK_KEY = 727001;

/**
 * Applies every migration whose version isn't in schema_migrations, lowest version first,
 * each in its own transaction. Returns the versions applied by this call.
 */
export async function runMigrations(pool: Pool, migrations: Migration[]): Promise<number[]> {
  const seen = new Set<number>();
  for (const m of migrations) {
    if (seen.has(m.version)) throw new Error(`Duplicate migration version ${m.version}`);
    seen.add(m.version);
  }
  const ordered = [...migrations].sort((a, b) => a.version - b.version);

  const client = await pool.connect();
  const applied: number[] = [];
  let connectionError: Error | undefined;
  try {
    await client.query("SELECT pg_advisory_lock($1)", [MIGRATION_LOCK_KEY]);
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        version     INTEGER PRIMARY KEY,
        name        VARCHAR(100) NOT NULL,
        applied_at  TIMESTAMPTZ NOT NULL DEFAULT now()
      )`);
    const { rows } = await client.query<{ version: number }>("SELECT version FROM schema_migrations");
    const done = new Set(rows.map((r) => r.version));

    for (const m of ordered) {
      if (done.has(m.version)) continue;
      try {
        await client.query("BEGIN");
        await client.query(m.sql);
        await client.query("INSERT INTO schema_migrations (version, name) VALUES ($1, $2)", [m.version, m.name]);
        await client.query("COMMIT");
        applied.push(m.version);
      } catch (err) {
        // If ROLLBACK itself fails the connection is broken: keep the original error and
        // make sure the broken client is discarded rather than returned to the pool.
        await client.query("ROLLBACK").catch((rollbackErr: Error) => { connectionError = rollbackErr; });
        throw new Error(`Migration ${m.version} (${m.name}) failed: ${(err as Error).message}`);
      }
    }
    return applied;
  } finally {
    if (!connectionError) {
      await client.query("SELECT pg_advisory_unlock($1)", [MIGRATION_LOCK_KEY]).catch((err: Error) => { connectionError = err; });
    }
    client.release(connectionError);
  }
}
