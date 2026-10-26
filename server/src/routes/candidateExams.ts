import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import type { CandidateRequest } from "../middleware/auth.js";
import {
  examOverview, expireOverdue, getAttempt, getResult, getReview, listHistory, saveAnswer, setPosition, startPractice, startTest, submitAttempt,
} from "../services/attempts.js";
import { difficultyLabel, ExamError, getSections, TEST_SUMMARY_SELECT, type TestSummaryRow } from "../services/mockTests.js";
import { parseAnswer, parseBankQuery, parsePractice, parseResponse } from "../validation/exams.js";
import { checkAnswer, listBank, listResponses, saveResponse } from "../services/questionBank.js";
import { UUID_RE } from "../validation/taxonomy.js";

/** Candidate side of the examination module, mounted at /api/candidate (spec §6, §7.1). */
export const candidateExamsRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });

/** Runs a handler and sends its result as JSON; an ExamError becomes its status, code and details. */
const handle = (fn: (req: CandidateRequest, res: Response) => Promise<unknown>) =>
  asyncHandler<CandidateRequest>(async (req, res) => {
    try {
      const out = await fn(req, res);
      if (!res.headersSent) res.json(out);
    } catch (err) {
      if (!(err instanceof ExamError)) throw err;
      res.status(err.status).json({ error: err.message, code: err.code, ...err.extra });
    }
  });

const notFound = () => new ExamError(404, "not_found", "Not found");
const uuidParam = (v: string) => { if (!UUID_RE.test(v)) throw notFound(); return v; };
const me = (req: CandidateRequest) => req.candidate!.id;

// ── Tests ──────────────────────────────────────────────────────────────────────

/** A test as a candidate sees it: what it is, its rules, and where this candidate stands on it. */
function testCard(t: TestSummaryRow, mine?: Record<string, unknown>) {
  const now = Date.now();
  return {
    id: t.id,
    kind: t.kind,
    mode: t.mode,
    titleEn: t.title_en,
    titleBn: t.title_bn,
    descriptionEn: t.description_en,
    descriptionBn: t.description_bn,
    durationMinutes: t.duration_minutes,
    questionCount: t.question_count,
    totalMarks: t.total_marks,
    marksPerQuestion: t.marks_per_question,
    negativeMarks: [...new Set(t.negative_marks ?? [t.negative_mark])].sort(),
    passMark: t.pass_mark,
    subjects: (t.subjects ?? []).map((s) => ({ code: s.code, nameEn: s.name_en, nameBn: s.name_bn })),
    difficulty: difficultyLabel(t.difficulties),
    availableFrom: t.available_from,
    availableUntil: t.available_until,
    availability: t.available_from && t.available_from.getTime() > now ? "upcoming" : "open",
    maxAttempts: t.max_attempts,
    resultRelease: t.result_release,
    attemptsUsed: (mine?.used as number | undefined) ?? 0,
    openAttemptId: (mine?.open_id as string | null | undefined) ?? null,
    best: mine?.best_id ? { attemptId: mine.best_id, percentage: Math.round((mine.best_pct as number) * 100) / 100 } : null,
    lastAttemptId: (mine?.last_id as string | null | undefined) ?? null,
  };
}

const MY_ATTEMPTS = `
  SELECT mock_test_id, count(*)::int AS used,
         (array_agg(id) FILTER (WHERE status = 'in_progress'))[1] AS open_id,
         (array_agg(id ORDER BY score DESC NULLS LAST, started_at) FILTER (WHERE status <> 'in_progress'))[1] AS best_id,
         (max(100 * score / NULLIF(max_score, 0)) FILTER (WHERE status <> 'in_progress'))::float AS best_pct,
         (array_agg(id ORDER BY started_at DESC) FILTER (WHERE status <> 'in_progress'))[1] AS last_id
    FROM attempts WHERE candidate_id = $1 AND mock_test_id IS NOT NULL`;

const LIVE = "mt.is_published AND NOT mt.is_archived AND (mt.available_until IS NULL OR mt.available_until > now())";

candidateExamsRouter.get("/exams/overview", handle((req) => examOverview(me(req))));

candidateExamsRouter.get("/exams", handle(async (req) => {
  await expireOverdue(me(req));
  const kind = ["quiz", "mock", "model"].includes(String(req.query.kind)) ? String(req.query.kind) : null;
  const tests = await pool.query<TestSummaryRow>(
    `${TEST_SUMMARY_SELECT} WHERE ${LIVE} AND ($1::text IS NULL OR mt.kind = $1)
      ORDER BY COALESCE(mt.available_from, mt.created_at) DESC, mt.title_en`,
    [kind],
  );
  const mine = await pool.query(`${MY_ATTEMPTS} AND mock_test_id = ANY($2::uuid[]) GROUP BY mock_test_id`, [me(req), tests.rows.map((t) => t.id)]);
  const byTest = new Map(mine.rows.map((r) => [r.mock_test_id, r]));
  return tests.rows.map((t) => testCard(t, byTest.get(t.id)));
}));

candidateExamsRouter.get("/exams/:id", handle(async (req) => {
  const id = uuidParam(req.params.id);
  await expireOverdue(me(req));
  const { rows } = await pool.query<TestSummaryRow>(`${TEST_SUMMARY_SELECT} WHERE mt.id = $1 AND ${LIVE}`, [id]);
  const t = rows[0];
  if (!t) throw notFound();
  const mine = await pool.query(`${MY_ATTEMPTS} AND mock_test_id = $2 GROUP BY mock_test_id`, [me(req), id]);
  // The paper's layout: one line per section (random) or per subject (fixed).
  let outline: { subject: { code: string; nameEn: string; nameBn: string | null }; topic: { nameEn: string; nameBn: string | null } | null; questionCount: number; marksPerQuestion: number; negativeMark: number }[];
  if (t.mode === "random") {
    const sections = (await getSections(pool, id)).filter((s) => s.type === "mcq");
    const names = await pool.query(
      `SELECT s.id, s.code, s.name_en, s.name_bn, NULL::text AS kind FROM subjects s WHERE s.id = ANY($1::uuid[])
       UNION ALL SELECT t.id, NULL, t.name_en, t.name_bn, 'topic' FROM topics t WHERE t.id = ANY($2::uuid[])`,
      [sections.map((s) => s.subject_id), sections.map((s) => s.topic_id).filter(Boolean)],
    );
    const nameOf = new Map(names.rows.map((r) => [r.id, r]));
    outline = sections.map((s) => {
      const subj = nameOf.get(s.subject_id);
      const topic = s.topic_id ? nameOf.get(s.topic_id) : null;
      const own = s.marks_per_question !== null;
      return {
        subject: { code: subj?.code, nameEn: subj?.name_en, nameBn: subj?.name_bn },
        topic: topic ? { nameEn: topic.name_en, nameBn: topic.name_bn } : null,
        questionCount: s.question_count,
        marksPerQuestion: own ? s.marks_per_question! : t.marks_per_question,
        negativeMark: own ? s.negative_mark : t.negative_mark,
      };
    });
  } else {
    const bySubject = await pool.query(
      `SELECT s.code, s.name_en, s.name_bn, count(*)::int AS n FROM mock_test_questions mq
         JOIN questions q ON q.id = mq.question_id JOIN subjects s ON s.id = q.subject_id
        WHERE mq.mock_test_id = $1 GROUP BY s.code, s.name_en, s.name_bn, s.sort_order ORDER BY min(mq.position)`,
      [id],
    );
    outline = bySubject.rows.map((r) => ({
      subject: { code: r.code, nameEn: r.name_en, nameBn: r.name_bn }, topic: null, questionCount: r.n,
      marksPerQuestion: t.marks_per_question, negativeMark: t.negative_mark,
    }));
  }
  return { ...testCard(t, mine.rows[0]), outline };
}));

candidateExamsRouter.post("/exams/:id/start", handle(async (req, res) => {
  const out = await startTest(me(req), uuidParam(req.params.id));
  res.status(out.resumed ? 200 : 201);
  return out;
}));

// ── Practice ───────────────────────────────────────────────────────────────────

/** Subjects and topics that have published MCQs, with this candidate's progress on each. */
candidateExamsRouter.get("/practice/catalog", handle(async (req) => {
  const [subjects, topics, mine, lessons] = await Promise.all([
    pool.query(
      `SELECT s.id, s.code, s.name_en, s.name_bn, s.chapter_id, count(q.id)::int AS question_count
         FROM subjects s JOIN questions q ON q.subject_id = s.id AND q.is_published AND q.type = 'mcq'
        GROUP BY s.id ORDER BY s.sort_order, s.code`,
    ),
    pool.query(
      `SELECT t.id, t.subject_id, t.name_en, t.name_bn, t.lesson_id, count(q.id)::int AS question_count
         FROM topics t JOIN questions q ON q.topic_id = t.id AND q.is_published AND q.type = 'mcq'
        GROUP BY t.id ORDER BY t.sort_order, t.name_en`,
    ),
    pool.query(
      `SELECT q.subject_id, count(*)::int AS seen, sum(cs.times_seen)::int AS answered, sum(cs.times_correct)::int AS correct,
              count(*) FILTER (WHERE cs.last_correct = false)::int AS wrong,
              count(*) FILTER (WHERE cs.next_review_at <= now())::int AS due
         FROM candidate_question_stats cs JOIN questions q ON q.id = cs.question_id AND q.is_published AND q.type = 'mcq'
        WHERE cs.candidate_id = $1 GROUP BY q.subject_id`,
      [me(req)],
    ),
    pool.query(
      `SELECT lesson_slug AS slug, count(*)::int AS question_count FROM questions
        WHERE is_published AND type = 'mcq' AND lesson_slug IS NOT NULL GROUP BY lesson_slug ORDER BY lesson_slug`,
    ),
  ]);
  const stats = new Map(mine.rows.map((r) => [r.subject_id, r]));
  const totals = mine.rows.reduce((n, r) => ({ due: n.due + r.due, wrong: n.wrong + r.wrong }), { due: 0, wrong: 0 });
  return {
    subjects: subjects.rows.map((s) => {
      const st = stats.get(s.id);
      return {
        id: s.id, code: s.code, nameEn: s.name_en, nameBn: s.name_bn, chapterId: s.chapter_id, questionCount: s.question_count,
        seen: st?.seen ?? 0, wrong: st?.wrong ?? 0, due: st?.due ?? 0,
        accuracy: st?.answered ? Math.round((100 * st.correct) / st.answered) / 100 : null,
        topics: topics.rows.filter((t) => t.subject_id === s.id).map((t) => ({
          id: t.id, nameEn: t.name_en, nameBn: t.name_bn, lessonId: t.lesson_id, questionCount: t.question_count,
        })),
      };
    }),
    lessons: lessons.rows.map((l) => ({ slug: l.slug, questionCount: l.question_count })),
    due: totals.due,
    wrong: totals.wrong,
  };
}));

candidateExamsRouter.post("/practice/sessions", handle(async (req, res) => {
  const r = parsePractice(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const out = await startPractice(me(req), r.value);
  res.status(201);
  return out;
}));

// ── Attempts ───────────────────────────────────────────────────────────────────

candidateExamsRouter.get("/attempts", handle(async (req) => {
  const q = req.query as Record<string, string | undefined>;
  const type = q.type === "practice" || q.type === "test" ? q.type : "all";
  const status = q.status === "open" || q.status === "finished" ? q.status : "all";
  const limit = Math.min(100, Math.max(1, parseInt(q.limit ?? "20", 10) || 20));
  const offset = Math.max(0, parseInt(q.offset ?? "0", 10) || 0);
  return listHistory(me(req), { type, status, limit, offset });
}));

candidateExamsRouter.get("/attempts/:aid", handle((req) => getAttempt(me(req), uuidParam(req.params.aid))));

candidateExamsRouter.patch("/attempts/:aid", handle(async (req, res) => {
  const position = Number(req.body?.currentPosition);
  if (!Number.isInteger(position) || position < 1) { invalid(res, { currentPosition: "required" }); return; }
  return setPosition(me(req), uuidParam(req.params.aid), position);
}));

candidateExamsRouter.put("/attempts/:aid/answers/:qid", handle(async (req, res) => {
  const r = parseAnswer(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  return saveAnswer(me(req), uuidParam(req.params.aid), uuidParam(req.params.qid), r.value);
}));

candidateExamsRouter.post("/attempts/:aid/submit", handle((req) => submitAttempt(me(req), uuidParam(req.params.aid))));

candidateExamsRouter.get("/attempts/:aid/result", handle((req) => getResult(me(req), uuidParam(req.params.aid))));
candidateExamsRouter.get("/attempts/:aid/review", handle((req) => getReview(me(req), uuidParam(req.params.aid))));

// ── Question bank (study before a test) ───────────────────────────────────────

candidateExamsRouter.get("/bank/questions", handle((req) => listBank(me(req), parseBankQuery(req.query as Record<string, unknown>))));

candidateExamsRouter.post("/bank/questions/:id/check", handle(async (req, res) => {
  const optionId = req.body?.optionId ?? null;
  if (optionId !== null && (typeof optionId !== "string" || !UUID_RE.test(optionId))) { invalid(res, { optionId: "option_invalid" }); return; }
  return checkAnswer(uuidParam(req.params.id), optionId);
}));

candidateExamsRouter.get("/bank/questions/:id/responses", handle((req) => listResponses(me(req), uuidParam(req.params.id))));

candidateExamsRouter.post("/bank/questions/:id/responses", handle(async (req, res) => {
  const r = parseResponse(req.body);
  if (r.ok === false) { invalid(res, r.fields); return; }
  const out = await saveResponse(me(req), uuidParam(req.params.id), r.value.answerText, r.value.selfScore);
  res.status(201);
  return out;
}));
