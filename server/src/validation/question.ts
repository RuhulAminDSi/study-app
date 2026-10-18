import { block, checkQuestionShape, text, type QuestionType, type QuestionWrite } from "../services/questionContent.js";
import { UUID_RE, type Result } from "./taxonomy.js";

/** Parses the admin editor's JSON body. Reference checks (subject/topic/tags exist) happen in the route. */
export function parseQuestionBody(input: unknown): Result<QuestionWrite> {
  const b = (input ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};

  const subject_id = typeof b.subject_id === "string" && UUID_RE.test(b.subject_id) ? b.subject_id : "";
  if (!subject_id) fields.subject_id = "required";
  let topic_id: string | null = null;
  if (b.topic_id !== undefined && b.topic_id !== null && b.topic_id !== "") {
    if (typeof b.topic_id === "string" && UUID_RE.test(b.topic_id)) topic_id = b.topic_id;
    else fields.topic_id = "topic_unknown";
  }
  const rawOptions = Array.isArray(b.options) ? b.options : [];
  const options = rawOptions.map((o) => {
    const r = (o ?? {}) as Record<string, unknown>;
    return { text_en: text(r.text_en) ?? "", text_bn: text(r.text_bn), is_correct: r.is_correct === true };
  });
  const rawTags = Array.isArray(b.exam_tag_ids) ? b.exam_tag_ids : [];
  if (rawTags.some((id) => typeof id !== "string" || !UUID_RE.test(id))) fields.exam_tag_ids = "exam_tag_unknown";
  const marks = b.marks === undefined || b.marks === null || b.marks === "" ? 1 : Number(b.marks);
  if (!(marks > 0 && marks <= 100)) fields.marks = "marks_invalid";

  const value: QuestionWrite = {
    subject_id,
    topic_id,
    type: (typeof b.type === "string" ? b.type : "") as QuestionType,
    difficulty: b.difficulty === undefined || b.difficulty === null || b.difficulty === "" ? 2 : Number(b.difficulty),
    stem_en: text(b.stem_en) ?? "",
    stem_bn: text(b.stem_bn),
    code_snippet: block(b.code_snippet),
    code_language: text(b.code_language),
    explanation_en: text(b.explanation_en),
    explanation_bn: text(b.explanation_bn),
    model_answer_en: block(b.model_answer_en),
    model_answer_bn: block(b.model_answer_bn),
    marks,
    options,
    exam_tag_ids: [...new Set(rawTags.filter((id): id is string => typeof id === "string"))],
    is_published: b.is_published === true,
  };
  Object.assign(fields, checkQuestionShape(value));
  return Object.keys(fields).length ? { ok: false, fields } : { ok: true, value };
}
