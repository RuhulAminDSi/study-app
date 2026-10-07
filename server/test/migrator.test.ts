import pg from "pg";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { runMigrations } from "../src/db/migrator";
import { migration001 } from "../src/db/migrations/001_core";
import type { Migration } from "../src/db/migrations/types";

// Each test gets its own empty schema, so the runner sees a "fresh database".
let schema: string;
let pool: pg.Pool;
const openPool = () =>
  new pg.Pool({ connectionString: process.env.DATABASE_URL, options: `-c search_path=${schema}` });

beforeEach(async () => {
  schema = `mig_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
  const admin = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  await admin.query(`CREATE SCHEMA ${schema}`);
  await admin.end();
  pool = openPool();
});

afterEach(async () => {
  await pool.query(`DROP SCHEMA ${schema} CASCADE`);
  await pool.end();
});

const fake: Migration[] = [
  { version: 2, name: "b", sql: "CREATE TABLE b (id int)" },
  { version: 1, name: "a", sql: "CREATE TABLE a (id int)" },
];

describe("runMigrations", () => {
  it("applies pending migrations in version order and records them", async () => {
    expect(await runMigrations(pool, fake)).toEqual([1, 2]);
    const { rows } = await pool.query("SELECT version, name FROM schema_migrations ORDER BY version");
    expect(rows).toEqual([{ version: 1, name: "a" }, { version: 2, name: "b" }]);
  });

  it("does nothing when every migration is already applied", async () => {
    await runMigrations(pool, fake);
    expect(await runMigrations(pool, fake)).toEqual([]);
  });

  it("rolls back a failing migration and leaves earlier ones recorded", async () => {
    const bad: Migration = { version: 3, name: "bad", sql: "CREATE TABLE c (id int); SELECT * FROM no_such_table" };
    await expect(runMigrations(pool, [...fake, bad])).rejects.toThrow(/Migration 3 \(bad\) failed/);
    const { rows } = await pool.query("SELECT version FROM schema_migrations ORDER BY version");
    expect(rows.map((r) => r.version)).toEqual([1, 2]);
    const c = await pool.query("SELECT to_regclass('c') AS t");
    expect(c.rows[0].t).toBeNull();
  });

  it("rejects duplicate version numbers before touching the database", async () => {
    const dup: Migration[] = [...fake, { version: 2, name: "again", sql: "SELECT 1" }];
    await expect(runMigrations(pool, dup)).rejects.toThrow(/Duplicate migration version 2/);
  });

  it("applies 001_core cleanly on a database that already has the core tables", async () => {
    await pool.query(migration001.sql); // what the old migrate.ts did on the live DB
    await pool.query("INSERT INTO admin_users (username, email, password_hash) VALUES ('keep', 'keep@example.com', 'x')");
    expect(await runMigrations(pool, [migration001])).toEqual([1]);
    const { rows } = await pool.query("SELECT username FROM admin_users");
    expect(rows).toEqual([{ username: "keep" }]);
  });

  it("reports the migration's own error and discards the connection when ROLLBACK also fails", async () => {
    // A connection that dies mid-migration: the SQL fails, then ROLLBACK fails too.
    let releasedWith: unknown = "not released";
    const client = {
      query: async (sql: string) => {
        if (sql.includes("SELECT version FROM schema_migrations")) return { rows: [] };
        if (sql === "boom-sql") throw new Error("syntax error near boom");
        if (sql === "ROLLBACK") throw new Error("Connection terminated");
        return { rows: [] };
      },
      release: (err?: unknown) => { releasedWith = err; },
    };
    const fakePool = { connect: async () => client } as unknown as pg.Pool;
    await expect(runMigrations(fakePool, [{ version: 1, name: "boom", sql: "boom-sql" }])).rejects.toThrow(/syntax error near boom/);
    expect(releasedWith).toBeInstanceOf(Error);
  });

  it("serialises concurrent runners so each migration is applied once", async () => {
    const second = openPool();
    try {
      const [a, b] = await Promise.all([runMigrations(pool, fake), runMigrations(second, fake)]);
      expect([...a, ...b].sort()).toEqual([1, 2]);
      const { rows } = await pool.query("SELECT count(*)::int AS n FROM schema_migrations");
      expect(rows[0].n).toBe(2);
    } finally {
      await second.end();
    }
  });
});
