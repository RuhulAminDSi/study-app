import { createReadStream, statSync } from 'node:fs'
import { extname, join, normalize, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
        try {
          const st = statSync(file)
          if (!st.isFile()) return next()
          size = st.size
        } catch {
          return next()
        }
        res.setHeader('Content-Type', MIME[extname(file).toLowerCase()] ?? 'application/octet-stream')
        res.setHeader('Content-Length', size)
        res.setHeader('Cache-Control', 'no-cache')
        if (req.method === 'HEAD') return res.end()
        createReadStream(file).on('error', next).pipe(res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveNotes()],
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
