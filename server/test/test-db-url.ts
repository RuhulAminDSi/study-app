import { config as loadEnv } from "dotenv";

loadEnv();

/** URL of the throwaway test database. Never returns a database whose name doesn't end in `_test`. */
export function testDatabaseUrl(): string {
  let url: URL;
  if (process.env.TEST_DATABASE_URL) {
    url = new URL(process.env.TEST_DATABASE_URL);
  } else {
    if (!process.env.DATABASE_URL) {
      throw new Error("Set TEST_DATABASE_URL or DATABASE_URL in server/.env before running tests");
    }
    url = new URL(process.env.DATABASE_URL);
    if (!url.pathname.endsWith("_test")) url.pathname = "/study_hub_test";
  }
  const dbName = url.pathname.slice(1);
  if (!dbName.endsWith("_test")) {
    throw new Error(`Refusing to run tests against "${dbName}": the database name must end in _test`);
  }
  return url.toString();
}
