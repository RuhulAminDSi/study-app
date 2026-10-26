import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { resetDb } from "./helpers/db";
import { createAdmin } from "./helpers/auth";

beforeEach(resetDb);

async function admin() {
  const token = (await createAdmin()).token;
  const auth = (r: request.Test) => r.set("Authorization", `Bearer ${token}`);
  return {
    post: (url: string, body: object) => auth(request(createApp()).post(url)).send(body),
    put: (url: string, body: object) => auth(request(createApp()).put(url)).send(body),
    get: (url: string) => auth(request(createApp()).get(url)),
  };
}

describe("POST /api/chapters", () => {
  it("creates the chapter's side menu too, so lessons can be added to it straight away", async () => {
    const a = await admin();
    const chapter = await a.post("/api/chapters", { chapter_number: 20, title_en: "Compiler Design", title_bn: "কম্পাইলার ডিজাইন" });
    expect(chapter.status).toBe(201);
    const { rows } = await pool.query("SELECT label_en, label_bn, is_active FROM side_menus WHERE chapter_id = $1", [chapter.body.id]);
    expect(rows).toEqual([{ label_en: "Compiler Design", label_bn: "কম্পাইলার ডিজাইন", is_active: true }]);
  });

  it("answers a duplicate chapter number with 409 instead of failing", async () => {
    const a = await admin();
    await a.post("/api/chapters", { chapter_number: 21, title_en: "One" });
    const dup = await a.post("/api/chapters", { chapter_number: 21, title_en: "Two" });
    expect(dup.status).toBe(409);
    expect(dup.body.code).toBe("number_taken");
  });
});

describe("PUT /api/lessons/:id", () => {
  async function lesson() {
    const a = await admin();
    const chapter = await a.post("/api/chapters", { chapter_number: 22, title_en: "Networks" });
    const menu = (await pool.query("SELECT id FROM side_menus WHERE chapter_id = $1", [chapter.body.id])).rows[0];
    const created = await a.post("/api/lessons", { side_menu_id: menu.id, title_en: "OSI model", title_bn: "ওএসআই মডেল", level: "Beginner" });
    expect(created.status).toBe(201);
    await pool.query(
      "UPDATE lessons SET content_en = '<p>body</p>', takeaways_en = ARRAY['Seven layers'], takeaways_bn = ARRAY['সাতটি স্তর'] WHERE id = $1",
      [created.body.id],
    );
    return { a, id: created.body.id as string };
  }

  it("changes only the fields it is sent (a title save keeps takeaways and content)", async () => {
    const { a, id } = await lesson();
    const res = await a.put(`/api/lessons/${id}`, { title_en: "The OSI model" });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      title_en: "The OSI model", title_bn: "ওএসআই মডেল", content_en: "<p>body</p>",
      takeaways_en: ["Seven layers"], takeaways_bn: ["সাতটি স্তর"],
    });
  });

  it("clears an optional field sent as null", async () => {
    const { a, id } = await lesson();
    const res = await a.put(`/api/lessons/${id}`, { title_bn: null });
    expect(res.body.title_bn).toBeNull();
    expect(res.body.title_en).toBe("OSI model");
  });

  it("returns 404 for an unknown lesson", async () => {
    const a = await admin();
    expect((await a.put("/api/lessons/00000000-0000-0000-0000-0000000000aa", { title_en: "x" })).status).toBe(404);
  });
});
