import type { Migration } from "./types.js";
import { migration001 } from "./001_core.js";
import { migration002 } from "./002_exam_prep.js";

export const migrations: Migration[] = [migration001, migration002];
