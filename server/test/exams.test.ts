import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { candidateToken, createAdmin } from "./helpers/auth";
import { insertCandidate, insertMcq, insertSubject, insertTopic, resetDb } from "./helpers/db";

const app = createApp();
beforeEach(resetDb);

/** n published MCQs in a subject (option 1 correct), optionally under a topic and at a difficulty. */
async function bank(subjectId: string, n: number, opts: { topicId?: string; difficulty?: number } = {}) {
  const ids: string[] = [];
  for (let i = 0; i < n; i++) ids.push(await insertMcq(subjectId, 1));
  await pool.query(
    "UPDATE questions SET is_published = true, topic_id = $2, difficulty = $3, explanation_en = 'Because.' WHERE id = ANY($1::uuid[])",
    [ids, opts.topicId ?? null, opts.difficulty ?? 2],
  );
  return ids;
}

async function correctOption(questionId: string, correct = true) {
  const { rows } = await pool.query("SELECT id FROM question_options WHERE question_id = $1 AND is_correct = $2 ORDER BY position LIMIT 1", [questionId, correct]);
  return rows[0].id as string;
}

async function candidate(email = `c${Math.random()}@example.com`) {
  const id = await insertCandidate(email);
  return { id, auth: `Bearer ${candidateToken(id, email)}` };
}

const fixedTest = (questionIds: string[], over: Record<string, unknown> = {}) => ({
  kind: "mock", mode: "fixed", title_en: "Assistant Programmer mock 1", duration_minutes: 30, marks_per_question: 1,
  negative_mark: 0.25, pass_mark: 2, question_ids: questionIds, ...over,
});

async function publishedFixed(questionIds: string[], over: Record<string, unknown> = {}) {
  const admin = await createAdmin("editor");
  const created = await request(app).post("/api/mock-tests").set("Authorization", `Bearer ${admin.token}`).send(fixedTest(questionIds, over));
  expect(created.status).toBe(201);
  const pub = await request(app).post(`/api/mock-tests/${created.body.id}/publish`).set("Authorization", `Bearer ${admin.token}`).send({ published: true });
  expect(pub.status).toBe(200);
  return { id: created.body.id as string, admin };
}

describe("admin: mock tests", () => {
  it("validates the configuration and rejects non-MCQ or unknown questions", async () => {
    const admin = await createAdmin();
    const auth = `Bearer ${admin.token}`;
    const bad = await request(app).post("/api/mock-tests").set("Authorization", auth)
      .send({ kind: "exam", mode: "fixed", title_en: "", duration_minutes: 0, marks_per_question: 1, negative_mark: 2, question_ids: [] });
    expect(bad.status).toBe(400);
    expect(bad.body.fields).toMatchObject({ kind: "kind_invalid", title_en: "required", duration_minutes: "duration_invalid", negative_mark: "negative_invalid", question_ids: "questions_required" });

    const subject = await insertSubject();
    const written = await pool.query(
      "INSERT INTO questions (subject_id, type, stem_en, model_answer_en, content_hash) VALUES ($1, 'written', 'Explain', 'x', repeat('a', 64)) RETURNING id",
      [subject],
    );
    const notMcq = await request(app).post("/api/mock-tests").set("Authorization", auth).send(fixedTest([written.rows[0].id]));
    expect(notMcq.status).toBe(400);
    expect(notMcq.body.fields.question_ids).toBe("question_not_mcq");

    const dates = await request(app).post("/api/mock-tests").set("Authorization", auth)
      .send(fixedTest(await bank(subject, 1), { available_from: "2030-01-02T00:00:00Z", available_until: "2030-01-01T00:00:00Z" }));
    expect(dates.body.fields.available_until).toBe("ends_before_start");
  });

  it("publishes a random test only when every section can be filled, and keeps a published test ready", async () => {
    const admin = await createAdmin();
    const auth = `Bearer ${admin.token}`;
    const subject = await insertSubject("NET");
    const topic = await insertTopic(subject, "Subnetting");
    await bank(subject, 3, { topicId: topic });
    const body = {
      kind: "model", mode: "random", title_en: "NET model test", duration_minutes: 20, marks_per_question: 1, negative_mark: 0.5,
      sections: [{ subject_id: subject, topic_id: topic, question_count: 5 }],
    };
    const created = await request(app).post("/api/mock-tests").set("Authorization", auth).send(body);
    expect(created.status).toBe(201);
    expect(created.body).toMatchObject({ status: "draft", question_count: 5, total_marks: 5 });
    expect(created.body.problems).toEqual([expect.objectContaining({ code: "section_short", have: 3, need: 5 })]);

    const blocked = await request(app).post(`/api/mock-tests/${created.body.id}/publish`).set("Authorization", auth).send({ published: true });
    expect(blocked.status).toBe(409);
    expect(blocked.body.code).toBe("not_ready");

    const fixedUp = await request(app).put(`/api/mock-tests/${created.body.id}`).set("Authorization", auth)
      .send({ ...body, sections: [{ subject_id: subject, topic_id: topic, question_count: 3, marks_per_question: 2, negative_mark: 0.5 }] });
    expect(fixedUp.body).toMatchObject({ problems: [], total_marks: 6 });
    expect((await request(app).post(`/api/mock-tests/${created.body.id}/publish`).set("Authorization", auth).send({ published: true })).status).toBe(200);

    // Editing a published test into one that cannot be built is refused, and nothing changes.
    const broken = await request(app).put(`/api/mock-tests/${created.body.id}`).set("Authorization", auth).send(body);
    expect(broken.status).toBe(409);
    expect((await pool.query("SELECT question_count FROM mock_test_sections WHERE mock_test_id = $1", [created.body.id])).rows[0].question_count).toBe(3);
  });

  it("refuses written sections online, previews with answers, duplicates, archives and deletes only untaken tests", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 2);
    const { id, admin } = await publishedFixed(ids);
    const auth = `Bearer ${admin.token}`;

    const preview = await request(app).get(`/api/mock-tests/${id}/preview`).set("Authorization", auth);
    expect(preview.status).toBe(200);
    expect(preview.body.questions).toHaveLength(2);
    expect(preview.body.questions[0].question.options.some((o: { is_correct: boolean }) => o.is_correct)).toBe(true);

    const copy = await request(app).post(`/api/mock-tests/${id}/duplicate`).set("Authorization", auth);
    expect(copy.status).toBe(201);
    expect(copy.body).toMatchObject({ status: "draft", title_en: "Assistant Programmer mock 1 (copy)", question_count: 2 });

    const written = await request(app).put(`/api/mock-tests/${copy.body.id}`).set("Authorization", auth).send({
      kind: "model", mode: "random", title_en: "Written", duration_minutes: 60, marks_per_question: 1,
      sections: [{ subject_id: subject, question_count: 1 }, { subject_id: subject, type: "written", question_count: 2 }],
    });
    expect(written.body.problems.map((p: { code: string }) => p.code)).toContain("section_written");

    const c = await candidate();
    await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth).expect(201);
    const del = await request(app).delete(`/api/mock-tests/${id}`).set("Authorization", auth);
    expect(del.status).toBe(409);
    expect(del.body.code).toBe("has_attempts");
    const archived = await request(app).post(`/api/mock-tests/${id}/archive`).set("Authorization", auth).send({ archived: true });
    expect(archived.body).toMatchObject({ status: "archived", is_published: false, attempt_count: 1 });
    expect((await request(app).delete(`/api/mock-tests/${copy.body.id}`).set("Authorization", auth)).status).toBe(200);
  });

  it("is admin-only", async () => {
    const c = await candidate();
    expect((await request(app).get("/api/mock-tests").set("Authorization", c.auth)).status).toBe(403);
  });
});

describe("candidate: taking a timed test", () => {
  it("lists only live tests, starts once, resumes, and never sends answers while the test runs", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 4);
    const { id } = await publishedFixed(ids);
    await request(app).post("/api/mock-tests").set("Authorization", `Bearer ${(await createAdmin()).token}`).send(fixedTest(ids, { title_en: "Draft" }));
    const c = await candidate();

    const list = await request(app).get("/api/candidate/exams?kind=mock").set("Authorization", c.auth);
    expect(list.body.map((t: { titleEn: string }) => t.titleEn)).toEqual(["Assistant Programmer mock 1"]);
    expect(list.body[0]).toMatchObject({ questionCount: 4, totalMarks: 4, negativeMarks: [0.25], passMark: 2, attemptsUsed: 0, availability: "open" });

    const start = await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth);
    expect(start.status).toBe(201);
    const again = await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth);
    expect(again.body).toEqual({ attemptId: start.body.attemptId, resumed: true });

    const attempt = await request(app).get(`/api/candidate/attempts/${start.body.attemptId}`).set("Authorization", c.auth);
    expect(attempt.body.questions).toHaveLength(4);
    expect(attempt.body.attempt).toMatchObject({ status: "in_progress", maxScore: 4, passMark: 2 });
    const text = JSON.stringify(attempt.body);
    expect(text).not.toMatch(/isCorrect|is_correct|explanation|correctOptionId/);
  });

  it("scores on the server with negative marking, passes or fails, and ignores a second submit", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 4);
    const { id } = await publishedFixed(ids);
    const c = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth)).body;
    const save = (qid: string, body: object) => request(app).put(`/api/candidate/attempts/${attemptId}/answers/${qid}`).set("Authorization", c.auth).send(body);

    await save(ids[0], { optionId: await correctOption(ids[0]) }).expect(200);
    await save(ids[1], { optionId: await correctOption(ids[1]) }).expect(200);
    await save(ids[2], { optionId: await correctOption(ids[2], false), flagged: true }).expect(200);
    // change of mind, then clear: question 4 ends unanswered
    await save(ids[3], { optionId: await correctOption(ids[3]) }).expect(200);
    const cleared = await save(ids[3], { optionId: null });
    expect(cleared.body).toMatchObject({ selectedOptionId: null });
    const foreign = await save(ids[0], { optionId: await correctOption(ids[1]) });
    expect(foreign.status).toBe(400);
    expect(foreign.body.code).toBe("option_invalid");

    expect((await request(app).get(`/api/candidate/attempts/${attemptId}/result`).set("Authorization", c.auth)).body.code).toBe("not_finished");

    const submit = await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth);
    expect(submit.body).toEqual({ status: "submitted", alreadyClosed: false });
    const twice = await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth);
    expect(twice.body).toEqual({ status: "submitted", alreadyClosed: true });
    expect((await save(ids[3], { optionId: await correctOption(ids[3]) })).body.code).toBe("attempt_closed");

    const result = await request(app).get(`/api/candidate/attempts/${attemptId}/result`).set("Authorization", c.auth);
    expect(result.body).toMatchObject({ score: 1.75, maxScore: 4, percentage: 43.75, passed: false, correct: 2, wrong: 1, skipped: 1, total: 4, accuracy: 0.67 });
    expect(result.body.bySubject).toEqual([expect.objectContaining({ code: "DBMS", correct: 2, wrong: 1, skipped: 1, score: 1.75 })]);
    expect(result.body.rank).toEqual({ rank: 1, percentile: 0, candidates: 1 });

    const review = await request(app).get(`/api/candidate/attempts/${attemptId}/review`).set("Authorization", c.auth);
    expect(review.body.questions[2]).toMatchObject({ isCorrect: false, flagged: true, awarded: -0.25, explanationEn: "Because." });

    const stats = await pool.query("SELECT count(*)::int AS n, count(*) FILTER (WHERE box = 1)::int AS wrong FROM candidate_question_stats WHERE candidate_id = $1", [c.id]);
    expect(stats.rows[0]).toEqual({ n: 3, wrong: 1 });
  });

  it("hides another candidate's attempt", async () => {
    const subject = await insertSubject();
    const { id } = await publishedFixed(await bank(subject, 2));
    const owner = await candidate();
    const other = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", owner.auth)).body;
    for (const path of ["", "/result", "/review"]) {
      expect((await request(app).get(`/api/candidate/attempts/${attemptId}${path}`).set("Authorization", other.auth)).status).toBe(404);
    }
    expect((await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", other.auth)).status).toBe(404);
  });

  it("expires an attempt past its deadline, keeping the answers saved in time and refusing later ones", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 2);
    const { id } = await publishedFixed(ids);
    const c = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth)).body;
    await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${ids[0]}`).set("Authorization", c.auth).send({ optionId: await correctOption(ids[0]) }).expect(200);
    await pool.query("UPDATE attempts SET started_at = now() - interval '40 minutes', deadline_at = now() - interval '1 minute' WHERE id = $1", [attemptId]);

    const late = await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${ids[1]}`).set("Authorization", c.auth).send({ optionId: await correctOption(ids[1]) });
    expect(late.status).toBe(409);
    expect(late.body.code).toBe("deadline_passed");
    const result = await request(app).get(`/api/candidate/attempts/${attemptId}/result`).set("Authorization", c.auth);
    expect(result.body).toMatchObject({ attempt: { status: "expired" }, score: 1, correct: 1, skipped: 1, passed: false });
    expect(result.body.timeTakenSec).toBeLessThanOrEqual(40 * 60);
  });

  it("enforces the attempt limit, the availability window and the result release", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 2);
    const { id } = await publishedFixed(ids, { max_attempts: 1, result_release: "never" });
    const c = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth)).body;
    await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth).expect(200);
    const limit = await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth);
    expect(limit.status).toBe(409);
    expect(limit.body.code).toBe("attempt_limit");
    const review = await request(app).get(`/api/candidate/attempts/${attemptId}/review`).set("Authorization", c.auth);
    expect(review.status).toBe(403);
    expect(review.body.code).toBe("review_unavailable");
    const result = await request(app).get(`/api/candidate/attempts/${attemptId}/result`).set("Authorization", c.auth);
    expect(result.body.review.available).toBe(false);
    expect(result.body.test.canRetry).toBe(false);

    const { id: later } = await publishedFixed(ids, { title_en: "Later", available_from: new Date(Date.now() + 3_600_000).toISOString() });
    const early = await request(app).post(`/api/candidate/exams/${later}/start`).set("Authorization", c.auth);
    expect(early.body.code).toBe("not_open_yet");
    const listed = await request(app).get(`/api/candidate/exams/${later}`).set("Authorization", c.auth);
    expect(listed.body.availability).toBe("upcoming");

    const { id: closing } = await publishedFixed(ids, { title_en: "Closing", available_until: new Date(Date.now() + 5 * 60_000).toISOString(), result_release: "after_close" });
    const run = (await request(app).post(`/api/candidate/exams/${closing}/start`).set("Authorization", c.auth)).body;
    const live = await request(app).get(`/api/candidate/attempts/${run.attemptId}`).set("Authorization", c.auth);
    // the deadline never runs past the window's end
    expect(new Date(live.body.attempt.deadlineAt).getTime()).toBeLessThanOrEqual(Date.now() + 5 * 60_000 + 1000);
    await request(app).post(`/api/candidate/attempts/${run.attemptId}/submit`).set("Authorization", c.auth);
    expect((await request(app).get(`/api/candidate/attempts/${run.attemptId}/review`).set("Authorization", c.auth)).status).toBe(403);
    await pool.query("UPDATE mock_tests SET available_until = now() - interval '1 second', available_from = NULL WHERE id = $1", [closing]);
    expect((await request(app).get(`/api/candidate/attempts/${run.attemptId}/review`).set("Authorization", c.auth)).status).toBe(200);
  });

  it("opens only one attempt and scores it once under concurrent requests", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 3);
    const { id } = await publishedFixed(ids);
    const c = await candidate();
    const starts = await Promise.all(Array.from({ length: 4 }, () => request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth)));
    expect(new Set(starts.map((s) => s.body.attemptId)).size).toBe(1);
    const attemptId = starts[0].body.attemptId;
    await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${ids[0]}`).set("Authorization", c.auth).send({ optionId: await correctOption(ids[0], false) });
    const submits = await Promise.all(Array.from({ length: 4 }, () => request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth)));
    expect(submits.filter((s) => s.body.alreadyClosed === false)).toHaveLength(1);
    const stats = await pool.query("SELECT times_seen FROM candidate_question_stats WHERE candidate_id = $1", [c.id]);
    expect(stats.rows).toEqual([{ times_seen: 1 }]);
    expect((await pool.query("SELECT score::float FROM attempts WHERE id = $1", [attemptId])).rows[0].score).toBe(-0.25);
  });

  it("builds a random paper from its sections with their own marks", async () => {
    const admin = await createAdmin();
    const net = await insertSubject("NET");
    const os = await insertSubject("OS");
    await bank(net, 4, { difficulty: 3 });
    await bank(net, 4, { difficulty: 1 });
    await bank(os, 3);
    const created = await request(app).post("/api/mock-tests").set("Authorization", `Bearer ${admin.token}`).send({
      kind: "model", mode: "random", title_en: "Mixed", duration_minutes: 30, marks_per_question: 1, negative_mark: 0.25,
      sections: [{ subject_id: net, difficulty: 3, question_count: 3 }, { subject_id: os, question_count: 2, marks_per_question: 2, negative_mark: 0.5 }],
    });
    await request(app).post(`/api/mock-tests/${created.body.id}/publish`).set("Authorization", `Bearer ${admin.token}`).send({ published: true }).expect(200);
    const c = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${created.body.id}/start`).set("Authorization", c.auth)).body;
    const paper = (await request(app).get(`/api/candidate/attempts/${attemptId}`).set("Authorization", c.auth)).body;
    expect(paper.attempt.maxScore).toBe(7);
    expect(paper.questions.map((q: { subject: { code: string }; difficulty: number; marks: number }) => [q.subject.code, q.marks]))
      .toEqual([["NET", 1], ["NET", 1], ["NET", 1], ["OS", 2], ["OS", 2]]);
    expect(paper.questions.slice(0, 3).every((q: { difficulty: number }) => q.difficulty === 3)).toBe(true);
    const detail = await request(app).get(`/api/candidate/exams/${created.body.id}`).set("Authorization", c.auth);
    expect(detail.body.outline).toEqual([
      expect.objectContaining({ subject: expect.objectContaining({ code: "NET" }), questionCount: 3, marksPerQuestion: 1, negativeMark: 0.25 }),
      expect.objectContaining({ subject: expect.objectContaining({ code: "OS" }), questionCount: 2, marksPerQuestion: 2, negativeMark: 0.5 }),
    ]);
    expect(detail.body.negativeMarks).toEqual([0.25, 0.5]);
  });
});

describe("candidate: practice", () => {
  it("gives instant feedback, keeps the first answer, and records the revision schedule", async () => {
    const subject = await insertSubject();
    const topic = await insertTopic(subject);
    const ids = await bank(subject, 6, { topicId: topic });
    const c = await candidate();

    const catalog = await request(app).get("/api/candidate/practice/catalog").set("Authorization", c.auth);
    expect(catalog.body.subjects).toEqual([expect.objectContaining({ code: "DBMS", questionCount: 6, topics: [expect.objectContaining({ id: topic, questionCount: 6 })] })]);

    const bad = await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ count: 2 });
    expect(bad.body.fields.count).toBe("count_invalid");
    const session = await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ subjectId: subject, topicId: topic, count: 5 });
    expect(session.status).toBe(201);
    expect(session.body.questionCount).toBe(5);
    const { attemptId } = session.body;
    const paper = (await request(app).get(`/api/candidate/attempts/${attemptId}`).set("Authorization", c.auth)).body;
    expect(paper.attempt).toMatchObject({ mode: "practice", deadlineAt: null });
    const [q1, q2] = paper.questions;

    const wrong = await correctOption(q1.questionId, false);
    const fb = await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${q1.questionId}`).set("Authorization", c.auth).send({ optionId: wrong });
    expect(fb.body).toMatchObject({ isCorrect: false, correctOptionId: await correctOption(q1.questionId), explanationEn: "Because." });
    const change = await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${q1.questionId}`).set("Authorization", c.auth).send({ optionId: await correctOption(q1.questionId) });
    expect(change.status).toBe(409);
    expect(change.body.code).toBe("already_answered");
    await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${q2.questionId}`).set("Authorization", c.auth).send({ optionId: await correctOption(q2.questionId) }).expect(200);

    // Reloading shows the feedback of answered questions only.
    const reloaded = (await request(app).get(`/api/candidate/attempts/${attemptId}`).set("Authorization", c.auth)).body;
    expect(reloaded.questions[0]).toHaveProperty("correctOptionId");
    expect(reloaded.questions[2]).not.toHaveProperty("correctOptionId");

    const stats = await pool.query("SELECT question_id, box, next_review_at IS NOT NULL AS scheduled FROM candidate_question_stats WHERE candidate_id = $1", [c.id]);
    expect(stats.rows).toEqual(expect.arrayContaining([
      { question_id: q1.questionId, box: 1, scheduled: true },
      { question_id: q2.questionId, box: 4, scheduled: false },
    ]));

    await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth).expect(200);
    const result = (await request(app).get(`/api/candidate/attempts/${attemptId}/result`).set("Authorization", c.auth)).body;
    expect(result).toMatchObject({ score: 1, maxScore: 5, correct: 1, wrong: 1, skipped: 3, passed: null, rank: null });
    expect(result.weakTopics).toEqual([expect.objectContaining({ topicId: topic, correct: 1, total: 5 })]);

    // "wrong" practises the missed question again; "due" opens a revision session once it is due.
    const again = await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ status: "wrong", count: 5 });
    const againPaper = (await request(app).get(`/api/candidate/attempts/${again.body.attemptId}`).set("Authorization", c.auth)).body;
    expect(againPaper.questions.map((q: { questionId: string }) => q.questionId)).toEqual([q1.questionId]);
    expect((await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ status: "due", count: 5 })).body.code).toBe("no_questions");
    await pool.query("UPDATE candidate_question_stats SET next_review_at = now() - interval '1 minute' WHERE question_id = $1", [q1.questionId]);
    const due = await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ status: "due", count: 5 });
    expect((await request(app).get(`/api/candidate/attempts/${due.body.attemptId}`).set("Authorization", c.auth)).body.attempt.mode).toBe("revision");
    expect(ids).toContain(q1.questionId);
  });

  it("lists history and the dashboard numbers, and blocks a deactivated account", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 5);
    const { id } = await publishedFixed(ids);
    const c = await candidate();
    const { attemptId } = (await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", c.auth)).body;
    await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${ids[0]}`).set("Authorization", c.auth).send({ optionId: await correctOption(ids[0]) });
    await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", c.auth);
    await request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ count: 5 }).expect(201);

    const overview = (await request(app).get("/api/candidate/exams/overview").set("Authorization", c.auth)).body;
    expect(overview).toMatchObject({ available: { mock: 1, model: 0, quiz: 0 }, testsCompleted: 1, averagePercent: 20, questionsAnswered: 1 });
    expect(overview.byKind).toEqual({
      mock: { completed: 1, averagePercent: 20, bestPercent: 20 },
      model: { completed: 0, averagePercent: null, bestPercent: null },
      quiz: { completed: 0, averagePercent: null, bestPercent: null },
    });
    expect(overview.inProgress).toHaveLength(1);
    const history = (await request(app).get("/api/candidate/attempts?type=test").set("Authorization", c.auth)).body;
    expect(history).toMatchObject({ total: 1, items: [{ id: attemptId, status: "submitted", score: 1, maxScore: 5, passed: false }] });
    const list = (await request(app).get("/api/candidate/exams").set("Authorization", c.auth)).body;
    expect(list[0]).toMatchObject({ attemptsUsed: 1, openAttemptId: null, best: { attemptId, percentage: 20 } });

    await pool.query("UPDATE candidates SET is_active = false WHERE id = $1", [c.id]);
    const blocked = await request(app).get("/api/candidate/exams").set("Authorization", c.auth);
    expect(blocked.status).toBe(401);
    expect(blocked.body.code).toBe("account_inactive");
  });

  it("lets an admin test the exams through a preview account outside production", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 2);
    const { id, admin } = await publishedFixed(ids);
    const auth = `Bearer ${admin.token}`;
    const start = await request(app).post(`/api/candidate/exams/${id}/start`).set("Authorization", auth);
    expect(start.status).toBe(201);
    await request(app).post(`/api/candidate/attempts/${start.body.attemptId}/submit`).set("Authorization", auth).expect(200);
    expect((await request(app).get(`/api/candidate/attempts/${start.body.attemptId}/result`).set("Authorization", auth)).status).toBe(200);
    // one preview account per admin, which cannot be used to sign in
    const preview = await pool.query("SELECT full_name, password_hash FROM candidates WHERE email LIKE '%@admin-preview.studypath.invalid'");
    expect(preview.rows).toEqual([{ full_name: `${admin.username} (admin preview)`, password_hash: "!preview" }]);
    const signIn = await request(app).post("/api/auth/sign-in").send({ identifier: `admin-${admin.id}@admin-preview.studypath.invalid`, password: "!preview" });
    expect(signIn.status).toBe(401);
    // and another candidate still cannot see the admin's attempt
    const c = await candidate();
    expect((await request(app).get(`/api/candidate/attempts/${start.body.attemptId}`).set("Authorization", c.auth)).status).toBe(404);
  });
});
