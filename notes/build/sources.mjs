// Note sources are organised by chapter: notes/src/<NN-chapter>/<slug>.<lang>.html, where <NN-chapter>
// is the seed module's number and title (e.g. 02-introduction-to-computer-systems; see chapterDir() in
// server/src/db/applyNotes.ts). The same <NN-chapter>/ level is used under notes/md, notes/pdf,
// notes/snap and public/notes, so every output of a note set sits next to its chapter.
import { readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const CHAPTER_DIR = /^\d{2}-[a-z0-9-]+$/;

/** Every source as { name: '<slug>.<lang>', chapter: '<NN-chapter>', file: absolute path }, chapter by chapter. */
export function listSources() {
  const srcDir = join(root, 'src');
  const out = [];
  for (const chapter of readdirSync(srcDir).sort()) {
    const dir = join(srcDir, chapter);
    if (!statSync(dir).isDirectory()) {
      if (chapter.endsWith('.html')) console.warn(`skip src/${chapter}: move it into its chapter folder (src/<NN-chapter>/)`);
      continue;
    }
    if (!CHAPTER_DIR.test(chapter)) { console.warn(`skip src/${chapter}/: expected <NN-chapter>`); continue; }
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.html')).sort()) {
      out.push({ name: f.slice(0, -5), chapter, file: join(dir, f) });
    }
  }
  return out;
}

/** Sources matching the CLI arguments: '<slug>.<lang>', a bare '<slug>' (both languages) or a chapter folder. */
export function selectSources(wanted) {
  const all = listSources();
  if (!wanted.length) return all;
  const picked = all.filter((s) => wanted.some((w) => w === s.name || w === s.name.replace(/\.[a-z]{2}$/, '') || w === s.chapter));
  const unknown = wanted.filter((w) => !all.some((s) => w === s.name || w === s.name.replace(/\.[a-z]{2}$/, '') || w === s.chapter));
  if (unknown.length) console.warn(`no source for: ${unknown.join(', ')}`);
  return picked;
}

/** notes/<kind>/<NN-chapter>/<rest>, for the pdf, md and snap outputs. */
export const outPath = (kind, source, rest) => join(root, kind, source.chapter, rest);
