import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { clearSiteCache } from "../src/routes/site";
import { slugify } from "../src/routes/adminSite";
import { clearSettingsCache } from "../src/services/siteSettings";
import { candidateToken, createAdmin } from "./helpers/auth";
import { insertCandidate, insertMcq, insertSubject, resetDb } from "./helpers/db";

const app = createApp();
beforeEach(async () => { await resetDb(); clearSiteCache(); clearSettingsCache(); });

async function admin(role: "admin" | "editor" = "admin") {
  const user = await createAdmin(role);
  const auth = `Bearer ${user.token}`;
  return {
    get: (url: string) => request(app).get(url).set("Authorization", auth),
    post: (url: string, body: object = {}) => request(app).post(url).set("Authorization", auth).send(body),
    put: (url: string, body: object) => request(app).put(url).set("Authorization", auth).send(body),
    del: (url: string) => request(app).delete(url).set("Authorization", auth),
  };
}
async function candidate(email = `c${Math.random()}@example.com`) {
  const id = await insertCandidate(email);
  return { id, auth: `Bearer ${candidateToken(id, email)}` };
}
async function bank(n: number) {
  const subject = await insertSubject();
  const ids: string[] = [];
  for (let i = 0; i < n; i++) ids.push(await insertMcq(subject, 1));
  await pool.query("UPDATE questions SET is_published = true, explanation_en = 'Because.' WHERE id = ANY($1::uuid[])", [ids]);
  return ids;
}
const correctOf = async (qid: string, correct = true) =>
  (await pool.query("SELECT id FROM question_options WHERE question_id = $1 AND is_correct = $2 ORDER BY position LIMIT 1", [qid, correct])).rows[0].id as string;

describe("notices and Word files", () => {
  it("accepts the notice type and DOCX uploads", async () => {
    const a = await admin("editor");
    const notice = await a.post("/api/resources", { category: "notice", title_en: "49th BCS syllabus", link_url: "https://bpsc.gov.bd/", is_published: true });
    expect(notice.status).toBe(201);
    const up = await request(app).post("/api/files/upload").set("Authorization", `Bearer ${(await createAdmin()).token}`)
      .attach("file", Buffer.from("PK\u0003\u0004"), "form.docx");
    expect(up.status).toBe(201);
    await a.del(`/api/files/${up.body.id}`);
  });
});

describe("site settings", () => {
  it("lets an admin (not an editor) save contact and payment details, shown on site-info", async () => {
    const editor = await admin("editor");
    expect((await editor.put("/api/admin-settings/contact", { email: "a@b.co" })).status).toBe(403);
    const a = await admin();
    const bad = await a.put("/api/admin-settings/contact", { email: "nope", facebook: "javascript:x" });
    expect(bad.body.fields).toEqual({ "contact.email": "email_invalid", "contact.facebook": "link_invalid" });
    await a.put("/api/admin-settings/contact", { email: "help@studypath.example", phone: "+880 1700-000000", whatsapp: "+8801700000000" }).expect(200);
    await a.put("/api/admin-settings/payment", { bkash: "01700000000" }).expect(200);
    const info = await request(app).get("/api/site/site-info");
    expect(info.body.contact).toMatchObject({ email: "help@studypath.example", whatsapp: "8801700000000" });
    expect(info.body.payment).toEqual({ bkash: "01700000000", nagad: "", rocket: "" });
  });
});

describe("articles", () => {
  it("slugifies titles", () => {
    expect(slugify("BPSC Non-Cadre Circular 2025!")).toBe("bpsc-non-cadre-circular-2025");
    expect(slugify("বাংলা")).toMatch(/^article-/);
  });

  it("publishes an article that visitors can list and read without an account", async () => {
    const a = await admin("editor");
    const draft = await a.post("/api/articles", { category: "guideline", title_en: "BPSC Non-Cadre 2025: IT posts", body_en: "<p>Grade 9 posts</p>" });
    expect(draft.status).toBe(201);
    expect(draft.body).toMatchObject({ slug: "bpsc-non-cadre-2025-it-posts", is_published: false, published_at: null });
    expect((await request(app).get("/api/site/articles")).body.total).toBe(0);
    expect((await request(app).get(`/api/site/articles/${draft.body.slug}`)).status).toBe(404);

    const pub = await a.put(`/api/articles/${draft.body.id}`, { ...draft.body, is_published: true, tags: ["BPSC", "BPSC", "Non-cadre"] });
    expect(pub.body.published_at).not.toBeNull();
    expect(pub.body.tags).toEqual(["BPSC", "Non-cadre"]);
    const list = await request(app).get("/api/site/articles?category=guideline&q=non-cadre");
    expect(list.body.items).toHaveLength(1);
    expect(list.body.items[0]).not.toHaveProperty("body_en");
    const read = await request(app).get(`/api/site/articles/${draft.body.slug}`);
    expect(read.body).toMatchObject({ body_en: "<p>Grade 9 posts</p>", views: 1 });

    const dup = await a.post("/api/articles", { category: "news", title_en: "Other", slug: draft.body.slug, body_en: "x" });
    expect(dup.body.fields).toEqual({ slug: "slug_taken" });
  });
});

describe("free sets", () => {
  async function freeSet(ids: string[]) {
    const a = await admin("editor");
    const bad = await a.post("/api/mock-tests", { kind: "mock", mode: "random", title_en: "R", duration_minutes: 10, marks_per_question: 1, negative_mark: 0, sections: [], is_free: true });
    expect(bad.body.fields.is_free).toBe("free_needs_fixed");
    const t = await a.post("/api/mock-tests", {
      kind: "mock", mode: "fixed", title_en: "Free set 1", duration_minutes: 10, marks_per_question: 1, negative_mark: 0.25, question_ids: ids, is_free: true,
    });
    expect(t.status).toBe(201);
    await a.post(`/api/mock-tests/${t.body.id}/publish`, { published: true }).expect(200);
    return t.body.id as string;
  }

  it("shows answers, marks a visitor's attempt by its ticket and ranks the best try per participant", async () => {
    const ids = await bank(4);
    const id = await freeSet(ids);
    const list = await request(app).get("/api/site/free-sets");
    expect(list.body).toEqual([expect.objectContaining({ id, questionCount: 4, participants: 0 })]);
    const answers = await request(app).get(`/api/site/free-sets/${id}/answers`);
    expect(answers.body.questions[0].options.some((o: { isCorrect: boolean }) => o.isCorrect)).toBe(true);

    const start = await request(app).post(`/api/site/free-sets/${id}/start`);
    expect(JSON.stringify(start.body.questions)).not.toContain("isCorrect");
    const submit = (name: string) => request(app).post(`/api/site/free-sets/${id}/submit`).send({ name, ticket: start.body.ticket, answers: [] });
    const send = async (name: string, right: number, wrongOne = false) => request(app).post(`/api/site/free-sets/${id}/submit`).send({
      name, ticket: start.body.ticket,
      answers: [
        ...(await Promise.all(ids.slice(0, right).map(async (q) => ({ questionId: q, optionId: await correctOf(q) })))),
        ...(wrongOne ? [{ questionId: ids[3], optionId: await correctOf(ids[3], false) }] : []),
      ],
    });
    expect((await submit("x")).body.fields).toEqual({ name: "name_length" });
    expect((await request(app).post(`/api/site/free-sets/${id}/submit`).send({ name: "Rahim", ticket: "forged", answers: [] })).body.code).toBe("ticket_invalid");

    const first = await send("Rahim", 2, true);
    expect(first.status).toBe(201);
    expect(first.body).toMatchObject({ correct: 2, wrong: 1, skipped: 1, score: 1.75, maxScore: 4, rank: 1, participants: 1 });
    await send("Karim", 3);
    await send("Rahim", 3); // Rahim's better try replaces his first on the merit list
    const merit = await request(app).get(`/api/site/free-sets/${id}/merit`);
    expect(merit.body.entries.map((e: { name: string; score: number }) => [e.name, e.score])).toEqual([["Karim", 3], ["Rahim", 3]]);
    expect(merit.body.participants).toBe(2);
  });
});

describe("plans, payments and the paywall", () => {
  it("takes a bKash payment request, lets an admin approve it, and gates mock tests until then", async () => {
    const a = await admin();
    const plan = await a.post("/api/plans", { name_en: "Full access", months: 3, price_bdt: 300, features_en: ["All mock tests"] });
    expect(plan.status).toBe(201);
    expect((await request(app).get("/api/site/plans")).body).toHaveLength(1);
    await a.put("/api/admin-settings/payment", { bkash: "01700000000" }).expect(200);

    // a mock test exists; with the paywall on, starting it needs a plan
    const ids = await bank(2);
    const t = await a.post("/api/mock-tests", { kind: "mock", mode: "fixed", title_en: "Paid mock", duration_minutes: 10, marks_per_question: 1, negative_mark: 0, question_ids: ids });
    await a.post(`/api/mock-tests/${t.body.id}/publish`, { published: true }).expect(200);
    await a.put("/api/admin-settings/paywall", { enabled: true, tests: true, practice: false }).expect(200);
    const c = await candidate();
    const blocked = await request(app).post(`/api/candidate/exams/${t.body.id}/start`).set("Authorization", c.auth);
    expect(blocked.status).toBe(402);
    expect(blocked.body.code).toBe("subscription_required");

    const bad = await request(app).post("/api/candidate/billing/payments").set("Authorization", c.auth)
      .send({ planId: plan.body.id, method: "nagad", senderNumber: "123", trxId: "!" });
    expect(bad.body.fields).toEqual({ senderNumber: "phone_invalid", trxId: "trx_invalid" });
    const noNagad = await request(app).post("/api/candidate/billing/payments").set("Authorization", c.auth)
      .send({ planId: plan.body.id, method: "nagad", senderNumber: "01711111111", trxId: "ABC12345" });
    expect(noNagad.body.fields).toEqual({ method: "method_unavailable" });
    const pay = await request(app).post("/api/candidate/billing/payments").set("Authorization", c.auth)
      .send({ planId: plan.body.id, method: "bkash", senderNumber: "01711-111111", trxId: "abc12345" });
    expect(pay.status).toBe(201);
    expect(pay.body).toMatchObject({ status: "pending", amount_bdt: 300, months: 3, trx_id: "ABC12345" });
    const reuse = await request(app).post("/api/candidate/billing/payments").set("Authorization", (await candidate()).auth)
      .send({ planId: plan.body.id, method: "bkash", senderNumber: "01711111111", trxId: "ABC12345" });
    expect(reuse.body.fields).toEqual({ trxId: "trx_used" });

    const queue = await a.get("/api/payments?status=pending");
    expect(queue.body.items).toHaveLength(1);
    expect(queue.body.counts).toEqual({ pending: 1 });
    expect((await a.post(`/api/payments/${pay.body.id}/reject`, {})).body.fields).toEqual({ note: "required" });
    const approved = await a.post(`/api/payments/${pay.body.id}/approve`, {});
    expect(approved.body.status).toBe("approved");
    expect((await a.post(`/api/payments/${pay.body.id}/approve`, {})).status).toBe(409);

    const me = await request(app).get("/api/candidate/billing").set("Authorization", c.auth);
    expect(me.body.active).toBe(true);
    const until = new Date(me.body.subscriptionUntil).getTime();
    expect(until).toBeGreaterThan(Date.now() + 85 * 86_400_000);
    expect((await request(app).post(`/api/candidate/exams/${t.body.id}/start`).set("Authorization", c.auth)).status).toBe(201);
  });

  it("gates the question bank and practice when that part is paywalled, and leaves quizzes, free sets and preview admins open", async () => {
    const a = await admin();
    const ids = await bank(6);
    const subject = (await pool.query("SELECT subject_id FROM questions WHERE id = $1", [ids[0]])).rows[0].subject_id;
    const c = await candidate();
    const practice = () => request(app).post("/api/candidate/practice/sessions").set("Authorization", c.auth).send({ subjectId: subject, count: 5 });
    const bankList = () => request(app).get("/api/candidate/bank/questions").set("Authorization", c.auth);

    // Off by default: everything open.
    expect((await practice()).status).toBe(201);
    expect((await bankList()).status).toBe(200);

    // Only tests paywalled: practice still open.
    await a.put("/api/admin-settings/paywall", { enabled: true, tests: true, practice: false }).expect(200);
    expect((await practice()).status).toBe(201);

    await a.put("/api/admin-settings/paywall", { enabled: true, tests: false, practice: true }).expect(200);
    const blocked = await practice();
    expect(blocked.status).toBe(402);
    expect(blocked.body).toMatchObject({ code: "subscription_required", area: "practice" });
    expect((await bankList()).status).toBe(402);
    const preview = await candidate(`preview-${Date.now()}@admin-preview.studypath.invalid`);
    expect((await request(app).get("/api/candidate/bank/questions").set("Authorization", preview.auth)).status).toBe(200);

    // A quiz never needs a plan, even with tests paywalled.
    await a.put("/api/admin-settings/paywall", { enabled: true, tests: true, practice: true }).expect(200);
    const quiz = await a.post("/api/mock-tests", { kind: "quiz", mode: "fixed", title_en: "Quiz", duration_minutes: 5, marks_per_question: 1, negative_mark: 0, question_ids: ids });
    expect(quiz.status).toBe(201);
    await a.post(`/api/mock-tests/${quiz.body.id}/publish`, { published: true }).expect(200);
    expect((await request(app).post(`/api/candidate/exams/${quiz.body.id}/start`).set("Authorization", c.auth)).status).toBe(201);

    // An expired plan counts as no plan; a current one opens practice again.
    await pool.query("UPDATE candidates SET subscription_until = now() - interval '1 day' WHERE id = $1", [c.id]);
    expect((await practice()).status).toBe(402);
    await pool.query("UPDATE candidates SET subscription_until = now() + interval '30 days' WHERE id = $1", [c.id]);
    expect((await practice()).status).not.toBe(402);
    expect((await bankList()).status).toBe(200);
  });
});