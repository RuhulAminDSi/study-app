// Phase 2, step 3: merge old + new records, normalise exams, cluster topics, find duplicates, rank by frequency.
// Inputs : by-subject/questions.json (the original 956 records, read from tools/out/questions.orig.json once saved),
//          tools/out/new-records.json, exam-tags.json
// Outputs: by-subject/questions.json (all records, with group/cluster/exams/asked_in/source)
//          by-subject/frequency.json (one entry per distinct question, ranked within subject)
// Usage  : node tools/merge.mjs
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs';
import { parseTag, examKey, examName, examType, COUNTED, OLD_EXAMS } from './exams.mjs';
import { OVERRIDES } from './parse-new.mjs';
import { cluster } from './topics.mjs';

// keep a pristine copy of the original records so the merge can be re-run
const ORIG = 'tools/out/questions.orig.json';
if (!existsSync(ORIG)) copyFileSync('by-subject/questions.json', ORIG);
const old = JSON.parse(readFileSync(ORIG, 'utf8'));
const neu = JSON.parse(readFileSync('tools/out/new-records.json', 'utf8'));
const tagTable = JSON.parse(readFileSync('exam-tags.json', 'utf8'));
const examByKey = Object.fromEntries(tagTable.exams.map((e) => [e.key, e]));

const SOURCE_NOTE = {
  book: 'Bit to Exabyte, Super ICT 150++ Questions Book (chapter-wise previous questions)',
  'ntrca-bank': 'Bit to Exabyte, NTRCA Computer Science & ICT written question bank',
  paper: 'Question paper',
  suggestion: 'Bit to Exabyte, Petrobangla ANE suggested questions (coaching suggestion, not a dated paper)',
  'model-test': 'Bit to Exabyte Model Test 01, 2 Oct 2026 (coaching mock, not a real paper)',
  duranta: 'duranta.app question bank (coaching compilation of the question paper)',
  'duranta-suggestion': 'duranta.app question bank (coaching suggestion, not a dated paper)',
  web: 'Question paper found on the web (see the folder README for the URL)',
  'viva-compilation': 'Viva questions recalled by candidates (counted apart from written exams)',
  'web-suggestion': 'Web suggestion or sample sheet (not a dated paper)',
};
const subjOverride = (text, s) => {
  for (const [re, x] of OVERRIDES) if (re.test(text)) return x;
  return s;
};

// ---------- unify ----------
const all = [];
for (const r of old) {
  const m = OLD_EXAMS[r.exam];
  let keys = [];
  let kind = 'paper';
  if (Array.isArray(m)) keys = m.map(examKey);
  else if (m === 'by-date') {
    const y = +String(r.date).slice(0, 4);
    keys = [examKey(r.exam.startsWith('BPSC') ? { org: 'BPSC', post: 'AP', year: y } : { org: 'BSCL', post: 'AE(CSE)', year: y })];
  } else if (m === 'viva') kind = 'viva-compilation';
  else if (m === 'outline') kind = 'course-outline';
  else if (r.exam == null) kind = 'paper-not-shown';
  const subject = subjOverride(`${r.topic} ${r.question}`, r.subject);
  all.push({
    id: r.id, subject, subject_was: subject !== r.subject ? r.subject : undefined, kind: r.kind, topic: r.topic,
    question: r.question, marks: r.marks, label: r.label, pages: r.pages,
    origin: kind, exams: keys, printed_exam: r.exam, post: r.post, date: r.date,
    source: r.exam ? `${r.exam}${r.date ? ` (${r.date})` : ''}` : 'Paper not shown on the source sheet',
    answer_summary: r.answer_summary, answer_ok: r.answer_ok, answer_issue: r.answer_issue,
  });
}
let n = old.length;
for (const r of neu) {
  const keys = [...new Set(r.raw_tags.flatMap((t) => parseTag(t).map(examKey)))];
  all.push({
    id: `Q${String(++n).padStart(4, '0')}`, subject: r.subject, kind: r.kind, topic: null, question: r.question,
    marks: r.marks ?? null, label: r.label, pages: r.pages, origin: r.source, exams: keys,
    printed_exam: r.raw_tags.join('; ') || null, chapter: r.chapter, highlight: r.highlight ?? null,
    suggested_for: r.suggested_for, source: SOURCE_NOTE[r.source] + (r.chapter && r.source !== 'paper' ? ` — ${r.chapter}` : ''),
    answer_issue: r.answer_issue ?? null, answer_ok: r.answer_issue ? false : undefined,
  });
}

// ---------- clusters ----------
for (const r of all) r.cluster = cluster(r.subject, r.question, r.topic);

// ---------- duplicate detection ----------
const STOP = new Set('the a an of and or to in on for is are what which how with by from be this that it its as at write explain describe define discuss difference between differentiate briefly brief example examples give using use draw following find show their your you do does can তা কী কি এর এবং ও করুন লিখুন উদাহরণসহ বর্ণনা ব্যাখ্যা মধ্যে পার্থক্য সম্পর্কে বলতে বোঝায়'.split(' '));
const tokens = (s) => s.toLowerCase().replace(/\*\[[^\]]*\]\*|\[[^\]]*\]/g, ' ').replace(/[০-৯]/g, (d) => '০১২৩৪৫৬৭৮৯'.indexOf(d))
  .replace(/[^\p{L}\p{N}+#./]+/gu, ' ').split(' ').filter((w) => w && !STOP.has(w) && w.length > 1);
for (const r of all) r._t = new Set(tokens(r.question));
const jacc = (a, b) => {
  let i = 0;
  for (const x of a) if (b.has(x)) i++;
  return i / (a.size + b.size - i || 1);
};
function signatures(q) {
  const out = new Set();
  const t = q.replace(/[০-৯]/g, (d) => '০১২৩৪৫৬৭৮৯'.indexOf(d));
  for (const m of t.matchAll(/\b\d{1,3}(?:\s*,\s*\d{1,3}){3,}\b/g)) out.add('seq:' + m[0].replace(/\s+/g, ''));
  for (const m of t.matchAll(/\b\d{1,3}(?:\.\d{1,3}){3}\s*(?:\/\s*\d{1,2}|,?\s*(?:and\s+)?(?:subnet\s+)?mask:?\s*\d{1,3}(?:\.\d{1,3}){3})/gi))
    out.add('ip:' + m[0].replace(/[^\d./]/g, ' ').trim().split(/\s+/).join('|'));
  for (const m of t.matchAll(/\b[a-h]{7,}\b/g)) out.add('str:' + m[0]);
  return out;
}

// union-find over records of the same subject
const parent = all.map((_, i) => i);
const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
const bySubj = {};
all.forEach((r, i) => (bySubj[r.subject] ??= []).push(i));
for (const idx of Object.values(bySubj)) {
  // exact text (after normalisation) always merges, however short the question
  const seen = {};
  for (const i of idx) {
    const k = [...all[i]._t].join(' ');
    if (k && seen[k] !== undefined) parent[find(i)] = find(seen[k]);
    else seen[k] = i;
  }
  // same numeric problem, different wording: share a minterm list / number sequence (≥4 numbers),
  // an IP address with mask or prefix, or a traversal string like "dbeafcg"
  const sigOwner = {};
  for (const i of idx) {
    for (const sig of signatures(all[i].question)) {
      if (sigOwner[sig] !== undefined) parent[find(i)] = find(sigOwner[sig]);
      else sigOwner[sig] = i;
    }
  }
  for (let a = 0; a < idx.length; a++) {
    const A = all[idx[a]];
    if (A._t.size < 3) continue;
    for (let b = a + 1; b < idx.length; b++) {
      const B = all[idx[b]];
      if (B._t.size < 3) continue;
      const small = Math.min(A._t.size, B._t.size), big = Math.max(A._t.size, B._t.size);
      if (small / big < 0.6) continue;
      if (jacc(A._t, B._t) < 0.75) continue;
      // same wording but different numbers is a different problem (e.g. /28 vs /23 split into 4 subnets)
      const sa = signatures(A.question), sb = signatures(B.question);
      if (sa.size && sb.size && ![...sa].some((x) => sb.has(x))) continue;
      parent[find(idx[a])] = find(idx[b]);
    }
  }
}
const groups = {};
all.forEach((r, i) => (groups[find(i)] ??= []).push(r));
let g = 0;
const freq = [];
const weight = (y) => (!y ? 0.8 : y >= 2022 ? 1.5 : y >= 2018 ? 1 : 0.8);
for (const members of Object.values(groups)) {
  const gid = `G${String(++g).padStart(4, '0')}`;
  members.forEach((m) => (m.group = gid));
  const keys = [...new Set(members.flatMap((m) => m.exams))];
  const counted = keys.filter((k) => COUNTED.has(examByKey[k]?.type));
  const other = keys.filter((k) => !COUNTED.has(examByKey[k]?.type));
  const vivas = members.filter((m) => m.origin === 'viva-compilation').length;
  // representative wording: prefer a dated exam paper, then a record with a printed answer, then the longest text
  const rank = (m) => (m.exams.length ? 4 : 0) + (m.origin !== 'viva-compilation' ? 2 : 0) + (m.answer_summary ? 1 : 0);
  const rep = [...members].sort((a, b) => rank(b) - rank(a) || b.question.length - a.question.length)[0];
  freq.push({
    group: gid, subject: rep.subject, cluster: rep.cluster, question: rep.question, kind: rep.kind,
    asked_count: counted.length,
    score: +(counted.reduce((s, k) => s + weight(examByKey[k]?.year), 0) + vivas * 0.3).toFixed(1),
    asked_in: counted.map((k) => examByKey[k]?.name ?? k).sort(),
    also_in: other.map((k) => examByKey[k]?.name ?? k).sort(),
    viva_mentions: vivas,
    in_coaching: [...new Set(members.filter((m) => ['suggestion', 'model-test', 'ntrca-bank', 'book', 'duranta-suggestion', 'web-suggestion'].includes(m.origin) && !m.exams.length).map((m) => m.source))],
    highlighted: members.some((m) => m.highlight),
    records: members.map((m) => m.id),
    pages: [...new Set(members.flatMap((m) => m.pages))],
  });
}
for (const r of all) {
  r.asked_in = r.exams.map((k) => examByKey[k]?.name ?? k);
  delete r._t;
  for (const k of Object.keys(r)) if (r[k] === undefined) delete r[k];
}
freq.sort((a, b) => a.subject.localeCompare(b.subject) || b.score - a.score || b.asked_count - a.asked_count);

writeFileSync('by-subject/questions.json', JSON.stringify(all, null, 1));
writeFileSync('by-subject/frequency.json', JSON.stringify(freq, null, 1));

const merged = freq.filter((f) => f.records.length > 1);
console.log('records', all.length, '| distinct questions', freq.length, '| merged groups', merged.length, '| records folded', merged.reduce((s, f) => s + f.records.length - 1, 0));
console.log('subject changes on old records', all.filter((r) => r.subject_was).length);
const other = {};
all.filter((r) => r.cluster === 'Other').forEach((r) => (other[r.subject] = (other[r.subject] || 0) + 1));
console.log('unclustered by subject', other);
