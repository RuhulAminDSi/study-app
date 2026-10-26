// Turns the in-lesson Web view on (or off) for published note sets.
//
// The Web view (src/components/NoteWebView.tsx) renders public/notes/<NN-chapter>/<slug>/<slug>.<lang>.html
// natively inside the lesson, styled by the .nw rules in src/index.css. NotesViewer shows it only for the
// slugs listed in src/data/webNoteSlugs.json; this script edits that list after auditing each set.
//
//   node notes/build/web-enable.mjs <slug|NN-chapter> ...   enable (audit first; refuses sets that fail)
//   node notes/build/web-enable.mjs --all                   enable every published set
//   node notes/build/web-enable.mjs --remove <slug> ...     disable
//   node notes/build/web-enable.mjs --list                  show enabled / not enabled sets
//   add --dry-run to audit without writing
//
// The audit fails a set when its published HTML is missing or has no sections, and warns (without failing)
// about classes the web view has no style for: those still render, just as plain text.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { CHAPTER_DIR, root } from './sources.mjs';

const app = resolve(root, '..');
const publicDir = join(app, 'public', 'notes');
const listFile = join(app, 'src', 'data', 'webNoteSlugs.json');
const manifestFile = join(app, 'server', 'data', 'notes', 'manifest.json');

/** Classes NoteWebView strips, restyles in index.css (.nw-article …), or that only matter on paper. */
const SUPPORTED = new Set(`
  page pg-head pg-no cover-band title subtitle u no tag g
  hl circ ul wavy red green purple f mk small tiny center code mono sql cpp out ask src also qa
  dash tick num steps
  def tipbox trick exam ex sumbox wq sticky pink blue left lbl blk mnote fl fr box-red
  cols cols3 fgrid three
  hand l tight otab
  doodle w ink ink-k ink-r ink-g ink-p ink-b fill-y fill-b fill-r fill-g fill-p
  r k p s b w6 bn ov sm nowrap pq
  mcq-set mcq qn opts anskey q o mq a asm mcqt
`.split(/\s+/).filter(Boolean));

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const targets = args.filter((a) => !a.startsWith('--'));

/** Every published set as { slug, chapter, langs: { en?: path, bn?: path } }. */
function publishedSets() {
  const sets = [];
  for (const chapter of readdirSync(publicDir).sort()) {
    const chapterPath = join(publicDir, chapter);
    if (!CHAPTER_DIR.test(chapter) || !statSync(chapterPath).isDirectory()) continue;
    for (const slug of readdirSync(chapterPath).sort()) {
      const langs = {};
      for (const lang of ['en', 'bn']) {
        const file = join(chapterPath, slug, `${slug}.${lang}.html`);
        if (existsSync(file)) langs[lang] = file;
      }
      if (Object.keys(langs).length) sets.push({ slug, chapter, langs });
    }
  }
  return sets;
}

function audit(set) {
  const problems = [];
  const unknown = new Map();
  for (const [lang, file] of Object.entries(set.langs)) {
    const html = readFileSync(file, 'utf8');
    const sections = (html.match(/<h2[\s>]/g) ?? []).length + (html.match(/<h1 class="title/g) ?? []).length;
    if (!sections) problems.push(`${lang}: no <h2> sections`);
    for (const [, attr] of html.matchAll(/class="([^"]*)"/g)) {
      for (const c of attr.split(/\s+/).filter(Boolean)) {
        if (!SUPPORTED.has(c)) unknown.set(c, (unknown.get(c) ?? 0) + 1);
      }
    }
  }
  return { problems, unknown };
}

const readList = () => (existsSync(listFile) ? JSON.parse(readFileSync(listFile, 'utf8')) : []);
const writeList = (slugs) => writeFileSync(listFile, `${JSON.stringify([...new Set(slugs)].sort(), null, 2)}\n`);
const applied = new Set(existsSync(manifestFile) ? JSON.parse(readFileSync(manifestFile, 'utf8')).notes?.map((n) => n.slug) ?? [] : []);

const sets = publishedSets();
const enabled = new Set(readList());

if (flag('--list')) {
  for (const s of sets) console.log(`${enabled.has(s.slug) ? 'web ' : '    '} ${s.chapter}/${s.slug}  [${Object.keys(s.langs).join(', ')}]`);
  console.log(`\n${sets.filter((s) => enabled.has(s.slug)).length} of ${sets.length} published sets have the Web view.`);
  process.exit(0);
}

if (flag('--remove')) {
  if (!targets.length) { console.error('usage: web-enable.mjs --remove <slug> ...'); process.exit(1); }
  const removed = targets.filter((t) => enabled.delete(t));
  const missing = targets.filter((t) => !removed.includes(t));
  if (missing.length) console.warn(`not enabled: ${missing.join(', ')}`);
  if (!flag('--dry-run') && removed.length) writeList([...enabled]);
  console.log(`${flag('--dry-run') ? 'would disable' : 'disabled'}: ${removed.join(', ') || 'nothing'}`);
  process.exit(0);
}

if (!targets.length && !flag('--all')) {
  console.error('usage: web-enable.mjs <slug|NN-chapter> ... | --all | --remove <slug> ... | --list  [--dry-run]');
  process.exit(1);
}

const picked = flag('--all') ? sets : sets.filter((s) => targets.includes(s.slug) || targets.includes(s.chapter));
const unmatched = targets.filter((t) => !sets.some((s) => s.slug === t || s.chapter === t));
if (unmatched.length) console.warn(`no published set for: ${unmatched.join(', ')} (run /notes-publish first)`);

const added = [];
const failed = [];
const allUnknown = new Map();
for (const set of picked) {
  const { problems, unknown } = audit(set);
  const notApplied = applied.has(set.slug) ? '' : '  (not in manifest.json: no lesson shows this set yet)';
  if (problems.length) {
    failed.push(set.slug);
    console.log(`FAIL ${set.chapter}/${set.slug}: ${problems.join('; ')}`);
    continue;
  }
  for (const [c, n] of unknown) allUnknown.set(c, (allUnknown.get(c) ?? 0) + n);
  const extra = unknown.size ? `  unstyled classes: ${[...unknown.keys()].join(' ')}` : '';
  console.log(`${enabled.has(set.slug) ? 'ok  ' : 'add '} ${set.chapter}/${set.slug}${extra}${notApplied}`);
  if (!enabled.has(set.slug)) added.push(set.slug);
  enabled.add(set.slug);
}

if (!flag('--dry-run') && added.length) writeList([...enabled]);
console.log(`\n${flag('--dry-run') ? 'would enable' : 'enabled'} ${added.length} new set(s); ${enabled.size} in total.${failed.length ? ` ${failed.length} failed: ${failed.join(', ')}` : ''}`);
if (allUnknown.size) {
  console.log(`classes with no web style (render as plain text): ${[...allUnknown].map(([c, n]) => `${c}(${n})`).join(' ')}`);
  console.log('style them under .nw-article in src/index.css and add them to SUPPORTED in this script.');
}
process.exit(failed.length ? 1 : 0);
