import { pool } from "../db/pool.js";
import { ExamError } from "./mockTests.js";

/**
 * The question bank as candidates study it before a test: plain MCQs, CQs (short questions) and written questions,
 * browsed by subject, topic and difficulty, with the answer shown only when asked for.
 */
export type BankFormat = "mcq" | "short" | "written";

/** Written questions tagged with one of these styles are CQs (short questions). */
export const SHORT_STYLES = ["short_answer", "definition", "short_note"];
/** An untagged written question whose model answer is at most this long also counts as a CQ. */
export const SHORT_ANSWER_MAX = 600;

/** The one rule that sorts a question into MCQ, CQ or written. Programming questions are written. */
export const FORMAT_SQL = `CASE
  WHEN q.type = 'mcq' THEN 'mcq'
  WHEN q.type = 'written' AND (q.styles && ARRAY['${SHORT_STYLES.join("','")}']::text[]
                               OR length(COALESCE(q.model_answer_en, '')) <= ${SHORT_ANSWER_MAX}) THEN 'short'
  ELSE 'written' END`;

export interface BankFilters {
  format: BankFormat;
  subjectId: string | null;
  topicId: string | null;
  difficulty: number | null;
  q: string | null;
  page: number;
  pageSize: number;
}

const notFound = () => new ExamError(404, "not_found", "Not found");

/** One page of questions (no answers), the counts per format for the same filters, and this candidate's last self-check. */
export async function listBank(candidateId: string, f: BankFilters) {
  const where = ["q.is_published"];
  const params: unknown[] = [];
  const add = (sql: (p: string) => string, value: unknown) => { params.push(value); where.push(sql(`$${params.length}`)); };
  if (f.subjectId) add((p) => `q.subject_id = ${p}`, f.subjectId);
  if (f.topicId) add((p) => `q.topic_id = ${p}`, f.topicId);
  if (f.difficulty) add((p) => `q.difficulty = ${p}`, f.difficulty);
  if (f.q) {
    const pattern = `%${f.q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
    add((p) => `(q.stem_en ILIKE ${p} OR q.stem_bn ILIKE ${p})`, pattern);
  }
  const base = `FROM questions q WHERE ${where.join(" AND ")}`;
  const counts = await pool.query(`SELECT ${FORMAT_SQL} AS format, count(*)::int AS n ${base} GROUP BY 1`, params);
  const byFormat = Object.fromEntries(counts.rows.map((r) => [r.format, r.n]));

  params.push(f.format, candidateId);
  const fmt = `$${params.length - 1}`;
  const me = `$${params.length}`;
  const { rows } = await pool.query(
    `SELECT q.id, q.type, ${FORMAT_SQL} AS format, q.difficulty, q.marks::float AS marks, q.stem_en, q.stem_bn,
            q.code_snippet, q.code_language, q.repeat_count,
            s.code AS subject_code, s.name_en AS subject_name_en, s.name_bn AS subject_name_bn,
            t.id AS topic_id, t.name_en AS topic_name_en, t.name_bn AS topic_name_bn,
            last.self_score::float AS last_score, last.created_at AS last_at
       FROM questions q
       JOIN subjects s ON s.id = q.subject_id
       LEFT JOIN topics t ON t.id = q.topic_id
       LEFT JOIN LATERAL (
         SELECT self_score, created_at FROM written_responses w
          WHERE w.question_id = q.id AND w.candidate_id = ${me} ORDER BY created_at DESC LIMIT 1
       ) last ON q.type <> 'mcq'
      WHERE ${where.join(" AND ")} AND ${FORMAT_SQL} = ${fmt}
      ORDER BY s.sort_order, s.code, t.sort_order NULLS LAST, q.difficulty, q.created_at, q.id
      LIMIT ${f.pageSize} OFFSET ${(f.page - 1) * f.pageSize}`,
    params,
  );
  const options = await pool.query(
    "SELECT id, question_id, text_en, text_bn FROM question_options WHERE question_id = ANY($1::uuid[]) ORDER BY position",
    [rows.filter((r) => r.type === "mcq").map((r) => r.id)],
  );
  return {
    total: byFormat[f.format] ?? 0,
    counts: { mcq: byFormat.mcq ?? 0, short: byFormat.short ?? 0, written: byFormat.written ?? 0 },
    page: f.page,
    pageSize: f.pageSize,
    items: rows.map((r) => ({
      id: r.id,
      type: r.type,
      format: r.format,
      difficulty: r.difficulty,
      marks: r.marks,
      stemEn: r.stem_en,
      stemBn: r.stem_bn,
      code: r.code_snippet,
      codeLanguage: r.code_language,
      repeatCount: r.repeat_count,
      subject: { code: r.subject_code, nameEn: r.subject_name_en, nameBn: r.subject_name_bn },
      topic: r.topic_id ? { id: r.topic_id, nameEn: r.topic_name_en, nameBn: r.topic_name_bn } : null,
      options: options.rows.filter((o) => o.question_id === r.id).map((o) => ({ id: o.id, textEn: o.text_en, textBn: o.text_bn })),
      lastCheck: r.last_at ? { selfScore: r.last_score, at: r.last_at } : null,
    })),
  };
}

/**
 * The answer to one published question: the correct option (and whether `optionId` was it) for an MCQ, the model
 * answer for a CQ or written question, with the explanation and the lesson that teaches it.
 */
export async function checkAnswer(questionId: string, optionId: string | null) {
  const { rows } = await pool.query(
    `SELECT q.type, q.explanation_en, q.explanation_bn, q.model_answer_en, q.model_answer_bn,
            (SELECT id FROM question_options WHERE question_id = q.id AND is_correct) AS correct_option_id,
            l.id AS lesson_id, m.chapter_id
       FROM questions q
       LEFT JOIN topics t ON t.id = q.topic_id
       LEFT JOIN lessons l ON l.id = t.lesson_id AND l.is_published
       LEFT JOIN side_menus m ON m.id = l.side_menu_id AND m.is_active
      WHERE q.id = $1 AND q.is_published`,
    [questionId],
  );
  const q = rows[0];
  if (!q) throw notFound();
  if (q.type === "mcq" && optionId) {
    const own = await pool.query("SELECT 1 FROM question_options WHERE id = $1 AND question_id = $2", [optionId, questionId]);
    if (!own.rowCount) throw new ExamError(400, "option_invalid", "That option does not belong to this question.");
  }
  return {
    correctOptionId: q.type === "mcq" ? q.correct_option_id : null,
    isCorrect: q.type === "mcq" && optionId ? optionId === q.correct_option_id : null,
    modelAnswerEn: q.type === "mcq" ? null : q.model_answer_en,
    modelAnswerBn: q.type === "mcq" ? null : q.model_answer_bn,
    explanationEn: q.explanation_en,
    explanationBn: q.explanation_bn,
    lesson: q.lesson_id && q.chapter_id ? { lessonId: q.lesson_id, chapterId: q.chapter_id } : null,
  };
}

/** Saves the candidate's own answer to a CQ or written question with the mark they gave themselves. */
export async function saveResponse(candidateId: string, questionId: string, answerText: string, selfScore: number) {
  const { rows } = await pool.query("SELECT type, marks::float AS marks FROM questions WHERE id = $1 AND is_published", [questionId]);
  const q = rows[0];
  if (!q) throw notFound();
  if (q.type === "mcq") throw new ExamError(400, "not_written", "Only CQ and written questions take a written answer.");
  if (selfScore > q.marks) throw new ExamError(400, "validation_failed", "Please correct the highlighted fields.", { fields: { selfScore: "score_invalid" } });
  const saved = await pool.query(
    `INSERT INTO written_responses (candidate_id, question_id, answer_text, self_score) VALUES ($1, $2, $3, $4)
     RETURNING self_score::float AS self_score, created_at`,
    [candidateId, questionId, answerText, selfScore],
  );
  return { selfScore: saved.rows[0].self_score, at: saved.rows[0].created_at };
}

/** This candidate's earlier answers to one question, newest first. */
export async function listResponses(candidateId: string, questionId: string) {
  const { rows } = await pool.query(
    `SELECT answer_text, self_score::float AS self_score, created_at FROM written_responses
      WHERE candidate_id = $1 AND question_id = $2 ORDER BY created_at DESC LIMIT 10`,
    [candidateId, questionId],
  );
  return rows.map((r) => ({ answerText: r.answer_text, selfScore: r.self_score, at: r.created_at }));
}
