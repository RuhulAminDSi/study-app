import type { Migration } from "./types.js";

// Remembers everything the exam-prep seed has ever created, so re-running it never brings back
// rows that admins later edited, renamed or deleted.
export const migration003: Migration = {
  version: 3,
  name: "seed_ledger",
  sql: `
CREATE TABLE seed_ledger (
  kind       VARCHAR(20) NOT NULL CHECK (kind IN ('subject','topic','job_post','question')),
  key        TEXT NOT NULL,
  seeded_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (kind, key)
);
`,
};
