#!/usr/bin/env node
// Appends new rows to a starter-question file without rewriting the rows already there (plan E0).
// Usage: node scripts/append-questions.cjs <CODE> <new-rows.json>
//   <new-rows.json> is a JSON array in the importer row format (see check-questions.cjs and spec §8 of the
//   2026-10-06 design). Rows whose duplicate key (English stem + English options, as in contentHash) is already in
//   data/questions/<CODE>.json, or repeated in the input, are skipped. The file is then checked with check-questions.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const [code, input] = process.argv.slice(2);
if (!code || !input) {
  console.error("usage: node scripts/append-questions.cjs <CODE> <new-rows.json>");
  process.exit(1);
}
const file = path.join(__dirname, "..", "data", "questions", `${code}.json`);
if (!fs.existsSync(file)) {
  console.error(`no starter file for subject ${code}: ${file}`);
  process.exit(1);
}
const read = (p) => JSON.parse(fs.readFileSync(p, "utf8").replace(/^﻿/, ""));
const norm = (s) => String(s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
const key = (r) => [norm(r.stem_en), ...["a", "b", "c", "d", "e"].map((l) => r[`option_${l}_en`]).filter((o) => o != null && o !== "").map(norm)].join("|");

const rows = read(file);
const incoming = read(input);
if (!Array.isArray(incoming)) {
  console.error(`${input}: must be a JSON array`);
  process.exit(1);
}
const seen = new Set(rows.map(key));
let added = 0;
let skipped = 0;
for (const r of incoming) {
  if (r.subject_code && r.subject_code !== code) {
    console.error(`row "${String(r.stem_en).slice(0, 60)}" has subject_code ${r.subject_code}, not ${code}`);
    process.exit(1);
  }
  const k = key(r);
  if (seen.has(k)) { skipped++; continue; }
  seen.add(k);
  rows.push({ subject_code: code, ...r });
  added++;
}

// write to a temp copy (same file name: check-questions reads the subject code from it) and check it before
// replacing the original, so a bad row never lands in the bank
const tmpDir = fs.mkdtempSync(path.join(require("os").tmpdir(), "append-questions-"));
const tmp = path.join(tmpDir, `${code}.json`);
fs.writeFileSync(tmp, JSON.stringify(rows, null, 2) + "\n");
try {
  execFileSync(process.execPath, [path.join(__dirname, "check-questions.cjs"), tmp], { stdio: "pipe" });
} catch (err) {
  fs.rmSync(tmpDir, { recursive: true, force: true });
  console.error(`not appended: the result fails check-questions\n${err.stderr?.toString() || err.stdout?.toString()}`);
  process.exit(1);
}
fs.copyFileSync(tmp, file);
fs.rmSync(tmpDir, { recursive: true, force: true });
console.log(`${code}: +${added} rows (${skipped} duplicates skipped), ${rows.length} total`);
