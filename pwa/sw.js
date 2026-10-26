/*
 * StudyPath service worker: keeps what a reader has opened on their device, so a page loaded once opens
 * again instantly (and offline). Built by the `service-worker` plugin in vite.config.ts, which replaces
 * the two build placeholders below (version, every hashed file in this build); not registered in dev.
 *
 *   pages (/, /study-hub/)       network first (4 s), cached copy when slow or offline  -> sp-pages-<version>
 *   /assets/* (hashed, immutable) cache first; files from older builds pruned on activate -> sp-assets
 *   *.pdf                         stale-while-revalidate, last 30 files, Range served from cache -> sp-pdf
 *   notes, fonts, uploads, other  stale-while-revalidate, last 400 files               -> sp-content
 *   /api/*                        never touched here: study data is cached per reader by src/public/apiCache.ts
 */
const VERSION = __BUILD_VERSION__
const BUILD_ASSETS = new Set(__BUILD_ASSETS__)

const PAGES = `sp-pages-${VERSION}`
const ASSETS = 'sp-assets'
const PDF = 'sp-pdf'
const CONTENT = 'sp-content'
const KNOWN = new Set([PAGES, ASSETS, PDF, CONTENT])
const LIMITS = { [PDF]: 30, [CONTENT]: 400 }
const PAGE_URLS = ['/', '/study-hub/']
const NETWORK_TIMEOUT_MS = 4000

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const pages = await caches.open(PAGES)
    const assets = await caches.open(ASSETS)
    for (const url of PAGE_URLS) {
      try {
        const res = await fetch(url, { cache: 'reload' })
        if (!res.ok) continue
        await pages.put(url, res.clone())
        // Also keep the files the page itself loads, so the next visit works offline straight away.
        const html = await res.text()
        const refs = new Set(html.match(/\/assets\/[^"'()\s>]+/g) || [])
        await Promise.all([...refs].map(ref => assets.add(ref).catch(() => {})))
      } catch {
        /* offline while installing: the page is cached the next time it loads */
      }
    }
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith('sp-') && !KNOWN.has(name)) await caches.delete(name)
    }
    // Hashed files the current build no longer has are dead weight.
    const assets = await caches.open(ASSETS)
    for (const req of await assets.keys()) {
      if (!BUILD_ASSETS.has(new URL(req.url).pathname)) await assets.delete(req)
    }
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return
  const path = url.pathname
  if (path.startsWith('/api/') || path === '/sw.js') return

  if (path.endsWith('.pdf')) return event.respondWith(pdf(event))
  if (req.headers.has('range')) return
  if (path.startsWith('/assets/')) return event.respondWith(cacheFirst(req, ASSETS))
  if (req.mode === 'navigate' && !path.startsWith('/notes/') && !path.startsWith('/uploads/')) {
    return event.respondWith(page(req, path.startsWith('/study-hub') ? '/study-hub/' : '/'))
  }
  event.respondWith(staleWhileRevalidate(event, req, CONTENT))
})

/** Both pages are client-side apps, so every URL under one is answered by that page's single HTML file. */
async function page(req, key) {
  const cache = await caches.open(PAGES)
  const network = fetch(req).then(res => {
    if (res.ok && (res.headers.get('content-type') || '').includes('text/html')) cache.put(key, res.clone())
    return res
  })
  network.catch(() => {})
  const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT_MS))
  try {
    const res = await Promise.race([network, timeout])
    if (res) return res
  } catch {
    /* offline: fall through to the cached page */
  }
  const cached = await cache.match(key, { ignoreVary: true })
  return cached || network
}

async function cacheFirst(req, name) {
  const cache = await caches.open(name)
  const cached = await cache.match(req, { ignoreVary: true })
  if (cached) return cached
  const res = await fetch(req)
  if (cacheable(res)) cache.put(req, res.clone()).catch(() => {})
  return res
}

/** Answers from the device at once and refreshes the copy in the background for next time. */
async function staleWhileRevalidate(event, req, name) {
  const cache = await caches.open(name)
  const cached = await cache.match(req, { ignoreVary: true })
  const network = fetch(req).then(async res => {
    if (cacheable(res)) await store(cache, name, req, res.clone())
    return res
  })
  if (cached) {
    event.waitUntil(network.catch(() => {}))
    return cached
  }
  return network
}

/**
 * PDFs are opened by the browser's viewer and by pdf.js, both of which may ask for byte ranges. A range is
 * cut from the cached file when there is one; otherwise it goes to the network, and the whole file is
 * fetched in the background so the next visit is served from the device.
 */
async function pdf(event) {
  const req = event.request
  const range = req.headers.get('range')
  if (!range) return staleWhileRevalidate(event, req, PDF)
  const cache = await caches.open(PDF)
  const cached = await cache.match(req.url, { ignoreVary: true })
  if (cached) {
    const partial = await slice(cached, range)
    if (partial) return partial
  } else {
    event.waitUntil(fetch(req.url).then(res => cacheable(res) && store(cache, PDF, req.url, res)).catch(() => {}))
  }
  return fetch(req)
}

async function slice(res, range) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim())
  if (!m) return null
  const blob = await res.blob()
  const size = blob.size
  if (m[1] === '' && m[2] === '') return null
  const start = m[1] === '' ? Math.max(0, size - Number(m[2])) : Number(m[1])
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1)
  if (start > end || start >= size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } })
  }
  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('content-type') || 'application/pdf',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  })
}

function cacheable(res) {
  return res && res.status === 200 && res.type === 'basic'
}

/** Puts a response and drops the oldest entries past the cache's limit (a full disk just skips caching). */
async function store(cache, name, req, res) {
  try {
    await cache.delete(req)
    await cache.put(req, res)
    const limit = LIMITS[name]
    if (!limit) return
    const keys = await cache.keys()
    for (let i = 0; i < keys.length - limit; i++) await cache.delete(keys[i])
  } catch {
    /* quota exceeded or storage blocked: serve without caching */
  }
}

