import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { resetDb, insertSubject, insertMcq, insertTopic, insertExamTag } from "./helpers/db";
import { createAdmin, candidateToken } from "./helpers/auth";

let token: string;
const api = () => request(createApp());
const auth = (r: request.Test) => r.set("Authorization", `Bearer ${token}`);

beforeEach(async () => {
  await resetDb();
  token = (await createAdmin()).token;
});

describe("/api/subjects", () => {
  it("is admin-only", async () => {
    expect((await api().get("/api/subjects")).status).toBe(401);
    expect((await api().get("/api/subjects").set("Authorization", `Bearer ${candidateToken()}`)).status).toBe(403);
  });

  it("creates a subject with an upper-case code and lists it with counts", async () => {
    const created = await auth(api().post("/api/subjects")).send({ code: "net", name_en: "Networking", name_bn: "নেটওয়ার্কিং", category: "technical" });
    expect(created.status).toBe(201);
    expect(created.body).toMatchObject({ code: "NET", name_bn: "নেটওয়ার্কিং" });
    await insertMcq(created.body.id);
    const list = await auth(api().get("/api/subjects"));
    expect(list.body).toEqual([expect.objectContaining({ code: "NET", topic_count: 0, question_count: 1, published_count: 0 })]);
  });

  it("rejects a bad code, a bad category and a duplicate code", async () => {
    const bad = await auth(api().post("/api/subjects")).send({ code: "1x", name_en: "", category: "other" });
    expect(bad.status).toBe(400);
    expect(bad.body.fields).toEqual({ code: "code_invalid", name_en: "required", category: "category_invalid" });
    await auth(api().post("/api/subjects")).send({ code: "OS", name_en: "Operating System", category: "technical" });
    const dup = await auth(api().post("/api/subjects")).send({ code: "os", name_en: "Again", category: "technical" });
    expect(dup.status).toBe(409);
    expect(dup.body.code).toBe("code_taken");
  });

  it("refuses to delete a subject that has questions", async () => {
    const id = await insertSubject("DBMS");
    await insertMcq(id);
    const res = await auth(api().delete(`/api/subjects/${id}`));
    expect(res.status).toBe(409);
    expect(res.body.code).toBe("in_use");
  });

  it("updates names but never the code", async () => {
    const id = await insertSubject("DBMS");
    const res = await auth(api().put(`/api/subjects/${id}`)).send({ code: "XX", name_en: "Database Systems", category: "technical" });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ code: "DBMS", name_en: "Database Systems" });
  });
});

describe("/api/topics", () => {
  it("creates, lists by subject, and deletes topics", async () => {
    const subjectId = await insertSubject("DBMS");
    const created = await auth(api().post("/api/topics")).send({ subject_id: subjectId, name_en: "Transactions", name_bn: "ট্রানজ্যাকশন" });
    expect(created.status).toBe(201);
    const list = await auth(api().get(`/api/topics?subject_id=${subjectId}`));
    expect(list.body.map((t: { name_en: string }) => t.name_en)).toEqual(["Transactions"]);
    expect((await auth(api().delete(`/api/topics/${created.body.id}`))).status).toBe(200);
  });

  it("rejects an unknown subject", async () => {
    const res = await auth(api().post("/api/topics")).send({ subject_id: "11111111-1111-1111-1111-111111111111", name_en: "X" });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ subject_id: "subject_unknown" });
  });
});

describe("/api/exam-tags", () => {
  it("creates a tag and validates the year", async () => {
    const ok = await auth(api().post("/api/exam-tags")).send({ organization: "BPSC", post_en: "Assistant Programmer", year: 2023 });
    expect(ok.status).toBe(201);
    const bad = await auth(api().post("/api/exam-tags")).send({ organization: "BPSC", post_en: "AP", year: 1800 });
    expect(bad.body.fields).toEqual({ year: "year_invalid" });
  });

  it("refuses to delete a tag that questions use", async () => {
    const tagId = await insertExamTag();
    const q = await insertMcq(await insertSubject());
    await pool.query("INSERT INTO question_exam_tags (question_id, exam_tag_id) VALUES ($1, $2)", [q, tagId]);
    const res = await auth(api().delete(`/api/exam-tags/${tagId}`));
    expect(res.status).toBe(409);
    expect(res.body.code).toBe("in_use");
  });
});

describe("/api/job-posts", () => {
  it("creates a post and saves weights that add up to 100%", async () => {
    const [a, b] = [await insertSubject("NET"), await insertSubject("DBMS")];
    const post = await auth(api().post("/api/job-posts")).send({ organization: "BPSC", title_en: "Assistant Programmer" });
    expect(post.status).toBe(201);
    const bad = await auth(api().put(`/api/job-posts/${post.body.id}/subjects`)).send({ weights: [{ subject_id: a, weight: 0.5 }, { subject_id: b, weight: 0.3 }] });
    expect(bad.status).toBe(400);
    expect(bad.body.fields).toEqual({ weights: "weights_sum" });
    const good = await auth(api().put(`/api/job-posts/${post.body.id}/subjects`)).send({ weights: [{ subject_id: a, weight: 0.6 }, { subject_id: b, weight: 0.4 }] });
    expect(good.status).toBe(200);
    expect(good.body.weights.map((w: { code: string; weight: number }) => [w.code, w.weight])).toEqual([["NET", 0.6], ["DBMS", 0.4]]);
  });
});

describe("public taxonomy", () => {
  it("lists subjects and only published job posts", async () => {
    const subjectId = await insertSubject("NET");
    await insertTopic(subjectId);
    await pool.query("INSERT INTO job_posts (organization, title_en, is_published) VALUES ('BPSC', 'Published post', true), ('BPSC', 'Draft post', false)");
    const subjects = await api().get("/api/public/subjects");
    expect(subjects.body).toEqual([expect.objectContaining({ code: "NET", published_count: 0 })]);
    const posts = await api().get("/api/public/job-posts");
    expect(posts.body.map((p: { title_en: string }) => p.title_en)).toEqual(["Published post"]);
    const draftId = (await pool.query("SELECT id FROM job_posts WHERE title_en = 'Draft post'")).rows[0].id;
    expect((await api().get(`/api/public/job-posts/${draftId}`)).status).toBe(404);
    expect((await api().get("/api/public/job-posts/not-a-uuid")).status).toBe(404);
  });
});
