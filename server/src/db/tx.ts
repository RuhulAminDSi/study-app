import type { PoolClient } from "pg";
import { pool } from "./pool.js";

/** Runs fn inside BEGIN/COMMIT on one client; rolls back and rethrows on error. */
export async function withTransaction<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  let broken: Error | undefined;
  try {
    await client.query("BEGIN");
    const result = await fn(client);
    await client.query("COMMIT");
    return result;
  } catch (err) {
    await client.query("ROLLBACK").catch((rollbackErr: Error) => { broken = rollbackErr; });
    throw err;
  } finally {
    client.release(broken);
  }
}
