import { createHash } from 'node:crypto'
import { createReadStream, readFileSync, statSync } from 'node:fs'
import { extname, join, normalize, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SW_TEMPLATE = fileURLToPath(new URL('./pwa/sw.js', import.meta.url))
const NOTES_DIR = fileURLToPath(new URL('./public/notes', import.meta.url))
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
  '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
}

/**
 * Dev only: serves /notes/* straight from public/notes on every request. That folder is excluded from the
 * watcher below, because notes/build/publish.mjs writes hundreds of large PDFs into it: watching them
 * crashed the dev server with EBUSY (files still locked while being written) and reloaded the page for
 * every published HTML file, and Vite's cached public-file list missed files published after start-up.
 */
function serveNotes(): Plugin {
  return {
    name: 'serve-notes',
    configureServer(server) {
      server.middlewares.use('/notes', (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        let file: string
        try {
          file = normalize(join(NOTES_DIR, decodeURIComponent((req.url ?? '/').split(/[?#]/)[0])))
        } catch {
          return next()
        }
        if (!file.startsWith(NOTES_DIR + sep)) return next()
        let size: number
        let mtime: Date
        try {
          const st = statSync(file)
          if (!st.isFile()) return next()
          size = st.size
          mtime = st.mtime
        } catch {
          return next()
        }
        // Revalidated on every load, but an unchanged file answers 304, so a revisit doesn't download
        // the PDF again (and the service worker, pwa/sw.js, serves it from the device without asking).
        const etag = `W/"${size.toString(16)}-${mtime.getTime().toString(16)}"`
        res.setHeader('ETag', etag)
        res.setHeader('Last-Modified', mtime.toUTCString())
        res.setHeader('Cache-Control', 'no-cache')
        if (req.headers['if-none-match'] === etag) {
          res.statusCode = 304
          return res.end()
        }
        res.setHeader('Content-Type', MIME[extname(file).toLowerCase()] ?? 'application/octet-stream')
        res.setHeader('Content-Length', size)
        if (req.method === 'HEAD') return res.end()
        createReadStream(file).on('error', next).pipe(res)
      })
    },
  }
}

/** pwa/sw.js with its placeholders filled; the version changes with the worker's code and the file list. */
function swSource(assets: string[], dev: boolean): string {
  const template = readFileSync(SW_TEMPLATE, 'utf8')
  const version = createHash('sha256').update(template).update(assets.join('\n')).update(String(dev)).digest('hex').slice(0, 12)
  return template
    .replace('__BUILD_VERSION__', JSON.stringify(version))
    .replace('__BUILD_ASSETS__', JSON.stringify(assets))
    .replace('__DEV__', String(dev))
}

/**
 * /sw.js, the device cache (pwa/sw.js). A build emits it with the version and the list of hashed files, so a
 * new deploy installs a new worker and drops the old build's files. The dev server serves it in dev mode,
 * which caches only notes, PDFs, uploads and fonts.
 */
function serviceWorker(): Plugin {
  return {
    name: 'service-worker',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use('/sw.js', (_req, res) => {
        res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
        res.setHeader('Cache-Control', 'no-cache')
        res.end(swSource([], true))
      })
    },
    generateBundle(_options, bundle) {
      const assets = Object.keys(bundle).filter(f => f.startsWith('assets/')).map(f => `/${f}`).sort()
      this.emitFile({ type: 'asset', fileName: 'sw.js', source: swSource(assets, false) })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveNotes(), serviceWorker()],
  // Two pages: "/" is the static landing page, "/study-hub/" is the Study Hub app.
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        studyHub: fileURLToPath(new URL('./study-hub/index.html', import.meta.url)),
      },
    },
  },
  server: {
    // Allow public tunnels to the dev server: Cloudflare quick tunnels, ngrok free domains and Tailscale Funnel.
    allowedHosts: ['.trycloudflare.com', '.ngrok-free.app', '.ngrok-free.dev', '.ts.net'],
    // Transform Study Hub's module graph at start-up, so the first visitor after a restart (often over a
    // tunnel) isn't the one who waits for every file to be compiled on demand.
    warmup: {
      clientFiles: ['./src/main.tsx', './src/exam/*.tsx', './src/components/portal/*.tsx'],
    },
    watch: {
      ignored: ['**/public/notes/**', '**/notes/pdf/**', '**/notes/snap/**'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
