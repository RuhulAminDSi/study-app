import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import { createApp } from "../src/app";
import { pool } from "../src/db/pool";
import { parseImportText, rowToDraft } from "../src/services/importer";
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
    expect(res.body).toEqual({ total: 5, valid: 3, duplicates: 1, problems: [{ row: 4, field: "correct", code: "correct_invalid" }] });
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
