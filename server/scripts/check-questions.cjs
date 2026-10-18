#!/usr/bin/env node
// Structural check for starter-question files (server/data/questions/<CODE>.json).
// Usage: node scripts/check-questions.cjs [data/questions/DBMS.json ...]   (no arguments: every file in data/questions)
// Exits 1 and lists every problem if any file is invalid.
const fs = require("fs");

const LETTERS = ["a", "b", "c", "d", "e"];
const TYPES = ["mcq", "written", "programming"];
const STYLES = ["definition", "difference", "numerical", "output_trace", "code_write", "sql_write", "diagram", "short_note", "short_answer", "scenario", "fact"];
const LICENCES = ["own", "official", "fact_only", "cc_by", "cc_nc"];
const CONDUCTORS = ["bpsc", "buet", "duet", "kuet", "mist", "bibm", "cti", "bcc", "bscs_bank", "bb", "iba", "aust", "du", "ntrca", "self", "other"];
const problems = [];

// no arguments: every starter file in data/questions (a *.json glob does not expand under Windows cmd)
const QDIR = require("path").join(__dirname, "..", "data", "questions");
const FILES = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(QDIR).filter((f) => f.endsWith(".json")).map((f) => require("path").join("data", "questions", f));
for (const file of FILES) {
  let rows;
  try {
    rows = JSON.parse(fs.readFileSync(file, "utf8").replace(/^﻿/, ""));
  } catch (err) {
    problems.push(`${file}: not valid JSON (${err.message})`);
    continue;
  }
  if (!Array.isArray(rows)) { problems.push(`${file}: top level must be an array`); continue; }
  const code = require("path").basename(file, ".json");
  const stems = new Set();
  let mcq = 0;
  rows.forEach((r, i) => {
    const at = `${file} row ${i + 1}`;
    const need = (k) => { if (typeof r[k] !== "string" || !r[k].trim()) problems.push(`${at}: "${k}" is required`); };
    if (r.subject_code !== code) problems.push(`${at}: subject_code must be "${code}"`);
    if (!TYPES.includes(r.type)) problems.push(`${at}: type must be mcq | written | programming`);
    if (![1, 2, 3].includes(r.difficulty)) problems.push(`${at}: difficulty must be 1, 2 or 3`);
    need("topic"); need("stem_en"); need("stem_bn"); need("explanation_en"); need("explanation_bn");
    const key = String(r.stem_en || "").trim().toLowerCase().replace(/\s+/g, " ");
    if (stems.has(key)) problems.push(`${at}: duplicate stem_en`);
    stems.add(key);
    if (r.type === "mcq") {
      mcq++;
      const present = LETTERS.filter((l) => typeof r[`option_${l}_en`] === "string" && r[`option_${l}_en`].trim());
      if (present.length < 4) problems.push(`${at}: MCQ needs options a-d (en)`);
      present.forEach((l) => { if (typeof r[`option_${l}_bn`] !== "string" || !r[`option_${l}_bn`].trim()) problems.push(`${at}: option_${l}_bn missing`); });
      const texts = present.map((l) => r[`option_${l}_en`].trim().toLowerCase());
      if (new Set(texts).size !== texts.length) problems.push(`${at}: two options have the same English text`);
      if (!/^[A-E]$/.test(r.correct || "") || !present.includes(r.correct.toLowerCase())) problems.push(`${at}: "correct" must be a letter whose option is filled`);
    } else {
      need("model_answer_en"); need("model_answer_bn");
      if (r.correct) problems.push(`${at}: written/programming questions have no "correct"`);
    }
    // Exam Edge fields (optional; same rules as checkQuestionMeta in src/services/questionContent.ts)
    const styles = Array.isArray(r.styles) ? r.styles : typeof r.styles === "string" && r.styles ? r.styles.split("|").map((s) => s.trim()) : [];
    styles.forEach((s) => { if (!STYLES.includes(s)) problems.push(`${at}: unknown style "${s}"`); });
    if (r.lesson_slug != null && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.lesson_slug)) problems.push(`${at}: lesson_slug must be a lower-case slug`);
    if (r.source_licence != null && !LICENCES.includes(r.source_licence)) problems.push(`${at}: source_licence must be ${LICENCES.join(" | ")}`);
    if (r.as_of != null && !/^\d{4}-\d{2}-\d{2}$/.test(r.as_of)) problems.push(`${at}: as_of must be YYYY-MM-DD`);
    if (r.marks != null && !(Number(r.marks) > 0)) problems.push(`${at}: marks must be a positive number`);
    if (r.exam_conductor != null && !CONDUCTORS.includes(String(r.exam_conductor).toLowerCase())) problems.push(`${at}: unknown exam_conductor "${r.exam_conductor}"`);
    if (r.source_licence === "fact_only" && !r.source_url) problems.push(`${at}: a fact_only question needs its source_url`);
  });
  if (mcq < 20) problems.push(`${file}: only ${mcq} MCQs (need at least 20)`);
  console.log(`${file}: ${rows.length} rows (${mcq} MCQ, ${rows.length - mcq} written/programming)`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n` + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("OK");
