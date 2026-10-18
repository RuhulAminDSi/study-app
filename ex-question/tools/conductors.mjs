// Exam takers per exam (plan C0.2). Collects the taker printed on each transcribed paper (coaching headers,
// unverified) from the *.records.json sidecars, and keeps the hand-entered `verified` taker (only from a
// circular, result notice or news report) from the previous run of exam-conductors.json.
// Usage: node tools/conductors.mjs   (run from ex-question/, after build-exam-tags.mjs)
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parseTag, examName } from './exams.mjs';

const ROOT = process.cwd();
const OUT = join(ROOT, 'exam-conductors.json');
const DIRS = ['duranta', 'buet-msc-web', 'bcs-written-web', 'ntrca-written-web', 'bank-written-web', 'power-sector-web', 'ministry-ap-web', 'telecom-web', 'viva-web', 'model-test-web'];

const prev = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')).exams : {};
const exams = {};
// one spelling per institution: "FBS, DU" / "FBS" -> "FBS (DU)", "IBA, DU" -> "IBA (DU)", "Arts Faculty, DU" -> "Arts Faculty (DU)"
const ALIAS = [[/^FBS\b.*/i, 'FBS (DU)'], [/^IBA\b.*/i, 'IBA (DU)'], [/^Arts Faculty\b.*/i, 'Arts Faculty (DU)'], [/^DU CSE$/i, 'CSE Dept (DU)']];
const norm = (t) => {
  const s = t.replace(/\s+/g, ' ').replace(/[.;,]+$/, '').trim();
  for (const [re, name] of ALIAS) if (re.test(s)) return name;
  return s;
};

for (const dir of DIRS) {
  if (!existsSync(join(ROOT, dir))) continue;
  for (const folder of readdirSync(join(ROOT, dir), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
    for (const file of readdirSync(join(ROOT, dir, folder)).filter((f) => f.endsWith('.records.json'))) {
      let recs;
      try { recs = JSON.parse(readFileSync(join(ROOT, dir, folder, file), 'utf8')); } catch { continue; }
      for (const r of recs) {
        if (r.doc_type !== 'exam' || !r.exam || !r.exam_taker || r.kind === 'viva') continue;
        for (const e of parseTag(r.exam)) {
          const name = examName(e);
          exams[name] ??= { printed: {}, verified: prev[name]?.verified ?? null };
          const taker = norm(r.exam_taker);
          exams[name].printed[taker] ??= new Set();
          exams[name].printed[taker].add(`${dir}/${folder}/${file.replace(/\.records\.json$/, '.md')}`);
        }
      }
    }
  }
}
// keep hand-verified entries for exams no sidecar mentions
for (const [name, v] of Object.entries(prev)) if (v.verified && !exams[name]) exams[name] = { printed: {}, verified: v.verified };

const out = {};
for (const name of Object.keys(exams).sort()) {
  const e = exams[name];
  const printed = Object.entries(e.printed).map(([taker, srcs]) => ({ taker, sources: [...srcs].sort() }));
  out[name] = { printed, conflict: printed.length > 1, verified: e.verified };
}
writeFileSync(OUT, JSON.stringify({
  _note: 'printed = exam taker as printed on coaching/solution headers (unverified). verified = { taker, source } entered by hand only from a circular, result notice or news report; it is the only value products may show as fact. Rebuilt by tools/conductors.mjs, which keeps verified entries.',
  exams: out,
}, null, 1) + '\n');
const list = Object.values(out);
console.log(`exams with a printed taker ${list.length} | conflicts ${list.filter((x) => x.conflict).length} | verified ${list.filter((x) => x.verified).length}`);
