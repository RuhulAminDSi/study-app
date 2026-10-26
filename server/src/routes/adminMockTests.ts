import { Router, type Response } from "express";
import type { PoolClient } from "pg";
import { pool } from "../db/pool.js";
import { withTransaction } from "../db/tx.js";
import { asyncHandler } from "../http/asyncHandler.js";
import {
  buildPaper, checkReadiness, difficultyLabel, ExamError, getSections, TEST_SUMMARY_SELECT, type TestSummaryRow,
} from "../services/mockTests.js";
import { parseMockTest, type MockTestInput } from "../validation/exams.js";
import { UUID_RE } from "../validation/taxonomy.js";

/** Admin: practice sets, mock tests and model tests (/api/mock-tests). Any admin role manages them, like questions. */
export const adminMockTestsRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });
const sendExamError = (res: Response, err: unknown) => {
  if (!(err instanceof ExamError)) return false;
  res.status(err.status).json({ error: err.message, code: err.code, ...err.extra });
  return true;
};

const ATTEMPT_STATS = `
  LEFT JOIN LATERAL (
    SELECT count(*)::int AS attempt_count,
           count(*) FILTER (WHERE a.status <> 'in_progress')::int AS finished_count,
           (avg(100 * a.score / NULLIF(a.max_score, 0)) FILTER (WHERE a.status <> 'in_progress'))::float AS average_percent,
           (avg(CASE WHEN a.score >= a.pass_mark THEN 1 ELSE 0 END) FILTER (WHERE a.status <> 'in_progress' AND a.pass_mark IS NOT NULL))::float AS pass_rate
      FROM attempts a WHERE a.mock_test_id = mt.id
  ) st ON true`;

function status(t: Pick<TestSummaryRow, "is_published" | "is_archived">) {
  return t.is_archived ? "archived" : t.is_published ? "published" : "draft";
}

function listItem(t: TestSummaryRow & Record<string, unknown>) {
  return { ...t, status: status(t), difficulty: difficultyLabel(t.difficulties) };
}

adminMockTestsRouter.get("/", asyncHandler(async (req, res) => {
  const q = req.query as Record<string, string | undefined>;
  const where: string[] = [];
  const params: unknown[] = [];
  if (q.kind && ["quiz", "mock", "model"].includes(q.kind)) { params.push(q.kind); where.push(`mt.kind = $${params.length}`); }
  if (q.status === "draft") where.push("NOT mt.is_published AND NOT mt.is_archived");
  else if (q.status === "published") where.push("mt.is_published");
  else if (q.status === "archived") where.push("mt.is_archived");
  else if (q.status !== "all") where.push("NOT mt.is_archived");
  if (q.q?.trim()) {
    params.push(`%${q.q.trim().replace(/[\\%_]/g, (c) => `\\${c}`)}%`);
    where.push(`(mt.title_en ILIKE $${params.length} OR mt.title_bn ILIKE $${params.length})`);
  }
  const sql = TEST_SUMMARY_SELECT.replace(/^\s*SELECT /, "SELECT st.*, ") + ATTEMPT_STATS;
  const { rows } = await pool.query(
    `${sql} ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY mt.updated_at DESC, mt.id`,
    params,
  );
  res.json(rows.map(listItem));
}));

async function loadDetail(id: string) {
  const sql = TEST_SUMMARY_SELECT.replace(/^\s*SELECT /, "SELECT st.*, ") + ATTEMPT_STATS;
  const { rows } = await pool.query(`${sql} WHERE mt.id = $1`, [id]);
  if (!rows[0]) return null;
  const sections = await pool.query(
    `SELECT x.id, x.subject_id, s.code AS subject_code, s.name_en AS subject_name_en, x.topic_id, t.name_en AS topic_name_en,
            x.type, x.question_count, x.difficulty, x.marks_per_question::float AS marks_per_question,
            x.negative_mark::float AS negative_mark, x.sort_order,
            (SELECT count(*)::int FROM questions q WHERE q.is_published AND q.type = 'mcq' AND q.subject_id = x.subject_id
               AND (x.topic_id IS NULL OR q.topic_id = x.topic_id) AND (x.difficulty IS NULL OR q.difficulty = x.difficulty)) AS available
       FROM mock_test_sections x JOIN subjects s ON s.id = x.subject_id LEFT JOIN topics t ON t.id = x.topic_id
      WHERE x.mock_test_id = $1 ORDER BY x.sort_order, x.id`,
    [id],
  );
  const questions = await pool.query(
    `SELECT q.id, mq.position, s.code AS subject_code, t.name_en AS topic_name, q.type, q.difficulty, q.stem_en, q.stem_bn, q.is_published
       FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id JOIN subjects s ON s.id = q.subject_id
       LEFT JOIN topics t ON t.id = q.topic_id
      WHERE mq.mock_test_id = $1 ORDER BY mq.position`,
    [id],
  );
  return { ...listItem(rows[0]), sections: sections.rows, questions: questions.rows, problems: await checkReadiness(pool, id) };
}

adminMockTestsRouter.get("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const detail = await loadDetail(req.params.id);
  if (!detail) { notFound(res); return; }
  res.json(detail);
}));

/** Every subject, topic, question and job post the test names must exist; fixed papers hold MCQs only. */
async function checkReferences(client: PoolClient, v: MockTestInput): Promise<Record<string, string>> {
  const fields: Record<string, string> = {};
  if (v.job_post_id && !(await client.query("SELECT 1 FROM job_posts WHERE id = $1", [v.job_post_id])).rowCount) fields.job_post_id = "post_unknown";
  for (let i = 0; i < v.sections.length; i++) {
    const s = v.sections[i];
    if (!(await client.query("SELECT 1 FROM subjects WHERE id = $1", [s.subject_id])).rowCount) fields[`sections.${i}.subject_id`] = "subject_unknown";
    else if (s.topic_id && !(await client.query("SELECT 1 FROM topics WHERE id = $1 AND subject_id = $2", [s.topic_id, s.subject_id])).rowCount) {
      fields[`sections.${i}.topic_id`] = "topic_unknown";
    }
  }
  if (v.question_ids.length) {
    const found = await client.query("SELECT id, type FROM questions WHERE id = ANY($1::uuid[])", [v.question_ids]);
    if (found.rowCount !== v.question_ids.length) fields.question_ids = "question_unknown";
    else if (found.rows.some((r) => r.type !== "mcq")) fields.question_ids = "question_not_mcq";
  }
  return fields;
}

const COLUMNS = [
  "kind", "mode", "title_en", "title_bn", "description_en", "description_bn", "job_post_id", "duration_minutes", "total_questions",
  "marks_per_question", "negative_mark", "pass_mark", "shuffle_options", "available_from", "available_until", "max_attempts", "result_release",
] as const;

async function writeTest(client: PoolClient, id: string | null, v: MockTestInput): Promise<string> {
  const values = COLUMNS.map((c) => v[c]);
  let testId = id;
  if (testId) {
    await client.query(
      `UPDATE mock_tests SET ${COLUMNS.map((c, i) => `${c} = $${i + 2}`).join(", ")} WHERE id = $1`,
      [testId, ...values],
    );
  } else {
    const { rows } = await client.query(
      `INSERT INTO mock_tests (${COLUMNS.join(", ")}) VALUES (${COLUMNS.map((_, i) => `$${i + 1}`).join(", ")}) RETURNING id`,
      values,
    );
    testId = rows[0].id as string;
  }
  // Sections and the fixed paper are replaced as a whole; started attempts keep the paper they froze.
  await client.query("DELETE FROM mock_test_sections WHERE mock_test_id = $1", [testId]);
  await client.query("DELETE FROM mock_test_questions WHERE mock_test_id = $1", [testId]);
  for (let i = 0; i < v.sections.length; i++) {
    const s = v.sections[i];
    await client.query(
      `INSERT INTO mock_test_sections (mock_test_id, subject_id, topic_id, type, question_count, difficulty, marks_per_question, negative_mark, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [testId, s.subject_id, s.topic_id, s.type, s.question_count, s.difficulty, s.marks_per_question, s.negative_mark, i],
    );
  }
  if (v.question_ids.length) {
    await client.query(
      `INSERT INTO mock_test_questions (mock_test_id, question_id, position)
       SELECT $1, x.id, x.pos FROM unnest($2::uuid[]) WITH ORDINALITY AS x(id, pos)`,
      [testId, v.question_ids],
    );
  }
  return testId;
}

/** Saving a published test must leave it publishable, or candidates could open a test that cannot be built. */
async function saveTest(res: Response, id: string | null, body: unknown) {
  const r = parseMockTest(body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  try {
    const savedId = await withTransaction(async (client) => {
      if (id) {
        const current = await client.query("SELECT is_published FROM mock_tests WHERE id = $1 FOR UPDATE", [id]);
        if (!current.rows[0]) throw new ExamError(404, "not_found", "Not found");
      }
      const refs = await checkReferences(client, r.value);
      if (Object.keys(refs).length) throw new ExamError(400, "validation_failed", "Please correct the highlighted fields.", { fields: refs });
      const testId = await writeTest(client, id, r.value);
      const published = (await client.query("SELECT is_published FROM mock_tests WHERE id = $1", [testId])).rows[0].is_published;
      if (published) {
        const problems = await checkReadiness(client, testId);
        if (problems.length) throw new ExamError(409, "not_ready", "A published test must stay ready to take. Unpublish it first.", { problems });
      }
      return testId;
    });
    res.status(id ? 200 : 201).json(await loadDetail(savedId));
  } catch (err) {
    if (!sendExamError(res, err)) throw err;
  }
}

adminMockTestsRouter.post("/", asyncHandler(async (req, res) => saveTest(res, null, req.body)));

adminMockTestsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  await saveTest(res, req.params.id, req.body);
}));

adminMockTestsRouter.post("/:id/publish", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  if (typeof req.body?.published !== "boolean") { invalid(res, { published: "required" }); return; }
  try {
    await withTransaction(async (client) => {
      const current = await client.query("SELECT is_archived FROM mock_tests WHERE id = $1 FOR UPDATE", [req.params.id]);
      if (!current.rows[0]) throw new ExamError(404, "not_found", "Not found");
      if (req.body.published) {
        if (current.rows[0].is_archived) throw new ExamError(409, "archived", "Restore this test from the archive first.");
        const problems = await checkReadiness(client, req.params.id);
        if (problems.length) throw new ExamError(409, "not_ready", "This test is not ready to publish.", { problems });
      }
      await client.query("UPDATE mock_tests SET is_published = $2 WHERE id = $1", [req.params.id, req.body.published]);
    });
    res.json(await loadDetail(req.params.id));
  } catch (err) {
    if (!sendExamError(res, err)) throw err;
  }
}));

/** Archiving hides a test from candidates and from the default list, keeping its attempts and results. */
adminMockTestsRouter.post("/:id/archive", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  if (typeof req.body?.archived !== "boolean") { invalid(res, { archived: "required" }); return; }
  const { rowCount } = await pool.query(
    "UPDATE mock_tests SET is_archived = $2, is_published = CASE WHEN $2 THEN false ELSE is_published END WHERE id = $1",
    [req.params.id, req.body.archived],
  );
  if (!rowCount) { notFound(res); return; }
  res.json(await loadDetail(req.params.id));
}));

/** A draft copy: the way to reuse a test's configuration as a template. */
adminMockTestsRouter.post("/:id/duplicate", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const id = await withTransaction(async (client) => {
    const { rows } = await client.query(
      `INSERT INTO mock_tests (kind, mode, title_en, title_bn, description_en, description_bn, job_post_id, duration_minutes,
              total_questions, marks_per_question, negative_mark, pass_mark, shuffle_options, max_attempts, result_release, blueprint_id)
       SELECT kind, mode, left(title_en || ' (copy)', 200), CASE WHEN title_bn IS NULL THEN NULL ELSE left(title_bn || ' (কপি)', 200) END,
              description_en, description_bn, job_post_id, duration_minutes, total_questions, marks_per_question, negative_mark,
              pass_mark, shuffle_options, max_attempts, result_release, blueprint_id
         FROM mock_tests WHERE id = $1 RETURNING id`,
      [req.params.id],
    );
    if (!rows[0]) return null;
    await client.query(
      `INSERT INTO mock_test_sections (mock_test_id, subject_id, topic_id, type, question_count, difficulty, marks_per_question, negative_mark, lesson_slug, sort_order)
       SELECT $2, subject_id, topic_id, type, question_count, difficulty, marks_per_question, negative_mark, lesson_slug, sort_order
         FROM mock_test_sections WHERE mock_test_id = $1`,
      [req.params.id, rows[0].id],
    );
    await client.query(
      "INSERT INTO mock_test_questions (mock_test_id, question_id, position) SELECT $2, question_id, position FROM mock_test_questions WHERE mock_test_id = $1",
      [req.params.id, rows[0].id],
    );
    return rows[0].id as string;
  });
  if (!id) { notFound(res); return; }
  res.status(201).json(await loadDetail(id));
}));

adminMockTestsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  if ((await pool.query("SELECT 1 FROM attempts WHERE mock_test_id = $1 LIMIT 1", [req.params.id])).rowCount) {
    res.status(409).json({ error: "Candidates have taken this test. Archive it instead of deleting.", code: "has_attempts" });
    return;
  }
  const { rowCount } = await pool.query("DELETE FROM mock_tests WHERE id = $1", [req.params.id]);
  if (!rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

/** A sample paper with the answers, built the way a candidate's would be (random tests draw a fresh sample). */
adminMockTestsRouter.get("/:id/preview", asyncHandler(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) { notFound(res); return; }
  const { rows } = await pool.query<TestSummaryRow>(`${TEST_SUMMARY_SELECT} WHERE mt.id = $1`, [req.params.id]);
  if (!rows[0]) { notFound(res); return; }
  try {
    const paper = await buildPaper(pool, rows[0], null);
    const ids = paper.map((p) => p.questionId);
    const questions = await pool.query(
      `SELECT q.id, q.type, q.difficulty, q.stem_en, q.stem_bn, q.code_snippet, q.explanation_en, q.explanation_bn,
              q.model_answer_en, q.model_answer_bn, s.code AS subject_code, t.name_en AS topic_name
         FROM questions q JOIN subjects s ON s.id = q.subject_id LEFT JOIN topics t ON t.id = q.topic_id
        WHERE q.id = ANY($1::uuid[])`,
      [ids],
    );
    const options = await pool.query(
      "SELECT question_id, text_en, text_bn, is_correct FROM question_options WHERE question_id = ANY($1::uuid[]) ORDER BY position",
      [ids],
    );
    const byId = new Map(questions.rows.map((q) => [q.id, { ...q, options: [] as unknown[] }]));
    for (const o of options.rows) byId.get(o.question_id)?.options.push(o);
    res.json({
      sections: rows[0].mode === "random" ? (await getSections(pool, req.params.id)).length : 0,
      questions: paper.map((p, i) => ({ position: i + 1, marks: p.marks, negativeMark: p.negativeMark, question: byId.get(p.questionId) })),
    });
  } catch (err) {
    if (!sendExamError(res, err)) throw err;
  }
}));
