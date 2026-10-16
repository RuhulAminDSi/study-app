// Fills the generated part of an Exam Kit (heat, asked) from the PYQ data, plan E0.
// Usage (from ex-question/): node tools/kit-asked.mjs <slug>|--all
// Writes ../server/data/exam-kits/<slug>.json. A missing kit is created as a draft skeleton; in an existing kit
// only `heat` and `asked` are replaced, so the authored sections are never touched.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const KITS = join(ROOT, '..', 'server', 'data', 'exam-kits');
const json = (p) => JSON.parse(readFileSync(p, 'utf8'));

const freq = json(join(ROOT, 'by-subject/frequency.json'));
const tags = json(join(ROOT, 'exam-tags.json'));
const { map, _newLessons: newLessons } = json(join(ROOT, 'lesson-map.json'));
const manifest = json(join(ROOT, '..', 'server', 'data', 'notes', 'manifest.json')).notes;
const SUBJECTS = { 2: 'ICS', 4: 'DLD', 7: 'CA', 9: 'NET', 10: 'SPL', 11: 'OOP', 15: 'DSA', 16: 'DBMS', 17: 'SE', 18: 'OS', 19: 'AI' };
const ASKED_MAX = 40;

const examBy = Object.fromEntries(tags.exams.map((e) => [e.name, e]));
// body labels for the heat bar; BUET M.Sc./IICT admission tests count as BUET, like the corpus rule
const body = (e) => {
  if (!e) return 'other';
  if (e.type === 'admission') return 'buet';
  if (e.type === 'public-body') return 'psu';
  return e.type; // bcs, ntrca, bpsc, bank, private
};

function lessonsOf() {
  const out = {};
  for (const n of manifest) {
    const subject = SUBJECTS[n.chapterNumber];
    if (subject && n.mode === 'replace' && !n.slug.startsWith('pyq-')) out[n.slug] = { chapter: n.chapterNumber, subject, title: n.lessonTitleEn };
  }
  for (const [slug, l] of Object.entries(newLessons)) out[slug] = { chapter: l.chapter, subject: SUBJECTS[l.chapter], title: l.title };
  return out;
}

function build(slug, lesson) {
  const groups = freq.filter((g) => g.subject === lesson.subject && (map[g.group] ?? map[`${g.subject}::${g.cluster}`]) === slug);
  const byBody = {};
  let asked = 0;
  let recent = 0;
  const clusters = {};
  for (const g of groups) {
    asked += g.asked_count;
    clusters[g.cluster] = (clusters[g.cluster] ?? 0) + g.asked_count;
    for (const n of g.asked_in) {
      const e = examBy[n];
      byBody[body(e)] = (byBody[body(e)] ?? 0) + 1;
      if ((e?.year ?? 0) >= 2023) recent++;
    }
  }
  const ranked = [...groups].filter((g) => g.asked_count > 0).sort((a, b) => b.score - a.score || b.asked_count - a.asked_count);
  return {
    heat: {
      asked, recent, repeats: groups.filter((g) => g.asked_count >= 2).length, byBody,
      topClusters: Object.entries(clusters).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, n]) => ({ name, asked: n })),
    },
    // every question shown names its exams and its source document (corpus rule)
    asked: ranked.slice(0, ASKED_MAX).map((g) => ({
      group: g.group, cluster: g.cluster, question: g.question, kind: g.kind, askedIn: [...g.asked_in].sort(),
      sources: g.pages.map((p) => `ex-question/${p}`), repeat: g.asked_count >= 2,
    })),
  };
}

const target = process.argv[2];
if (!target) { console.error('usage: node tools/kit-asked.mjs <slug>|--all'); process.exit(1); }
const lessons = lessonsOf();
const slugs = target === '--all' ? Object.keys(lessons) : [target];
const today = new Date().toISOString().slice(0, 10);
for (const slug of slugs) {
  const lesson = lessons[slug];
  if (!lesson) { console.error(`unknown lesson slug ${slug} (not in the manifest or lesson-map _newLessons)`); process.exitCode = 1; continue; }
  const file = join(KITS, `${slug}.json`);
  if (!existsSync(file) && target === '--all') continue; // --all only refreshes kits that exist
  const kit = existsSync(file) ? json(file) : {
    slug, chapter: lesson.chapter, subject: lesson.subject, lessonTitleEn: lesson.title, status: 'draft', updatedOn: today,
    mustKnow: [], formulas: [], traps: [], writtenPlan: [], viva: [], facts: [], sources: [],
  };
  const gen = build(slug, lesson);
  const before = JSON.stringify([kit.heat, kit.asked]);
  Object.assign(kit, gen);
  if (JSON.stringify([kit.heat, kit.asked]) !== before) kit.updatedOn = today; // the seed refreshes kits by updatedOn
  // keep a stable key order: identity, generated, authored
  const order = ['slug', 'chapter', 'subject', 'lessonTitleEn', 'status', 'updatedOn', 'heat', 'asked', 'mustKnow', 'formulas', 'traps', 'writtenPlan', 'viva', 'facts', 'sources'];
  const out = Object.fromEntries([...order.filter((k) => k in kit).map((k) => [k, kit[k]]), ...Object.entries(kit).filter(([k]) => !order.includes(k))]);
  writeFileSync(file, JSON.stringify(out, null, 2) + '\n');
  console.log(`${slug}: asked ${gen.heat.asked} (2023+ ${gen.heat.recent}), ${gen.asked.length} questions listed`);
}
