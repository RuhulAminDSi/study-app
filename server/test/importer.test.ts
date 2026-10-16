import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { commitImport, parseImportText, rowToDraft, validateImport } from "../src/services/importer";
import { resetDb, insertSubject } from "./helpers/db";
import { createAdmin } from "./helpers/auth";

const HEADER = "subject_code,topic,type,difficulty,stem_en,stem_bn,option_a_en,option_a_bn,option_b_en,option_b_bn,option_c_en,option_d_en,correct,explanation_en,model_answer_en,exam_org,exam_post,exam_year";

describe("parseImportText", () => {
  it("reads an Excel-style CSV: BOM, CRLF, Bangla, quoted commas and newlines", () => {
    const csv = "\uFEFF" + HEADER + "\r\n" +
      'DBMS,Normalization,mcq,2,"Which NF, if any, removes transitive dependency?",কোন NF?,1NF,১এনএফ,3NF,৩এনএফ,2NF,BCNF,B,"Line one\nline two",,,,\r\n';
    const rows = parseImportText("csv", csv);
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ subject_code: "DBMS", stem_en: "Which NF, if any, removes transitive dependency?", stem_bn: "কোন NF?", explanation_en: "Line one\nline two" });
  });

  it("rejects a file whose Bangla was destroyed by a non-UTF-8 save", () => {
    expect(() => parseImportText("csv", HEADER + "\nDBMS,T,mcq,2,Q,\uFFFD\uFFFD,A,,B,,,,A,,,,,\n")).toThrow(expect.objectContaining({ code: "encoding" }));
  });

  it("rejects Bangla columns that Excel's ANSI save turned into question marks", () => {
    // Real bytes from Excel SaveAs xlCSV (format 6) of a sheet containing "কোন NF": ",??? NF"
    const ansi = "subject_code,type,stem_en,stem_bn,option_a_en,option_a_bn,option_b_en,correct\r\nDBMS,mcq,Which NF?,??? NF,1NF,??NF,3NF,B\r\n";
    expect(() => parseImportText("csv", ansi)).toThrow(expect.objectContaining({ code: "encoding" }));
  });

  it("still accepts a question mark inside genuine Bangla text", () => {
    const ok = "subject_code,type,stem_en,stem_bn,option_a_en,option_b_en,correct\nDBMS,mcq,Which NF?,কোন NF ব্যবহার হয়??,1NF,3NF,B\n";
    expect(parseImportText("csv", ok)).toHaveLength(1);
  });

  it("rejects unreadable JSON", () => {
    expect(() => parseImportText("json", "{not json")).toThrow(expect.objectContaining({ code: "file_unreadable" }));
    expect(() => parseImportText("json", '{"a":1}')).toThrow(expect.objectContaining({ code: "file_unreadable" }));
  });
});

describe("rowToDraft", () => {
  const subjects = new Map([["DBMS", "11111111-1111-1111-1111-111111111111"]]);
  const base = { subject_code: "dbms", type: "mcq", stem_en: "Q?", option_a_en: "A", option_b_en: "B", correct: "b" };

  it("builds a draft with the correct option marked", () => {
    const { draft, problems } = rowToDraft(base, 1, subjects);
    expect(problems).toEqual([]);
    expect(draft?.question.options.map((o) => o.is_correct)).toEqual([false, true]);
    expect(draft?.question.difficulty).toBe(2);
  });

  it("reports each problem with its row and field", () => {
    const { problems } = rowToDraft({ ...base, subject_code: "XYZ", correct: "D", difficulty: "9" }, 7, subjects);
    expect(problems).toEqual([
      { row: 7, field: "subject_code", code: "subject_unknown" },
      { row: 7, field: "correct", code: "correct_invalid" },
      { row: 7, field: "difficulty", code: "difficulty_invalid" },
    ]);
  });

  it("requires all three exam columns together", () => {
    const { problems } = rowToDraft({ ...base, exam_org: "BPSC" }, 2, subjects);
    expect(problems).toEqual([{ row: 2, field: "exam_org", code: "exam_tag_incomplete" }]);
  });
});

describe("POST /api/questions/import", () => {
  let token: string;
  const post = (body: object) => request(createApp()).post("/api/questions/import").set("Authorization", `Bearer ${token}`).send(body);

  beforeEach(async () => {
    await resetDb();
    token = (await createAdmin()).token;
    await insertSubject("DBMS");
  });

  const csv = [
    HEADER,
    "DBMS,Normalization,mcq,2,Which NF removes transitive dependency?,,1NF,,3NF,,,,B,,,,,",
    "DBMS,Transactions,mcq,1,What does the A in ACID stand for?,,Atomicity,,Availability,,,,A,,,BPSC,Assistant Programmer,2023",
    "DBMS,SQL,programming,3,Write SQL for the second highest salary.,,,,,,,,,,SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);,,,",
    "DBMS,SQL,mcq,2,Broken row,,A,,B,,,,Z,,,,,",
    "DBMS,Normalization,mcq,2,which nf removes  transitive dependency?,,1nf,,3nf,,,,B,,,,,",
  ].join("\n");

  it("dry run reports counts and problems without writing anything", async () => {
    const res = await post({ format: "csv", content: csv, dryRun: true });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ total: 5, valid: 3, duplicates: 1, duplicateRows: [6], problems: [{ row: 5, field: "correct", code: "correct_invalid" }] });
    expect((await pool.query("SELECT count(*)::int AS n FROM questions")).rows[0].n).toBe(0);
  });

  it("commit inserts the valid rows as unpublished, with topics and past-exam tags", async () => {
    const res = await post({ format: "csv", content: csv, dryRun: false });
    expect(res.body).toMatchObject({ valid: 3, imported: 3 });
    const { rows } = await pool.query(
      "SELECT q.source, q.is_published, t.name_en AS topic FROM questions q LEFT JOIN topics t ON t.id = q.topic_id ORDER BY q.stem_en",
    );
    expect(rows).toEqual([
      { source: "past_paper", is_published: false, topic: "Transactions" },
      { source: "imported", is_published: false, topic: "Normalization" },
      { source: "imported", is_published: false, topic: "SQL" },
    ]);
    const again = await post({ format: "csv", content: csv, dryRun: true });
    expect(again.body).toMatchObject({ valid: 0, duplicates: 4 });
  });

  it("imports JSON rows", async () => {
    const json = JSON.stringify([{ subject_code: "DBMS", type: "mcq", stem_en: "Key?", option_a_en: "Primary", option_b_en: "Foreign", correct: "A" }]);
    expect((await post({ format: "json", content: json, dryRun: false })).body).toMatchObject({ imported: 1 });
  });

  it("returns 400 with a code for unreadable or mis-encoded files", async () => {
    expect((await post({ format: "json", content: "nope", dryRun: true })).body.code).toBe("file_unreadable");
    expect((await post({ format: "csv", content: HEADER + "\nDBMS,,mcq,2,\uFFFD,,A,,B,,,,A,,,,,", dryRun: true })).body.code).toBe("encoding");
    expect((await post({ format: "xml", content: "<a/>", dryRun: true })).status).toBe(400);
  });

  it("handles a realistic 300-row import in one request", async () => {
    const rows = Array.from({ length: 300 }, (_, i) => `DBMS,Bulk,mcq,2,Bulk question ${i}?,,Yes,,No,,,,A,,,,,`);
    const res = await post({ format: "csv", content: [HEADER, ...rows].join("\n"), dryRun: false });
    expect(res.body).toMatchObject({ total: 300, imported: 300 });
  });
});

describe("Exam Edge fields (007)", () => {
  const subjects = new Map([["NET", "22222222-2222-2222-2222-222222222222"]]);
  const base = { subject_code: "NET", type: "mcq", stem_en: "How many hosts in a /30?", option_a_en: "2", option_b_en: "4", correct: "A" };

  it("reads lesson, styles (array or |-list), source, licence, as_of and marks", () => {
    const fromArray = rowToDraft({ ...base, lesson_slug: "net-ip-firewalls", styles: ["numerical", "short_answer"], source_url: "https://example.org", source_licence: "official", as_of: "2026-10-16", marks: "2" }, 1, subjects);
    expect(fromArray.problems).toEqual([]);
    expect(fromArray.draft?.question).toMatchObject({ lesson_slug: "net-ip-firewalls", styles: ["numerical", "short_answer"], source_url: "https://example.org", source_licence: "official", as_of: "2026-10-16", marks: 2 });
    const fromCsv = rowToDraft({ ...base, styles: "numerical| fact" }, 1, subjects);
    expect(fromCsv.draft?.question.styles).toEqual(["numerical", "fact"]);
  });

  it("leaves the new fields empty when they are absent", () => {
    expect(rowToDraft(base, 1, subjects).draft?.question).toMatchObject({ lesson_slug: null, styles: [], source_licence: null, as_of: null, marks: 1 });
  });

  it("reports unknown styles, licences, conductors and malformed values", () => {
    const { problems } = rowToDraft({ ...base, styles: "essay", source_licence: "scraped", as_of: "16/10/2026", lesson_slug: "Bad Slug", marks: "0", exam_org: "PGCB", exam_post: "AE", exam_year: "2024", exam_conductor: "somebody" }, 3, subjects);
    expect(problems.map((p) => `${p.field}:${p.code}`).sort()).toEqual([
      "as_of:date_invalid", "exam_conductor:conductor_invalid", "lesson_slug:slug_invalid", "marks:marks_invalid", "source_licence:licence_invalid", "styles:style_invalid",
    ]);
  });

  it("stores the fields and the exam conductor when committed", async () => {
    await resetDb();
    await insertSubject("NET");
    const rows = [{ ...base, lesson_slug: "net-ip-firewalls", styles: "numerical", source_licence: "official", exam_org: "PGCB", exam_post: "AE(CSE)", exam_year: "2024", exam_conductor: "buet" }];
    const report = await validateImport(pool, rows);
    expect(report.problems).toEqual([]);
    await commitImport(pool, report.drafts, { source: "imported", publish: false, createdBy: null });
    const q = (await pool.query("SELECT lesson_slug, styles, source_licence, source FROM questions")).rows[0];
    expect(q).toEqual({ lesson_slug: "net-ip-firewalls", styles: ["numerical"], source_licence: "official", source: "past_paper" });
    const t = (await pool.query("SELECT conducted_by FROM exam_tags")).rows[0];
    expect(t.conducted_by).toBe("buet");
  });

  it("does not overwrite a conductor already recorded for an exam", async () => {
    await resetDb();
    await insertSubject("NET");
    const tag = { exam_org: "PGCB", exam_post: "AE(CSE)", exam_year: "2024" };
    await commitImport(pool, (await validateImport(pool, [{ ...base, ...tag, exam_conductor: "buet" }])).drafts, { source: "imported", publish: false, createdBy: null });
    await commitImport(pool, (await validateImport(pool, [{ ...base, stem_en: "Other?", ...tag, exam_conductor: "duet" }])).drafts, { source: "imported", publish: false, createdBy: null });
    expect((await pool.query("SELECT conducted_by FROM exam_tags")).rows[0].conducted_by).toBe("buet");
  });
});
