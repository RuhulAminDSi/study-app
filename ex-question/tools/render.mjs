// Phase 2, step 4: write by-subject/<NN>_<CODE>.md and INDEX.md from questions.json + frequency.json.
// Every question shows where it was taken from: the exams it was asked in and each source document (linked).
// Usage: node tools/render.mjs   (after merge.mjs)
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, copyFileSync } from 'node:fs';

const recs = JSON.parse(readFileSync('by-subject/questions.json', 'utf8'));
const freq = JSON.parse(readFileSync('by-subject/frequency.json', 'utf8'));
const pattern = JSON.parse(readFileSync('by-subject/pattern-topics.json', 'utf8'));
const tags = JSON.parse(readFileSync('exam-tags.json', 'utf8'));
const byId = Object.fromEntries(recs.map((r) => [r.id, r]));
const COUNTED = new Set(['bcs', 'ntrca', 'bpsc', 'bank', 'public-body', 'admission']);
const examType = Object.fromEntries(tags.exams.map((e) => [e.name, e.type]));

const SUBJECTS = [
  ['PHY', 'Basic Physics'], ['ICS', 'Introduction to Computer Systems'], ['EC', 'Electrical Circuits'], ['DLD', 'Digital Logic Design'],
  ['ELN', 'Basic Electronics'], ['MPI', 'Microprocessor and Interfacing'], ['CA', 'Computer Architecture'], ['COM', 'Communication Theory'],
  ['NET', 'Computer Networking and Security'], ['SPL', 'Structured Programming (C)'], ['OOP', 'Object Oriented Programming'],
  ['DM', 'Discrete Mathematics'], ['GRAPH', 'Graph Theory'], ['TOC', 'Theory of Computation'], ['DSA', 'Data Structures and Algorithms'],
  ['DBMS', 'Database Systems'], ['SE', 'Software Engineering'], ['OS', 'Operating System'], ['AI', 'Artificial Intelligence'],
  ['BAN', 'Bangla'], ['ENG', 'English'], ['MATH', 'Mathematics'], ['GK', 'General Knowledge'],
];
const fileOf = (code) => `${String(SUBJECTS.findIndex((s) => s[0] === code) + 1).padStart(2, '0')}_${code}.md`;

// back up the previous generation once
const BK = 'tools/out/backup-before-phase2';
if (!existsSync(BK)) {
  mkdirSync(`${BK}/by-subject`, { recursive: true });
  copyFileSync('INDEX.md', `${BK}/INDEX.md`);
  for (const f of readdirSync('by-subject').filter((x) => x.endsWith('.md'))) copyFileSync(`by-subject/${f}`, `${BK}/by-subject/${f}`);
}

const enc = (p) => p.split('/').map(encodeURIComponent).join('/');
const link = (page) => {
  const [path, anchor] = page.split('#');
  const md = `[${path}](../${enc(path)}${anchor ? `#${anchor}` : ''})`;
  const img = path.replace(/\.md$/, '.jpg');
  return existsSync(img) ? `${md} · [image](../${enc(img)})` : md;
};
const one = (s) => s.replace(/\s+/g, ' ').trim();
const short = (s, n = 110) => {
  const t = one(s.replace(/```[\s\S]*?```/g, '[code]'));
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};
const askedLine = (names) => (names.length ? names.join('; ') : 'no dated exam tag on the source');
const KIND = { written: 'Written', mcq: 'MCQ', viva: 'Viva', theory: 'Study note', example: 'Worked example' };

function sourceLines(g) {
  // one line per record: where it was printed, under which label, and the page it is on
  return g.records.map((id) => {
    const r = byId[id];
    const what = r.origin === 'viva-compilation' ? `${r.source} (viva)` : r.source;
    return `  - ${what}${r.label ? `, ${r.label}` : ''} — ${r.pages.map(link).join('; ')}`;
  });
}

function block(g) {
  const reps = g.records.map((id) => byId[id]);
  const withAns = reps.find((r) => r.answer_summary);
  const fix = reps.find((r) => r.answer_issue);
  const kind = KIND[g.kind] ?? g.kind;
  const lines = [
    `### ${short(g.question, 90)} <sub>${g.group}</sub>`, '',
    `*${kind}${g.highlighted ? ' · marked important in the Bit to Exabyte book' : ''}*`, '',
    g.question.trim(), '',
    `- **Asked in (${g.asked_count}):** ${askedLine(g.asked_in)}`,
  ];
  if (g.also_in.length) lines.push(`- **Also asked in (not counted):** ${g.also_in.join('; ')}`);
  if (g.viva_mentions) lines.push(`- **Viva mentions:** ${g.viva_mentions}`);
  lines.push('- **Source:**', ...sourceLines(g));
  if (withAns) lines.push(`- **Printed answer:** ${one(withAns.answer_summary)}`);
  if (fix) lines.push(`- **Correction:** ${one(fix.answer_issue)}`);
  lines.push('');
  return lines.join('\n');
}

const clusterStats = (groups) => {
  const m = {};
  for (const g of groups) {
    const c = (m[g.cluster] ??= { cluster: g.cluster, exams: new Set(), questions: 0, score: 0, vivas: 0 });
    g.asked_in.forEach((e) => c.exams.add(e));
    c.questions++;
    c.score += g.score;
    c.vivas += g.viva_mentions;
  }
  return Object.values(m).sort((a, b) => b.exams.size - a.exams.size || b.score - a.score || b.questions - a.questions);
};

const indexRows = [];
for (const [code, name] of SUBJECTS) {
  const groups = freq.filter((g) => g.subject === code);
  const rs = recs.filter((r) => r.subject === code);
  if (!rs.length) continue;
  const exams = new Set(groups.flatMap((g) => g.asked_in));
  const stats = clusterStats(groups);
  const kinds = rs.reduce((m, r) => ((m[r.kind] = (m[r.kind] || 0) + 1), m), {});
  const corrections = rs.filter((r) => r.answer_issue).length;
  const top = [...groups].sort((a, b) => b.score - a.score || b.asked_count - a.asked_count).slice(0, 20).filter((g) => g.asked_count || g.viva_mentions);
  const pat = pattern.filter((p) => p.subject === code);

  const out = [
    `# ${name} (${code}): past exam questions`, '',
    'Every question from the photographed sheets, books and PDFs in `ex-question/` that belongs to this subject. The same question asked in several exams, or printed in several sources, is shown once. For each question you get **where it was asked** (the exams, with names normalised in `../exam-tags.json`) and **where it was taken from** (each source document, linked to its transcription and image).', '',
    `- **Distinct questions:** ${groups.length} (from ${rs.length} records: ${Object.entries(kinds).map(([k, v]) => `${KIND[k] ?? k} ${v}`).join(', ')})`,
    `- **Exams it appears in:** ${exams.size}`,
    `- **Corrections to printed answers:** ${corrections}`,
    '- **How counts work:** "Asked in (N)" counts different government/public-sector recruitment exams (BCS, NTRCA, BPSC, state banks, public bodies) and BUET M.Sc. admission tests. Private-bank exams and compiled viva experiences are listed but not counted. Coaching suggestion sheets and model tests never add to the count.', '',
    '## Most-asked topics', '',
    '| # | Topic | Exams | Questions | Viva mentions |', '|---|---|---|---|---|',
    ...stats.map((c, i) => `| ${i + 1} | [${c.cluster}](#${c.cluster.toLowerCase().replace(/[^\p{L}\p{N} -]/gu, '').replace(/ /g, '-')}) | ${c.exams.size} | ${c.questions} | ${c.vivas} |`), '',
  ];
  if (top.length) {
    out.push('## Most-asked questions', '', 'Ranked by the number of exams, with recent exams (2022 onwards) weighted higher.', '');
    top.forEach((g, i) => {
      out.push(`${i + 1}. **${short(g.question, 160)}**  `);
      out.push(`   Asked in (${g.asked_count}): ${askedLine(g.asked_in)}${g.viva_mentions ? ` · viva mentions: ${g.viva_mentions}` : ''}  `);
      out.push(`   Source: ${[...new Set(g.records.map((id) => byId[id].source))].join(' · ')} — see [${g.group}](#${g.group.toLowerCase()})`);
    });
    out.push('');
  }
  if (pat.length) {
    out.push('## Coaching "standard pattern" topics (not counted)', '', 'Topics the Bit to Exabyte question book lists as its standard pattern for this subject (from `../Standard Pattern/`). They show what the coaching expects, not what was asked.', '');
    pat.forEach((p) => out.push(`- ${p.no}. ${p.topic} — [${p.page}](../${enc(p.page)})`));
    out.push('');
  }
  out.push('## All questions by topic', '');
  for (const c of stats) {
    out.push(`## ${c.cluster}`, '');
    for (const g of groups.filter((x) => x.cluster === c.cluster).sort((a, b) => b.score - a.score)) {
      out.push(`<a id="${g.group.toLowerCase()}"></a>`, '', block(g));
    }
  }
  writeFileSync(`by-subject/${fileOf(code)}`, out.join('\n'));
  indexRows.push({ code, name, groups: groups.length, recs: rs.length, kinds, corrections, exams: exams.size, top: stats[0]?.cluster ?? '' });
}

// ---------- INDEX.md ----------
const overallTop = [...freq].sort((a, b) => b.score - a.score || b.asked_count - a.asked_count).slice(0, 40);
const perExam = {};
for (const g of freq) for (const e of g.asked_in.concat(g.also_in)) ((perExam[e] ??= { qs: 0, subj: {} }).qs++, (perExam[e].subj[g.subject] = (perExam[e].subj[g.subject] || 0) + 1));
const folders = {};
for (const r of recs) for (const p of r.pages) {
  const [folder] = p.split('#')[0].split('/').length > 1 ? p.split('/') : ['.'];
  const page = p.split('#')[0];
  ((folders[folder] ??= {})[page] ??= new Set()).add(r.subject);
}
const idx = [
  '# Past exam questions: index', '',
  'Photographed question and solution sheets (BCS, NTRCA, BPSC, bank, BUET-run recruitment exams, BUET M.Sc. admission tests, vivas), the Bit to Exabyte question books and suggestion sheets, with a Markdown transcription next to every image (original image names in `image-rename-log.csv`). Text extracted from the PDFs is in `PDF-TEXT/`. `by-subject/` regroups every question by syllabus subject and topic, ranks topics and questions by how many exams asked them, and shows for every question **which exams asked it and which source it was taken from**. Data: `by-subject/questions.json` (every record), `by-subject/frequency.json` (one entry per distinct question), `exam-tags.json` (exam-name normalisation), `by-subject/pattern-topics.json` (coaching topic index). Rebuild with `node tools/parse-new.mjs && node tools/build-exam-tags.mjs && node tools/merge.mjs && node tools/render.mjs`. The handwritten revision notebooks built from these questions are catalogued in [HANDWRITTEN-NOTES.md](HANDWRITTEN-NOTES.md).', '',
  `Total: ${recs.length} records → ${freq.length} distinct questions, ${tags.exams.length} exams, ${recs.filter((r) => r.answer_issue).length} printed answers corrected.`, '',
  '## By subject', '',
  '| # | Subject | Distinct questions | Records | Written | MCQ | Viva | Exams | Most-asked topic | Corrections |', '|---|---|---|---|---|---|---|---|---|---|',
  ...indexRows.map((r) => `| ${SUBJECTS.findIndex((s) => s[0] === r.code) + 1} | [${r.name}](by-subject/${fileOf(r.code)}) | ${r.groups} | ${r.recs} | ${r.kinds.written ?? 0} | ${r.kinds.mcq ?? 0} | ${r.kinds.viva ?? 0} | ${r.exams} | ${r.top} | ${r.corrections} |`), '',
  '## Most-asked questions (all subjects)', '',
  '| # | Subject | Question | Exams | Asked in | Source |', '|---|---|---|---|---|---|',
  ...overallTop.map((g, i) => `| ${i + 1} | ${g.subject} | ${short(g.question, 90).replace(/\|/g, '\\|')} | ${g.asked_count} | ${g.asked_in.join('; ')} | [${g.group}](by-subject/${fileOf(g.subject)}#${g.group.toLowerCase()}) |`), '',
  '## By exam', '',
  '| Exam | Type | Distinct questions | Subjects |', '|---|---|---|---|',
  ...Object.entries(perExam).sort((a, b) => b[1].qs - a[1].qs || a[0].localeCompare(b[0])).map(([e, v]) =>
    `| ${e} | ${examType[e] ?? ''}${COUNTED.has(examType[e]) ? '' : ' (not counted)'} | ${v.qs} | ${Object.entries(v.subj).sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s} ${n}`).join(', ')} |`), '',
  '## By folder (page → subjects)', '',
];
for (const f of Object.keys(folders).sort()) {
  idx.push(`### ${f}`, '');
  for (const [p, s] of Object.entries(folders[f]).sort()) idx.push(`- [${p.split('/').pop()}](${enc(p)}) — ${[...s].join(', ')}`);
  idx.push('');
}
writeFileSync('INDEX.md', idx.join('\n'));
console.log('subjects written', indexRows.length, '| INDEX top question:', short(overallTop[0].question, 60));
