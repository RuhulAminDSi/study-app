import pg from "pg";
import { testDatabaseUrl } from "./test-db-url";

/** Runs once per `vitest run`: ensures the test DB exists and holds a freshly migrated schema. */
export default async function setup() {
  const url = new URL(testDatabaseUrl());
  const dbName = url.pathname.slice(1);

  const maintenance = new URL(url.toString());
  maintenance.pathname = "/postgres";
  const admin = new pg.Client({ connectionString: maintenance.toString() });
  await admin.connect();
  const exists = await admin.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);
  if (!exists.rowCount) await admin.query(`CREATE DATABASE "${dbName}"`);
  await admin.end();

  const pool = new pg.Pool({ connectionString: url.toString() });
  try {
    await pool.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
    const { migrations } = await import("../src/db/migrations/index");
    const { runMigrations } = await import("../src/db/migrator");
    await runMigrations(pool, migrations);
  } finally {
    await pool.end();
  }
}
