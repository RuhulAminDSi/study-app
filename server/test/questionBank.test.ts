import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { candidateToken } from "./helpers/auth";
import { insertCandidate, insertMcq, insertMockTest, insertSubject, resetDb } from "./helpers/db";

const app = createApp();
beforeEach(resetDb);

async function written(subjectId: string, answer: string, styles: string[] = [], type = "written") {
  const { rows } = await pool.query(
    `INSERT INTO questions (subject_id, type, stem_en, model_answer_en, styles, is_published, marks, content_hash)
     VALUES ($1, $2, 'Explain normalization.', $3, $4, true, 5, md5(random()::text) || md5(random()::text)) RETURNING id`,
    [subjectId, type, answer, styles],
  );
  return rows[0].id as string;
}

async function setup() {
  const subject = await insertSubject();
  const mcq = await insertMcq(subject, 2);
  await pool.query("UPDATE questions SET is_published = true, explanation_en = 'Because.' WHERE id = $1", [mcq]);
  const draft = await insertMcq(subject, 1); // unpublished: never listed
  const short = await written(subject, "A short model answer.");
  const tagged = await written(subject, "x".repeat(900), ["definition"]);
  const long = await written(subject, "y".repeat(900));
  const code = await written(subject, "int main() {}", [], "programming");
  const id = await insertCandidate();
  return { subject, mcq, draft, short, tagged, long, code, auth: `Bearer ${candidateToken(id)}`, candidateId: id };
}

describe("question bank", () => {
  it("sorts published questions into MCQ, CQ and written, and lists them without answers", async () => {
    const s = await setup();
    const res = await request(app).get("/api/candidate/bank/questions?format=mcq").set("Authorization", s.auth);
    expect(res.status).toBe(200);
    expect(res.body.counts).toEqual({ mcq: 1, short: 2, written: 2 });
    expect(res.body.items.map((q: { id: string }) => q.id)).toEqual([s.mcq]);
    expect(JSON.stringify(res.body)).not.toMatch(/isCorrect|is_correct|explanation|model_answer|modelAnswer/i);

    const short = await request(app).get("/api/candidate/bank/questions?format=short").set("Authorization", s.auth);
    expect(short.body.items.map((q: { id: string }) => q.id).sort()).toEqual([s.short, s.tagged].sort());
    const long = await request(app).get("/api/candidate/bank/questions?format=written").set("Authorization", s.auth);
    expect(long.body.items.map((q: { id: string }) => q.id).sort()).toEqual([s.long, s.code].sort());
  });

  it("reveals an answer on request, and rejects drafts and foreign options", async () => {
    const s = await setup();
    const right = (await pool.query("SELECT id FROM question_options WHERE question_id = $1 AND is_correct", [s.mcq])).rows[0].id;
    const wrong = (await pool.query("SELECT id FROM question_options WHERE question_id = $1 AND NOT is_correct LIMIT 1", [s.mcq])).rows[0].id;
    const check = await request(app).post(`/api/candidate/bank/questions/${s.mcq}/check`).set("Authorization", s.auth).send({ optionId: wrong });
    expect(check.body).toMatchObject({ correctOptionId: right, isCorrect: false, explanationEn: "Because.", modelAnswerEn: null });
    const peek = await request(app).post(`/api/candidate/bank/questions/${s.mcq}/check`).set("Authorization", s.auth).send({});
    expect(peek.body).toMatchObject({ correctOptionId: right, isCorrect: null });
    const model = await request(app).post(`/api/candidate/bank/questions/${s.short}/check`).set("Authorization", s.auth).send({});
    expect(model.body).toMatchObject({ modelAnswerEn: "A short model answer.", correctOptionId: null });
    expect((await request(app).post(`/api/candidate/bank/questions/${s.draft}/check`).set("Authorization", s.auth).send({})).status).toBe(404);
    const foreign = await request(app).post(`/api/candidate/bank/questions/${s.short}/check`).set("Authorization", s.auth).send({ optionId: right });
    expect(foreign.status).toBe(200); // options are ignored for written questions
    const otherMcq = await insertMcq(s.subject, 1);
    await pool.query("UPDATE questions SET is_published = true WHERE id = $1", [otherMcq]);
    const bad = await request(app).post(`/api/candidate/bank/questions/${otherMcq}/check`).set("Authorization", s.auth).send({ optionId: right });
    expect(bad.body.code).toBe("option_invalid");
  });

  it("holds back answers of questions in the candidate's open or unreleased timed tests", async () => {
    const s = await setup();
    const test = await insertMockTest();
    const { rows } = await pool.query(
      `INSERT INTO attempts (candidate_id, mode, mock_test_id, deadline_at, max_score, settings)
       VALUES ($1, 'mock', $2, now() + interval '1 hour', 1, '{}') RETURNING id`,
      [s.candidateId, test],
    );
    const attempt = rows[0].id;
    await pool.query("INSERT INTO attempt_questions (attempt_id, question_id, position, option_order, marks, negative_mark) VALUES ($1, $2, 1, '{1,2,3,4}', 1, 0)", [attempt, s.mcq]);
    const check = () => request(app).post(`/api/candidate/bank/questions/${s.mcq}/check`).set("Authorization", s.auth).send({});
    const practice = () => request(app).post("/api/candidate/practice/sessions").set("Authorization", s.auth).send({ subjectId: s.subject, count: 10 });

    // Open attempt: no answer from the bank, and practice leaves the question out.
    expect((await check()).body.code).toBe("question_in_test");
    expect((await practice()).body.code).toBe("no_questions");
    const other = await insertCandidate("other@example.com");
    const theirs = await request(app).post(`/api/candidate/bank/questions/${s.mcq}/check`)
      .set("Authorization", `Bearer ${candidateToken(other, "other@example.com")}`).send({});
    expect(theirs.status).toBe(200); // only the test-taker is held back

    // Finished, but answers are released only after the test closes.
    await pool.query("UPDATE attempts SET status = 'submitted', submitted_at = now() WHERE id = $1", [attempt]);
    await pool.query("UPDATE mock_tests SET result_release = 'after_close', available_until = now() + interval '1 day' WHERE id = $1", [test]);
    expect((await check()).body.code).toBe("question_in_test");
    await pool.query("UPDATE mock_tests SET available_from = NULL, available_until = now() - interval '1 minute' WHERE id = $1", [test]);
    expect((await check()).status).toBe(200);
    expect((await practice()).status).toBe(201);
  });

  it("saves a self-marked written answer for the candidate only", async () => {
    const s = await setup();
    const save = await request(app).post(`/api/candidate/bank/questions/${s.short}/responses`).set("Authorization", s.auth)
      .send({ answerText: "Normalization removes redundancy.", selfScore: 2.5 });
    expect(save.status).toBe(201);
    expect((await request(app).post(`/api/candidate/bank/questions/${s.short}/responses`).set("Authorization", s.auth).send({ selfScore: 9 })).status).toBe(400);
    expect((await request(app).post(`/api/candidate/bank/questions/${s.mcq}/responses`).set("Authorization", s.auth).send({ selfScore: 1 })).body.code).toBe("not_written");
    const mine = await request(app).get(`/api/candidate/bank/questions/${s.short}/responses`).set("Authorization", s.auth);
    expect(mine.body).toEqual([expect.objectContaining({ answerText: "Normalization removes redundancy.", selfScore: 2.5 })]);
    const listed = await request(app).get("/api/candidate/bank/questions?format=short").set("Authorization", s.auth);
    expect(listed.body.items.find((q: { id: string }) => q.id === s.short).lastCheck).toMatchObject({ selfScore: 2.5 });

    const other = await insertCandidate("other@example.com");
    const theirs = await request(app).get(`/api/candidate/bank/questions/${s.short}/responses`).set("Authorization", `Bearer ${candidateToken(other, "other@example.com")}`);
    expect(theirs.body).toEqual([]);
  });

  it("filters by search text and pages", async () => {
    const s = await setup();
    const hit = await request(app).get("/api/candidate/bank/questions?format=short&q=normaliz&pageSize=1&page=2").set("Authorization", s.auth);
    expect(hit.body).toMatchObject({ total: 2, page: 2, pageSize: 1 });
    expect(hit.body.items).toHaveLength(1);
    const miss = await request(app).get("/api/candidate/bank/questions?format=short&q=zzz").set("Authorization", s.auth);
    expect(miss.body.total).toBe(0);
  });
});
