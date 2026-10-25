// Phase 2, step 1: parse the transcriptions added in the 2026-10-15 session into question records.
// Output: tools/out/new-records.json (raw exam tags kept; normalisation happens in normalize.mjs).
// Usage: node tools/parse-new.mjs   (run from ex-question/)
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const BN = '০১২৩৪৫৬৭৮৯';
const toAscii = (s) => s.replace(/[০-৯]/g, (d) => String(BN.indexOf(d)));
const ls = (dir) => readdirSync(join(ROOT, dir)).filter((f) => /^\d\d_.*\.md$/.test(f)).sort();
// some transcriptions are saved with CRLF line endings; the line regexes below expect LF
const read = (p) => readFileSync(join(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
const content = (md) => md.split(/^## Content\s*$/m)[1]?.split(/^## Subject map/m)[0] ?? '';
const clean = (s) => s.replace(/\s+/g, ' ').trim();

// ---------- Subject rules ----------
// Chapter heading (bit to exabyte) -> default subject
const CHAPTER = [
  [/IP Address/i, 'NET'], [/RAID/i, 'OS'], [/Database|DB ACID|^sql$/i, 'DBMS'], [/Deadlock|Operating System|linux/i, 'OS'],
  [/k_map|K-map/i, 'DLD'], [/Computer Fundamentals/i, 'ICS'], [/C Programming/i, 'SPL'], [/Object oriented/i, 'OOP'],
  [/Cyber Security/i, 'NET'], [/Cloud computing/i, 'ICS'], [/Software Engineering/i, 'SE'], [/Discrete Math/i, 'ICS'],
  [/Microprocessor/i, 'MPI'], [/Data Structure/i, 'DSA'], [/Cache Memory/i, 'CA'], [/Digital Electronics/i, 'DLD'],
  [/Data Communication|Error Detection|Advanced Networking/i, 'NET'], [/Banking IT/i, 'SE'],
];
// Keyword overrides, applied to every record (old and new) so that one topic lives in one subject.
export const OVERRIDES = [
  [/\blinux\b|\bunix\b|chmod|\bgrep\b/i, 'OS'],
  [/\bRAID\b/, 'OS'],
  [/\bcache\b|AMAT|average memory access/i, 'CA'],
  [/\bRISC\b|\bCISC\b|pipelin|superscalar|super-scalar/i, 'CA'],
  [/multiplex|\bTDM\b|\bFDM\b|\bWDM\b|nyquist|modulation|line coding|\bPCM\b|shannon|\bSNR\b|BPSK|QPSK|hamming (code|distance)/i, 'COM'],
  [/cloud|big data|data ?cent(er|re)|virtual machine|\bVM\b|IaaS|PaaS|SaaS/i, 'ICS'],
  [/\bhtml|\bcss\b|javascript|\bDOM\b|canvas|web ?page|web hosting|\bPHP\b/i, 'ICS'],
  [/bipartite|strongly connected|n-1 edges|n vertices|euler|hamilton/i, 'GRAPH'],
  [/\bDFA\b|\bNFA\b|automat(a|on)|regular (expression|language)|context.free|grammar/i, 'TOC'],
  [/propositional|predicate logic|tautolog|\\cup|\\cap|find the sets/i, 'DM'],
  [/types of relations in DBMS|degree of relation/i, 'DBMS'],
  [/topological sort/i, 'DSA'],
  [/divide and conquer|dynamic programming/i, 'DSA'],
  [/malloc|calloc|^pointer|পয়েন্টার/i, 'SPL'],
  [/MS-?Excel|VLOOKUP|SUMIFS/i, 'ICS'],
];
const override = (text, subject) => {
  for (const [re, s] of OVERRIDES) if (re.test(text)) return s;
  return subject;
};
const chapterSubject = (h) => {
  for (const [re, s] of CHAPTER) if (re.test(h)) return s;
  return null;
};

// ---------- Tag extraction ----------
// bit to exabyte: *[...]* (sometimes missing a closing bracket); NTRCA bank: [১৫তম NTRCA] / [মার্ক ২]
function takeTags(text) {
  const tags = [];
  let marks = null;
  let t = text.replace(/\*\[([^\]*]+)\]?\*/g, (_, x) => (tags.push(clean(x)), ''));
  t = t.replace(/\*([A-Z][A-Za-z ,()/]*\d{4})\*/g, (_, x) => (tags.push(clean(x)), ''));
  t = t.replace(/\[মার্ক ([০-৯/]+)\]/g, (_, m) => ((marks = toAscii(m)), ''));
  t = t.replace(/\[([০-৯]+তম(?: ও [০-৯]+তম)? NTRCA)\]/g, (_, x) => (tags.push(x), ''));
  return { text: clean(t), tags, marks };
}

const records = [];
const add = (r) => records.push({ ...r, question: clean(r.question) });

// ---------- bit to exabyte (book pages, globally ordered by folder position) ----------
{
  const dir = 'bit to exabyte';
  let chapter = '', subject = null, cur = null;
  const flush = () => {
    if (!cur) return;
    const { text, tags } = takeTags(cur.lines.join('\n'));
    const subj = override(text, subject);
    add({
      source: 'book', pages: [...new Set(cur.pages)].map((p) => `${dir}/${p}`), label: `Q${cur.no}`, chapter,
      subject: subj, question: text.replace(/\*\((?:[^)]*continued[^)]*|[^)]*on page \d+[^)]*)\)\*/gi, ''),
      raw_tags: tags.concat(cur.extraTags), highlight: cur.hl, kind: /^\d+[a-p]$/.test(cur.no) ? 'mcq' : 'written',
    });
    cur = null;
  };
  for (const f of ls(dir)) {
    const body = content(read(join(dir, f)));
    let inCode = false;
    for (const line of body.split('\n')) {
      if (/^```/.test(line)) { inCode = !inCode; if (cur) cur.lines.push(line); continue; }
      if (inCode) { if (cur) cur.lines.push(line); continue; }
      const h = line.match(/^#{3,5}\s+(?:Previous Questions — )?(.+)$/);
      if (h) { flush(); chapter = h[1].trim(); subject = chapterSubject(chapter) ?? subject; continue; }
      const m = line.match(/^(\d+)\.\s+(.*)$/);
      // letter sub-items become separate questions only when the parent already carries a tag (MCQ list Q72 a–p)
      const sub = line.match(/^\s+([a-p])\.\s+(.*)$/);
      if (m) {
        flush();
        const hl = /^[★◆]/.test(m[2]) ? m[2][0] : null;
        cur = { no: m[1], lines: [m[2].replace(/^[★◆]\s*/, '')], pages: [f], hl, extraTags: [] };
      } else if (sub && cur && /\*\[/.test(cur.lines.join(' ')) && /\*\[/.test(sub[2])) {
        const parentNo = cur.no.replace(/[a-p]$/, '');
        flush();
        cur = { no: parentNo + sub[1], lines: [sub[2]], pages: [f], hl: null, extraTags: [] };
      } else if (sub && cur && /^\d+[a-p]$/.test(cur.no)) {
        const parentNo = cur.no.replace(/[a-p]$/, '');
        flush();
        cur = { no: parentNo + sub[1], lines: [sub[2]], pages: [f], hl: null, extraTags: [] };
      } else if (cur && line.trim()) {
        cur.lines.push(line);
        if (!cur.pages.includes(f)) cur.pages.push(f);
      }
    }
  }
  flush();
}

// ---------- NTRCA topic-wise bank (18th NTCRA/01–11) ----------
{
  const dir = '18th NTCRA';
  const SEC = { 1: 'SPL', 2: 'OOP', 3: 'DSA', 4: 'DBMS', 5: 'SE', 6: 'ICS', 7: 'OS', 8: 'NET', 9: 'ICS' };
  let subject = null, chapter = '', cur = null;
  const flush = () => {
    if (!cur) return;
    const { text, tags, marks } = takeTags(cur.lines.join('\n'));
    let subj = override(text, subject);
    if (/কৃত্রিম বুদ্ধিমত্তা|Artificial Intelligence|Neural Network/i.test(text)) subj = 'AI';
    if (/BFS|DFS|Spanning|Shortest Path|Dijkstra/i.test(text)) subj = 'DSA';
    add({ source: 'ntrca-bank', pages: [...new Set(cur.pages)].map((p) => `${dir}/${p}`), label: `Q${cur.no}`, chapter,
      subject: subj, question: text, raw_tags: tags, marks, kind: 'written' });
    cur = null;
  };
  for (const f of ls(dir).filter((x) => /qbank/.test(x))) {
    for (const line of content(read(join(dir, f))).split('\n')) {
      const h = line.match(/^###\s+([০-৯]+)\.\s+(.+)$/);
      if (h) { flush(); subject = SEC[toAscii(h[1])]; chapter = h[2].trim(); continue; }
      const h4 = line.match(/^####\s+(.+)$/);
      if (h4) {
        flush(); chapter = h4[1].trim();
        if (/ডিজিটাল লজিক/.test(chapter)) subject = 'DLD';
        if (/কম্পিউটার সংগঠন|আধুনিক প্রযুক্তি/.test(chapter)) subject = 'ICS';
        continue;
      }
      const m = line.match(/^([০-৯]+)\.\s+(.*)$/);
      if (m) { flush(); cur = { no: toAscii(m[1]), lines: [m[2]], pages: [f] }; }
      else if (cur && line.trim() && !/^\*\(/.test(line)) cur.lines.push(line);
    }
  }
  flush();
}

// ---------- helpers for files that carry a subject-map table ----------
function subjectTable(md) {
  const map = {};
  const part = md.split(/^## Subject map/m)[1] ?? '';
  for (const row of part.split('\n').filter((l) => /^\|\s*[0-9০-৯]/.test(l))) {
    const cells = row.split('|').map((c) => c.trim());
    const key = toAscii(cells[1]);
    const subj = cells[2].split(/[\s/(]/)[0];
    const rng = key.match(/^(\d+)[–-](\d+)$/);
    if (rng) for (let i = +rng[1]; i <= +rng[2]; i++) map[i] = subj;
    else map[key] = subj;
    if (cells[4] && /^\d+$/.test(cells[4])) map[`${key}#marks`] = +cells[4];
  }
  return map;
}

// ---------- 18th NTRCA Lecturer ICT 452 paper (12_, 13_) ----------
{
  const dir = '18th NTCRA';
  for (const f of ls(dir).filter((x) => /ntrca18-lecturer/.test(x))) {
    const md = read(join(dir, f));
    const map = subjectTable(md);
    let qno = null;
    for (const line of content(md).split('\n')) {
      const m = line.match(/^\s*(?:([০-৯]+)\.\s+)?\((ক|খ)\)\s+(.*?)\s+—\s+([০-৯+=]+)\s*$/);
      if (!m) continue;
      if (m[1]) qno = toAscii(m[1]);
      const part = m[2];
      const key = `${toAscii(qno)}${part}`;
      add({ source: 'paper', pages: [`${dir}/${f}`], label: `Q${qno}(${part})`, chapter: '18th NTRCA ICT-452 paper',
        subject: override(m[3], map[key] ?? map[qno] ?? null), question: m[3], raw_tags: ['18th NTRCA Lecturer ICT(452) 2024'],
        marks: map[`${key}#marks`] ?? toAscii(m[4]), kind: 'written' });
    }
  }
  // the Q6(খ) HTML table and Q9(খ) schema are on following lines; keep them as the question text says
}

// ---------- Petrobangla ANE suggested questions ----------
{
  const dir = 'suggestion based on previous yr';
  const files = ls(dir);
  let cur = null;
  const flush = () => {
    if (!cur) return;
    add({ source: 'suggestion', pages: [...new Set(cur.pages)].map((p) => `${dir}/${p}`), label: `Q${cur.no}`,
      chapter: 'Petrobangla ANE suggested questions', subject: cur.subject, question: cur.lines.join('\n'),
      raw_tags: [], suggested_for: 'Petrobangla Assistant Networking Engineer (ANE)', kind: 'written' });
    cur = null;
  };
  for (const f of files) {
    const md = read(join(dir, f));
    const map = subjectTable(md);
    let inCode = false;
    for (const line of content(md).split('\n')) {
      if (/^```/.test(line)) { inCode = !inCode; if (cur) cur.lines.push(line); continue; }
      const m = !inCode && line.match(/^(\d+)\.\s+(.*)$/);
      if (m) {
        flush();
        cur = { no: m[1], lines: [m[2].replace(/^:\s*/, '')], pages: [f], subject: null };
        cur.subject = override(m[2], map[m[1]] ?? null);
      } else if (cur && line.trim() && !/^\*\(/.test(line)) { cur.lines.push(line); if (!cur.pages.includes(f)) cur.pages.push(f); }
    }
  }
  flush();
  // subjects for continuation-only numbers come from the page where the question starts; fill gaps from neighbours
  for (const r of records.filter((x) => x.source === 'suggestion' && !x.subject)) r.subject = override(r.question, 'NET');
}

// ---------- Model test ----------
{
  const dir = 'model test';
  for (const f of ls(dir)) {
    const md = read(join(dir, f));
    const map = subjectTable(md);
    let cur = null;
    const flush = () => cur && add({ source: 'model-test', pages: [`${dir}/${f}`], label: `Q${cur.no}`, chapter: 'Bit to Exabyte Model Test 01 (2026-10-02)',
      subject: map[cur.no], question: cur.lines.join('\n'), raw_tags: [], kind: 'written' });
    for (const line of content(md).split('\n')) {
      const m = line.match(/^(\d+)\.\s+(.*)$/);
      if (m) { flush(); cur = { no: m[1], lines: [m[2]] }; } else if (cur && line.trim() && !/^\s*>/.test(line)) cur.lines.push(line);
    }
    flush();
  }
}

// ---------- Downloaded collections: duranta.app question bank, BUET M.Sc. papers from the web ----------
// Each <name>.records.json sidecar sits next to its <name>.md transcription in <dir>/<folder>/; exam records
// carry one exam tag, suggestion records none, so suggestions never add to a count. 'bit to exabyte' holds the
// sidecar for the book's PDF excerpt (super-ict-solutions-pdf/); its photographed pages are parsed above.
for (const dir of ['bit to exabyte', 'duranta','buet-msc-web', 'bcs-written-web', 'ntrca-written-web', 'bank-written-web', 'power-sector-web', 'ministry-ap-web', 'telecom-web', 'viva-web', 'model-test-web']) {
  const SUBJECTS = new Set(['PHY', 'ICS', 'EC', 'DLD', 'ELN', 'MPI', 'CA', 'COM', 'NET', 'SPL', 'OOP', 'DM', 'GRAPH', 'TOC', 'DSA', 'DBMS', 'SE', 'OS', 'AI', 'MATH']);
  let folders = [];
  try { folders = readdirSync(join(ROOT, dir), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort(); } catch { /* folder not downloaded */ }
  for (const folder of folders) {
    for (const file of readdirSync(join(ROOT, dir, folder)).filter((f) => f.endsWith('.records.json'))) {
    const md = file.replace(/\.records\.json$/, '.md');
    let recs;
    try { recs = JSON.parse(read(join(dir, folder, file))); } catch (e) { console.warn(`bad JSON ${dir}/${folder}/${file}: ${e.message}`); continue; }
    // "> Answer issue: …" notes in the .md follow the question they correct; attach each to the record whose
    // text matches the nearest question line above it
    const issues = new Map();
    try {
      const norm = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
      const lines = read(join(dir, folder, md)).split('\n');
      lines.forEach((l, i) => {
        const m = l.match(/^\s*>\s*\**Answer issue:?\**:?\s*(.*)$/i);
        if (!m) return;
        for (let j = i - 1; j >= 0 && j >= i - 12; j--) {
          const q = norm(lines[j].replace(/^\s*(\*\*)?(Q?\d+[.)]?|\([a-zক-ঙ]\)|[a-z][.)])\s*/i, ''));
          if (q.length < 12 || /^>/.test(lines[j].trim())) continue;
          // the longest prefix first: two stems that open the same way ("Which one of the following is
          // false with …") share their first 30 characters
          const has = (key) => recs.find((r) => r.question && norm(r.question).includes(key));
          const hit = has(q.slice(0, 80)) ?? has(q.slice(0, 30));
          if (hit) { issues.set(hit, m[1].trim()); break; }
        }
      });
    } catch { /* no .md beside the sidecar */ }
    for (const r of recs) {
      if (!r.question || !SUBJECTS.has(r.subject)) { console.warn(`skip ${folder} ${r.label}: subject ${r.subject}`); continue; }
      // an exam question whose paper name was not printed stays an exam record, just without a tag
      const isExam = r.doc_type === 'exam';
      // viva questions are counted apart from written exams (viva_mentions), so they carry no exam tag
      const isViva = r.kind === 'viva';
      const origin = dir === 'duranta' ? 'duranta' : dir === 'bit to exabyte' ? 'book' : 'web';
      add({ source: isViva ? 'viva-compilation' : isExam ? origin : `${origin}-suggestion`, pages: [`${dir}/${folder}/${md}`], label: r.label,
        chapter: r.md_anchor ?? folder, subject: override(r.question, r.subject), question: r.question,
        raw_tags: isExam && !isViva && r.exam ? [r.exam] : [], marks: r.marks ?? null, kind: ['mcq', 'viva'].includes(r.kind) ? r.kind : 'written',
        exam_taker: r.exam_taker ?? null, answer_issue: issues.get(r) ?? null });
    }
    }
  }
}

// ---------- Standard Pattern (topic index, kept apart from the questions) ----------
const pattern = [];
for (const f of ls('Standard Pattern')) {
  for (const row of content(read(join('Standard Pattern', f))).split('\n').filter((l) => /^\| \d/.test(l))) {
    const c = row.split('|').map((x) => x.trim());
    if (c.length >= 4 && /^[A-Z]+$/.test(c[3])) pattern.push({ no: c[1], topic: c[2], subject: c[3], page: `Standard Pattern/${f}` });
  }
}

mkdirSync(join(ROOT, 'tools/out'), { recursive: true });
writeFileSync(join(ROOT, 'tools/out/new-records.json'), JSON.stringify(records, null, 1));
writeFileSync(join(ROOT, 'by-subject/pattern-topics.json'), JSON.stringify(pattern, null, 1));
const by = (k) => records.reduce((m, r) => ((m[r[k]] = (m[r[k]] || 0) + 1), m), {});
console.log('records', records.length, by('source'));
console.log('subjects', by('subject'));
console.log('pattern topics', pattern.length);
console.log('records with tags', records.filter((r) => r.raw_tags.length).length, 'tags', records.reduce((n, r) => n + r.raw_tags.length, 0));
