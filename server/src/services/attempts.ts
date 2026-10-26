import type { Pool, PoolClient } from "pg";
import { pool } from "../db/pool.js";
import { withTransaction } from "../db/tx.js";
import { buildPaper, ExamError, optionOrders, shuffle, TEST_SUMMARY_SELECT, type PaperItem, type TestSummaryRow } from "./mockTests.js";

type Db = Pool | PoolClient;

/** A save that arrives this long after the deadline still counts (network lag); later ones are refused. */
export const GRACE_MS = 15_000;
const GRACE = `interval '${GRACE_MS / 1000} seconds'`;

export type AttemptMode = "practice" | "revision" | "mock";
export type AttemptStatus = "in_progress" | "submitted" | "expired";

const notFound = () => new ExamError(404, "not_found", "Not found");

// ── Revision schedule (spec §6.4, Leitner) ─────────────────────────────────────

/**
 * Records answered questions of an attempt in candidate_question_stats (all of them, or one), moving each through
 * the Leitner boxes: wrong → box 1 (review tomorrow); correct → next box (3, 7, 21 days), first-time correct → mastered.
 */
async function recordStats(db: Db, attemptId: string, candidateId: string, questionId: string | null = null) {
  await db.query(
    `INSERT INTO candidate_question_stats AS s
            (candidate_id, question_id, times_seen, times_correct, last_correct, box, next_review_at, last_seen_at)
     SELECT $2, aq.question_id, 1, CASE WHEN aq.is_correct THEN 1 ELSE 0 END, aq.is_correct,
            CASE WHEN aq.is_correct THEN 4 ELSE 1 END,
            CASE WHEN aq.is_correct THEN NULL ELSE now() + interval '1 day' END, now()
       FROM attempt_questions aq
      WHERE aq.attempt_id = $1 AND aq.is_correct IS NOT NULL AND ($3::uuid IS NULL OR aq.question_id = $3)
     ON CONFLICT (candidate_id, question_id) DO UPDATE SET
       times_seen = s.times_seen + 1,
       times_correct = s.times_correct + EXCLUDED.times_correct,
       last_correct = EXCLUDED.last_correct,
       box = CASE WHEN NOT EXCLUDED.last_correct THEN 1 WHEN s.box = 0 OR s.box >= 3 THEN 4 ELSE s.box + 1 END,
       next_review_at = CASE WHEN NOT EXCLUDED.last_correct THEN now() + interval '1 day'
                             WHEN s.box = 1 THEN now() + interval '3 days'
                             WHEN s.box = 2 THEN now() + interval '7 days'
                             WHEN s.box = 3 THEN now() + interval '21 days'
                             ELSE NULL END,
       last_seen_at = now()`,
    [attemptId, candidateId, questionId],
  );
}

// ── Creating attempts ──────────────────────────────────────────────────────────

/** Serialises a candidate's starts (so two clicks can't open two attempts) and checks the account is usable. */
async function lockCandidate(client: PoolClient, candidateId: string) {
  const { rows } = await client.query("SELECT is_active FROM candidates WHERE id = $1 FOR UPDATE", [candidateId]);
  if (!rows[0]?.is_active) throw new ExamError(401, "account_inactive", "This account is not available. Sign in again.");
}

async function insertAttempt(
  client: PoolClient,
  a: { candidateId: string; mode: AttemptMode; testId: string | null; durationMinutes: number | null; availableUntil: Date | null;
       passMark: number | null; settings: Record<string, unknown>; shuffleOptions: boolean; paper: PaperItem[] },
): Promise<string> {
  const maxScore = a.paper.reduce((n, p) => n + p.marks, 0);
  const { rows } = await client.query(
    `INSERT INTO attempts (candidate_id, mode, mock_test_id, deadline_at, max_score, pass_mark, settings)
     VALUES ($1, $2, $3,
             CASE WHEN $4::int IS NULL THEN NULL ELSE LEAST(now() + make_interval(mins => $4::int), COALESCE($5::timestamptz, 'infinity')) END,
             $6, $7, $8)
     RETURNING id`,
    [a.candidateId, a.mode, a.testId, a.durationMinutes, a.availableUntil, maxScore, a.passMark, a.settings],
  );
  const attemptId = rows[0].id;
  const orders = await optionOrders(client, a.paper.map((p) => p.questionId), a.shuffleOptions);
  await client.query(
    `INSERT INTO attempt_questions (attempt_id, question_id, position, option_order, marks, negative_mark)
     SELECT $1, x.qid, x.pos, x.ord::smallint[], x.marks, x.neg
       FROM unnest($2::uuid[], $3::int[], $4::text[], $5::numeric[], $6::numeric[]) AS x(qid, pos, ord, marks, neg)`,
    [
      attemptId,
      a.paper.map((p) => p.questionId),
      a.paper.map((_, i) => i + 1),
      a.paper.map((p) => `{${(orders.get(p.questionId) ?? []).join(",")}}`),
      a.paper.map((p) => p.marks),
      a.paper.map((p) => p.negativeMark),
    ],
  );
  return attemptId;
}

export async function getLiveTest(db: Db, testId: string): Promise<TestSummaryRow> {
  const { rows } = await db.query(`${TEST_SUMMARY_SELECT} WHERE mt.id = $1 AND mt.is_published AND NOT mt.is_archived`, [testId]);
  if (!rows[0]) throw notFound();
  return rows[0];
}

/**
 * Starts a mock / model test, or returns the candidate's attempt that is still open (resume). Checks the
 * availability window and the attempt limit; the deadline never runs past the window's end.
 */
export async function startTest(candidateId: string, testId: string): Promise<{ attemptId: string; resumed: boolean }> {
  await expireOverdue(candidateId);
  return withTransaction(async (client) => {
    await lockCandidate(client, candidateId);
    const test = await getLiveTest(client, testId);
    const open = await client.query(
      "SELECT id FROM attempts WHERE candidate_id = $1 AND mock_test_id = $2 AND status = 'in_progress'",
      [candidateId, testId],
    );
    if (open.rows[0]) return { attemptId: open.rows[0].id, resumed: true };
    const now = Date.now();
    if (test.available_from && test.available_from.getTime() > now) {
      throw new ExamError(409, "not_open_yet", "This test has not opened yet.", { availableFrom: test.available_from });
    }
    if (test.available_until && test.available_until.getTime() <= now) throw new ExamError(409, "closed", "This test has closed.");
    if (test.max_attempts !== null) {
      const used = await client.query("SELECT count(*)::int AS n FROM attempts WHERE candidate_id = $1 AND mock_test_id = $2", [candidateId, testId]);
      if (used.rows[0].n >= test.max_attempts) {
        throw new ExamError(409, "attempt_limit", "You have used every attempt allowed for this test.", { maxAttempts: test.max_attempts });
      }
    }
    const paper = await buildPaper(client, test, candidateId);
    const attemptId = await insertAttempt(client, {
      candidateId, mode: "mock", testId, durationMinutes: test.duration_minutes, availableUntil: test.available_until,
      passMark: test.pass_mark, shuffleOptions: test.shuffle_options, paper,
      settings: { kind: test.kind, titleEn: test.title_en, titleBn: test.title_bn, resultRelease: test.result_release },
    });
    return { attemptId, resumed: false };
  });
}

export interface PracticeFilters {
  subjectId: string | null;
  topicId: string | null;
  lessonSlug: string | null;
  difficulty: number | null;
  /** any = every question; unseen = never answered; wrong = last answer was wrong; due = Leitner reviews due now. */
  status: "any" | "unseen" | "wrong" | "due";
  count: number;
}

/** Starts an untimed practice session (instant feedback, no negative marking) from published MCQs. */
export async function startPractice(candidateId: string, f: PracticeFilters): Promise<{ attemptId: string; questionCount: number }> {
  return withTransaction(async (client) => {
    await lockCandidate(client, candidateId);
    const where = ["q.is_published", "q.type = 'mcq'"];
    const params: unknown[] = [candidateId];
    const add = (sql: (p: string) => string, value: unknown) => { params.push(value); where.push(sql(`$${params.length}`)); };
    if (f.subjectId) add((p) => `q.subject_id = ${p}`, f.subjectId);
    if (f.topicId) add((p) => `q.topic_id = ${p}`, f.topicId);
    if (f.lessonSlug) add((p) => `q.lesson_slug = ${p}`, f.lessonSlug);
    if (f.difficulty) add((p) => `q.difficulty = ${p}`, f.difficulty);
    if (f.status === "unseen") where.push("cs.question_id IS NULL");
    if (f.status === "wrong") where.push("cs.last_correct = false");
    if (f.status === "due") where.push("cs.next_review_at <= now()");
    const order = f.status === "due" ? "cs.next_review_at, random()" : "COALESCE(cs.times_seen, 0), random()";
    params.push(f.count);
    const { rows } = await client.query(
      `SELECT q.id FROM questions q
         LEFT JOIN candidate_question_stats cs ON cs.question_id = q.id AND cs.candidate_id = $1
        WHERE ${where.join(" AND ")} ORDER BY ${order} LIMIT $${params.length}`,
      params,
    );
    if (!rows.length) throw new ExamError(409, "no_questions", "No questions match these choices yet.");
    const labels = await client.query(
      `SELECT (SELECT jsonb_build_object('code', code, 'name_en', name_en, 'name_bn', name_bn) FROM subjects WHERE id = $1) AS subject,
              (SELECT jsonb_build_object('name_en', name_en, 'name_bn', name_bn) FROM topics WHERE id = $2) AS topic`,
      [f.subjectId, f.topicId],
    );
    const paper = shuffle(rows).map((r) => ({ questionId: r.id, marks: 1, negativeMark: 0 }));
    const attemptId = await insertAttempt(client, {
      candidateId, mode: f.status === "due" ? "revision" : "practice", testId: null, durationMinutes: null, availableUntil: null,
      passMark: null, shuffleOptions: true, paper,
      settings: { ...f, subject: labels.rows[0].subject, topic: labels.rows[0].topic },
    });
    return { attemptId, questionCount: paper.length };
  });
}

// ── Finishing attempts ─────────────────────────────────────────────────────────

/**
 * Scores an open attempt on the server and closes it, inside the caller's transaction. Locks the attempt, so a
 * second submit (or a submit racing the expiry) finds it already closed and changes nothing.
 */
async function finalise(client: PoolClient, attemptId: string, status: "submitted" | "expired"): Promise<boolean> {
  const { rows } = await client.query("SELECT candidate_id, mode, status FROM attempts WHERE id = $1 FOR UPDATE", [attemptId]);
  const a = rows[0];
  if (!a || a.status !== "in_progress") return false;
  // The option chosen decides correctness now, so an answer key fixed after the start is used.
  await client.query(
    `UPDATE attempt_questions aq SET is_correct = o.is_correct
       FROM question_options o WHERE o.id = aq.selected_option_id AND aq.attempt_id = $1`,
    [attemptId],
  );
  await client.query(
    `UPDATE attempt_questions SET is_correct = NULL WHERE attempt_id = $1 AND selected_option_id IS NULL`,
    [attemptId],
  );
  await client.query(
    `UPDATE attempt_questions SET awarded = CASE WHEN is_correct THEN marks WHEN is_correct = false THEN -negative_mark ELSE 0 END
      WHERE attempt_id = $1`,
    [attemptId],
  );
  // Practice answers were recorded one by one as they were given.
  if (a.mode === "mock") await recordStats(client, attemptId, a.candidate_id);
  await client.query(
    `UPDATE attempts a SET status = $2::varchar,
            submitted_at = CASE WHEN $2::varchar = 'expired' THEN LEAST(now(), a.deadline_at) ELSE now() END,
            score = t.score, correct_count = t.correct, wrong_count = t.wrong, skipped_count = t.skipped
       FROM (SELECT COALESCE(sum(awarded), 0) AS score,
                    count(*) FILTER (WHERE is_correct) AS correct,
                    count(*) FILTER (WHERE is_correct = false) AS wrong,
                    count(*) FILTER (WHERE is_correct IS NULL) AS skipped
               FROM attempt_questions WHERE attempt_id = $1) t
      WHERE a.id = $1`,
    [attemptId, status],
  );
  return true;
}

/** Lazy expiry: closes this candidate's timed attempts whose deadline (plus grace) has passed. */
export async function expireOverdue(candidateId: string, db: Db = pool): Promise<number> {
  const { rows } = await db.query(
    `SELECT id FROM attempts WHERE candidate_id = $1 AND status = 'in_progress' AND deadline_at < now() - ${GRACE}`,
    [candidateId],
  );
  let closed = 0;
  for (const r of rows) if (await withTransaction((client) => finalise(client, r.id, "expired"))) closed++;
  return closed;
}

interface AttemptRow {
  id: string; candidate_id: string; mode: AttemptMode; mock_test_id: string | null; status: AttemptStatus;
  started_at: Date; deadline_at: Date | null; submitted_at: Date | null; score: number | null; max_score: number | null;
  pass_mark: number | null; correct_count: number; wrong_count: number; skipped_count: number; current_position: number;
  settings: Record<string, unknown>; overdue: boolean;
}

/** The candidate's own attempt (another candidate's is reported as not found), expired first if overdue. */
export async function ownAttempt(candidateId: string, attemptId: string): Promise<AttemptRow> {
  const load = async () => {
    const { rows } = await pool.query(
      `SELECT id, candidate_id, mode, mock_test_id, status, started_at, deadline_at, submitted_at, score::float AS score,
              max_score::float AS max_score, pass_mark::float AS pass_mark, correct_count, wrong_count, skipped_count,
              current_position, settings,
              (status = 'in_progress' AND deadline_at < now() - ${GRACE}) AS overdue
         FROM attempts WHERE id = $1 AND candidate_id = $2`,
      [attemptId, candidateId],
    );
    return rows[0] as AttemptRow | undefined;
  };
  let a = await load();
  if (!a) throw notFound();
  if (a.overdue) {
    await withTransaction((client) => finalise(client, attemptId, "expired"));
    a = (await load())!;
  }
  return a;
}

export async function submitAttempt(candidateId: string, attemptId: string): Promise<{ status: AttemptStatus; alreadyClosed: boolean }> {
  const a = await ownAttempt(candidateId, attemptId);
  if (a.status !== "in_progress") return { status: a.status, alreadyClosed: true };
  const closed = await withTransaction((client) => finalise(client, attemptId, "submitted"));
  const after = await ownAttempt(candidateId, attemptId);
  return { status: after.status, alreadyClosed: !closed };
}

// ── Taking an attempt ──────────────────────────────────────────────────────────

interface QuestionRow {
  position: number; question_id: string; option_order: number[]; selected_option_id: string | null; flagged: boolean;
  is_correct: boolean | null; marks: number; negative_mark: number; awarded: number | null; time_spent_ms: number;
  stem_en: string; stem_bn: string | null; code_snippet: string | null; code_language: string | null; difficulty: number;
  explanation_en: string | null; explanation_bn: string | null; topic_id: string | null;
  subject_code: string; subject_name_en: string; subject_name_bn: string | null;
  topic_name_en: string | null; topic_name_bn: string | null; lesson_id: string | null; chapter_id: string | null;
}
interface OptionRow { id: string; question_id: string; position: number; text_en: string; text_bn: string | null; is_correct: boolean }

/** The paper of an attempt: questions in order, each with its options in the order the candidate sees them. */
async function paperOf(attemptId: string) {
  const { rows } = await pool.query<QuestionRow>(
    `SELECT aq.position, aq.question_id, aq.option_order, aq.selected_option_id, aq.flagged, aq.is_correct,
            aq.marks::float AS marks, aq.negative_mark::float AS negative_mark, aq.awarded::float AS awarded, aq.time_spent_ms,
            q.stem_en, q.stem_bn, q.code_snippet, q.code_language, q.difficulty, q.explanation_en, q.explanation_bn, q.topic_id,
            s.code AS subject_code, s.name_en AS subject_name_en, s.name_bn AS subject_name_bn,
            t.name_en AS topic_name_en, t.name_bn AS topic_name_bn,
            l.id AS lesson_id, m.chapter_id
       FROM attempt_questions aq
       JOIN questions q ON q.id = aq.question_id
       JOIN subjects s ON s.id = q.subject_id
       LEFT JOIN topics t ON t.id = q.topic_id
       LEFT JOIN lessons l ON l.id = t.lesson_id AND l.is_published
       LEFT JOIN side_menus m ON m.id = l.side_menu_id AND m.is_active
      WHERE aq.attempt_id = $1 ORDER BY aq.position`,
    [attemptId],
  );
  const options = await pool.query<OptionRow>(
    "SELECT id, question_id, position, text_en, text_bn, is_correct FROM question_options WHERE question_id = ANY($1::uuid[])",
    [rows.map((r) => r.question_id)],
  );
  const byQuestion = new Map<string, OptionRow[]>();
  for (const o of options.rows) byQuestion.set(o.question_id, [...(byQuestion.get(o.question_id) ?? []), o]);
  return rows.map((r) => {
    const all = byQuestion.get(r.question_id) ?? [];
    // Shown order frozen at the start; an option added to the question later goes last.
    const ordered = [
      ...r.option_order.map((p) => all.find((o) => o.position === p)).filter((o): o is OptionRow => !!o),
      ...all.filter((o) => !r.option_order.includes(o.position)).sort((x, y) => x.position - y.position),
    ];
    return { ...r, options: ordered };
  });
}

type PaperRow = Awaited<ReturnType<typeof paperOf>>[number];

const lessonLink = (r: Pick<PaperRow, "lesson_id" | "chapter_id">) =>
  r.lesson_id && r.chapter_id ? { lessonId: r.lesson_id, chapterId: r.chapter_id } : null;

function questionView(r: PaperRow, reveal: boolean) {
  return {
    position: r.position,
    questionId: r.question_id,
    stemEn: r.stem_en,
    stemBn: r.stem_bn,
    code: r.code_snippet,
    codeLanguage: r.code_language,
    difficulty: r.difficulty,
    marks: r.marks,
    negativeMark: r.negative_mark,
    subject: { code: r.subject_code, nameEn: r.subject_name_en, nameBn: r.subject_name_bn },
    topic: r.topic_id ? { id: r.topic_id, nameEn: r.topic_name_en, nameBn: r.topic_name_bn } : null,
    options: r.options.map((o) => ({ id: o.id, textEn: o.text_en, textBn: o.text_bn, ...(reveal ? { isCorrect: o.is_correct } : {}) })),
    selectedOptionId: r.selected_option_id,
    flagged: r.flagged,
    ...(reveal ? {
      isCorrect: r.is_correct,
      awarded: r.awarded,
      correctOptionId: r.options.find((o) => o.is_correct)?.id ?? null,
      explanationEn: r.explanation_en,
      explanationBn: r.explanation_bn,
      lesson: lessonLink(r),
    } : {}),
  };
}

function attemptMeta(a: AttemptRow) {
  return {
    id: a.id,
    mode: a.mode,
    testId: a.mock_test_id,
    status: a.status,
    kind: (a.settings.kind as string | undefined) ?? null,
    titleEn: (a.settings.titleEn as string | undefined) ?? null,
    titleBn: (a.settings.titleBn as string | undefined) ?? null,
    settings: a.mode === "mock" ? null : a.settings,
    startedAt: a.started_at,
    deadlineAt: a.deadline_at,
    submittedAt: a.submitted_at,
    maxScore: a.max_score,
    passMark: a.pass_mark,
    currentPosition: a.current_position,
  };
}

/**
 * An attempt to take or resume. Timed attempts never include answers; a practice session includes the feedback
 * of the questions already answered (it was shown when they were answered). `serverNow` lets the client run its
 * timer from the server clock.
 */
export async function getAttempt(candidateId: string, attemptId: string) {
  const a = await ownAttempt(candidateId, attemptId);
  const paper = await paperOf(attemptId);
  const instant = a.mode !== "mock";
  return {
    attempt: attemptMeta(a),
    serverNow: new Date(),
    questions: paper.map((r) => questionView(r, instant && r.selected_option_id !== null)),
  };
}

export interface AnswerInput { optionId?: string | null; flagged?: boolean; timeSpentMs?: number }

/**
 * Saves one answer. Timed tests: an idempotent upsert of the choice and the review flag, refused once the deadline
 * (plus grace) has passed. Practice: the first choice is final and the reply carries the feedback.
 */
export async function saveAnswer(candidateId: string, attemptId: string, questionId: string, input: AnswerInput) {
  const a = await ownAttempt(candidateId, attemptId);
  if (a.status !== "in_progress") {
    throw new ExamError(409, a.status === "expired" ? "deadline_passed" : "attempt_closed", "This attempt is already finished.", { status: a.status });
  }
  return withTransaction(async (client) => {
    // FOR SHARE: saves to different questions run side by side, but never alongside a finalise (FOR UPDATE).
    const live = await client.query(
      `SELECT status, mode, (deadline_at IS NOT NULL AND now() > deadline_at + ${GRACE}) AS late FROM attempts WHERE id = $1 FOR SHARE`,
      [attemptId],
    );
    if (live.rows[0].status !== "in_progress") throw new ExamError(409, "attempt_closed", "This attempt is already finished.");
    if (live.rows[0].late) throw new ExamError(409, "deadline_passed", "Time is up: this answer was not saved.");
    const row = await client.query(
      "SELECT selected_option_id FROM attempt_questions WHERE attempt_id = $1 AND question_id = $2 FOR UPDATE",
      [attemptId, questionId],
    );
    if (!row.rows[0]) throw notFound();
    let option: { id: string; is_correct: boolean } | null = null;
    if (input.optionId) {
      const o = await client.query("SELECT id, is_correct FROM question_options WHERE id = $1 AND question_id = $2", [input.optionId, questionId]);
      if (!o.rows[0]) throw new ExamError(400, "option_invalid", "That option does not belong to this question.");
      option = o.rows[0];
    }
    const spent = Math.min(Math.max(0, Math.round(input.timeSpentMs ?? 0)), 30 * 60_000);
    const sets = ["time_spent_ms = time_spent_ms + $3"];
    const params: unknown[] = [attemptId, questionId, spent];
    if (input.flagged !== undefined) { params.push(input.flagged); sets.push(`flagged = $${params.length}`); }

    if (a.mode !== "mock") {
      const previous = row.rows[0].selected_option_id as string | null;
      if (input.optionId === null && previous) throw new ExamError(409, "already_answered", "This question is already answered.");
      if (option && previous && previous !== option.id) throw new ExamError(409, "already_answered", "This question is already answered.");
      if (option && !previous) {
        params.push(option.id, option.is_correct);
        sets.push(`selected_option_id = $${params.length - 1}`, `is_correct = $${params.length}`, "answered_at = now()");
      }
      await client.query(`UPDATE attempt_questions SET ${sets.join(", ")} WHERE attempt_id = $1 AND question_id = $2`, params);
      if (option && !previous) await recordStats(client, attemptId, candidateId, questionId);
      const answered = option ?? (previous ? { id: previous } : null);
      if (!answered) return { saved: true };
      const q = await client.query(
        `SELECT q.explanation_en, q.explanation_bn, aq.is_correct,
                (SELECT id FROM question_options WHERE question_id = q.id AND is_correct) AS correct_option_id,
                l.id AS lesson_id, m.chapter_id
           FROM attempt_questions aq JOIN questions q ON q.id = aq.question_id
           LEFT JOIN topics t ON t.id = q.topic_id
           LEFT JOIN lessons l ON l.id = t.lesson_id AND l.is_published
           LEFT JOIN side_menus m ON m.id = l.side_menu_id AND m.is_active
          WHERE aq.attempt_id = $1 AND aq.question_id = $2`,
        [attemptId, questionId],
      );
      const f = q.rows[0];
      return {
        saved: true, selectedOptionId: answered.id, isCorrect: f.is_correct, correctOptionId: f.correct_option_id,
        explanationEn: f.explanation_en, explanationBn: f.explanation_bn, lesson: lessonLink(f),
      };
    }

    if (input.optionId !== undefined) {
      params.push(option?.id ?? null);
      sets.push(`selected_option_id = $${params.length}`, `answered_at = CASE WHEN $${params.length}::uuid IS NULL THEN NULL ELSE now() END`);
    }
    const saved = await client.query(
      `UPDATE attempt_questions SET ${sets.join(", ")} WHERE attempt_id = $1 AND question_id = $2 RETURNING selected_option_id, flagged`,
      params,
    );
    return { saved: true, selectedOptionId: saved.rows[0].selected_option_id, flagged: saved.rows[0].flagged };
  });
}

/** Remembers which question the candidate is on, so a reload (or another device) resumes there. */
export async function setPosition(candidateId: string, attemptId: string, position: number) {
  const a = await ownAttempt(candidateId, attemptId);
  if (a.status !== "in_progress") return { currentPosition: a.current_position };
  const { rows } = await pool.query(
    `UPDATE attempts SET current_position = LEAST($3, (SELECT count(*) FROM attempt_questions WHERE attempt_id = $1))
      WHERE id = $1 AND candidate_id = $2 RETURNING current_position`,
    [attemptId, candidateId, position],
  );
  return { currentPosition: rows[0].current_position };
}

// ── Results ────────────────────────────────────────────────────────────────────

/** Whether answers and explanations may be shown yet, per the test's result_release. Practice: always. */
async function reviewRelease(a: AttemptRow): Promise<{ available: boolean; availableAt: Date | null }> {
  if (a.mode !== "mock" || !a.mock_test_id) return { available: true, availableAt: null };
  const { rows } = await pool.query("SELECT result_release, available_until FROM mock_tests WHERE id = $1", [a.mock_test_id]);
  const t = rows[0];
  if (!t || t.result_release === "immediate") return { available: true, availableAt: null };
  if (t.result_release === "never") return { available: false, availableAt: null };
  if (!t.available_until) return { available: true, availableAt: null };
  return { available: t.available_until.getTime() <= Date.now(), availableAt: t.available_until };
}

const round2 = (n: number) => Math.round(n * 100) / 100;

function finished(a: AttemptRow) {
  if (a.status === "in_progress") throw new ExamError(409, "not_finished", "Submit the attempt to see its result.");
}

/**
 * Score, pass/fail, accuracy, time, per-subject and per-topic breakdowns, weak topics with the lessons that teach
 * them, and (timed tests) rank and percentile among every candidate's first attempt on the test.
 */
export async function getResult(candidateId: string, attemptId: string) {
  const a = await ownAttempt(candidateId, attemptId);
  finished(a);
  const paper = await paperOf(attemptId);
  const total = paper.length;
  const answered = a.correct_count + a.wrong_count;
  const score = a.score ?? 0;
  const maxScore = a.max_score ?? 0;
  const end = a.submitted_at ?? new Date();
  const timeTakenSec = Math.max(0, Math.round((end.getTime() - a.started_at.getTime()) / 1000));

  type Bucket = { total: number; correct: number; wrong: number; skipped: number; score: number; maxScore: number };
  const empty = (): Bucket => ({ total: 0, correct: 0, wrong: 0, skipped: 0, score: 0, maxScore: 0 });
  const add = (b: Bucket, r: PaperRow) => {
    b.total++; b.maxScore += r.marks; b.score += r.awarded ?? 0;
    if (r.is_correct === true) b.correct++; else if (r.is_correct === false) b.wrong++; else b.skipped++;
  };
  const subjects = new Map<string, Bucket & { code: string; nameEn: string; nameBn: string | null }>();
  const topics = new Map<string, Bucket & { topicId: string; nameEn: string | null; nameBn: string | null; subjectCode: string; lesson: ReturnType<typeof lessonLink> }>();
  for (const r of paper) {
    if (!subjects.has(r.subject_code)) subjects.set(r.subject_code, { ...empty(), code: r.subject_code, nameEn: r.subject_name_en, nameBn: r.subject_name_bn });
    add(subjects.get(r.subject_code)!, r);
    if (r.topic_id) {
      if (!topics.has(r.topic_id)) {
        topics.set(r.topic_id, { ...empty(), topicId: r.topic_id, nameEn: r.topic_name_en, nameBn: r.topic_name_bn, subjectCode: r.subject_code, lesson: lessonLink(r) });
      }
      add(topics.get(r.topic_id)!, r);
    }
  }
  const tidy = <T extends Bucket>(b: T) => ({ ...b, score: round2(b.score), maxScore: round2(b.maxScore), accuracy: b.total ? round2(b.correct / b.total) : 0 });
  const byTopic = [...topics.values()].map(tidy);
  const weakTopics = byTopic
    // In a timed test an unanswered question counts against a topic; a practice session finished early does not.
    .filter((t) => (a.mode === "mock" ? t.correct < t.total : t.wrong > 0) && t.accuracy < 0.6)
    .sort((x, y) => x.accuracy - y.accuracy || y.total - x.total)
    .slice(0, 6);

  let rank: { rank: number; percentile: number; candidates: number } | null = null;
  let test: { id: string; maxAttempts: number | null; attemptsUsed: number; canRetry: boolean } | null = null;
  if (a.mode === "mock" && a.mock_test_id) {
    const r = await pool.query(
      `WITH firsts AS (
         SELECT DISTINCT ON (candidate_id) candidate_id, score FROM attempts
          WHERE mock_test_id = $1 AND status IN ('submitted','expired') ORDER BY candidate_id, started_at)
       SELECT count(*)::int AS n, count(*) FILTER (WHERE score > $2)::int AS above, count(*) FILTER (WHERE score < $2)::int AS below FROM firsts`,
      [a.mock_test_id, score],
    );
    const { n, above, below } = r.rows[0];
    if (n > 0) rank = { rank: above + 1, percentile: round2((100 * below) / n), candidates: n };
    const t = await pool.query(
      `SELECT mt.max_attempts, mt.is_published AND NOT mt.is_archived AND (mt.available_until IS NULL OR mt.available_until > now()) AS live,
              (SELECT count(*)::int FROM attempts WHERE candidate_id = $2 AND mock_test_id = mt.id) AS used
         FROM mock_tests mt WHERE mt.id = $1`,
      [a.mock_test_id, candidateId],
    );
    if (t.rows[0]) {
      const { max_attempts, live, used } = t.rows[0];
      test = { id: a.mock_test_id, maxAttempts: max_attempts, attemptsUsed: used, canRetry: live && (max_attempts === null || used < max_attempts) };
    }
  }

  const release = await reviewRelease(a);
  return {
    attempt: attemptMeta(a),
    score: round2(score),
    maxScore: round2(maxScore),
    percentage: maxScore > 0 ? round2((100 * score) / maxScore) : 0,
    passed: a.pass_mark === null ? null : score >= a.pass_mark,
    correct: a.correct_count,
    wrong: a.wrong_count,
    skipped: a.skipped_count,
    total,
    accuracy: answered ? round2(a.correct_count / answered) : 0,
    timeTakenSec,
    avgTimePerQuestionSec: answered ? Math.round(timeTakenSec / answered) : 0,
    durationMinutes: a.deadline_at ? Math.round((a.deadline_at.getTime() - a.started_at.getTime()) / 60_000) : null,
    bySubject: [...subjects.values()].map(tidy),
    byTopic,
    weakTopics,
    rank,
    test,
    review: release,
  };
}

/** Every question with the candidate's answer, the correct option and the explanation — once released. */
export async function getReview(candidateId: string, attemptId: string) {
  const a = await ownAttempt(candidateId, attemptId);
  finished(a);
  const release = await reviewRelease(a);
  if (!release.available) {
    throw new ExamError(403, "review_unavailable", "Answers for this test are not released yet.", { availableAt: release.availableAt });
  }
  const paper = await paperOf(attemptId);
  return { attempt: attemptMeta(a), questions: paper.map((r) => questionView(r, true)) };
}

// ── History and overview ───────────────────────────────────────────────────────

const HISTORY_SELECT = `
  SELECT a.id, a.mode, a.mock_test_id, a.status, a.started_at, a.deadline_at, a.submitted_at, a.score::float AS score,
         a.max_score::float AS max_score, a.pass_mark::float AS pass_mark, a.correct_count, a.wrong_count, a.skipped_count,
         a.settings, (SELECT count(*)::int FROM attempt_questions WHERE attempt_id = a.id) AS question_count,
         (SELECT count(*)::int FROM attempt_questions WHERE attempt_id = a.id AND selected_option_id IS NOT NULL) AS answered_count
    FROM attempts a`;

function historyItem(r: Record<string, unknown> & { settings: Record<string, unknown> }) {
  const score = r.score as number | null;
  const max = r.max_score as number | null;
  const started = r.started_at as Date;
  const end = (r.submitted_at as Date | null) ?? null;
  return {
    id: r.id,
    mode: r.mode,
    testId: r.mock_test_id,
    kind: (r.settings.kind as string | undefined) ?? (r.mode === "mock" ? "mock" : r.mode),
    titleEn: (r.settings.titleEn as string | undefined) ?? null,
    titleBn: (r.settings.titleBn as string | undefined) ?? null,
    settings: r.mode === "mock" ? null : r.settings,
    status: r.status,
    startedAt: started,
    deadlineAt: r.deadline_at,
    submittedAt: end,
    timeTakenSec: end ? Math.max(0, Math.round((end.getTime() - started.getTime()) / 1000)) : null,
    score,
    maxScore: max,
    percentage: score !== null && max ? round2((100 * score) / max) : null,
    passed: r.pass_mark === null || score === null ? null : score >= (r.pass_mark as number),
    correct: r.correct_count,
    wrong: r.wrong_count,
    skipped: r.skipped_count,
    questionCount: r.question_count,
    answeredCount: r.answered_count,
  };
}

export async function listHistory(candidateId: string, opts: { type: "all" | "practice" | "test"; status: "all" | "open" | "finished"; limit: number; offset: number }) {
  await expireOverdue(candidateId);
  const where = ["a.candidate_id = $1"];
  if (opts.type === "practice") where.push("a.mode IN ('practice','revision')");
  if (opts.type === "test") where.push("a.mode = 'mock'");
  if (opts.status === "open") where.push("a.status = 'in_progress'");
  if (opts.status === "finished") where.push("a.status <> 'in_progress'");
  const whereSql = where.join(" AND ");
  const total = (await pool.query(`SELECT count(*)::int AS n FROM attempts a WHERE ${whereSql}`, [candidateId])).rows[0].n;
  const { rows } = await pool.query(
    `${HISTORY_SELECT} WHERE ${whereSql} ORDER BY a.started_at DESC, a.id LIMIT $2 OFFSET $3`,
    [candidateId, opts.limit, opts.offset],
  );
  return { items: rows.map(historyItem), total };
}

/** The numbers on the examination dashboard. */
export async function examOverview(candidateId: string) {
  await expireOverdue(candidateId);
  const [available, done, practice, due, open] = await Promise.all([
    pool.query(
      `SELECT kind, count(*)::int AS n FROM mock_tests
        WHERE is_published AND NOT is_archived AND (available_until IS NULL OR available_until > now()) GROUP BY kind`,
    ),
    pool.query(
      `SELECT COALESCE(settings->>'kind', 'mock') AS kind, count(*)::int AS n,
              avg(100 * score / NULLIF(max_score, 0))::float AS avg_pct, max(100 * score / NULLIF(max_score, 0))::float AS best_pct
         FROM attempts WHERE candidate_id = $1 AND mode = 'mock' AND status <> 'in_progress'
        GROUP BY ROLLUP (COALESCE(settings->>'kind', 'mock'))`,
      [candidateId],
    ),
    pool.query(
      `SELECT count(*)::int AS answered, count(*) FILTER (WHERE aq.is_correct)::int AS correct
         FROM attempt_questions aq JOIN attempts a ON a.id = aq.attempt_id
        WHERE a.candidate_id = $1 AND aq.is_correct IS NOT NULL`,
      [candidateId],
    ),
    pool.query(
      `SELECT count(*) FILTER (WHERE cs.next_review_at <= now())::int AS due, count(*) FILTER (WHERE cs.last_correct = false)::int AS wrong
         FROM candidate_question_stats cs JOIN questions q ON q.id = cs.question_id AND q.is_published
        WHERE cs.candidate_id = $1`,
      [candidateId],
    ),
    pool.query(`${HISTORY_SELECT} WHERE a.candidate_id = $1 AND a.status = 'in_progress' ORDER BY a.started_at DESC LIMIT 5`, [candidateId]),
  ]);
  const kinds = Object.fromEntries(available.rows.map((r) => [r.kind, r.n]));
  // ROLLUP adds the all-kinds total as the row whose kind is NULL; it is missing only when nothing was finished.
  const doneRow = (k: string | null) => done.rows.find((r) => r.kind === k) ?? { n: 0, avg_pct: null, best_pct: null };
  const scores = (r: { n: number; avg_pct: number | null; best_pct: number | null }) => ({
    completed: r.n,
    averagePercent: r.avg_pct === null ? null : round2(r.avg_pct),
    bestPercent: r.best_pct === null ? null : round2(r.best_pct),
  });
  const d = doneRow(null);
  const p = practice.rows[0];
  return {
    available: { quiz: kinds.quiz ?? 0, mock: kinds.mock ?? 0, model: kinds.model ?? 0 },
    testsCompleted: d.n,
    averagePercent: d.avg_pct === null ? null : round2(d.avg_pct),
    bestPercent: d.best_pct === null ? null : round2(d.best_pct),
    byKind: { quiz: scores(doneRow("quiz")), mock: scores(doneRow("mock")), model: scores(doneRow("model")) },
    questionsAnswered: p.answered,
    accuracy: p.answered ? round2(p.correct / p.answered) : null,
    dueCount: due.rows[0].due,
    wrongCount: due.rows[0].wrong,
    inProgress: open.rows.map(historyItem),
  };
}
