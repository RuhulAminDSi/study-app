import type { Pool, PoolClient } from "pg";
import { parse } from "csv-parse/sync";
import {
  block, checkQuestionShape, contentHash, OPTION_LETTERS, text, type OptionInput, type QuestionSource, type QuestionType,
  type QuestionWrite,
} from "./questionContent.js";
import { insertQuestion, resolveExamTag, resolveTopic } from "./questions.js";

type Db = Pool | PoolClient;
export type ImportFormat = "csv" | "json";

export class ImportFileError extends Error {
  code: "file_unreadable" | "encoding";
  constructor(code: "file_unreadable" | "encoding", message: string) {
    super(message);
    this.code = code;
  }
}

export interface ImportProblem { row: number; field: string; code: string }
export interface ImportDraft {
  row: number;
  topicName: string | null;
  examTag: { organization: string; post_en: string; year: number } | null;
  question: Omit<QuestionWrite, "topic_id" | "exam_tag_ids" | "is_published">;
  hash: string;
}
export interface ImportReport { total: number; valid: number; duplicates: number; problems: ImportProblem[]; drafts: ImportDraft[] }

/** Turns the uploaded text into row objects keyed by lower-case column name. */
export function parseImportText(format: ImportFormat, content: string): Record<string, unknown>[] {
  const body = content.replace(/^\uFEFF/, "");
  // U+FFFD is what Bangla becomes when Excel saves "CSV (Comma delimited)" in a non-UTF-8 code page.
  if (body.includes("\uFFFD")) {
    throw new ImportFileError("encoding", 'The file is not UTF-8, so Bangla text was lost. In Excel use "Save as → CSV UTF-8".');
  }
  if (format === "json") {
    let data: unknown;
    try {
      data = JSON.parse(body);
    } catch {
      throw new ImportFileError("file_unreadable", "The file is not valid JSON.");
    }
    if (!Array.isArray(data)) throw new ImportFileError("file_unreadable", "The JSON file must contain an array of questions.");
    return data.map((r) => (r && typeof r === "object" ? (r as Record<string, unknown>) : {}));
  }
  try {
    return parse(body, {
      columns: (header: string[]) => header.map((h) => h.trim().toLowerCase()),
      skip_empty_lines: true,
      relax_column_count: true,
    }) as Record<string, unknown>[];
  } catch (err) {
    throw new ImportFileError("file_unreadable", `The CSV could not be read: ${(err as Error).message}`);
  }
}

/** Validates one row (1-based `row`) and converts it to a draft. */
export function rowToDraft(raw: Record<string, unknown>, row: number, subjectsByCode: Map<string, string>): { draft?: ImportDraft; problems: ImportProblem[] } {
  const problems: ImportProblem[] = [];
  const bad = (field: string, code: string) => problems.push({ row, field, code });

  const code = (text(raw.subject_code) ?? "").toUpperCase();
  const subjectId = subjectsByCode.get(code);
  if (!code) bad("subject_code", "required");
  else if (!subjectId) bad("subject_code", "subject_unknown");

  const type = (text(raw.type) ?? "").toLowerCase() as QuestionType;
  const difficultyText = text(raw.difficulty);
  const difficulty = difficultyText === null ? 2 : Number(difficultyText);

  const lettered: (OptionInput & { letter: string })[] = [];
  for (const letter of OPTION_LETTERS) {
    const en = text(raw[`option_${letter.toLowerCase()}_en`]);
    const bn = text(raw[`option_${letter.toLowerCase()}_bn`]);
    if (en || bn) lettered.push({ letter, text_en: en ?? "", text_bn: bn, is_correct: false });
  }
  if (type === "mcq") {
    const target = lettered.find((o) => o.letter === (text(raw.correct) ?? "").toUpperCase());
    if (target) target.is_correct = true;
    else bad("correct", "correct_invalid");
  }
  const options: OptionInput[] = lettered.map((o) => ({ text_en: o.text_en, text_bn: o.text_bn, is_correct: o.is_correct }));

  let examTag: ImportDraft["examTag"] = null;
  const org = text(raw.exam_org);
  const post = text(raw.exam_post);
  const yearText = text(raw.exam_year);
  if (org || post || yearText) {
    const year = Number(yearText);
    if (!org || !post || !yearText) bad("exam_org", "exam_tag_incomplete");
    else if (!Number.isInteger(year) || year < 1990 || year > 2100) bad("exam_year", "year_invalid");
    else examTag = { organization: org, post_en: post, year };
  }

  const question: ImportDraft["question"] = {
    subject_id: subjectId ?? "",
    type,
    difficulty,
    stem_en: text(raw.stem_en) ?? "",
    stem_bn: text(raw.stem_bn),
    code_snippet: block(raw.code_snippet),
    code_language: text(raw.code_language),
    explanation_en: text(raw.explanation_en),
    explanation_bn: text(raw.explanation_bn),
    model_answer_en: block(raw.model_answer_en),
    model_answer_bn: block(raw.model_answer_bn),
    marks: 1,
    options,
  };
  for (const [field, problem] of Object.entries(checkQuestionShape(question))) {
    if (!problems.some((p) => p.field === field)) bad(field, problem);
  }
  if (problems.length) return { problems };
  return {
    draft: { row, topicName: text(raw.topic), examTag, question, hash: contentHash(question.stem_en, options.map((o) => o.text_en)) },
    problems,
  };
}

/** Validates every row against the subjects table and finds duplicates (in the bank or repeated in the file). */
export async function validateImport(db: Db, rows: Record<string, unknown>[]): Promise<ImportReport> {
  const subjects = new Map<string, string>(
    (await db.query("SELECT id, code FROM subjects")).rows.map((r) => [String(r.code).toUpperCase(), r.id]),
  );
  const problems: ImportProblem[] = [];
  const candidates: ImportDraft[] = [];
  rows.forEach((raw, i) => {
    const result = rowToDraft(raw, i + 1, subjects);
    problems.push(...result.problems);
    if (result.draft) candidates.push(result.draft);
  });
  const existing = new Set<string>(
    candidates.length
      ? (await db.query("SELECT content_hash FROM questions WHERE content_hash = ANY($1::char(64)[])", [candidates.map((d) => d.hash)])).rows.map((r) => r.content_hash)
      : [],
  );
  const seen = new Set<string>();
  const drafts: ImportDraft[] = [];
  let duplicates = 0;
  for (const d of candidates) {
    if (existing.has(d.hash) || seen.has(d.hash)) { duplicates++; continue; }
    seen.add(d.hash);
    drafts.push(d);
  }
  return { total: rows.length, valid: drafts.length, duplicates, problems, drafts };
}

/** Inserts validated drafts (call inside a transaction). Returns the number inserted. */
export async function commitImport(db: Db, drafts: ImportDraft[], opts: { source: QuestionSource; publish: boolean; createdBy: string | null }): Promise<number> {
  for (const d of drafts) {
    const topicId = d.topicName ? await resolveTopic(db, d.question.subject_id, d.topicName) : null;
    const tagIds = d.examTag ? [await resolveExamTag(db, d.examTag)] : [];
    await insertQuestion(db, { ...d.question, topic_id: topicId, exam_tag_ids: tagIds, is_published: opts.publish }, { source: opts.source, createdBy: opts.createdBy });
  }
  return drafts.length;
}
