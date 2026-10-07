import { pool } from "./pool.js";
import { migrations } from "./migrations/index.js";
import { runMigrations } from "./migrator.js";

export async function migrate(): Promise<void> {
  const applied = await runMigrations(pool, migrations);
  console.log(applied.length ? `Applied migrations: ${applied.join(", ")}` : "Database schema is up to date.");
}

// CLI: npm run migrate
if (require.main === module) {
  migrate()
    .then(() => pool.end())
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
