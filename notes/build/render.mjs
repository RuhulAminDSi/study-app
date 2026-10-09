// Render notes/src/<NN-chapter>/<name>.html -> notes/pdf/<NN-chapter>/<name>.pdf with headless Chrome/Edge (A4, backgrounds on).
// Usage: node notes/build/render.mjs [name | slug | NN-chapter ...]   (no args = every source)
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { outPath, selectSources } from './sources.mjs';

export const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = process.env.CHROME_PATH || BROWSERS.find(existsSync);
if (!browser) { console.error('No Chrome/Edge found (set CHROME_PATH).'); process.exit(1); }

let failed = 0;
for (const source of selectSources(process.argv.slice(2))) {
  const { name } = source;
  const out = outPath('pdf', source, `${name}.pdf`);
  mkdirSync(dirname(out), { recursive: true });
  const r = spawnSync(browser, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw', '--virtual-time-budget=10000',
    `--print-to-pdf=${out}`, pathToFileURL(source.file).href,
  ], { encoding: 'utf8', timeout: 180000 });
  if (r.status === 0 && existsSync(out)) {
    console.log(`OK   ${name} -> ${out} (${(statSync(out).size / 1024).toFixed(0)} KB)`);
  } else {
    failed++;
    console.error(`FAIL ${name}: status=${r.status}\n${r.stderr}`);
  }
}
process.exit(failed ? 1 : 0);
