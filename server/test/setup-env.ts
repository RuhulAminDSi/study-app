import { afterAll } from "vitest";
import { testDatabaseUrl } from "./test-db-url";

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret";
process.env.BCRYPT_ROUNDS = "4";
process.env.DATABASE_URL = testDatabaseUrl();

afterAll(async () => {
  // Imported lazily so the pool is created only after DATABASE_URL points at the test DB.
  const { pool } = await import("../src/db/pool");
  await pool.end();
});
