import pg from "pg";
import { config } from "../config.js";

const isProduction = process.env.NODE_ENV === 'production';
// Production connects over SSL; DATABASE_SSL=false turns it off (a production build against a local database).
const useSsl = isProduction && process.env.DATABASE_SSL !== 'false';

export const pool = new pg.Pool({
  connectionString: config.databaseUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  ...(useSsl ? { ssl: { rejectUnauthorized: false } } : {}),
});

pool.on("error", (err) => {
  console.error("Unexpected pool error", err);
});
