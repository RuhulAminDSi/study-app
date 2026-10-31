import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist/legacy/build/pdf.mjs'

export interface ZoomLabels {
  zoom: string
  zoomIn: string
  zoomOut: string
  zoomFit: string
}

interface Props {
  src: string
  /** 1-based page to bring into view (from the contents list) */
  page: number
  title: string
  loadingLabel: string
  failed: () => void
  /** 1 = fit width; kept by the caller so it carries over between the note and handwritten views */
  zoom: number
  setZoom: (zoom: number) => void
  labels: ZoomLabels
  formatPercent: (percent: number) => string
}

/** Pages rendered above and below the visible part of the box, so scrolling rarely shows a blank sheet. */
const ROOT_MARGIN = '150% 0px'
/** iOS Safari caps total canvas memory; 2x is sharp on any phone and keeps a page around 10 MB. */
const MAX_SCALE = 2
/** Per-canvas pixel cap (iOS refuses canvases over ~16.7M px); deep zoom on a tablet gets slightly softer instead. */
const MAX_PIXELS = 12_000_000
/** Zoom range and button steps, as a multiple of the box width (1 = fit width). Pinching zooms smoothly in between. */
const MIN_ZOOM = 1
const MAX_ZOOM = 4
const ZOOM_STEPS = [1, 1.25, 1.5, 2, 2.5, 3, 4]

const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z))

/** Where to put the reader back after a zoom: a point of the page list (as fractions of its size) and the spot in the box it sat under. */
interface Anchor { x: number; y: number; vx: number; vy: number }

const glyph = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const
const MinusIcon = () => <svg {...glyph}><path d="M5 12h14" /></svg>
const PlusIcon = () => <svg {...glyph}><path d="M12 5v14M5 12h14" /></svg>
const FitIcon = () => <svg {...glyph}><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" /></svg>

/**
 * Draws a PDF's pages as canvases stacked in a box of its own that scrolls both ways, like a PDF viewer.
 * Used on touch devices, where an <iframe> PDF either isn't supported (Android) or can't be
 * scrolled (iOS/iPadOS Safari shows only a static first page). Two fingers pinch-zoom around the
 * point between them (previewed with a CSS transform, then redrawn sharp); the buttons step the zoom.
 */
export default function PdfPages({ src, page, title, loadingLabel, failed, zoom, setZoom, labels, formatPercent }: Props) {
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null)
  const [ratios, setRatios] = useState<number[]>([])
  const [width, setWidth] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<Anchor | null>(null)
  const failedRef = useRef(failed)
  failedRef.current = failed
  // Read by the touch handlers, which are attached once.
  const zoomRef = useRef(zoom)
  zoomRef.current = zoom
  const setZoomRef = useRef(setZoom)
  setZoomRef.current = setZoom

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
    const target = listRef.current?.children[page - 1] as HTMLElement | undefined
    if (!doc || page <= 1 || !target) return
    scrollerRef.current?.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  }, [doc, page])

  // The page width sets the render size; it changes with the zoom and on rotation or resize.
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const ro = new ResizeObserver(([e]) => setWidth(Math.round(e.contentRect.width)))
    ro.observe(list)
    return () => ro.disconnect()
  }, [doc])

  // After a zoom, scroll the box so the anchored point is back under the fingers (or the box centre).
  useLayoutEffect(() => {
    const anchor = anchorRef.current
    const list = listRef.current
    const scroller = scrollerRef.current
    anchorRef.current = null
    if (!anchor || !list || !scroller) return
    scroller.scrollLeft = anchor.x * list.offsetWidth - anchor.vx
    scroller.scrollTop = anchor.y * list.offsetHeight - anchor.vy
  }, [zoom])

  // Two-finger pinch. touch-action (CSS) keeps the browser from zooming the whole page; the moves are
  // shown as a transform on the page list and the zoom is committed when a finger lifts.
  useEffect(() => {
    const scroller = scrollerRef.current
    const list = listRef.current
    if (!scroller || !list) return
    let pinch: { d: number; mx: number; my: number; fx: number; fy: number; s: number; tx: number; ty: number } | null = null
    const measure = (t: TouchList) => {
      const r = scroller.getBoundingClientRect()
      return {
        x: (t[0].clientX + t[1].clientX) / 2 - r.left,
        y: (t[0].clientY + t[1].clientY) / 2 - r.top,
        d: Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY),
      }
    }
    const start = (e: TouchEvent) => {
      if (e.touches.length !== 2) return
      const m = measure(e.touches)
      if (m.d < 10) return
      // the point between the fingers, in page-list coordinates
      pinch = { d: m.d, mx: m.x, my: m.y, fx: scroller.scrollLeft + m.x, fy: scroller.scrollTop + m.y, s: 1, tx: 0, ty: 0 }
      list.style.transformOrigin = `${pinch.fx}px ${pinch.fy}px`
      list.style.willChange = 'transform'
    }
    const move = (e: TouchEvent) => {
      if (!pinch || e.touches.length !== 2) return
      if (e.cancelable) e.preventDefault()
      const m = measure(e.touches)
      const z = zoomRef.current
      pinch.s = clampZoom(z * (m.d / pinch.d)) / z
      pinch.tx = m.x - pinch.mx
      pinch.ty = m.y - pinch.my
      list.style.transform = `translate(${pinch.tx}px, ${pinch.ty}px) scale(${pinch.s})`
    }
    const end = (e: TouchEvent) => {
      if (!pinch || e.touches.length >= 2) return
      const p = pinch
      pinch = null
      list.style.transform = ''
      list.style.transformOrigin = ''
      list.style.willChange = ''
      const z = zoomRef.current
      const next = Math.round(z * p.s * 100) / 100
      const vx = p.mx + p.tx
      const vy = p.my + p.ty
      if (Math.abs(next - z) < 0.01) {
        scroller.scrollLeft = p.fx - vx
        scroller.scrollTop = p.fy - vy
        return
      }
      anchorRef.current = { x: p.fx / list.offsetWidth, y: p.fy / list.offsetHeight, vx, vy }
      setZoomRef.current(next)
    }
    scroller.addEventListener('touchstart', start, { passive: true })
    scroller.addEventListener('touchmove', move, { passive: false })
    scroller.addEventListener('touchend', end)
    scroller.addEventListener('touchcancel', end)
    return () => {
      scroller.removeEventListener('touchstart', start)
      scroller.removeEventListener('touchmove', move)
      scroller.removeEventListener('touchend', end)
      scroller.removeEventListener('touchcancel', end)
    }
  }, [doc])

  // Buttons zoom around the centre of the box.
  const changeZoom = (next: number) => {
    if (next === zoom) return
    const list = listRef.current
    const scroller = scrollerRef.current
    if (list && scroller) {
      const vx = scroller.clientWidth / 2
      const vy = scroller.clientHeight / 2
      anchorRef.current = { x: (scroller.scrollLeft + vx) / list.offsetWidth, y: (scroller.scrollTop + vy) / list.offsetHeight, vx, vy }
    }
    setZoom(next)
  }
  const smaller = [...ZOOM_STEPS].reverse().find(z => z < zoom - 0.01)
  const larger = ZOOM_STEPS.find(z => z > zoom + 0.01)

  if (!doc) return <div className="nv-pages-loading" role="status">{loadingLabel}</div>

  return (
    <div className="nv-pdf">
      <div ref={scrollerRef} className="nv-pages-scroll">
        <div ref={listRef} className="nv-pages" style={{ width: `${zoom * 100}%` }} aria-label={title}>
          {ratios.map((ratio, i) => (
            <PdfPage key={i} doc={doc} number={i + 1} ratio={ratio} width={width} />
          ))}
        </div>
      </div>
      <div className="nv-zoom" role="toolbar" aria-label={labels.zoom}>
        <button type="button" onClick={() => smaller != null && changeZoom(smaller)} disabled={smaller == null} title={labels.zoomOut} aria-label={labels.zoomOut}>
          <MinusIcon />
        </button>
        <span className="nv-zoom-value" aria-live="polite">{formatPercent(Math.round(zoom * 100))}</span>
        <button type="button" onClick={() => larger != null && changeZoom(larger)} disabled={larger == null} title={labels.zoomIn} aria-label={labels.zoomIn}>
          <PlusIcon />
        </button>
        <button type="button" onClick={() => changeZoom(1)} disabled={zoom === 1} title={labels.zoomFit} aria-label={labels.zoomFit}>
          <FitIcon />
        </button>
      </div>
    </div>
  )
}

/** Zeroes a canvas's bitmap so iOS gives the memory back at once. */
const freeCanvases = (box: HTMLElement) => {
  for (const old of box.querySelectorAll('canvas')) { old.width = 0; old.height = 0 }
}

function PdfPage({ doc, number, ratio, width }: { doc: PDFDocumentProxy; number: number; ratio: number; width: number }) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    // Measured against the scrolling box the pages live in.
    const io = new IntersectionObserver(([e]) => setNear(e.isIntersecting), { root: box.closest('.nv-pages-scroll'), rootMargin: ROOT_MARGIN })
    io.observe(box)
    return () => io.disconnect()
  }, [])

  // Free the bitmap of pages far off screen; long note sets would otherwise exhaust iOS canvas memory.
  useEffect(() => {
    const box = boxRef.current
    if (near || !box) return
    freeCanvases(box)
    box.replaceChildren()
  }, [near])

  useEffect(() => {
    const box = boxRef.current
    if (!near || !box || width === 0) return
    let task: { cancel: () => void; promise: Promise<void> } | null = null
    let cancelled = false
    // Drawn off-screen and swapped in when done, so after a zoom the old page shows (stretched) until the sharp one is ready.
    const canvas = document.createElement('canvas')
    doc.getPage(number).then(p => {
      if (cancelled) return
      const base = p.getViewport({ scale: 1 })
      let scale = (box.clientWidth / base.width) * Math.min(window.devicePixelRatio || 1, MAX_SCALE)
      const pixels = base.width * base.height * scale * scale
      if (pixels > MAX_PIXELS) scale *= Math.sqrt(MAX_PIXELS / pixels)
      const viewport = p.getViewport({ scale })
      canvas.width = Math.floor(viewport.width)
      canvas.height = Math.floor(viewport.height)
      task = p.render({ canvas, viewport })
      return task.promise.then(() => {
        if (cancelled) return
        freeCanvases(box)
        box.replaceChildren(canvas)
      })
    }).catch(() => { /* cancelled when scrolled away or re-zoomed */ })
    return () => {
      cancelled = true
      task?.cancel()
      if (canvas.parentNode !== box) { canvas.width = 0; canvas.height = 0 }
    }
  }, [near, doc, number, width])

  return <div ref={boxRef} className="nv-page" style={{ aspectRatio: `1 / ${ratio}` }} />
}
