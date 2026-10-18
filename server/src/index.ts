import { createApp } from "./app.js";
import { config } from "./config.js";

const app = createApp();

app.listen(config.port, () => {
  console.log(`⭐ StudyHub API running on http://localhost:${config.port}`);

  // Run migrations after the server starts (non-blocking), as before.
  import("./db/migrate.js")
    .then(({ migrate }) => migrate())
    .then(() => console.log("DB migrations complete"))
    .catch((err: any) => console.error("MIGRATION FAILED:", err?.message || err));
});
