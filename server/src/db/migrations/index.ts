import type { Migration } from "./types.js";
import { migration001 } from "./001_core.js";
import { migration002 } from "./002_exam_prep.js";
import { migration003 } from "./003_seed_ledger.js";
import { migration004 } from "./004_fix_lesson_text.js";
import { migration005 } from "./005_candidate_language_default.js";
import { migration006 } from "./006_content_management.js";
import { migration007 } from "./007_exam_edge.js";

export const migrations: Migration[] = [migration001, migration002, migration003, migration004, migration005, migration006, migration007];
