import type { Pool, PoolClient } from "pg";
import { contentHash, type QuestionSource, type QuestionWrite } from "./questionContent.js";

type Db = Pool | PoolClient;

/** A rule that blocks a write; `code` goes to the client (duplicate, in_mock_test, has_attempts). */
export class QuestionConflictError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

/** Finds a subject's topic by English name (case-insensitive) or creates it. */
export async function resolveTopic(db: Db, subjectId: string, name: string): Promise<string> {
  const found = await db.query("SELECT id FROM topics WHERE subject_id = $1 AND lower(name_en) = lower($2)", [subjectId, name]);
  if (found.rows[0]) return found.rows[0].id;
  const created = await db.query(
    `INSERT INTO topics (subject_id, name_en) VALUES ($1, $2)
     ON CONFLICT (subject_id, name_en) DO UPDATE SET name_en = EXCLUDED.name_en RETURNING id`,
    [subjectId, name],
  );
  return created.rows[0].id;
}

/** Finds or creates the past-exam tag for (organization, post, year). */
export async function resolveExamTag(db: Db, tag: { organization: string; post_en: string; year: number }): Promise<string> {
  const { rows } = await db.query(
    `INSERT INTO exam_tags (organization, post_en, year) VALUES ($1, $2, $3)
     ON CONFLICT (organization, post_en, year) DO UPDATE SET organization = EXCLUDED.organization RETURNING id`,
    [tag.organization, tag.post_en, tag.year],
  );
  return rows[0].id;
}

const hashOf = (q: QuestionWrite) => contentHash(q.stem_en, q.options.map((o) => o.text_en));

function rethrowDuplicate(err: unknown): never {
  if ((err as { code?: string }).code === "23505") {
    throw new QuestionConflictError("duplicate", "This question is already in the bank.");
  }
  throw err;
}

/** Writes options by position, updating rows in place so their ids (referenced by answers) stay stable. */
async function writeOptions(db: Db, questionId: string, q: QuestionWrite) {
  // Clear correctness first so the "one correct option" index never sees two at once.
  await db.query("UPDATE question_options SET is_correct = false WHERE question_id = $1", [questionId]);
  for (let i = 0; i < q.options.length; i++) {
    const o = q.options[i];
    await db.query(
      `INSERT INTO question_options (question_id, position, text_en, text_bn, is_correct) VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (question_id, position) DO UPDATE
         SET text_en = EXCLUDED.text_en, text_bn = EXCLUDED.text_bn, is_correct = EXCLUDED.is_correct`,
      [questionId, i + 1, o.text_en, o.text_bn, o.is_correct],
    );
  }
  await db.query("DELETE FROM question_options WHERE question_id = $1 AND position > $2", [questionId, q.options.length]);
}

async function writeTags(db: Db, questionId: string, tagIds: string[]) {
  await db.query("DELETE FROM question_exam_tags WHERE question_id = $1", [questionId]);
  for (const tagId of tagIds) {
    await db.query("INSERT INTO question_exam_tags (question_id, exam_tag_id) VALUES ($1, $2)", [questionId, tagId]);
  }
}

const COLUMNS = `subject_id, topic_id, type, difficulty, stem_en, stem_bn, code_snippet, code_language,
  explanation_en, explanation_bn, model_answer_en, model_answer_bn, marks`;
const values = (q: QuestionWrite) => [
  q.subject_id, q.topic_id, q.type, q.difficulty, q.stem_en, q.stem_bn, q.code_snippet, q.code_language,
  q.explanation_en, q.explanation_bn, q.model_answer_en, q.model_answer_bn, q.marks,
];

/** Inserts a question; a tagged question is always a past paper, otherwise `source` applies. */
export async function insertQuestion(db: Db, q: QuestionWrite, opts: { source: QuestionSource; createdBy: string | null }): Promise<string> {
  const source: QuestionSource = q.exam_tag_ids.length ? "past_paper" : opts.source;
  let id: string;
  try {
    const { rows } = await db.query(
      `INSERT INTO questions (${COLUMNS}, source, content_hash, is_published, created_by)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id`,
      [...values(q), source, hashOf(q), q.is_published, opts.createdBy],
    );
    id = rows[0].id;
  } catch (err) {
    rethrowDuplicate(err);
  }
  await writeOptions(db, id, q);
  await writeTags(db, id, q.exam_tag_ids);
  return id;
}

/** Replaces a question's content; returns false if it doesn't exist. */
export async function updateQuestion(db: Db, id: string, q: QuestionWrite): Promise<boolean> {
  const current = await db.query("SELECT source FROM questions WHERE id = $1", [id]);
  if (!current.rows[0]) return false;
  const untagged: QuestionSource = current.rows[0].source === "past_paper" ? "original" : current.rows[0].source;
  const source: QuestionSource = q.exam_tag_ids.length ? "past_paper" : untagged;
  try {
    await db.query(
      `UPDATE questions SET subject_id=$1, topic_id=$2, type=$3, difficulty=$4, stem_en=$5, stem_bn=$6, code_snippet=$7,
         code_language=$8, explanation_en=$9, explanation_bn=$10, model_answer_en=$11, model_answer_bn=$12, marks=$13,
         source=$14, content_hash=$15, is_published=$16
       WHERE id = $17`,
      [...values(q), source, hashOf(q), q.is_published, id],
    );
  } catch (err) {
    rethrowDuplicate(err);
  }
  await writeOptions(db, id, q);
  await writeTags(db, id, q.exam_tag_ids);
  return true;
}

export async function getQuestion(db: Db, id: string) {
  const { rows } = await db.query(
    `SELECT q.id, q.subject_id, s.code AS subject_code, q.topic_id, t.name_en AS topic_name, q.type, q.difficulty,
            q.stem_en, q.stem_bn, q.code_snippet, q.code_language, q.explanation_en, q.explanation_bn,
            q.model_answer_en, q.model_answer_bn, q.marks::float AS marks, q.source, q.is_published, q.updated_at
       FROM questions q JOIN subjects s ON s.id = q.subject_id LEFT JOIN topics t ON t.id = q.topic_id
      WHERE q.id = $1`,
    [id],
  );
  if (!rows[0]) return null;
  const options = await db.query(
    "SELECT id, position, text_en, text_bn, is_correct FROM question_options WHERE question_id = $1 ORDER BY position",
    [id],
  );
  const tags = await db.query("SELECT exam_tag_id FROM question_exam_tags WHERE question_id = $1", [id]);
  return { ...rows[0], options: options.rows, exam_tag_ids: tags.rows.map((r) => r.exam_tag_id) };
}

export interface QuestionFilters {
  subject_id?: string;
  topic_id?: string;
  type?: string;
  difficulty?: number;
  source?: string;
  published?: boolean;
  q?: string;
  page: number;
  pageSize: number;
}

export async function listQuestions(db: Db, f: QuestionFilters) {
  const where: string[] = [];
  const params: unknown[] = [];
  const add = (sql: (p: string) => string, value: unknown) => {
    params.push(value);
    where.push(sql(`$${params.length}`));
  };
  if (f.subject_id) add((p) => `q.subject_id = ${p}`, f.subject_id);
  if (f.topic_id) add((p) => `q.topic_id = ${p}`, f.topic_id);
  if (f.type) add((p) => `q.type = ${p}`, f.type);
  if (f.difficulty) add((p) => `q.difficulty = ${p}`, f.difficulty);
  if (f.source) add((p) => `q.source = ${p}`, f.source);
  if (f.published !== undefined) add((p) => `q.is_published = ${p}`, f.published);
  if (f.q) {
    // Escape LIKE wildcards so "%d" or "_" match literally.
    const pattern = `%${f.q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
    add((p) => `(q.stem_en ILIKE ${p} OR q.stem_bn ILIKE ${p})`, pattern);
  }
  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";
  const total = (await db.query(`SELECT count(*)::int AS n FROM questions q ${whereSql}`, params)).rows[0].n;
  const { rows } = await db.query(
    `SELECT q.id, s.code AS subject_code, t.name_en AS topic_name, q.type, q.difficulty, q.stem_en, q.stem_bn,
            q.source, q.is_published, q.updated_at,
            (SELECT count(*)::int FROM question_options o WHERE o.question_id = q.id) AS option_count
       FROM questions q JOIN subjects s ON s.id = q.subject_id LEFT JOIN topics t ON t.id = q.topic_id
       ${whereSql}
      ORDER BY q.updated_at DESC, q.id
      LIMIT ${f.pageSize} OFFSET ${(f.page - 1) * f.pageSize}`,
    params,
  );
  return { items: rows, total, page: f.page, pageSize: f.pageSize };
}

/** Deletes an unused question; blocks questions in a mock test or already answered by a candidate. */
export async function deleteQuestion(db: Db, id: string): Promise<boolean> {
  if ((await db.query("SELECT 1 FROM mock_test_questions WHERE question_id = $1 LIMIT 1", [id])).rowCount) {
    throw new QuestionConflictError("in_mock_test", "This question is part of a mock test. Remove it from the test first.");
  }
  if ((await db.query("SELECT 1 FROM attempt_questions WHERE question_id = $1 LIMIT 1", [id])).rowCount) {
    throw new QuestionConflictError("has_attempts", "Candidates have answered this question. Unpublish it instead of deleting.");
  }
  return (await db.query("DELETE FROM questions WHERE id = $1", [id])).rowCount > 0;
}

export async function setPublished(db: Db, ids: string[], published: boolean): Promise<number> {
  if (!ids.length) return 0;
  return (await db.query("UPDATE questions SET is_published = $2 WHERE id = ANY($1::uuid[])", [ids, published])).rowCount ?? 0;
}
