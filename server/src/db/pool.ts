import pg from "pg";
import { config } from "../config.js";

const isProduction = process.env.NODE_ENV === 'production';

export const pool = new pg.Pool({
  connectionString: config.databaseUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  ...(isProduction ? { ssl: { rejectUnauthorized: false } } : {}),
});

pool.on("error", (err) => {
  console.error("Unexpected pool error", err);
});
