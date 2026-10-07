// Copy finished notes into study-app/public/notes so the app serves them at /notes/:
//   public/notes/assets/…                (hw.css, fonts, fit.js)
//   public/notes/<slug>/<slug>.<lang>.html|pdf|md
// The published HTML gets fit.js injected (scales A4 sheets to narrow screens; print unaffected).
// Only sources that have a rendered PDF are published. Usage: node notes/build/publish.mjs
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, '..', 'public', 'notes');
const FIT_TAG = '<script src="../assets/fit.js"></script>';

rmSync(join(out, 'assets'), { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'assets'), join(out, 'assets'), { recursive: true });

let published = 0;
for (const file of readdirSync(join(root, 'src')).filter(f => f.endsWith('.html'))) {
  const name = file.slice(0, -5);                        // e.g. dld-logic-gates.en
  const m = /^(.+)\.([a-z]{2})$/.exec(name);
  if (!m) { console.warn(`skip ${file}: expected <slug>.<lang>.html`); continue; }
  const [, slug] = m;
  const pdf = join(root, 'pdf', `${name}.pdf`);
  if (!existsSync(pdf)) { console.warn(`skip ${name}: no PDF yet (run render.mjs)`); continue; }

  const dest = join(out, slug);
  mkdirSync(dest, { recursive: true });
  const html = readFileSync(join(root, 'src', file), 'utf8');
  if (!html.includes('</body>')) throw new Error(`${file}: no </body>`);
  writeFileSync(join(dest, file), html.includes(FIT_TAG) ? html : html.replace('</body>', `${FIT_TAG}\n</body>`));
  copyFileSync(pdf, join(dest, `${name}.pdf`));
  const md = join(root, 'md', `${name}.md`);
  if (existsSync(md)) copyFileSync(md, join(dest, `${name}.md`));
  console.log(`published ${name} -> public/notes/${slug}/`);
  published++;
}
console.log(`${published} note file set(s) published to ${out}`);
