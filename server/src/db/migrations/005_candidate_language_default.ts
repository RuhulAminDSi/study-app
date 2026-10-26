import type { Migration } from "./types.js";

// The site now opens in English, so an account created without a language choice should say so too.
// Existing accounts keep the language they have.
export const migration005: Migration = {
  version: 5,
  name: "candidate_language_default",
  sql: `ALTER TABLE candidates ALTER COLUMN preferred_language SET DEFAULT 'en';`,
};
