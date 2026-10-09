// Visual QA: screenshot every sheet of notes/src/<NN-chapter>/<name>.html to PNG (one file per sheet) so a
// reviewer can look for overlaps, clipped doodles and missing Bangla glyphs.
// Usage: node notes/build/snap.mjs <name> [outDir]   (default outDir: notes/snap/<NN-chapter>/<name>/)
import { existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import { listSources, outPath } from './sources.mjs';

const [name, outArg] = process.argv.slice(2);
if (!name) { console.error('usage: node notes/build/snap.mjs <name> [outDir]'); process.exit(1); }
const source = listSources().find((s) => s.name === name);
if (!source) { console.error(`no such source: ${name} (expected notes/src/<NN-chapter>/${name}.html)`); process.exit(1); }
const src = source.file;
const outDir = resolve(outArg || outPath('snap', source, name));
mkdirSync(outDir, { recursive: true });

const executablePath = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
].find(existsSync);
const browser = await (executablePath ? chromium.launch({ executablePath }) : chromium.launch());
try {
  const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
  await page.goto(pathToFileURL(src).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const sheets = page.locator('section.page');
  const n = await sheets.count();
  for (let i = 0; i < n; i++) {
    const file = join(outDir, `p${String(i + 1).padStart(2, '0')}.png`);
    await sheets.nth(i).screenshot({ path: file });
    console.log(file);
  }
} finally {
  await browser.close();
}
