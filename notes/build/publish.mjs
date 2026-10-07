// Copy finished notes into study-app/public/notes so the app serves them at /notes/:
//   public/notes/assets/…                                  (hw.css, fonts, fit.js)
//   public/notes/<slug>/<slug>.<lang>.html|pdf|md          the note set
//   public/notes/<slug>/<slug>.<lang>.json                 metadata for the in-app viewer (pages, size, contents …)
//   public/notes/<slug>/<slug>.<lang>.cover.jpg            first sheet, used as the PDF thumbnail
// The published HTML gets fit.js injected (scales A4 sheets to narrow screens; print unaffected).
// Only sources that have a rendered PDF are published. Usage: node notes/build/publish.mjs
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, '..', 'public', 'notes');
const FIT_TAG = '<script src="../assets/fit.js"></script>';
const SYSTEM_BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];

async function launchBrowser() {
  const executablePath = process.env.CHROME_PATH || SYSTEM_BROWSERS.find(existsSync);
  return executablePath ? chromium.launch({ executablePath }) : chromium.launch();
}

/** Reads title, sheet count and a per-sheet contents list from the source page, and snaps the cover. */
async function inspect(browser, htmlFile, coverFile) {
  const page = await browser.newPage({ viewport: { width: 900, height: 1200 } });
  try {
    await page.goto(pathToFileURL(htmlFile).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const info = await page.evaluate(() => {
      const clean = (el) => {
        const copy = el.cloneNode(true);
        copy.querySelectorAll('.no, .tag').forEach((n) => n.remove());
        return copy.textContent.replace(/\s+/g, ' ').trim();
      };
      const sheets = [...document.querySelectorAll('section.page')];
      const contents = [];
      sheets.forEach((sheet, i) => {
        const heads = [...sheet.querySelectorAll('h2')];
        const titles = heads.length ? heads.map(clean) : [clean(sheet.querySelector('h1') ?? sheet.querySelector('.pg-head span:last-child') ?? sheet)];
        for (const title of titles) if (title) contents.push({ page: i + 1, title });
      });
      return { title: document.title, pages: sheets.length, contents };
    });
    await page.locator('section.page').first().screenshot({ path: coverFile, type: 'jpeg', quality: 82 });
    return info;
  } finally {
    await page.close();
  }
}

rmSync(join(out, 'assets'), { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'assets'), join(out, 'assets'), { recursive: true });

const browser = await launchBrowser();
let published = 0;
try {
  for (const file of readdirSync(join(root, 'src')).filter((f) => f.endsWith('.html'))) {
    const name = file.slice(0, -5); // e.g. dld-logic-gates.en
    const m = /^(.+)\.([a-z]{2})$/.exec(name);
    if (!m) { console.warn(`skip ${file}: expected <slug>.<lang>.html`); continue; }
    const [, slug, lang] = m;
    const pdf = join(root, 'pdf', `${name}.pdf`);
    if (!existsSync(pdf)) { console.warn(`skip ${name}: no PDF yet (run render.mjs)`); continue; }

    const dest = join(out, slug);
    mkdirSync(dest, { recursive: true });
    const src = join(root, 'src', file);
    const html = readFileSync(src, 'utf8');
    if (!html.includes('</body>')) throw new Error(`${file}: no </body>`);
    writeFileSync(join(dest, file), html.includes(FIT_TAG) ? html : html.replace('</body>', `${FIT_TAG}\n</body>`));
    copyFileSync(pdf, join(dest, `${name}.pdf`));
    const md = join(root, 'md', `${name}.md`);
    if (existsSync(md)) copyFileSync(md, join(dest, `${name}.md`));

    const info = await inspect(browser, src, join(dest, `${name}.cover.jpg`));
    const pdfStat = statSync(pdf);
    const meta = {
      slug, lang,
      title: info.title,
      pages: info.pages,
      format: 'A4',
      pdfBytes: pdfStat.size,
      updated: pdfStat.mtime.toISOString(),
      contents: info.contents,
    };
    writeFileSync(join(dest, `${name}.json`), JSON.stringify(meta, null, 2) + '\n');
    console.log(`published ${name} -> public/notes/${slug}/ (${info.pages} pages, ${info.contents.length} contents entries)`);
    published++;
  }
} finally {
  await browser.close();
}
console.log(`${published} note file set(s) published to ${out}`);
