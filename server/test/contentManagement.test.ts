import fs from "fs";
import path from "path";
import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app";
import { config } from "../src/config";
import { pool } from "../src/db/pool";
import { insertCandidate, resetDb } from "./helpers/db";
import { candidateToken, createAdmin } from "./helpers/auth";

beforeEach(resetDb);

async function admin(role: "admin" | "editor" = "admin") {
  const user = await createAdmin(role);
  const auth = (r: request.Test) => r.set("Authorization", `Bearer ${user.token}`);
  const app = createApp();
  return {
    user,
    get: (url: string) => auth(request(app).get(url)),
    post: (url: string, body: object = {}) => auth(request(app).post(url)).send(body),
    put: (url: string, body: object) => auth(request(app).put(url)).send(body),
    patch: (url: string) => auth(request(app).patch(url)),
    del: (url: string) => auth(request(app).delete(url)),
    upload: (url: string, name: string, data: Buffer) => auth(request(app).post(url)).attach("file", data, name),
  };
}

type Admin = Awaited<ReturnType<typeof admin>>;

async function chapterWithLesson(a: Admin, number = 30) {
  const chapter = await a.post("/api/chapters", { chapter_number: number, title_en: "Networks", title_bn: "নেটওয়ার্ক", description: "Layers and protocols" });
  const menuId = (await pool.query("SELECT id FROM side_menus WHERE chapter_id = $1", [chapter.body.id])).rows[0].id as string;
  const lesson = await a.post("/api/lessons", { side_menu_id: menuId, title_en: "OSI model", level: "Beginner" });
  await pool.query("UPDATE lessons SET content_en = '<p>seed body</p>' WHERE id = $1", [lesson.body.id]);
  return { chapterId: chapter.body.id as string, menuId, lessonId: lesson.body.id as string };
}

describe("lesson revisions", () => {
  it("keeps the original and every saved version, newest first, with who saved it", async () => {
    const a = await admin();
    const { lessonId } = await chapterWithLesson(a);
    await a.put(`/api/lessons/${lessonId}`, { content_en: "<p>v2</p>" });
    await a.put(`/api/lessons/${lessonId}`, { content_en: "<p>v3</p>", takeaways_en: ["Seven layers"] });

    const res = await a.get(`/api/lessons/${lessonId}/revisions`);
    expect(res.status).toBe(200);
    expect(res.body.map((r: { content_en: string }) => r.content_en)).toEqual(["<p>v3</p>", "<p>v2</p>", "<p>seed body</p>"]);
    expect(res.body[0]).toMatchObject({ edited_by_name: a.user.username, takeaways_en: ["Seven layers"] });
    expect(res.body[2]).toMatchObject({ edited_by_name: null, note: "original" });
  });

  it("does not record a version for a publish toggle or a save that changes nothing", async () => {
    const a = await admin();
    const { lessonId } = await chapterWithLesson(a);
    await a.patch(`/api/lessons/${lessonId}/toggle-publish`);
    await a.put(`/api/lessons/${lessonId}`, { content_en: "<p>seed body</p>", is_published: true });
    expect((await a.get(`/api/lessons/${lessonId}/revisions`)).body).toEqual([]);
  });

  it("restores an earlier version and records the restore as a new version", async () => {
    const a = await admin();
    const { lessonId } = await chapterWithLesson(a);
    await a.put(`/api/lessons/${lessonId}`, { content_en: "<p>broken</p>", title_en: "OSI (bad)" });
    const original = (await a.get(`/api/lessons/${lessonId}/revisions`)).body.at(-1);

    const restored = await a.post(`/api/lessons/${lessonId}/revisions/${original.id}/restore`);
    expect(restored.status).toBe(200);
    expect(restored.body).toMatchObject({ content_en: "<p>seed body</p>", title_en: "OSI model" });
    const history = (await a.get(`/api/lessons/${lessonId}/revisions`)).body;
    expect(history[0]).toMatchObject({ content_en: "<p>seed body</p>", note: "restored" });
  });

  it("returns 404 for a revision of another lesson", async () => {
    const a = await admin();
    const first = await chapterWithLesson(a, 31);
    const second = await chapterWithLesson(a, 32);
    await a.put(`/api/lessons/${first.lessonId}`, { content_en: "<p>x</p>" });
    const rev = (await a.get(`/api/lessons/${first.lessonId}/revisions`)).body[0];
    expect((await a.post(`/api/lessons/${second.lessonId}/revisions/${rev.id}/restore`)).status).toBe(404);
  });
});

describe("PUT /api/lessons/:id validation", () => {
  it("rejects an empty English title and malformed takeaways with field codes", async () => {
    const a = await admin();
    const { lessonId } = await chapterWithLesson(a);
    const res = await a.put(`/api/lessons/${lessonId}`, { title_en: "  ", takeaways_en: "not a list" });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({ code: "validation_failed", fields: { title_en: "required", takeaways_en: "list_invalid" } });
  });

  it("refuses to overwrite the body of a lesson that shows a note set, but still allows a rename", async () => {
    const a = await admin();
    const { lessonId } = await chapterWithLesson(a);
    await pool.query(`UPDATE lessons SET content_en = '<div class="hn-viewer" data-notes="dld"></div>' WHERE id = $1`, [lessonId]);
    const blocked = await a.put(`/api/lessons/${lessonId}`, { content_en: "<p>mine now</p>" });
    expect(blocked.status).toBe(409);
    expect(blocked.body.code).toBe("managed_by_notes");
    expect((await a.put(`/api/lessons/${lessonId}`, { title_en: "Boolean algebra notes" })).status).toBe(200);
  });

  it("moves a lesson to another section as that section's last lesson", async () => {
    const a = await admin();
    const { chapterId, lessonId } = await chapterWithLesson(a);
    const section = await a.post("/api/menus", { chapter_id: chapterId, label_en: "Practice" });
    const other = await a.post("/api/lessons", { side_menu_id: section.body.id, title_en: "Warm-up" });
    expect(other.body.lesson_number).toBe(1);
    const moved = await a.put(`/api/lessons/${lessonId}`, { side_menu_id: section.body.id });
    expect(moved.status).toBe(200);
    expect(moved.body).toMatchObject({ side_menu_id: section.body.id, lesson_number: 2 });
  });
});

describe("sections (side menus)", () => {
  it("adds a section at the end of its chapter and renames it without clearing other fields", async () => {
    const a = await admin();
    const { chapterId, menuId } = await chapterWithLesson(a);
    const created = await a.post("/api/menus", { chapter_id: chapterId, label_en: "Practice", label_bn: "অনুশীলন" });
    expect(created.status).toBe(201);
    const first = (await pool.query("SELECT sort_order FROM side_menus WHERE id = $1", [menuId])).rows[0].sort_order;
    expect(created.body.sort_order).toBeGreaterThan(first);
    const renamed = await a.put(`/api/menus/${created.body.id}`, { label_en: "Practice set" });
    expect(renamed.body).toMatchObject({ label_en: "Practice set", label_bn: "অনুশীলন" });
  });

  it("requires a label", async () => {
    const a = await admin();
    const { chapterId } = await chapterWithLesson(a);
    const res = await a.post("/api/menus", { chapter_id: chapterId, label_en: "" });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ label_en: "required" });
  });

  it("will not delete a section that still holds lessons", async () => {
    const a = await admin();
    const { menuId } = await chapterWithLesson(a);
    const res = await a.del(`/api/menus/${menuId}`);
    expect(res.status).toBe(409);
    expect(res.body.code).toBe("menu_not_empty");
  });
});

describe("PUT /api/chapters/:id", () => {
  it("changes only the fields it is sent", async () => {
    const a = await admin();
    const { chapterId } = await chapterWithLesson(a);
    const res = await a.put(`/api/chapters/${chapterId}`, { title_en: "Computer Networks" });
    expect(res.body).toMatchObject({ title_en: "Computer Networks", title_bn: "নেটওয়ার্ক", description: "Layers and protocols" });
  });
});

describe("announcements", () => {
  const notice = { title_en: "BPSC AP exam on 12 Dec", title_bn: "১২ ডিসেম্বর পরীক্ষা", body_en: "Seat plans are out.", tone: "exam", is_published: true };

  it("lets an editor create, edit and delete a notice", async () => {
    const a = await admin("editor");
    const created = await a.post("/api/announcements", notice);
    expect(created.status).toBe(201);
    expect(created.body).toMatchObject({ title_en: notice.title_en, tone: "exam", is_pinned: false });
    const edited = await a.put(`/api/announcements/${created.body.id}`, { ...notice, is_pinned: true });
    expect(edited.body.is_pinned).toBe(true);
    expect((await a.get("/api/announcements")).body).toHaveLength(1);
    expect((await a.del(`/api/announcements/${created.body.id}`)).status).toBe(200);
  });

  it("validates the title, tone, link and schedule", async () => {
    const a = await admin();
    const res = await a.post("/api/announcements", {
      title_en: "", tone: "loud", link_url: "javascript:alert(1)", starts_at: "2026-10-10T00:00:00Z", ends_at: "2026-10-01T00:00:00Z",
    });
    expect(res.status).toBe(400);
    expect(res.body.fields).toEqual({ title_en: "required", tone: "tone_invalid", link_url: "link_invalid", ends_at: "ends_before_start" });
  });

  it("shows readers only published notices inside their window, pinned first", async () => {
    const a = await admin();
    const hour = 3600_000;
    const at = (offset: number) => new Date(Date.now() + offset).toISOString();
    await a.post("/api/announcements", { ...notice, title_en: "Live" });
    await a.post("/api/announcements", { ...notice, title_en: "Pinned", is_pinned: true });
    await a.post("/api/announcements", { ...notice, title_en: "Draft", is_published: false });
    await a.post("/api/announcements", { ...notice, title_en: "Future", starts_at: at(hour) });
    await a.post("/api/announcements", { ...notice, title_en: "Expired", starts_at: at(-2 * hour), ends_at: at(-hour) });

    const app = createApp();
    expect((await request(app).get("/api/public/announcements")).status).toBe(401);
    const res = await request(app).get("/api/public/announcements").set("Authorization", `Bearer ${candidateToken(await insertCandidate())}`);
    expect(res.status).toBe(200);
    expect(res.body.map((n: { title_en: string }) => n.title_en)).toEqual(["Pinned", "Live"]);
  });
});

describe("media uploads", () => {
  it("rejects SVG (it can carry scripts) with a 400 code", async () => {
    const a = await admin();
    const res = await a.upload("/api/files/upload", "logo.svg", Buffer.from("<svg onload='alert(1)'/>"));
    expect(res.status).toBe(400);
    expect(res.body.code).toBe("file_type");
  });

  it("stores an image, lists it with its URL and removes the file from disk on delete", async () => {
    fs.mkdirSync(config.uploadDir, { recursive: true });
    const a = await admin();
    const png = Buffer.from("89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c4890000000d4944415478da63f8ffff3f0005fe02fea7d6a4b10000000049454e44ae426082", "hex");
    const up = await a.upload("/api/files/upload", "diagram.png", png);
    expect(up.status).toBe(201);
    expect(up.body.url).toBe(`/uploads/${up.body.storage_path}`);
    const stored = path.resolve(config.uploadDir, up.body.storage_path);
    expect(fs.existsSync(stored)).toBe(true);
    expect((await a.get("/api/files")).body[0]).toMatchObject({ id: up.body.id, url: up.body.url });
    expect((await a.del(`/api/files/${up.body.id}`)).status).toBe(200);
    expect(fs.existsSync(stored)).toBe(false);
  });
});
