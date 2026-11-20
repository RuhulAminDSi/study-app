import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { insertCandidate, resetDb } from "./helpers/db";
import { candidateToken, createAdmin, legacyAdminToken } from "./helpers/auth";

const CONTENT_ENDPOINTS = ["/api/public/chapters/published", "/api/public/menus", "/api/public/lessons/published"];

describe("study content requires a signed-in reader", () => {
  beforeEach(resetDb);

  it.each(CONTENT_ENDPOINTS)("%s refuses an anonymous request", async (url) => {
    const res = await request(createApp()).get(url);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("sign_in_required");
  });

  it.each(CONTENT_ENDPOINTS)("%s refuses a token without a kind", async (url) => {
    const res = await request(createApp()).get(url).set("Authorization", `Bearer ${legacyAdminToken()}`);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("sign_in_required");
  });

  it.each(CONTENT_ENDPOINTS)("%s serves a candidate", async (url) => {
    const id = await insertCandidate();
    const res = await request(createApp()).get(url).set("Authorization", `Bearer ${candidateToken(id)}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("refuses a candidate token whose account no longer exists", async () => {
    const res = await request(createApp()).get("/api/public/menus").set("Authorization", `Bearer ${candidateToken()}`);
    expect(res.status).toBe(401);
    expect(res.body.code).toBe("account_inactive");
  });

  it("serves an admin, who previews the portal with their own token", async () => {
    const admin = await createAdmin();
    const res = await request(createApp()).get("/api/public/lessons/published").set("Authorization", `Bearer ${admin.token}`);
    expect(res.status).toBe(200);
  });

  it("guards single lessons and chapters too", async () => {
    const id = "00000000-0000-0000-0000-0000000000aa";
    expect((await request(createApp()).get(`/api/public/lessons/${id}`)).status).toBe(401);
    expect((await request(createApp()).get(`/api/public/chapters/${id}`)).status).toBe(401);
    expect((await request(createApp()).get(`/api/public/lessons/by-menu/${id}`)).status).toBe(401);
  });

  it("keeps the subject and job-post lists public (the sign-up form can use them)", async () => {
    expect((await request(createApp()).get("/api/public/subjects")).status).toBe(200);
    expect((await request(createApp()).get("/api/public/job-posts")).status).toBe(200);
  });
});

describe("study content shows only what is published", () => {
  beforeEach(resetDb);

  /** A chapter with one section and one lesson, each published/active or not. */
  async function lessonIn(chapterNumber: number, chapterPublished: boolean, menuActive: boolean, lessonPublished: boolean) {
    const ch = await pool.query(
      "INSERT INTO chapters (chapter_number, title_en, level, is_published) VALUES ($1, 'Ch', 'Beginner', $2) RETURNING id",
      [chapterNumber, chapterPublished],
    );
    const menu = await pool.query("INSERT INTO side_menus (chapter_id, label_en, is_active) VALUES ($1, 'Menu', $2) RETURNING id", [ch.rows[0].id, menuActive]);
    const lesson = await pool.query(
      "INSERT INTO lessons (side_menu_id, lesson_number, title_en, content_en, level, is_published) VALUES ($1, 1, 'Lesson', 'Body', 'Beginner', $2) RETURNING id",
      [menu.rows[0].id, lessonPublished],
    );
    return { chapter: ch.rows[0].id as string, menu: menu.rows[0].id as string, lesson: lesson.rows[0].id as string };
  }

  it("hides lessons of unpublished chapters, inactive sections and drafts from candidates", async () => {
    const live = await lessonIn(1, true, true, true);
    const draftChapter = await lessonIn(2, false, true, true);
    const hiddenMenu = await lessonIn(3, true, false, true);
    const draftLesson = await lessonIn(4, true, true, false);
    const auth = `Bearer ${candidateToken(await insertCandidate())}`;
    const app = createApp();

    const all = await request(app).get("/api/public/lessons/published").set("Authorization", auth);
    expect(all.body.map((l: { id: string }) => l.id)).toEqual([live.lesson]);
    const menus = await request(app).get("/api/public/menus").set("Authorization", auth);
    expect(menus.body.map((m: { id: string }) => m.id).sort()).toEqual([live.menu, draftLesson.menu].sort());
    expect((await request(app).get(`/api/public/lessons/by-menu/${draftChapter.menu}`).set("Authorization", auth)).body).toEqual([]);

    for (const id of [draftChapter.lesson, hiddenMenu.lesson, draftLesson.lesson]) {
      expect((await request(app).get(`/api/public/lessons/${id}`).set("Authorization", auth)).status).toBe(404);
    }
    expect((await request(app).get(`/api/public/lessons/${live.lesson}`).set("Authorization", auth)).status).toBe(200);
    expect((await request(app).get(`/api/public/chapters/${draftChapter.chapter}`).set("Authorization", auth)).status).toBe(404);
    expect((await request(app).get("/api/public/lessons/not-a-uuid").set("Authorization", auth)).status).toBe(404);
    expect((await request(app).get("/api/public/chapters/not-a-uuid").set("Authorization", auth)).status).toBe(404);
  });

  it("lets an admin preview a draft chapter or lesson by id", async () => {
    const draft = await lessonIn(1, false, true, false);
    const admin = await createAdmin();
    const app = createApp();
    expect((await request(app).get(`/api/public/lessons/${draft.lesson}`).set("Authorization", `Bearer ${admin.token}`)).status).toBe(200);
    expect((await request(app).get(`/api/public/chapters/${draft.chapter}`).set("Authorization", `Bearer ${admin.token}`)).status).toBe(200);
  });
});
