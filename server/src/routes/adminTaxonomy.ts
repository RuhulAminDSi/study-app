import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { withTransaction } from "../db/tx.js";
import { asyncHandler } from "../http/asyncHandler.js";
import { parseExamTag, parseJobPost, parseSubject, parseTopic, parseWeights, UUID_RE } from "../validation/taxonomy.js";

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });
const notFound = (res: Response) => res.status(404).json({ error: "Not found" });
const inUse = (res: Response, what: string) =>
  res.status(409).json({ error: `This ${what} is still used by questions.`, code: "in_use" });
const isUuid = (v: string) => UUID_RE.test(v);

// ── Subjects ─────────────────────────────────────────────────────────────
export const SUBJECT_SELECT = `
  SELECT s.id, s.code, s.name_en, s.name_bn, s.category, s.chapter_id, c.chapter_number, s.sort_order,
         (SELECT count(*)::int FROM topics t WHERE t.subject_id = s.id) AS topic_count,
         (SELECT count(*)::int FROM questions q WHERE q.subject_id = s.id) AS question_count,
         (SELECT count(*)::int FROM questions q WHERE q.subject_id = s.id AND q.is_published) AS published_count
    FROM subjects s LEFT JOIN chapters c ON c.id = s.chapter_id`;

export const subjectsRouter = Router();

subjectsRouter.get("/", asyncHandler(async (_req, res) => {
  const { rows } = await pool.query(`${SUBJECT_SELECT} ORDER BY s.sort_order, s.code`);
  res.json(rows);
}));

async function chapterExists(id: string | null) {
  if (!id) return true;
  return (await pool.query("SELECT 1 FROM chapters WHERE id = $1", [id])).rowCount > 0;
}

subjectsRouter.post("/", asyncHandler(async (req, res) => {
  const r = parseSubject(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  if (!(await chapterExists(r.value.chapter_id))) { invalid(res, { chapter_id: "chapter_unknown" }); return; }
  try {
    const { rows } = await pool.query(
      "INSERT INTO subjects (code, name_en, name_bn, category, chapter_id, sort_order) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
      [r.value.code, r.value.name_en, r.value.name_bn, r.value.category, r.value.chapter_id, r.value.sort_order],
    );
    res.status(201).json((await pool.query(`${SUBJECT_SELECT} WHERE s.id = $1`, [rows[0].id])).rows[0]);
  } catch (err) {
    if ((err as { code?: string }).code === "23505") {
      res.status(409).json({ error: "A subject with this code already exists.", code: "code_taken", fields: { code: "code_taken" } });
      return;
    }
    throw err;
  }
}));

subjectsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const current = await pool.query("SELECT code FROM subjects WHERE id = $1", [req.params.id]);
  if (!current.rows[0]) { notFound(res); return; }
  // The code identifies the subject in imports, so it never changes.
  const r = parseSubject({ ...req.body, code: current.rows[0].code });
  if (r.ok === false) { invalid(res, r.fields); return; }
  if (!(await chapterExists(r.value.chapter_id))) { invalid(res, { chapter_id: "chapter_unknown" }); return; }
  await pool.query(
    "UPDATE subjects SET name_en = $2, name_bn = $3, category = $4, chapter_id = $5, sort_order = $6 WHERE id = $1",
    [req.params.id, r.value.name_en, r.value.name_bn, r.value.category, r.value.chapter_id, r.value.sort_order],
  );
  res.json((await pool.query(`${SUBJECT_SELECT} WHERE s.id = $1`, [req.params.id])).rows[0]);
}));

subjectsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const used = await pool.query("SELECT 1 FROM questions WHERE subject_id = $1 LIMIT 1", [req.params.id]);
  if (used.rowCount) { inUse(res, "subject"); return; }
  const del = await pool.query("DELETE FROM subjects WHERE id = $1", [req.params.id]);
  if (!del.rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

// ── Topics ───────────────────────────────────────────────────────────────
const TOPIC_SELECT = `
  SELECT t.id, t.subject_id, t.name_en, t.name_bn, t.lesson_id, t.sort_order,
         (SELECT count(*)::int FROM questions q WHERE q.topic_id = t.id) AS question_count
    FROM topics t`;

export const topicsRouter = Router();

topicsRouter.get("/", asyncHandler(async (req, res) => {
  const subjectId = typeof req.query.subject_id === "string" && isUuid(req.query.subject_id) ? req.query.subject_id : null;
  const { rows } = subjectId
    ? await pool.query(`${TOPIC_SELECT} WHERE t.subject_id = $1 ORDER BY t.sort_order, t.name_en`, [subjectId])
    : await pool.query(`${TOPIC_SELECT} ORDER BY t.subject_id, t.sort_order, t.name_en`);
  res.json(rows);
}));

topicsRouter.post("/", asyncHandler(async (req, res) => {
  const r = parseTopic(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const subject = await pool.query("SELECT 1 FROM subjects WHERE id = $1", [r.value.subject_id]);
  if (!subject.rowCount) { invalid(res, { subject_id: "subject_unknown" }); return; }
  try {
    const { rows } = await pool.query(
      "INSERT INTO topics (subject_id, name_en, name_bn, lesson_id, sort_order) VALUES ($1,$2,$3,$4,$5) RETURNING id",
      [r.value.subject_id, r.value.name_en, r.value.name_bn, r.value.lesson_id, r.value.sort_order],
    );
    res.status(201).json((await pool.query(`${TOPIC_SELECT} WHERE t.id = $1`, [rows[0].id])).rows[0]);
  } catch (err) {
    if ((err as { code?: string }).code === "23505") { invalid(res, { name_en: "code_taken" }); return; }
    throw err;
  }
}));

topicsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const current = await pool.query("SELECT subject_id FROM topics WHERE id = $1", [req.params.id]);
  if (!current.rows[0]) { notFound(res); return; }
  const r = parseTopic({ ...req.body, subject_id: current.rows[0].subject_id });
  if (r.ok === false) { invalid(res, r.fields); return; }
  await pool.query(
    "UPDATE topics SET name_en = $2, name_bn = $3, lesson_id = $4, sort_order = $5 WHERE id = $1",
    [req.params.id, r.value.name_en, r.value.name_bn, r.value.lesson_id, r.value.sort_order],
  );
  res.json((await pool.query(`${TOPIC_SELECT} WHERE t.id = $1`, [req.params.id])).rows[0]);
}));

topicsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  // Questions keep their subject; their topic_id becomes NULL (ON DELETE SET NULL).
  const del = await pool.query("DELETE FROM topics WHERE id = $1", [req.params.id]);
  if (!del.rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

// ── Exam tags ────────────────────────────────────────────────────────────
const TAG_SELECT = `
  SELECT e.id, e.organization, e.post_en, e.post_bn, e.year, to_char(e.exam_date, 'YYYY-MM-DD') AS exam_date,
         (SELECT count(*)::int FROM question_exam_tags qt WHERE qt.exam_tag_id = e.id) AS question_count
    FROM exam_tags e`;

export const examTagsRouter = Router();

examTagsRouter.get("/", asyncHandler(async (_req, res) => {
  res.json((await pool.query(`${TAG_SELECT} ORDER BY e.year DESC, e.organization, e.post_en`)).rows);
}));

examTagsRouter.post("/", asyncHandler(async (req, res) => {
  const r = parseExamTag(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  try {
    const { rows } = await pool.query(
      "INSERT INTO exam_tags (organization, post_en, post_bn, year, exam_date) VALUES ($1,$2,$3,$4,$5) RETURNING id",
      [r.value.organization, r.value.post_en, r.value.post_bn, r.value.year, r.value.exam_date],
    );
    res.status(201).json((await pool.query(`${TAG_SELECT} WHERE e.id = $1`, [rows[0].id])).rows[0]);
  } catch (err) {
    if ((err as { code?: string }).code === "23505") {
      res.status(409).json({ error: "This exam is already listed.", code: "code_taken" });
      return;
    }
    throw err;
  }
}));

examTagsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const r = parseExamTag(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const upd = await pool.query(
    "UPDATE exam_tags SET organization = $2, post_en = $3, post_bn = $4, year = $5, exam_date = $6 WHERE id = $1",
    [req.params.id, r.value.organization, r.value.post_en, r.value.post_bn, r.value.year, r.value.exam_date],
  );
  if (!upd.rowCount) { notFound(res); return; }
  res.json((await pool.query(`${TAG_SELECT} WHERE e.id = $1`, [req.params.id])).rows[0]);
}));

examTagsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  // Removing a tag would leave its questions marked past_paper with no source.
  const used = await pool.query("SELECT 1 FROM question_exam_tags WHERE exam_tag_id = $1 LIMIT 1", [req.params.id]);
  if (used.rowCount) { inUse(res, "exam"); return; }
  const del = await pool.query("DELETE FROM exam_tags WHERE id = $1", [req.params.id]);
  if (!del.rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

// ── Job posts ────────────────────────────────────────────────────────────
export const JOB_POST_SELECT = `
  SELECT p.id, p.organization, p.title_en, p.title_bn, p.syllabus_en, p.syllabus_bn,
         p.exam_pattern_en, p.exam_pattern_bn, p.is_published,
         COALESCE((SELECT json_agg(json_build_object('subject_id', w.subject_id, 'code', s.code, 'weight', w.weight::float)
                                   ORDER BY w.weight DESC, s.code)
                     FROM job_post_subjects w JOIN subjects s ON s.id = w.subject_id
                    WHERE w.job_post_id = p.id), '[]'::json) AS weights
    FROM job_posts p`;

export const jobPostsRouter = Router();

jobPostsRouter.get("/", asyncHandler(async (_req, res) => {
  res.json((await pool.query(`${JOB_POST_SELECT} ORDER BY p.organization, p.title_en`)).rows);
}));

const savePost = async (res: Response, id: string | null, input: unknown) => {
  const r = parseJobPost(input);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const v = r.value;
  const params = [v.organization, v.title_en, v.title_bn, v.syllabus_en, v.syllabus_bn, v.exam_pattern_en, v.exam_pattern_bn, v.is_published];
  try {
    const result = id
      ? await pool.query(
          `UPDATE job_posts SET organization=$1, title_en=$2, title_bn=$3, syllabus_en=$4, syllabus_bn=$5,
             exam_pattern_en=$6, exam_pattern_bn=$7, is_published=$8 WHERE id=$9 RETURNING id`, [...params, id])
      : await pool.query(
          `INSERT INTO job_posts (organization, title_en, title_bn, syllabus_en, syllabus_bn, exam_pattern_en, exam_pattern_bn, is_published)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, params);
    if (!result.rows[0]) { notFound(res); return; }
    res.status(id ? 200 : 201).json((await pool.query(`${JOB_POST_SELECT} WHERE p.id = $1`, [result.rows[0].id])).rows[0]);
  } catch (err) {
    if ((err as { code?: string }).code === "23505") {
      res.status(409).json({ error: "This organisation already has a post with that title.", code: "code_taken" });
      return;
    }
    throw err;
  }
};

jobPostsRouter.post("/", asyncHandler(async (req, res) => { await savePost(res, null, req.body); }));

jobPostsRouter.put("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  await savePost(res, req.params.id, req.body);
}));

jobPostsRouter.delete("/:id", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const del = await pool.query("DELETE FROM job_posts WHERE id = $1", [req.params.id]);
  if (!del.rowCount) { notFound(res); return; }
  res.json({ deleted: true });
}));

jobPostsRouter.put("/:id/subjects", asyncHandler(async (req, res) => {
  if (!isUuid(req.params.id)) { notFound(res); return; }
  const r = parseWeights(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const post = await pool.query("SELECT 1 FROM job_posts WHERE id = $1", [req.params.id]);
  if (!post.rowCount) { notFound(res); return; }
  const ids = r.value.map((w) => w.subject_id);
  const found = await pool.query("SELECT count(*)::int AS n FROM subjects WHERE id = ANY($1::uuid[])", [ids]);
  if (found.rows[0].n !== ids.length) { invalid(res, { weights: "subject_unknown" }); return; }
  await withTransaction(async (client) => {
    await client.query("DELETE FROM job_post_subjects WHERE job_post_id = $1", [req.params.id]);
    for (const w of r.value) {
      await client.query("INSERT INTO job_post_subjects (job_post_id, subject_id, weight) VALUES ($1,$2,$3)", [req.params.id, w.subject_id, w.weight]);
    }
  });
  res.json((await pool.query(`${JOB_POST_SELECT} WHERE p.id = $1`, [req.params.id])).rows[0]);
}));
