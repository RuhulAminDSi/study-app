import fs from "fs";
import path from "path";
import { describe, it, expect } from "vitest";
import { parseImportText, rowToDraft } from "../src/services/importer";
import { SUBJECTS } from "../src/db/seedExamPrep";

const DIR = path.resolve(__dirname, "../data/questions");
const technical = SUBJECTS.filter((s) => s.category === "technical");
const subjectIds = new Map(SUBJECTS.map((s) => [s.code, `id-${s.code}`]));

describe("starter question bank (server/data/questions)", () => {
  it("has a file for every technical subject", () => {
    const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", "")).sort();
    expect(files).toEqual(technical.map((s) => s.code).sort());
  });

  it.each(technical.map((s) => s.code))("%s: every row is valid, bilingual, and there are at least 20 MCQs", (code) => {
    const rows = parseImportText("json", fs.readFileSync(path.join(DIR, `${code}.json`), "utf8"));
    const problems = rows.flatMap((r, i) => rowToDraft(r, i + 1, subjectIds).problems);
    expect(problems).toEqual([]);
    expect(rows.filter((r) => r.type === "mcq").length).toBeGreaterThanOrEqual(20);
    for (const r of rows) {
      expect(String(r.subject_code)).toBe(code);
      expect(String(r.stem_bn ?? "").trim()).not.toBe("");
      expect(String(r.explanation_en ?? "").trim()).not.toBe("");
    }
  });

  it("has no duplicate questions across the whole bank", () => {
    const hashes = technical.flatMap((s) =>
      parseImportText("json", fs.readFileSync(path.join(DIR, `${s.code}.json`), "utf8"))
        .map((r, i) => rowToDraft(r, i + 1, subjectIds).draft?.hash));
    expect(new Set(hashes).size).toBe(hashes.length);
  });
});
