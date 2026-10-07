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
