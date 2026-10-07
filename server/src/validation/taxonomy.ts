import { text } from "../services/questionContent.js";

export type Result<T> = { ok: true; value: T } | { ok: false; fields: Record<string, string> };
export const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const CODE_RE = /^[A-Z][A-Z0-9_]{1,19}$/;

const body = (input: unknown) => (input ?? {}) as Record<string, unknown>;
const done = <T>(fields: Record<string, string>, value: T): Result<T> =>
  Object.keys(fields).length ? { ok: false, fields } : { ok: true, value };
const optionalUuid = (v: unknown): string | null | undefined =>
  v === null || v === undefined || v === "" ? null : typeof v === "string" && UUID_RE.test(v) ? v : undefined;

export interface SubjectInput { code: string; name_en: string; name_bn: string | null; category: "technical" | "general"; chapter_id: string | null; sort_order: number }

export function parseSubject(input: unknown): Result<SubjectInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const code = (text(b.code) ?? "").toUpperCase();
  if (!CODE_RE.test(code)) fields.code = "code_invalid";
  const name_en = text(b.name_en);
  if (!name_en) fields.name_en = "required";
  const category = b.category;
  if (category !== "technical" && category !== "general") fields.category = "category_invalid";
  const chapter_id = optionalUuid(b.chapter_id);
  if (chapter_id === undefined) fields.chapter_id = "chapter_unknown";
  const sort_order = Number.isInteger(Number(b.sort_order)) ? Number(b.sort_order) : 0;
  return done(fields, { code, name_en: name_en ?? "", name_bn: text(b.name_bn), category: category as SubjectInput["category"], chapter_id: chapter_id ?? null, sort_order });
}

export interface TopicInput { subject_id: string; name_en: string; name_bn: string | null; lesson_id: string | null; sort_order: number }

export function parseTopic(input: unknown): Result<TopicInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const subject_id = typeof b.subject_id === "string" && UUID_RE.test(b.subject_id) ? b.subject_id : "";
  if (!subject_id) fields.subject_id = "subject_unknown";
  const name_en = text(b.name_en);
  if (!name_en) fields.name_en = "required";
  const lesson_id = optionalUuid(b.lesson_id);
  if (lesson_id === undefined) fields.lesson_id = "required";
  const sort_order = Number.isInteger(Number(b.sort_order)) ? Number(b.sort_order) : 0;
  return done(fields, { subject_id, name_en: name_en ?? "", name_bn: text(b.name_bn), lesson_id: lesson_id ?? null, sort_order });
}

export interface ExamTagInput { organization: string; post_en: string; post_bn: string | null; year: number; exam_date: string | null }

export function parseExamTag(input: unknown): Result<ExamTagInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const organization = text(b.organization);
  if (!organization) fields.organization = "required";
  const post_en = text(b.post_en);
  if (!post_en) fields.post_en = "required";
  const year = Number(b.year);
  if (!Number.isInteger(year) || year < 1990 || year > 2100) fields.year = "year_invalid";
  const exam_date = text(b.exam_date);
  if (exam_date && !/^\d{4}-\d{2}-\d{2}$/.test(exam_date)) fields.exam_date = "required";
  return done(fields, { organization: organization ?? "", post_en: post_en ?? "", post_bn: text(b.post_bn), year, exam_date });
}

export interface JobPostInput {
  organization: string; title_en: string; title_bn: string | null;
  syllabus_en: string | null; syllabus_bn: string | null; exam_pattern_en: string | null; exam_pattern_bn: string | null;
  is_published: boolean;
}

export function parseJobPost(input: unknown): Result<JobPostInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const organization = text(b.organization);
  if (!organization) fields.organization = "required";
  const title_en = text(b.title_en);
  if (!title_en) fields.title_en = "required";
  return done(fields, {
    organization: organization ?? "", title_en: title_en ?? "", title_bn: text(b.title_bn),
    syllabus_en: text(b.syllabus_en), syllabus_bn: text(b.syllabus_bn),
    exam_pattern_en: text(b.exam_pattern_en), exam_pattern_bn: text(b.exam_pattern_bn),
    is_published: b.is_published === true,
  });
}

export interface WeightInput { subject_id: string; weight: number }

/** Weights are fractions (0 < w ≤ 1), one per subject, summing to 1 (±0.001). An empty list clears them. */
export function parseWeights(input: unknown): Result<WeightInput[]> {
  const list = Array.isArray(body(input).weights) ? (body(input).weights as unknown[]) : null;
  if (!list) return { ok: false, fields: { weights: "required" } };
  const weights: WeightInput[] = [];
  for (const item of list) {
    const w = (item ?? {}) as Record<string, unknown>;
    const weight = Number(w.weight);
    if (typeof w.subject_id !== "string" || !UUID_RE.test(w.subject_id)) return { ok: false, fields: { weights: "subject_unknown" } };
    if (!(weight > 0 && weight <= 1)) return { ok: false, fields: { weights: "weight_invalid" } };
    weights.push({ subject_id: w.subject_id, weight: Math.round(weight * 10000) / 10000 });
  }
  if (new Set(weights.map((w) => w.subject_id)).size !== weights.length) return { ok: false, fields: { weights: "subject_unknown" } };
  const sum = weights.reduce((s, w) => s + w.weight, 0);
  if (weights.length && Math.abs(sum - 1) > 0.001) return { ok: false, fields: { weights: "weights_sum" } };
  return { ok: true, value: weights };
}
