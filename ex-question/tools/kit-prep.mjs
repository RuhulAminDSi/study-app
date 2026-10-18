// Prepares one lesson for Exam Kit authoring (plan E0, step 1 of /exam-kit).
// Usage (from ex-question/): node tools/kit-prep.mjs <slug>
// Writes tools/out/kit/<slug>/: pyq.json (every PYQ group of the lesson), lesson.md (seed lesson text, EN),
// note.md (the note set's Markdown companion, when one exists), bank.json (current bank questions for the lesson)
// and gaps.md (high-frequency clusters the lesson/note may not cover, and the quotas still missing).
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const APP = join(ROOT, '..');
const json = (p) => JSON.parse(readFileSync(p, 'utf8'));
const slug = process.argv[2];
if (!slug) { console.error('usage: node tools/kit-prep.mjs <slug>'); process.exit(1); }

const freq = json(join(ROOT, 'by-subject/frequency.json'));
const { map, _newLessons: newLessons } = json(join(ROOT, 'lesson-map.json'));
const manifest = json(join(APP, 'server/data/notes/manifest.json')).notes;
const SUBJECTS = { 2: 'ICS', 4: 'DLD', 7: 'CA', 9: 'NET', 10: 'SPL', 11: 'OOP', 15: 'DSA', 16: 'DBMS', 17: 'SE', 18: 'OS', 19: 'AI' };
const QUOTA = { mcq: 30, written: 10, practical: 3 };

const entry = manifest.find((n) => n.slug === slug && n.mode === 'replace');
const lesson = entry
  ? { chapter: entry.chapterNumber, title: entry.lessonTitleEn, isNew: false }
  : newLessons[slug] ? { chapter: newLessons[slug].chapter, title: newLessons[slug].title, isNew: true } : null;
if (!lesson) { console.error(`unknown slug ${slug}`); process.exit(1); }
const subject = SUBJECTS[lesson.chapter];
const out = join(ROOT, 'tools/out/kit', slug);
mkdirSync(out, { recursive: true });

// PYQ groups of this lesson
const groups = freq.filter((g) => g.subject === subject && (map[g.group] ?? map[`${g.subject}::${g.cluster}`]) === slug)
  .sort((a, b) => b.score - a.score || b.asked_count - a.asked_count);
writeFileSync(join(out, 'pyq.json'), JSON.stringify(groups, null, 1));

// seed lesson text (existing lessons only)
let seedText = '';
if (!lesson.isNew) {
  const file = readdirSync(join(APP, 'server/data/modules')).find((f) => f.startsWith(`${lesson.chapter}_`));
  const mod = Object.values(require(join(APP, 'server/data/modules', file)))[0];
  const l = mod.lessons.find((x) => x.title === lesson.title);
  if (l) seedText = `# ${l.title}\n\n${l.content}\n\n## Takeaways\n${(l.takeaways ?? []).map((t) => `- ${t}`).join('\n')}\n`;
}
writeFileSync(join(out, 'lesson.md'), seedText || '(new revision lesson: no seed text)\n');

// note set Markdown companion
const mdDir = join(APP, 'notes/md');
let note = '';
if (existsSync(mdDir)) {
  for (const d of readdirSync(mdDir)) {
    const f = join(mdDir, d, `${slug}.en.md`);
    if (existsSync(f)) { note = readFileSync(f, 'utf8'); break; }
  }
}
writeFileSync(join(out, 'note.md'), note || '(no note Markdown found)\n');

// current bank questions for the lesson (by lesson_slug, or by the seed lesson title as topic)
const bankFile = join(APP, 'server/data/questions', `${subject}.json`);
const bank = existsSync(bankFile) ? json(bankFile).filter((q) => q.lesson_slug === slug || (!q.lesson_slug && q.topic === lesson.title)) : [];
writeFileSync(join(out, 'bank.json'), JSON.stringify(bank, null, 1));

// gaps: clusters asked >= 3 times whose name words are rare in the lesson + note text
const hay = `${seedText}\n${note}`.toLowerCase();
const clusters = {};
for (const g of groups) clusters[g.cluster] = (clusters[g.cluster] ?? 0) + g.asked_count;
const words = (s) => s.toLowerCase().replace(/\(.*?\)/g, ' ').split(/[^a-z0-9+]+/).filter((w) => w.length > 3 && !['with', 'from', 'basics', 'other'].includes(w));
const gapRows = Object.entries(clusters).filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).map(([c, n]) => {
  const ws = words(c);
  const hits = ws.filter((w) => hay.includes(w)).length;
  return { c, n, cover: ws.length ? hits / ws.length : 1 };
});
const count = (t) => bank.filter((q) => q.type === t).length;
const have = { mcq: count('mcq'), written: count('written'), practical: count('programming') + bank.filter((q) => q.type === 'written' && (q.styles ?? []).some((s) => ['numerical', 'sql_write', 'code_write'].includes(s))).length };
const topAsked = groups.filter((g) => g.asked_count >= 2).slice(0, 25);

writeFileSync(join(out, 'gaps.md'), [
  `# Kit prep: ${slug}`,
  '',
  `Chapter ${lesson.chapter} · ${subject} · ${lesson.title}${lesson.isNew ? ' (new revision lesson)' : ''}`,
  `PYQ groups: ${groups.length} · exam appearances: ${groups.reduce((s, g) => s + g.asked_count, 0)}`,
  '',
  '## Clusters asked 3+ times, and how well the seed lesson + note mention them',
  '',
  '| Cluster | Asked | Keyword cover | Action |',
  '|---|---|---|---|',
  ...gapRows.map((r) => `| ${r.c} | ${r.n} | ${Math.round(r.cover * 100)}% | ${r.cover < 0.5 ? '**gap: cover in kit (mustKnow / writtenPlan / formulas)**' : 'check depth'} |`),
  '',
  '## Bank quota (spec §5.1)',
  '',
  `| Type | Have | Need | Missing |`,
  `|---|---|---|---|`,
  ...Object.entries(QUOTA).map(([k, need]) => `| ${k} | ${have[k]} | ${need} | ${Math.max(0, need - have[k])} |`),
  '',
  '## Questions asked in 2+ exams (must be in the bank, written ones with a model answer)',
  '',
  ...topAsked.map((g) => `- **${g.asked_count}×** ${g.question.replace(/\s+/g, ' ').slice(0, 200)} — *${g.asked_in.join('; ')}* (${g.group})`),
  '',
].join('\n'));
console.log(`${slug}: ${groups.length} PYQ groups, gaps ${gapRows.filter((r) => r.cover < 0.5).length}, bank ${have.mcq}/${have.written}/${have.practical} → ${out}`);
