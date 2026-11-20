import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { clearSiteCache } from "../src/routes/site";
import { publicName } from "../src/routes/candidateExams";
import { candidateToken, createAdmin } from "./helpers/auth";
import { insertCandidate, insertMcq, insertSubject, resetDb } from "./helpers/db";

const app = createApp();
beforeEach(async () => { await resetDb(); clearSiteCache(); });

async function bank(subjectId: string, n: number) {
  const ids: string[] = [];
  for (let i = 0; i < n; i++) ids.push(await insertMcq(subjectId, 1));
  await pool.query("UPDATE questions SET is_published = true, explanation_en = 'Because.' WHERE id = ANY($1::uuid[])", [ids]);
  return ids;
}
const correctOf = async (qid: string, correct = true) =>
  (await pool.query("SELECT id FROM question_options WHERE question_id = $1 AND is_correct = $2 ORDER BY position LIMIT 1", [qid, correct])).rows[0].id as string;

async function admin() {
  const user = await createAdmin("editor");
  const auth = `Bearer ${user.token}`;
  return {
    post: (url: string, body: object) => request(app).post(url).set("Authorization", auth).send(body),
  };
}

describe("site info (no sign-in)", () => {
  it("counts only published content and open circulars, and gives the contact number", async () => {
    const subject = await insertSubject();
    await bank(subject, 3);
    await insertMcq(subject); // draft
    const a = await admin();
    await a.post("/api/resources", { category: "circular", title_en: "Open", apply_url: "https://x.example/", ends_on: "2999-01-01", is_published: true });
    await a.post("/api/resources", { category: "circular", title_en: "Closed", apply_url: "https://x.example/", starts_on: "2020-01-01", ends_on: "2020-01-02", is_published: true });
    await a.post("/api/resources", { category: "suggestion", title_en: "Tips", link_url: "https://x.example/", is_published: true });

    const res = await request(app).get("/api/site/site-info");
    expect(res.status).toBe(200);
    expect(res.body.stats).toMatchObject({ mcq: 3, written: 0, openCirculars: 1, resources: 1 });
    expect(res.body.contact).toHaveProperty("whatsapp");
  });

  it("lists open circulars without a sign-in", async () => {
    const a = await admin();
    await a.post("/api/resources", { category: "circular", title_en: "Later", apply_url: "https://x.example/", ends_on: "2999-05-01", is_published: true });
    await a.post("/api/resources", { category: "circular", title_en: "Sooner", apply_url: "https://x.example/", ends_on: "2999-01-01", is_published: true });
    await a.post("/api/resources", { category: "circular", title_en: "Draft", apply_url: "https://x.example/", is_published: false });
    const res = await request(app).get("/api/site/open-circulars");
    expect(res.body.map((r: { title_en: string }) => r.title_en)).toEqual(["Sooner", "Later"]);
  });
});

describe("free sample test (no sign-in)", () => {
  it("serves questions without answers and marks them", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 6);
    const set = await request(app).get("/api/site/free-test?count=5");
    expect(set.status).toBe(200);
    expect(set.body.questions).toHaveLength(5);
    expect(JSON.stringify(set.body)).not.toContain("is_correct");
    expect(JSON.stringify(set.body)).not.toContain("isCorrect");

    const subjects = await request(app).get("/api/site/free-test/subjects");
    expect(subjects.body).toEqual([expect.objectContaining({ code: "DBMS", questionCount: 6 })]);

    const check = await request(app).post("/api/site/free-test/check").send({
      answers: [
        { questionId: ids[0], optionId: await correctOf(ids[0]) },
        { questionId: ids[1], optionId: await correctOf(ids[1], false) },
        { questionId: ids[2], optionId: null },
      ],
    });
    expect(check.body).toMatchObject({ total: 3, correct: 1, wrong: 1, skipped: 1 });
    expect(check.body.results.find((r: { questionId: string }) => r.questionId === ids[1])).toMatchObject({ isCorrect: false, correctOptionId: await correctOf(ids[1]) });

    expect((await request(app).post("/api/site/free-test/check").send({ answers: [] })).status).toBe(400);
  });

  it("never serves a question from a test whose answers are held back", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 5);
    const a = await admin();
    const t = await a.post("/api/mock-tests", {
      kind: "mock", mode: "fixed", title_en: "Held", duration_minutes: 10, marks_per_question: 1, negative_mark: 0,
      question_ids: [ids[0]], result_release: "never",
    });
    expect(t.status).toBe(201);
    const set = await request(app).get("/api/site/free-test?count=25");
    expect(set.body.questions.map((q: { id: string }) => q.id)).not.toContain(ids[0]);
    const check = await request(app).post("/api/site/free-test/check").send({ answers: [{ questionId: ids[0], optionId: null }] });
    expect(check.body.total).toBe(0);
  });
});

describe("leaderboard", () => {
  it("shortens names", () => {
    expect(publicName("Rahim Uddin Ahmed")).toBe("Rahim A.");
    expect(publicName("Karim")).toBe("Karim");
  });

  it("ranks each candidate's first finished attempt and includes your own place", async () => {
    const subject = await insertSubject();
    const ids = await bank(subject, 2);
    const a = await admin();
    const created = await a.post("/api/mock-tests", {
      kind: "mock", mode: "fixed", title_en: "AP mock", duration_minutes: 10, marks_per_question: 1, negative_mark: 0, question_ids: ids,
    });
    await a.post(`/api/mock-tests/${created.body.id}/publish`, { published: true });
    const testId = created.body.id as string;

    const take = async (name: string, email: string, right: number) => {
      const cid = await insertCandidate(email);
      await pool.query("UPDATE candidates SET full_name = $2 WHERE id = $1", [cid, name]);
      const auth = `Bearer ${candidateToken(cid, email)}`;
      const { attemptId } = (await request(app).post(`/api/candidate/exams/${testId}/start`).set("Authorization", auth)).body;
      for (let i = 0; i < right; i++) {
        await request(app).put(`/api/candidate/attempts/${attemptId}/answers/${ids[i]}`).set("Authorization", auth).send({ optionId: await correctOf(ids[i]) });
      }
      await request(app).post(`/api/candidate/attempts/${attemptId}/submit`).set("Authorization", auth);
      return auth;
    };
    await take("Rahim Uddin", "r@example.com", 2);
    const me = await take("Karim Hasan", "k@example.com", 1);

    const res = await request(app).get(`/api/candidate/exams/${testId}/leaderboard`).set("Authorization", me);
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(2);
    expect(res.body.top.map((e: { name: string; rank: number }) => [e.rank, e.name])).toEqual([[1, "Rahim U."], [2, "Karim H."]]);
    expect(res.body.me).toMatchObject({ rank: 2, score: 1, isMe: true });
    expect(JSON.stringify(res.body)).not.toContain("@example.com");
  });
});
