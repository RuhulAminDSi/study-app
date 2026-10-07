// Visual QA: screenshot every sheet of notes/src/<name>.html to PNG (one file per sheet) so a
// reviewer can look for overlaps, clipped doodles and missing Bangla glyphs.
// Usage: node notes/build/snap.mjs <name> [outDir]   (default outDir: notes/snap/<name>/)
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [name, outArg] = process.argv.slice(2);
if (!name) { console.error('usage: node notes/build/snap.mjs <name> [outDir]'); process.exit(1); }
const src = join(root, 'src', `${name}.html`);
if (!existsSync(src)) { console.error(`no such source: ${src}`); process.exit(1); }
const outDir = resolve(outArg || join(root, 'snap', name));
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
