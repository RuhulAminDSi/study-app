import { randomInt } from "crypto";
import type { Pool, PoolClient } from "pg";

type Db = Pool | PoolClient;

export type TestKind = "quiz" | "mock" | "model";
export type ResultRelease = "immediate" | "after_close" | "never";

/** A rule that blocks an exam action; `code` goes to the client, `extra` adds details (e.g. readiness problems). */
export class ExamError extends Error {
  status: number;
  code: string;
  extra: Record<string, unknown>;
  constructor(status: number, code: string, message: string, extra: Record<string, unknown> = {}) {
    super(message);
    this.status = status;
    this.code = code;
    this.extra = extra;
  }
}

export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * One row per test with what a list needs: question count, total marks, subjects and difficulty. A section with its
 * own marks_per_question also carries its own negative mark; otherwise the test's marks apply.
 */
export const TEST_SUMMARY_SELECT = `
  SELECT mt.id, mt.kind, mt.mode, mt.title_en, mt.title_bn, mt.description_en, mt.description_bn, mt.job_post_id,
         mt.duration_minutes, mt.marks_per_question::float AS marks_per_question, mt.negative_mark::float AS negative_mark,
         mt.pass_mark::float AS pass_mark, mt.shuffle_options, mt.available_from, mt.available_until, mt.max_attempts,
         mt.result_release, mt.is_published, mt.is_archived, mt.blueprint_id, mt.created_at, mt.updated_at,
         CASE WHEN mt.mode = 'fixed' THEN fx.n ELSE COALESCE(sc.n, 0) END::int AS question_count,
         CASE WHEN mt.mode = 'fixed' THEN fx.n * mt.marks_per_question ELSE COALESCE(sc.marks, 0) END::float AS total_marks,
         CASE WHEN mt.mode = 'fixed' THEN fx.subjects ELSE sc.subjects END AS subjects,
         CASE WHEN mt.mode = 'fixed' THEN fx.difficulties ELSE sc.difficulties END AS difficulties,
         CASE WHEN mt.mode = 'fixed' THEN ARRAY[mt.negative_mark::float] ELSE sc.negatives END AS negative_marks,
         COALESCE(sc.written, 0)::int AS written_sections
    FROM mock_tests mt
    LEFT JOIN LATERAL (
      SELECT count(*) AS n,
             COALESCE(jsonb_agg(DISTINCT jsonb_build_object('code', s.code, 'name_en', s.name_en, 'name_bn', s.name_bn)), '[]') AS subjects,
             array_agg(DISTINCT q.difficulty) AS difficulties
        FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id JOIN subjects s ON s.id = q.subject_id
       WHERE mq.mock_test_id = mt.id
    ) fx ON mt.mode = 'fixed'
    LEFT JOIN LATERAL (
      SELECT sum(x.question_count) FILTER (WHERE x.type = 'mcq') AS n,
             sum(x.question_count * COALESCE(x.marks_per_question, mt.marks_per_question)) FILTER (WHERE x.type = 'mcq') AS marks,
             count(*) FILTER (WHERE x.type <> 'mcq') AS written,
             COALESCE(jsonb_agg(DISTINCT jsonb_build_object('code', s.code, 'name_en', s.name_en, 'name_bn', s.name_bn)), '[]') AS subjects,
             array_agg(DISTINCT x.difficulty) AS difficulties,
             array_agg(DISTINCT (CASE WHEN x.marks_per_question IS NULL THEN mt.negative_mark ELSE x.negative_mark END)::float) AS negatives
        FROM mock_test_sections x JOIN subjects s ON s.id = x.subject_id
       WHERE x.mock_test_id = mt.id
    ) sc ON mt.mode = 'random'`;

export interface TestSummaryRow {
  id: string; kind: TestKind; mode: "fixed" | "random"; title_en: string; title_bn: string | null;
  description_en: string | null; description_bn: string | null; job_post_id: string | null;
  duration_minutes: number; marks_per_question: number; negative_mark: number; pass_mark: number | null;
  shuffle_options: boolean; available_from: Date | null; available_until: Date | null; max_attempts: number | null;
  result_release: ResultRelease; is_published: boolean; is_archived: boolean; blueprint_id: string | null;
  created_at: Date; updated_at: Date;
  question_count: number; total_marks: number; subjects: { code: string; name_en: string; name_bn: string | null }[] | null;
  difficulties: (number | null)[] | null; negative_marks: number[] | null; written_sections: number;
}

/** easy / medium / hard when every question or section shares one level, otherwise mixed. */
export function difficultyLabel(levels: (number | null)[] | null): "easy" | "medium" | "hard" | "mixed" {
  const set = new Set(levels ?? []);
  if (set.size !== 1 || set.has(null)) return "mixed";
  return (["easy", "medium", "hard"] as const)[([...set][0] as number) - 1] ?? "mixed";
}

export interface TestSection {
  id: string; subject_id: string; topic_id: string | null; type: "mcq" | "written"; question_count: number;
  difficulty: number | null; marks_per_question: number | null; negative_mark: number; sort_order: number;
}

export async function getSections(db: Db, testId: string): Promise<TestSection[]> {
  const { rows } = await db.query(
    `SELECT id, subject_id, topic_id, type, question_count, difficulty, marks_per_question::float AS marks_per_question,
            negative_mark::float AS negative_mark, sort_order
       FROM mock_test_sections WHERE mock_test_id = $1 ORDER BY sort_order, id`,
    [testId],
  );
  return rows;
}

/** Published MCQs a random section can draw from, minus questions already picked ($1–$4). */
const SECTION_POOL_WHERE = `
 WHERE q.is_published AND q.type = 'mcq' AND q.subject_id = $1
   AND ($2::uuid IS NULL OR q.topic_id = $2)
   AND ($3::smallint IS NULL OR q.difficulty = $3)
   AND NOT (q.id = ANY($4::uuid[]))`;

export interface ReadinessProblem { code: string; sectionId?: string; have?: number; need?: number; questionId?: string }

/**
 * What stops a test from being published (empty = ready). Online papers are MCQ-only: written sections from a
 * blueprint stay in the record but must be removed before publishing.
 */
export async function checkReadiness(db: Db, testId: string): Promise<ReadinessProblem[]> {
  const { rows } = await db.query(`${TEST_SUMMARY_SELECT} WHERE mt.id = $1`, [testId]);
  const test = rows[0] as TestSummaryRow | undefined;
  if (!test) return [{ code: "not_found" }];
  const problems: ReadinessProblem[] = [];
  if (test.mode === "fixed") {
    const bad = await db.query(
      `SELECT q.id, q.type, q.is_published FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id
        WHERE mq.mock_test_id = $1 AND (NOT q.is_published OR q.type <> 'mcq')`,
      [testId],
    );
    for (const q of bad.rows) problems.push({ code: q.type !== "mcq" ? "question_not_mcq" : "question_unpublished", questionId: q.id });
    if (test.question_count === 0) problems.push({ code: "no_questions" });
  } else {
    const sections = await getSections(db, testId);
    if (!sections.length) problems.push({ code: "no_sections" });
    const picked: string[] = [];
    for (const s of sections) {
      if (s.type !== "mcq") { problems.push({ code: "section_written", sectionId: s.id }); continue; }
      // Sections drawing from the same pool share it, so count what is left after the earlier sections.
      const pool = await db.query(
        `SELECT q.id FROM questions q ${SECTION_POOL_WHERE} ORDER BY q.id LIMIT $5`,
        [s.subject_id, s.topic_id, s.difficulty, picked, s.question_count],
      );
      picked.push(...pool.rows.map((r) => r.id));
      if (pool.rowCount! < s.question_count) {
        problems.push({ code: "section_short", sectionId: s.id, have: pool.rowCount ?? 0, need: s.question_count });
      }
    }
  }
  if (test.pass_mark !== null && test.pass_mark > test.total_marks) problems.push({ code: "pass_mark_too_high" });
  return problems;
}

export interface PaperItem { questionId: string; marks: number; negativeMark: number }

/**
 * The questions of a new attempt. Fixed: the configured questions in order (published MCQs only). Random: each
 * section samples its pool, preferring questions this candidate has seen least, shuffled within the section.
 */
export async function buildPaper(db: Db, test: TestSummaryRow, candidateId: string | null): Promise<PaperItem[]> {
  if (test.mode === "fixed") {
    const { rows } = await db.query(
      `SELECT q.id FROM mock_test_questions mq JOIN questions q ON q.id = mq.question_id
        WHERE mq.mock_test_id = $1 AND q.is_published AND q.type = 'mcq' ORDER BY mq.position`,
      [test.id],
    );
    if (!rows.length || rows.length < test.question_count) {
      throw new ExamError(409, "paper_unavailable", "This test cannot be started right now. Please try again later.");
    }
    return rows.map((r) => ({ questionId: r.id, marks: test.marks_per_question, negativeMark: test.negative_mark }));
  }
  const paper: PaperItem[] = [];
  const picked: string[] = [];
  const sections = (await getSections(db, test.id)).filter((s) => s.type === "mcq");
  if (!sections.length) throw new ExamError(409, "paper_unavailable", "This test cannot be started right now. Please try again later.");
  for (const s of sections) {
    const { rows } = await db.query(
      `SELECT q.id FROM questions q
         LEFT JOIN candidate_question_stats cs ON cs.question_id = q.id AND cs.candidate_id = $6
        ${SECTION_POOL_WHERE}
        ORDER BY COALESCE(cs.times_seen, 0), random() LIMIT $5`,
      [s.subject_id, s.topic_id, s.difficulty, picked, s.question_count, candidateId],
    );
    if (rows.length < s.question_count) {
      throw new ExamError(409, "paper_unavailable", "This test cannot be started right now. Please try again later.");
    }
    const own = s.marks_per_question !== null;
    for (const r of shuffle(rows)) {
      picked.push(r.id);
      paper.push({
        questionId: r.id,
        marks: own ? s.marks_per_question! : test.marks_per_question,
        negativeMark: own ? s.negative_mark : test.negative_mark,
      });
    }
  }
  return paper;
}

/** Option positions per question, in the order they are shown (shuffled when the test asks for it). */
export async function optionOrders(db: Db, questionIds: string[], shuffleOptions: boolean): Promise<Map<string, number[]>> {
  const { rows } = await db.query(
    `SELECT question_id, array_agg(position ORDER BY position) AS positions
       FROM question_options WHERE question_id = ANY($1::uuid[]) GROUP BY question_id`,
    [questionIds],
  );
  return new Map(rows.map((r) => [r.question_id, shuffleOptions ? shuffle(r.positions as number[]) : (r.positions as number[])]));
}
