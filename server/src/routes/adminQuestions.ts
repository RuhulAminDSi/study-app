import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { withTransaction } from "../db/tx.js";
import { asyncHandler } from "../http/asyncHandler.js";
import type { AuthRequest } from "../middleware/auth.js";
import { parseQuestionBody } from "../validation/question.js";
import { UUID_RE } from "../validation/taxonomy.js";
import type { QuestionWrite } from "../services/questionContent.js";
import { commitImport, ImportFileError, parseImportText, validateImport } from "../services/importer.js";
import {
  deleteQuestion, getQuestion, insertQuestion, listQuestions, QuestionConflictError, setPublished, updateQuestion,
} from "../services/questions.js";

export const adminQuestionsRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });
const conflict = (res: Response, err: unknown) => {
  if (err instanceof QuestionConflictError) { res.status(409).json({ error: err.message, code: err.code }); return true; }
  return false;
};
const uuidOrUndefined = (v: unknown) => (typeof v === "string" && UUID_RE.test(v) ? v : undefined);

/** Subject must exist, topic must belong to it, tags must exist. Returns field → code. */
async function checkReferences(q: QuestionWrite): Promise<Record<string, string>> {
  const fields: Record<string, string> = {};
  if (!(await pool.query("SELECT 1 FROM subjects WHERE id = $1", [q.subject_id])).rowCount) fields.subject_id = "subject_unknown";
  if (q.topic_id && !(await pool.query("SELECT 1 FROM topics WHERE id = $1 AND subject_id = $2", [q.topic_id, q.subject_id])).rowCount) {
    fields.topic_id = "topic_unknown";
  }
  if (q.exam_tag_ids.length) {
    const found = await pool.query("SELECT count(*)::int AS n FROM exam_tags WHERE id = ANY($1::uuid[])", [q.exam_tag_ids]);
    if (found.rows[0].n !== q.exam_tag_ids.length) fields.exam_tag_ids = "exam_tag_unknown";
  }
  return fields;
}

adminQuestionsRouter.get("/", asyncHandler(async (req, res) => {
  const q = req.query as Record<string, string | undefined>;
  const page = Math.max(1, parseInt(q.page ?? "1", 10) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(q.pageSize ?? "25", 10) || 25));
  const difficulty = Number(q.difficulty);
  res.json(await listQuestions(pool, {
    subject_id: uuidOrUndefined(q.subject_id),
    topic_id: uuidOrUndefined(q.topic_id),
    type: ["mcq", "written", "programming"].includes(q.type ?? "") ? q.type : undefined,
    difficulty: [1, 2, 3].includes(difficulty) ? difficulty : undefined,
    source: ["original", "past_paper", "imported"].includes(q.source ?? "") ? q.source : undefined,
    published: q.published === "true" ? true : q.published === "false" ? false : undefined,
    q: q.q?.trim() || undefined,
    page,
    pageSize,
  }));
}));

adminQuestionsRouter.post("/bulk-publish", asyncHandler(async (req, res) => {
  const ids = Array.isArray(req.body?.ids) ? req.body.ids.filter((id: unknown) => typeof id === "string" && UUID_RE.test(id)) : [];
  if (typeof req.body?.published !== "boolean") { invalid(res, { published: "required" }); return; }
  res.json({ updated: await setPublished(pool, ids, req.body.published) });
}));

adminQuestionsRouter.post("/import", asyncHandler<AuthRequest>(async (req, res) => {
  const { format, content, dryRun } = req.body ?? {};
  if ((format !== "csv" && format !== "json") || typeof content !== "string") {
    invalid(res, { format: "required" });
    return;
  }
  let rows: Record<string, unknown>[];
  try {
    rows = parseImportText(format, content);
  } catch (err) {
    if (err instanceof ImportFileError) { res.status(400).json({ error: err.message, code: err.code }); return; }
    throw err;
  }
  const report = await validateImport(pool, rows, format === "csv" ? 2 : 1);
  const summary = { total: report.total, valid: report.valid, duplicates: report.duplicates, duplicateRows: report.duplicateRows, problems: report.problems };
  if (dryRun !== false) { res.json(summary); return; }
  const imported = await withTransaction((client) =>
    commitImport(client, report.drafts, { source: "imported", publish: false, createdBy: req.user?.id ?? null }));
  res.json({ ...summary, imported });
}));

adminQuestionsRouter.get("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const question = await getQuestion(pool, req.params.id);
  if (!question) { notFound(res); return; }
  res.json(question);
}));

adminQuestionsRouter.post("/", asyncHandler<AuthRequest>(async (req, res) => {
  const r = parseQuestionBody(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const refs = await checkReferences(r.value);
  if (Object.keys(refs).length) { invalid(res, refs); return; }
  try {
    const id = await withTransaction((client) => insertQuestion(client, r.value, { source: "original", createdBy: req.user?.id ?? null }));
    res.status(201).json(await getQuestion(pool, id));
  } catch (err) {
    if (!conflict(res, err)) throw err;
  }
}));

adminQuestionsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const r = parseQuestionBody(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const refs = await checkReferences(r.value);
  if (Object.keys(refs).length) { invalid(res, refs); return; }
  try {
    const found = await withTransaction((client) => updateQuestion(client, req.params.id, r.value));
    if (!found) { notFound(res); return; }
    res.json(await getQuestion(pool, req.params.id));
  } catch (err) {
    if (!conflict(res, err)) throw err;
  }
}));

adminQuestionsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  try {
    if (!(await deleteQuestion(pool, req.params.id))) { notFound(res); return; }
    res.json({ deleted: true });
  } catch (err) {
    if (!conflict(res, err)) throw err;
  }
}));
