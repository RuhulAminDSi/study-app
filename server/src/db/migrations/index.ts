import type { Migration } from "./types.js";
import { migration001 } from "./001_core.js";
import { migration002 } from "./002_exam_prep.js";
import { migration003 } from "./003_seed_ledger.js";

export const migrations: Migration[] = [migration001, migration002, migration003];
