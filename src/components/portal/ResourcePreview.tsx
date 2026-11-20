import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Translations } from '../../types'
import PdfPages from '../PdfPages'
import Icon from './icons'

export interface PreviewFile { url: string; name: string; type: string | null; title: string; size: string | null }

/**
 * Full-screen preview of a resource's file: a PDF in the browser's viewer (desktop) or drawn by pdf.js (touch
 * devices, which can't scroll an embedded PDF), an image as an image; with Download and Open-in-new-tab.
 */
export default function ResourcePreview({ file, t, onClose }: { file: PreviewFile; t: Translations; onClose: () => void }) {
  const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.url)
  const [mode, setMode] = useState<'frame' | 'pages' | 'fallback'>(() =>
    navigator.pdfViewerEnabled === false || window.matchMedia('(pointer: coarse)').matches ? 'pages' : 'frame')
  const [zoom, setZoom] = useState(1)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow }
  }, [onClose])

  // Portalled to <body>: the page's own stacking contexts (sticky navbar, sidebar) would otherwise cover it.
  return createPortal(
    <div className="rp-backdrop" role="presentation" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="rp-dialog" role="dialog" aria-modal="true" aria-label={`${t.pdfPreviewTitle}: ${file.title}`}>
        <header className="rp-head">
          <div className="rp-title">
            <strong>{file.title}</strong>
            <span>{file.name}{file.size ? ` · ${file.size}` : ''}</span>
          </div>
          <a className="rs-action" href={file.url} target="_blank" rel="noreferrer"><Icon name="external" /><span className="rp-hide-sm">{t.pdfOpenNewTab}</span></a>
          <a className="rs-action primary" href={file.url} download={file.name}><Icon name="download" /><span className="rp-hide-sm">{t.rsDownload}</span></a>
          <button ref={closeRef} type="button" className="rp-close" onClick={onClose} aria-label={t.adminClose}><Icon name="close" /></button>
        </header>
        <div className="rp-body nv-preview">
          {!isPdf ? (
            <img className="rp-image" src={file.url} alt={file.title} />
          ) : mode === 'frame' ? (
            <iframe className="nv-frame rp-frame" src={`${file.url}#view=FitH`} title={`${t.pdfPreviewTitle}: ${file.title}`} />
          ) : mode === 'pages' ? (
            <PdfPages
              src={file.url}
              page={1}
              title={`${t.pdfPreviewTitle}: ${file.title}`}
              loadingLabel={t.notesWebLoading}
              failed={() => setMode('fallback')}
              zoom={zoom}
              setZoom={setZoom}
              labels={{ zoom: t.pdfZoomLabel, zoomIn: t.pdfZoomIn, zoomOut: t.pdfZoomOut, zoomFit: t.pdfZoomFit }}
              formatPercent={pct => `${pct}%`}
            />
          ) : (
            <div className="nv-fallback"><p>{t.pdfNoPreview}</p></div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
