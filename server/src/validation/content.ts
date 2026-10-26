import { text } from "../services/questionContent.js";
import { UUID_RE, type Result } from "./taxonomy.js";

/** Validation for the admin content screens: lesson edits, sections (side menus) and announcements. */

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const TONES = ["info", "exam", "important"] as const;
/** Far above any real lesson; stops a runaway paste from bloating every reader's lesson download. */
const MAX_BODY = 1_000_000;

const body = (input: unknown) => (input ?? {}) as Record<string, unknown>;
const done = <T>(fields: Record<string, string>, value: T): Result<T> =>
  Object.keys(fields).length ? { ok: false, fields } : { ok: true, value };
const has = (b: Record<string, unknown>, key: string) => b[key] !== undefined;

export const LESSON_SNAPSHOT_FIELDS = [
  "title_en", "title_bn", "content_en", "content_bn", "code_en", "code_bn", "takeaways_en", "takeaways_bn",
] as const;

export type LessonUpdate = Partial<{
  side_menu_id: string; lesson_number: number; title_en: string; title_bn: string | null;
  content_en: string; content_bn: string | null; code_en: string | null; code_bn: string | null;
  takeaways_en: string[] | null; takeaways_bn: string[] | null; level: string; is_published: boolean;
}>;

/** A partial lesson update: only the keys present are checked and returned (null clears an optional field). */
export function parseLessonUpdate(input: unknown): Result<LessonUpdate> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const out: LessonUpdate = {};

  if (has(b, "title_en")) {
    const v = text(b.title_en);
    if (!v) fields.title_en = "required";
    else if (v.length > 255) fields.title_en = "too_long";
    else out.title_en = v;
  }
  if (has(b, "title_bn")) {
    const v = text(b.title_bn);
    if (v && v.length > 255) fields.title_bn = "too_long";
    else out.title_bn = v;
  }
  if (has(b, "content_en")) {
    if (typeof b.content_en !== "string") fields.content_en = "required";
    else if (b.content_en.length > MAX_BODY) fields.content_en = "too_long";
    else out.content_en = b.content_en;
  }
  for (const key of ["content_bn", "code_en", "code_bn"] as const) {
    if (!has(b, key)) continue;
    const v = b[key];
    if (v !== null && typeof v !== "string") fields[key] = "required";
    else if (typeof v === "string" && v.length > MAX_BODY) fields[key] = "too_long";
    else out[key] = typeof v === "string" && v.trim() ? v : null;
  }
  for (const key of ["takeaways_en", "takeaways_bn"] as const) {
    if (!has(b, key)) continue;
    const v = b[key];
    if (v === null) { out[key] = null; continue; }
    if (!Array.isArray(v) || v.some((x) => typeof x !== "string")) { fields[key] = "list_invalid"; continue; }
    out[key] = (v as string[]).map((x) => x.trim()).filter(Boolean);
  }
  if (has(b, "level")) {
    if (!LEVELS.includes(b.level as string)) fields.level = "level_invalid";
    else out.level = b.level as string;
  }
  if (has(b, "is_published")) out.is_published = b.is_published === true;
  if (has(b, "side_menu_id")) {
    if (typeof b.side_menu_id !== "string" || !UUID_RE.test(b.side_menu_id)) fields.side_menu_id = "menu_unknown";
    else out.side_menu_id = b.side_menu_id;
  }
  if (has(b, "lesson_number")) {
    const n = Number(b.lesson_number);
    if (!Number.isInteger(n) || n < 1) fields.lesson_number = "number_invalid";
    else out.lesson_number = n;
  }
  return done(fields, out);
}

export type MenuInput = Partial<{ chapter_id: string; label_en: string; label_bn: string | null; is_active: boolean; sort_order: number }>;

/** A section create (`creating`: chapter and label required) or a partial update. */
export function parseMenu(input: unknown, creating: boolean): Result<MenuInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const out: MenuInput = {};
  if (creating || has(b, "chapter_id")) {
    if (typeof b.chapter_id !== "string" || !UUID_RE.test(b.chapter_id)) fields.chapter_id = "chapter_unknown";
    else out.chapter_id = b.chapter_id;
  }
  if (creating || has(b, "label_en")) {
    const v = text(b.label_en);
    if (!v) fields.label_en = "required";
    else if (v.length > 255) fields.label_en = "too_long";
    else out.label_en = v;
  }
  if (has(b, "label_bn")) out.label_bn = text(b.label_bn);
  if (has(b, "is_active")) out.is_active = b.is_active === true;
  if (has(b, "sort_order")) {
    const n = Number(b.sort_order);
    if (!Number.isInteger(n)) fields.sort_order = "number_invalid";
    else out.sort_order = n;
  }
  return done(fields, out);
}

export interface AnnouncementInput {
  title_en: string; title_bn: string | null; body_en: string | null; body_bn: string | null;
  tone: (typeof TONES)[number]; link_url: string | null; link_label_en: string | null; link_label_bn: string | null;
  starts_at: string | null; ends_at: string | null; is_pinned: boolean; is_published: boolean;
}

/** Links may point inside the app (`#/notes`, `/study-hub/…`) or to an http(s) page, never to `javascript:` and friends. */
const LINK_RE = /^(https?:\/\/[^\s]+|\/[^\s]*|#\/[^\s]*)$/i;

function timestamp(v: unknown): string | null | undefined {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v !== "string" || Number.isNaN(Date.parse(v))) return undefined;
  return new Date(v).toISOString();
}

export function parseAnnouncement(input: unknown): Result<AnnouncementInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const title_en = text(b.title_en);
  if (!title_en) fields.title_en = "required";
  else if (title_en.length > 200) fields.title_en = "too_long";
  const title_bn = text(b.title_bn);
  if (title_bn && title_bn.length > 200) fields.title_bn = "too_long";
  const tone = (b.tone ?? "info") as AnnouncementInput["tone"];
  if (!TONES.includes(tone)) fields.tone = "tone_invalid";
  const link_url = text(b.link_url);
  if (link_url && (link_url.length > 500 || !LINK_RE.test(link_url))) fields.link_url = "link_invalid";
  const starts_at = timestamp(b.starts_at);
  if (starts_at === undefined) fields.starts_at = "date_invalid";
  const ends_at = timestamp(b.ends_at);
  if (ends_at === undefined) fields.ends_at = "date_invalid";
  else if (ends_at && starts_at && ends_at <= starts_at) fields.ends_at = "ends_before_start";
  const label = (v: unknown) => text(v)?.slice(0, 80) ?? null;
  return done(fields, {
    title_en: title_en ?? "", title_bn, body_en: text(b.body_en), body_bn: text(b.body_bn), tone,
    link_url, link_label_en: label(b.link_label_en), link_label_bn: label(b.link_label_bn),
    starts_at: starts_at ?? null, ends_at: ends_at ?? null, is_pinned: b.is_pinned === true, is_published: b.is_published === true,
  });
}
