import { createHash } from "crypto";

export const QUESTION_TYPES = ["mcq", "written", "programming"] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];
export type QuestionSource = "original" | "past_paper" | "imported";
export const OPTION_LETTERS = ["A", "B", "C", "D", "E"];

export interface OptionInput {
  text_en: string;
  text_bn: string | null;
  is_correct: boolean;
}

/** Everything needed to write one question, after validation and id resolution. */
export interface QuestionWrite {
  subject_id: string;
  topic_id: string | null;
  type: QuestionType;
  difficulty: number;
  stem_en: string;
  stem_bn: string | null;
  code_snippet: string | null;
  code_language: string | null;
  explanation_en: string | null;
  explanation_bn: string | null;
  model_answer_en: string | null;
  model_answer_bn: string | null;
  marks: number;
  options: OptionInput[];
  exam_tag_ids: string[];
  is_published: boolean;
  /** Exam Edge tags (migration 007). Optional: writers that don't send them leave stored values alone on update. */
  lesson_slug?: string | null;
  styles?: string[];
  source_url?: string | null;
  source_licence?: SourceLicence | null;
  as_of?: string | null;
}

/** Question styles (spec §4.4); the DB check constraint holds the same list. */
export const QUESTION_STYLES = [
  "definition", "difference", "numerical", "output_trace", "code_write", "sql_write", "diagram",
  "short_note", "short_answer", "scenario", "fact",
] as const;
/** own = written by us; official = a published paper; fact_only = question reused as a fact; cc_by / cc_nc = Creative Commons. */
export const SOURCE_LICENCES = ["own", "official", "fact_only", "cc_by", "cc_nc"] as const;
export type SourceLicence = (typeof SOURCE_LICENCES)[number];
/** Who conducted an exam (exam_tags.conducted_by). */
export const EXAM_CONDUCTORS = [
  "bpsc", "buet", "duet", "kuet", "mist", "bibm", "cti", "bcc", "bscs_bank", "bb", "iba", "aust", "du", "ntrca", "self", "other",
] as const;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Checks the Exam Edge tags; returns field → error code. */
export function checkQuestionMeta(
  q: Pick<QuestionWrite, "lesson_slug" | "styles" | "source_licence" | "as_of" | "marks">,
): Record<string, string> {
  const fields: Record<string, string> = {};
  if (q.lesson_slug && (q.lesson_slug.length > 80 || !SLUG.test(q.lesson_slug))) fields.lesson_slug = "slug_invalid";
  if (q.styles?.some((s) => !(QUESTION_STYLES as readonly string[]).includes(s))) fields.styles = "style_invalid";
  if (q.source_licence && !(SOURCE_LICENCES as readonly string[]).includes(q.source_licence)) fields.source_licence = "licence_invalid";
  if (q.as_of && (!ISO_DATE.test(q.as_of) || Number.isNaN(Date.parse(q.as_of)))) fields.as_of = "date_invalid";
  if (!(q.marks > 0 && q.marks < 1000)) fields.marks = "marks_invalid";
  return fields;
}

/** Trimmed single-field text; numbers become strings; empty or non-text becomes null. */
export function text(value: unknown): string | null {
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/\r\n?/g, "\n").trim();
  return cleaned ? cleaned : null;
}

/** Multi-line text such as code: keeps leading indentation, normalises line endings, trims the end. */
export function block(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/\r\n?/g, "\n").replace(/^\n+/, "").trimEnd();
  return cleaned ? cleaned : null;
}

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

/** Duplicate key: sha256 of the normalised English stem followed by the English options in order. */
export function contentHash(stemEn: string, optionsEn: string[]): string {
  return createHash("sha256").update([normalize(stemEn), ...optionsEn.map(normalize)].join("|")).digest("hex");
}

/**
 * Structural rules shared by the admin editor and the importer; returns field → error code.
 * MCQ: 2–5 options, each with English text, exactly one correct.
 * Written / programming: no options, and an English model answer.
 */
export function checkQuestionShape(
  q: Pick<QuestionWrite, "type" | "difficulty" | "stem_en" | "options" | "model_answer_en">,
): Record<string, string> {
  const fields: Record<string, string> = {};
  const knownType = (QUESTION_TYPES as readonly string[]).includes(q.type);
  if (!knownType) fields.type = "type_invalid";
  if (![1, 2, 3].includes(q.difficulty)) fields.difficulty = "difficulty_invalid";
  if (!q.stem_en) fields.stem_en = "required";
  if (q.type === "mcq") {
    if (q.options.length < 2 || q.options.length > 5 || q.options.some((o) => !o.text_en)) fields.options = "options_count";
    else if (q.options.filter((o) => o.is_correct).length !== 1) fields.correct = "correct_invalid";
  } else if (knownType) {
    if (q.options.length) fields.options = "options_not_allowed";
    else if (!q.model_answer_en) fields.model_answer_en = "required";
  }
  return fields;
}
