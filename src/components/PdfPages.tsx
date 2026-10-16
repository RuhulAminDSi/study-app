import { useEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist/legacy/build/pdf.mjs'

interface Props {
  src: string
  /** 1-based page to bring into view (from the contents list) */
  page: number
  title: string
  loadingLabel: string
  failed: () => void
}

/** Pages rendered ahead of and behind the viewport, so scrolling rarely shows a blank sheet. */
const ROOT_MARGIN = '150% 0px'
/** iOS Safari caps total canvas memory; 2x is sharp on any phone and keeps a page around 10 MB. */
const MAX_SCALE = 2

/**
 * Draws a PDF's pages as canvases stacked in the page flow, so they scroll with the lesson.
 * Used on touch devices, where an <iframe> PDF either isn't supported (Android) or can't be
 * scrolled (iOS/iPadOS Safari shows only a static first page).
 */
export default function PdfPages({ src, page, title, loadingLabel, failed }: Props) {
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null)
  const [ratios, setRatios] = useState<number[]>([])
  const listRef = useRef<HTMLDivElement>(null)
  const failedRef = useRef(failed)
  failedRef.current = failed

  useEffect(() => {
    let alive = true
    let loaded: PDFDocumentProxy | null = null
    ;(async () => {
      // Loaded on demand: desktop never downloads pdf.js.
      const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
      const worker = await import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url')
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default
      const d = await pdfjs.getDocument(src).promise
      loaded = d
      // Every page's height/width ratio up front, so placeholders hold their space and page jumps land right.
      const sizes = await Promise.all(
        Array.from({ length: d.numPages }, (_, i) => d.getPage(i + 1).then(p => {
          const v = p.getViewport({ scale: 1 })
          return v.height / v.width
        })),
      )
      if (!alive) return
      setRatios(sizes)
      setDoc(d)
    })().catch(() => { if (alive) failedRef.current() })
    return () => {
      alive = false
      void loaded?.destroy()
    }
  }, [src])

  useEffect(() => {
    if (!doc || page <= 1) return
    listRef.current?.children[page - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [doc, page])

  if (!doc) return <div className="nv-pages-loading" role="status">{loadingLabel}</div>

  return (
    <div ref={listRef} className="nv-pages" aria-label={title}>
      {ratios.map((ratio, i) => (
        <PdfPage key={i} doc={doc} number={i + 1} ratio={ratio} />
      ))}
    </div>
  )
}

function PdfPage({ doc, number, ratio }: { doc: PDFDocumentProxy; number: number; ratio: number }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const io = new IntersectionObserver(([e]) => setNear(e.isIntersecting), { rootMargin: ROOT_MARGIN })
    io.observe(box)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const box = boxRef.current
    const canvas = canvasRef.current
    if (!near || !box || !canvas) return
    let task: { cancel: () => void; promise: Promise<void> } | null = null
    let cancelled = false
    doc.getPage(number).then(p => {
      if (cancelled) return
      const base = p.getViewport({ scale: 1 })
      const scale = (box.clientWidth / base.width) * Math.min(window.devicePixelRatio || 1, MAX_SCALE)
      const viewport = p.getViewport({ scale })
      canvas.width = Math.floor(viewport.width)
      canvas.height = Math.floor(viewport.height)
      task = p.render({ canvas, viewport })
      task.promise.catch(() => { /* cancelled when scrolled away */ })
    })
    return () => {
      cancelled = true
      task?.cancel()
      // Free the bitmap of pages far off screen; long note sets would otherwise exhaust iOS canvas memory.
      canvas.width = 0
      canvas.height = 0
    }
  }, [near, doc, number])

  return (
    <div ref={boxRef} className="nv-page" style={{ aspectRatio: `1 / ${ratio}` }}>
      <canvas ref={canvasRef} />
    </div>
  )
}
