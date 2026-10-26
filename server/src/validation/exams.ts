import { text } from "../services/questionContent.js";
import type { AnswerInput, PracticeFilters } from "../services/attempts.js";
import type { ResultRelease, TestKind } from "../services/mockTests.js";
import type { BankFilters } from "../services/questionBank.js";
import { UUID_RE, type Result } from "./taxonomy.js";

const body = (input: unknown) => (input ?? {}) as Record<string, unknown>;
const done = <T>(fields: Record<string, string>, value: T): Result<T> =>
  Object.keys(fields).length ? { ok: false, fields } : { ok: true, value };
const isUuid = (v: unknown): v is string => typeof v === "string" && UUID_RE.test(v);
/** null for empty, the uuid, or undefined when the value is not a uuid. */
const optionalUuid = (v: unknown): string | null | undefined => (v === null || v === undefined || v === "" ? null : isUuid(v) ? v : undefined);
const num = (v: unknown) => (v === null || v === undefined || v === "" ? null : Number(v));
const inRange = (n: number | null, min: number, max: number) => n !== null && Number.isFinite(n) && n >= min && n <= max;

export interface SectionInput {
  id: string | null;
  subject_id: string;
  topic_id: string | null;
  type: "mcq" | "written";
  question_count: number;
  difficulty: number | null;
  marks_per_question: number | null;
  negative_mark: number;
}

export interface MockTestInput {
  kind: TestKind;
  mode: "fixed" | "random";
  title_en: string;
  title_bn: string | null;
  description_en: string | null;
  description_bn: string | null;
  job_post_id: string | null;
  duration_minutes: number;
  marks_per_question: number;
  negative_mark: number;
  pass_mark: number | null;
  shuffle_options: boolean;
  available_from: string | null;
  available_until: string | null;
  max_attempts: number | null;
  result_release: ResultRelease;
  sections: SectionInput[];
  question_ids: string[];
  /** fixed: number of questions; random: sum of the MCQ sections. */
  total_questions: number;
}

function date(v: unknown): string | null | undefined {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v !== "string") return undefined;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function parseSection(raw: unknown, i: number, fields: Record<string, string>): SectionInput {
  const s = body(raw);
  const at = (f: string) => `sections.${i}.${f}`;
  const subject_id = isUuid(s.subject_id) ? s.subject_id : "";
  if (!subject_id) fields[at("subject_id")] = "subject_unknown";
  const topic_id = optionalUuid(s.topic_id);
  if (topic_id === undefined) fields[at("topic_id")] = "topic_unknown";
  const type = s.type === "written" ? "written" : "mcq";
  const question_count = num(s.question_count);
  if (!inRange(question_count, 1, 300) || !Number.isInteger(question_count)) fields[at("question_count")] = "count_invalid";
  const difficulty = num(s.difficulty);
  if (difficulty !== null && ![1, 2, 3].includes(difficulty)) fields[at("difficulty")] = "difficulty_invalid";
  const marks = num(s.marks_per_question);
  if (marks !== null && !inRange(marks, 0.25, 100)) fields[at("marks_per_question")] = "marks_invalid";
  const negative = num(s.negative_mark) ?? 0;
  if (!inRange(negative, 0, marks ?? 100)) fields[at("negative_mark")] = "negative_invalid";
  return {
    id: isUuid(s.id) ? s.id : null, subject_id, topic_id: topic_id ?? null, type, question_count: question_count ?? 0,
    difficulty, marks_per_question: marks, negative_mark: negative,
  };
}

/** The whole configuration of a mock / model test / practice set, as the admin editor saves it. */
export function parseMockTest(input: unknown): Result<MockTestInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const kind = b.kind;
  if (kind !== "quiz" && kind !== "mock" && kind !== "model") fields.kind = "kind_invalid";
  const mode = b.mode;
  if (mode !== "fixed" && mode !== "random") fields.mode = "mode_invalid";
  const title_en = text(b.title_en);
  if (!title_en) fields.title_en = "required";
  else if (title_en.length > 200) fields.title_en = "too_long";
  const title_bn = text(b.title_bn);
  if (title_bn && title_bn.length > 200) fields.title_bn = "too_long";
  const description_en = text(b.description_en);
  const description_bn = text(b.description_bn);
  if (description_en && description_en.length > 4000) fields.description_en = "too_long";
  if (description_bn && description_bn.length > 4000) fields.description_bn = "too_long";
  const job_post_id = optionalUuid(b.job_post_id);
  if (job_post_id === undefined) fields.job_post_id = "post_unknown";
  const duration = num(b.duration_minutes);
  if (!inRange(duration, 1, 300) || !Number.isInteger(duration)) fields.duration_minutes = "duration_invalid";
  const marks = num(b.marks_per_question);
  if (!inRange(marks, 0.25, 100)) fields.marks_per_question = "marks_invalid";
  const negative = num(b.negative_mark) ?? 0;
  if (!inRange(negative, 0, marks ?? 100)) fields.negative_mark = "negative_invalid";
  const pass_mark = num(b.pass_mark);
  if (pass_mark !== null && !inRange(pass_mark, 0, 30000)) fields.pass_mark = "pass_mark_invalid";
  const available_from = date(b.available_from);
  const available_until = date(b.available_until);
  if (available_from === undefined) fields.available_from = "date_invalid";
  if (available_until === undefined) fields.available_until = "date_invalid";
  if (available_from && available_until && available_until <= available_from) fields.available_until = "ends_before_start";
  const max_attempts = num(b.max_attempts);
  if (max_attempts !== null && (!inRange(max_attempts, 1, 50) || !Number.isInteger(max_attempts))) fields.max_attempts = "attempts_invalid";
  const result_release = b.result_release ?? "immediate";
  if (!["immediate", "after_close", "never"].includes(result_release as string)) fields.result_release = "release_invalid";

  const sections = mode === "random" && Array.isArray(b.sections) ? b.sections.map((s, i) => parseSection(s, i, fields)) : [];
  const rawIds = mode === "fixed" && Array.isArray(b.question_ids) ? b.question_ids : [];
  const question_ids = rawIds.filter(isUuid);
  if (question_ids.length !== rawIds.length) fields.question_ids = "question_unknown";
  else if (new Set(question_ids).size !== question_ids.length) fields.question_ids = "question_duplicate";
  const total = mode === "fixed" ? question_ids.length : sections.filter((s) => s.type === "mcq").reduce((n, s) => n + s.question_count, 0);
  if (!fields.question_ids && !Object.keys(fields).some((k) => k.startsWith("sections."))) {
    if (total < 1) fields[mode === "fixed" ? "question_ids" : "sections"] = "questions_required";
    else if (total > 300) fields[mode === "fixed" ? "question_ids" : "sections"] = "too_many_questions";
  }

  return done(fields, {
    kind: kind as TestKind, mode: mode as "fixed" | "random", title_en: title_en ?? "", title_bn, description_en, description_bn,
    job_post_id: job_post_id ?? null, duration_minutes: duration ?? 0, marks_per_question: marks ?? 0, negative_mark: negative,
    pass_mark, shuffle_options: b.shuffle_options !== false, available_from: available_from ?? null,
    available_until: available_until ?? null, max_attempts, result_release: result_release as ResultRelease,
    sections, question_ids, total_questions: total,
  });
}

export const PRACTICE_MIN = 5;
export const PRACTICE_MAX = 50;

export function parsePractice(input: unknown): Result<PracticeFilters> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const subjectId = optionalUuid(b.subjectId);
  if (subjectId === undefined) fields.subjectId = "subject_unknown";
  const topicId = optionalUuid(b.topicId);
  if (topicId === undefined) fields.topicId = "topic_unknown";
  const lessonSlug = text(b.lessonSlug);
  if (lessonSlug && !/^[a-z0-9-]{1,80}$/.test(lessonSlug)) fields.lessonSlug = "lesson_unknown";
  const difficulty = num(b.difficulty);
  if (difficulty !== null && ![1, 2, 3].includes(difficulty)) fields.difficulty = "difficulty_invalid";
  const status = b.status ?? "any";
  if (!["any", "unseen", "wrong", "due"].includes(status as string)) fields.status = "status_invalid";
  const count = num(b.count) ?? 10;
  if (!Number.isInteger(count) || count < PRACTICE_MIN || count > PRACTICE_MAX) fields.count = "count_invalid";
  return done(fields, {
    subjectId: subjectId ?? null, topicId: topicId ?? null, lessonSlug: lessonSlug ?? null, difficulty,
    status: status as PracticeFilters["status"], count,
  });
}

export function parseAnswer(input: unknown): Result<AnswerInput> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const value: AnswerInput = {};
  if ("optionId" in b) {
    if (b.optionId === null) value.optionId = null;
    else if (isUuid(b.optionId)) value.optionId = b.optionId;
    else fields.optionId = "option_invalid";
  }
  if ("flagged" in b) {
    if (typeof b.flagged === "boolean") value.flagged = b.flagged;
    else fields.flagged = "required";
  }
  if ("timeSpentMs" in b) {
    const n = Number(b.timeSpentMs);
    if (Number.isFinite(n) && n >= 0) value.timeSpentMs = n;
    else fields.timeSpentMs = "required";
  }
  return done(fields, value);
}

export function parseBankQuery(query: Record<string, unknown>): BankFilters {
  const uuid = (v: unknown) => (isUuid(v) ? v : null);
  const difficulty = Number(query.difficulty);
  const format = query.format === "short" || query.format === "written" ? query.format : "mcq";
  return {
    format,
    subjectId: uuid(query.subjectId),
    topicId: uuid(query.topicId),
    difficulty: [1, 2, 3].includes(difficulty) ? difficulty : null,
    q: typeof query.q === "string" && query.q.trim() ? query.q.trim().slice(0, 200) : null,
    page: Math.max(1, parseInt(String(query.page ?? "1"), 10) || 1),
    pageSize: Math.min(50, Math.max(1, parseInt(String(query.pageSize ?? "10"), 10) || 10)),
  };
}

export const ANSWER_TEXT_MAX = 10000;

/** A written self-check: the candidate's answer (may be empty when they answered in their head) and their own mark. */
export function parseResponse(input: unknown): Result<{ answerText: string; selfScore: number }> {
  const b = body(input);
  const fields: Record<string, string> = {};
  const answerText = typeof b.answerText === "string" ? b.answerText.trim() : "";
  if (b.answerText !== undefined && typeof b.answerText !== "string") fields.answerText = "required";
  else if (answerText.length > ANSWER_TEXT_MAX) fields.answerText = "too_long";
  const selfScore = num(b.selfScore);
  if (selfScore === null || !Number.isFinite(selfScore) || selfScore < 0) fields.selfScore = "score_invalid";
  return done(fields, { answerText, selfScore: selfScore ?? 0 });
}
