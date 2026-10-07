// Render notes/src/<name>.html -> notes/pdf/<name>.pdf with headless Chrome/Edge (A4, backgrounds on).
// Usage: node notes/build/render.mjs [name ...]   (no args = every file in src/)
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src');
const outDir = join(root, 'pdf');

export const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = process.env.CHROME_PATH || BROWSERS.find(existsSync);
if (!browser) { console.error('No Chrome/Edge found (set CHROME_PATH).'); process.exit(1); }

mkdirSync(outDir, { recursive: true });
const wanted = process.argv.slice(2);
const names = readdirSync(srcDir)
  .filter(f => f.endsWith('.html'))
  .map(f => f.slice(0, -5))
  .filter(n => wanted.length === 0 || wanted.includes(n));

let failed = 0;
for (const name of names) {
  const out = join(outDir, `${name}.pdf`);
  const r = spawnSync(browser, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw', '--virtual-time-budget=10000',
    `--print-to-pdf=${out}`, pathToFileURL(join(srcDir, `${name}.html`)).href,
  ], { encoding: 'utf8', timeout: 180000 });
  if (r.status === 0 && existsSync(out)) {
    console.log(`OK   ${name} -> ${out} (${(statSync(out).size / 1024).toFixed(0)} KB)`);
  } else {
    failed++;
    console.error(`FAIL ${name}: status=${r.status}\n${r.stderr}`);
  }
}
process.exit(failed ? 1 : 0);
