// QA for handwritten notes: loads each src/<NN-chapter>/<name>.html in headless Chrome (JS on) and reports
// overflowing sheets, sparse sheets, sheet count and component usage.
// Usage: node notes/build/check.mjs [name | slug | NN-chapter ...]
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { selectSources } from './sources.mjs';

const browser = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
].find(existsSync);
const MIN_FILL = 72; // every sheet except the last must be at least this % full

let bad = 0;
for (const { name, file } of selectSources(process.argv.slice(2))) {
  const r = spawnSync(browser, ['--headless=new', '--disable-gpu', '--virtual-time-budget=8000', '--window-size=900,1200',
    '--dump-dom', pathToFileURL(file).href], { encoding: 'utf8', maxBuffer: 64 << 20, timeout: 120000 });
  const dom = r.stdout || '';
  const pages = (dom.match(/<section[^>]*class="page[\s"]/g) || []).length;
  const ovf = [...dom.matchAll(/data-overflow="([^"]+)"/g)].map(m => m[1]);
  const fills = [...dom.matchAll(/data-fill="(\d+)"/g)].map(m => +m[1]);
  const sparse = fills.map((f, i) => [i + 1, f]).filter(([i, f]) => f < MIN_FILL && i < fills.length);
  const src = readFileSync(file, 'utf8');
  const count = re => (src.match(re) || []).length;
  const stats = {
    pages, overflow: ovf.length ? ovf.join(', ') : 'none', sparse: sparse.map(([i, f]) => `p${i}:${f}%`).join(' ') || 'none',
    fills: fills.join(' '),
    hl: count(/class="hl[\s"]/g), circ: count(/class="circ[\s"]/g), doodles: count(/<figure class="doodle/g),
    sticky: count(/class="sticky/g), mnote: count(/class="mnote/g), trick: count(/class="trick/g), exam: count(/class="exam/g),
    mcq: count(/class="mcq"/g),
  };
  const ok = pages > 0 && !ovf.length && !sparse.length && stats.hl >= 15 && stats.circ >= 8 && stats.doodles >= 6 && stats.trick >= 3;
  if (!ok) bad++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`, JSON.stringify(stats));
}
console.log(`targets: no overflow, every sheet except the last >= ${MIN_FILL}% full, >= 15 highlights, >= 8 red circles, >= 6 doodles, >= 3 memory tricks`);
process.exit(bad ? 1 : 0);
