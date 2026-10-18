import type { Pool, PoolClient } from "pg";
import { parse } from "csv-parse/sync";
import {
  block, checkQuestionMeta, checkQuestionShape, contentHash, EXAM_CONDUCTORS, OPTION_LETTERS, text, type OptionInput,
  type QuestionSource, type QuestionType, type QuestionWrite, type SourceLicence,
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
  examTag: { organization: string; post_en: string; year: number; conducted_by: string | null } | null;
  question: Omit<QuestionWrite, "topic_id" | "exam_tag_ids" | "is_published">;
  hash: string;
}
export interface ImportReport { total: number; valid: number; duplicates: number; duplicateRows: number[]; problems: ImportProblem[]; drafts: ImportDraft[] }

const BENGALI = /[ঀ-৿]/;
const ENCODING_MESSAGE = 'The file is not UTF-8, so Bangla text was lost. In Excel use "Save as → CSV UTF-8".';

/**
 * Excel's plain "CSV (Comma delimited)" save writes every Bangla character as "?".
 * A Bangla column holding "??" but no Bengali letter is that damage, not real text.
 */
function assertBanglaSurvived(rows: Record<string, unknown>[]) {
  for (const row of rows) {
    for (const [key, value] of Object.entries(row)) {
      if (key.endsWith("_bn") && typeof value === "string" && /\?{2,}/.test(value) && !BENGALI.test(value)) {
        throw new ImportFileError("encoding", ENCODING_MESSAGE);
      }
    }
  }
}

/** Turns the uploaded text into row objects keyed by lower-case column name. */
export function parseImportText(format: ImportFormat, content: string): Record<string, unknown>[] {
  const rows = parseRows(format, content);
  assertBanglaSurvived(rows);
  return rows;
}

function parseRows(format: ImportFormat, content: string): Record<string, unknown>[] {
  const body = content.replace(/^\uFEFF/, "");
  // U+FFFD is what Bangla becomes when Excel saves "CSV (Comma delimited)" in a non-UTF-8 code page.
  if (body.includes("\uFFFD")) {
    throw new ImportFileError("encoding", ENCODING_MESSAGE);
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
  const conductor = text(raw.exam_conductor)?.toLowerCase() ?? null;
  if (conductor && !(EXAM_CONDUCTORS as readonly string[]).includes(conductor)) bad("exam_conductor", "conductor_invalid");
  if (org || post || yearText) {
    const year = Number(yearText);
    if (!org || !post || !yearText) bad("exam_org", "exam_tag_incomplete");
    else if (!Number.isInteger(year) || year < 1990 || year > 2100) bad("exam_year", "year_invalid");
    else examTag = { organization: org, post_en: post, year, conducted_by: conductor };
  }

  // styles: a JSON array, or "a|b" in a CSV cell
  const styles = Array.isArray(raw.styles)
    ? raw.styles.map((s) => text(s)).filter((s): s is string => !!s)
    : (text(raw.styles) ?? "").split("|").map((s) => s.trim()).filter(Boolean);
  const marksText = text(raw.marks);

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
    marks: marksText === null ? 1 : Number(marksText),
    options,
    lesson_slug: text(raw.lesson_slug),
    styles,
    source_url: text(raw.source_url),
    source_licence: (text(raw.source_licence)?.toLowerCase() ?? null) as SourceLicence | null,
    as_of: text(raw.as_of),
  };
  for (const [field, problem] of Object.entries({ ...checkQuestionShape(question), ...checkQuestionMeta(question) })) {
    if (!problems.some((p) => p.field === field)) bad(field, problem);
  }
  if (problems.length) return { problems };
  return {
    draft: { row, topicName: text(raw.topic), examTag, question, hash: contentHash(question.stem_en, options.map((o) => o.text_en)) },
    problems,
  };
}

/**
 * Validates every row against the subjects table and finds duplicates (in the bank or repeated in the file).
 * `firstRow` is the number of the first data row as the admin sees it: 2 for a CSV (row 1 is the header).
 */
export async function validateImport(db: Db, rows: Record<string, unknown>[], firstRow = 1): Promise<ImportReport> {
  const subjects = new Map<string, string>(
    (await db.query("SELECT id, code FROM subjects")).rows.map((r) => [String(r.code).toUpperCase(), r.id]),
  );
  const problems: ImportProblem[] = [];
  const candidates: ImportDraft[] = [];
  rows.forEach((raw, i) => {
    const result = rowToDraft(raw, i + firstRow, subjects);
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
  const duplicateRows: number[] = [];
  for (const d of candidates) {
    if (existing.has(d.hash) || seen.has(d.hash)) { duplicateRows.push(d.row); continue; }
    seen.add(d.hash);
    drafts.push(d);
  }
  return { total: rows.length, valid: drafts.length, duplicates: duplicateRows.length, duplicateRows, problems, drafts };
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
