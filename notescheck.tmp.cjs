(async () => {
  const list = await (await fetch('http://localhost:5173/api/public/lessons/published')).json();
  let n = 0, sets = 0; const bad = [];
  for (const l of list) for (const f of ['content_en', 'content_bn']) {
    const c = l[f] || ''; if (!c.includes('hn-viewer')) continue; sets++;
    const m = c.match(/data-notes="([^"]+)" data-notes-dir="([^"]+)" data-lang="(en|bn)"/);
    if (!m) { bad.push('NO DIR MARKER: ' + l.title_en + ' ' + f); continue; }
    const base = `http://localhost:5173/notes/${m[2]}/${m[1]}/${m[1]}.${m[3]}`;
    for (const ext of ['.json', '.pdf', '.note.pdf', '.html']) {
      n++; const r = await fetch(base + ext); const t = r.headers.get('content-type') || '';
      const want = ext === '.json' ? 'json' : ext === '.html' ? 'html' : 'pdf';
      const body = ext === '.html' ? await r.text() : '';
      if (!r.ok || !t.includes(want) || (ext === '.html' && !body.includes('class="page'))) bad.push(`${r.status} ${t} ${base}${ext}`);
    }
  }
  console.log(`lessons ${list.length} | notes bodies ${sets} | files ${n} | ` + (bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'all OK'));
})();
