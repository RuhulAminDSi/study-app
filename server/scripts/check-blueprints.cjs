#!/usr/bin/env node
// Structural check for exam blueprints (server/data/blueprints/<id>.json), plan C0.3.
// Usage: node scripts/check-blueprints.cjs [files...]   (default: every file in data/blueprints)
// Exits 1 and lists every problem if any blueprint is invalid.
const fs = require("fs");
const path = require("path");

const SUBJECTS = ["PHY", "ICS", "EC", "DLD", "ELN", "MPI", "CA", "COM", "NET", "SPL", "OOP", "DM", "GRAPH", "TOC", "DSA", "DBMS", "SE", "OS", "AI"];
const CONDUCTORS = [null, "bpsc", "buet", "duet", "kuet", "mist", "bibm", "cti", "bcc", "bscs_bank", "bb", "iba", "aust", "du", "ntrca", "self", "other"];
const CONFIDENCE = ["official", "high", "medium", "low"];
const STAGES = ["screening", "written", "viva"];
const dir = path.join(__dirname, "..", "data", "blueprints");
const files = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => path.join(dir, f));
const problems = [];

for (const file of files) {
  let b;
  try {
    b = JSON.parse(fs.readFileSync(file, "utf8").replace(/^﻿/, ""));
  } catch (err) {
    problems.push(`${file}: not valid JSON (${err.message})`);
    continue;
  }
  const at = path.basename(file);
  if (b.id !== path.basename(file, ".json")) problems.push(`${at}: id must equal the file name`);
  if (!b.title?.en || !b.title?.bn) problems.push(`${at}: title.en and title.bn are required`);
  if (!CONDUCTORS.includes(b.conductor ?? null)) problems.push(`${at}: unknown conductor "${b.conductor}"`);
  if (!CONFIDENCE.includes(b.confidence)) problems.push(`${at}: confidence must be ${CONFIDENCE.join(" | ")}`);
  if (!STAGES.includes(b.stage)) problems.push(`${at}: stage must be ${STAGES.join(" | ")}`);
  if (!(b.durationMinutes > 0 && b.durationMinutes <= 300)) problems.push(`${at}: durationMinutes must be 1–300`);
  if (!Array.isArray(b.sources) || !b.sources.length) problems.push(`${at}: at least one source is required`);
  if (!/^\d{4}-\d\d-\d\d$/.test(b.verifiedOn ?? "")) problems.push(`${at}: verifiedOn must be YYYY-MM-DD`);
  if (!Array.isArray(b.sections) || !b.sections.length) { problems.push(`${at}: sections are required`); continue; }

  let total = 0;
  let practised = 0;
  b.sections.forEach((s, i) => {
    const sat = `${at} section ${i + 1} (${s.label})`;
    if (!["mcq", "written"].includes(s.type)) problems.push(`${sat}: type must be mcq | written`);
    if (s.practised) {
      practised++;
      if (!(s.questionCount > 0) || !(s.marksPerQuestion > 0)) problems.push(`${sat}: practised sections need questionCount and marksPerQuestion`);
      if (s.type === "mcq" && !(s.negativeMark >= 0)) problems.push(`${sat}: MCQ sections need negativeMark (0 for none)`);
      const w = s.subjectWeights ?? {};
      for (const k of Object.keys(w)) if (!SUBJECTS.includes(k)) problems.push(`${sat}: unknown subject "${k}" in subjectWeights`);
      const sum = Object.values(w).reduce((a, x) => a + x, 0);
      if (Math.abs(sum - 1) > 0.001) problems.push(`${sat}: subjectWeights must sum to 1 (got ${sum.toFixed(3)})`);
      total += s.questionCount * s.marksPerQuestion;
    } else {
      // non-IT sections are shown with their marks but hold no questions
      if (!(s.marks > 0)) problems.push(`${sat}: non-practised sections need marks`);
      total += s.marks ?? 0;
    }
  });
  if (!practised) problems.push(`${at}: at least one practised (IT) section is required`);
  if (Math.abs(total - b.totalMarks) > 0.001) problems.push(`${at}: sections add up to ${total}, totalMarks is ${b.totalMarks}`);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`${files.length} blueprint(s) OK`);
