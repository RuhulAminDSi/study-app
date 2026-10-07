import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { resetDb, insertSubject, insertTopic, insertExamTag, insertCandidate, insertMockTest } from "./helpers/db";
import { createAdmin } from "./helpers/auth";

let token: string;
let subjectId: string;
const api = () => request(createApp());
const auth = (r: request.Test) => r.set("Authorization", `Bearer ${token}`);

const mcqBody = (over: Record<string, unknown> = {}) => ({
  subject_id: subjectId,
  type: "mcq",
  difficulty: 2,
  stem_en: "Which normal form removes transitive dependencies?",
  stem_bn: "কোন normal form transitive dependency দূর করে?",
  explanation_en: "3NF removes transitive dependencies on the key.",
  options: [
    { text_en: "1NF", text_bn: "1NF", is_correct: false },
    { text_en: "2NF", text_bn: "2NF", is_correct: false },
    { text_en: "3NF", text_bn: "3NF", is_correct: true },
    { text_en: "BCNF", text_bn: "BCNF", is_correct: false },
  ],
  ...over,
});

beforeEach(async () => {
  await resetDb();
  token = (await createAdmin()).token;
  subjectId = await insertSubject("DBMS");
});

describe("POST /api/questions", () => {
  it("creates an MCQ as a draft and returns the full question", async () => {
    const res = await auth(api().post("/api/questions")).send(mcqBody());
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ subject_code: "DBMS", type: "mcq", source: "original", is_published: false, marks: 1 });
    expect(res.body.options.map((o: { position: number; is_correct: boolean }) => [o.position, o.is_correct])).toEqual([[1, false], [2, false], [3, true], [4, false]]);
  });

  it("returns field codes for an invalid question", async () => {
    const res = await auth(api().post("/api/questions")).send(mcqBody({ stem_en: "", options: [{ text_en: "A", is_correct: false }, { text_en: "B", is_correct: false }] }));
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ stem_en: "required", correct: "correct_invalid" });
  });

  it("rejects a topic from another subject", async () => {
    const otherTopic = await insertTopic(await insertSubject("NET"), "Routing");
    const res = await auth(api().post("/api/questions")).send(mcqBody({ topic_id: otherTopic }));
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ topic_id: "topic_unknown" });
  });

  it("marks a tagged question as a past paper", async () => {
    const tagId = await insertExamTag();
    const res = await auth(api().post("/api/questions")).send(mcqBody({ exam_tag_ids: [tagId] }));
    expect(res.body).toMatchObject({ source: "past_paper", exam_tag_ids: [tagId] });
  });

  it("refuses a duplicate question with 409", async () => {
    await auth(api().post("/api/questions")).send(mcqBody());
    const dup = await auth(api().post("/api/questions")).send(mcqBody({ stem_en: "which NORMAL form removes  transitive dependencies?" }));
    expect(dup.status).toBe(409);
    expect(dup.body.code).toBe("duplicate");
  });

  it("creates a programming question with a model answer and keeps code indentation", async () => {
    const res = await auth(api().post("/api/questions")).send({
      subject_id: subjectId, type: "programming", difficulty: 3, stem_en: "Write a query for the top 3 salaries.",
      model_answer_en: "SELECT salary\n  FROM emp\n  ORDER BY salary DESC\n  LIMIT 3;",
    });
    expect(res.status).toBe(201);
    expect(res.body.model_answer_en).toBe("SELECT salary\n  FROM emp\n  ORDER BY salary DESC\n  LIMIT 3;");
    expect(res.body.options).toEqual([]);
  });
});

describe("PUT /api/questions/:id", () => {
  it("keeps option ids stable on edit so candidates' answers stay linked", async () => {
    const created = (await auth(api().post("/api/questions")).send(mcqBody())).body;
    const before = created.options.map((o: { id: string }) => o.id);
    const body = mcqBody({ options: created.options.map((o: { text_en: string; position: number }) => ({ text_en: `${o.text_en}!`, text_bn: null, is_correct: o.position === 1 })) });
    const res = await auth(api().put(`/api/questions/${created.id}`)).send(body);
    expect(res.status).toBe(200);
    expect(res.body.options.map((o: { id: string }) => o.id)).toEqual(before);
    expect(res.body.options[0]).toMatchObject({ text_en: "1NF!", is_correct: true });
    expect(res.body.options[2].is_correct).toBe(false);
  });

  it("removes options beyond the new count", async () => {
    const created = (await auth(api().post("/api/questions")).send(mcqBody())).body;
    const res = await auth(api().put(`/api/questions/${created.id}`)).send(mcqBody({ options: [
      { text_en: "3NF", is_correct: true }, { text_en: "BCNF", is_correct: false },
    ] }));
    expect(res.body.options).toHaveLength(2);
  });

  it("returns 404 for an unknown id", async () => {
    expect((await auth(api().put("/api/questions/11111111-1111-1111-1111-111111111111")).send(mcqBody())).status).toBe(404);
    expect((await auth(api().get("/api/questions/not-a-uuid"))).status).toBe(404);
  });
});

describe("GET /api/questions", () => {
  beforeEach(async () => {
    await auth(api().post("/api/questions")).send(mcqBody());
    await auth(api().post("/api/questions")).send(mcqBody({ stem_en: 'What does printf("%d", 5) print?', options: [{ text_en: "5", is_correct: true }, { text_en: "%d", is_correct: false }] }));
    await auth(api().post("/api/questions")).send(mcqBody({ subject_id: await insertSubject("NET"), stem_en: "Port of HTTPS?", options: [{ text_en: "443", is_correct: true }, { text_en: "80", is_correct: false }] }));
  });

  it("filters by subject and paginates", async () => {
    const res = await auth(api().get(`/api/questions?subject_id=${subjectId}&pageSize=1&page=2`));
    expect(res.body).toMatchObject({ total: 2, page: 2, pageSize: 1 });
    expect(res.body.items).toHaveLength(1);
  });

  it("treats % and _ in the search text literally", async () => {
    const res = await auth(api().get(`/api/questions?q=${encodeURIComponent("%d")}`));
    expect(res.body.items.map((i: { stem_en: string }) => i.stem_en)).toEqual(['What does printf("%d", 5) print?']);
    const none = await auth(api().get(`/api/questions?q=${encodeURIComponent("_")}`));
    expect(none.body.total).toBe(0);
  });
});

describe("publishing and deleting", () => {
  it("bulk-publishes and unpublishes", async () => {
    const a = (await auth(api().post("/api/questions")).send(mcqBody())).body.id;
    const res = await auth(api().post("/api/questions/bulk-publish")).send({ ids: [a], published: true });
    expect(res.body).toEqual({ updated: 1 });
    expect((await auth(api().get(`/api/questions/${a}`))).body.is_published).toBe(true);
  });

  it("deletes an unused question", async () => {
    const id = (await auth(api().post("/api/questions")).send(mcqBody())).body.id;
    expect((await auth(api().delete(`/api/questions/${id}`))).status).toBe(200);
    expect((await pool.query("SELECT 1 FROM questions WHERE id = $1", [id])).rowCount).toBe(0);
  });

  it("refuses to delete a question used in a mock test or answered by a candidate", async () => {
    const inMock = (await auth(api().post("/api/questions")).send(mcqBody())).body.id;
    await pool.query("INSERT INTO mock_test_questions (mock_test_id, question_id, position) VALUES ($1, $2, 1)", [await insertMockTest(), inMock]);
    expect((await auth(api().delete(`/api/questions/${inMock}`))).body.code).toBe("in_mock_test");

    const answered = (await auth(api().post("/api/questions")).send(mcqBody({ stem_en: "Another?" }))).body.id;
    const attempt = await pool.query("INSERT INTO attempts (candidate_id, mode) VALUES ($1, 'practice') RETURNING id", [await insertCandidate()]);
    await pool.query("INSERT INTO attempt_questions (attempt_id, question_id, position, option_order) VALUES ($1, $2, 1, '{1,2,3,4}')", [attempt.rows[0].id, answered]);
    const res = await auth(api().delete(`/api/questions/${answered}`));
    expect(res.status).toBe(409);
    expect(res.body.code).toBe("has_attempts");
  });
});
