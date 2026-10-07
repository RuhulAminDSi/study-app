import { useEffect, useId, useRef, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'

/** Written next to each published PDF by notes/build/publish.mjs. */
interface NotesMeta {
  title: string
  pages: number
  pdfBytes: number
  updated: string
  contents: { page: number; title: string }[]
}

type Tab = 'notes' | 'pdf'
type Lang = 'en' | 'bn'

interface Props {
  slug: string
  /** Language of the note files (the lesson's content_en / content_bn) */
  lang: Lang
  title: string
}

const BN_DIGITS = '০১২৩৪৫৬৭৮৯'
const localDigits = (s: string, ui: Lang) => (ui === 'bn' ? s.replace(/\d/g, d => BN_DIGITS[Number(d)]) : s)
const megabytes = (bytes: number, ui: Lang) => `${localDigits((bytes / 1048576).toFixed(1), ui)} MB`

const icon = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const
const PenIcon = () => <svg {...icon}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
const NotebookIcon = () => <svg {...icon}><path d="M2 6h4M2 10h4M2 14h4M2 18h4" /><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M16 2v20" /></svg>
const FileIcon = () => <svg {...icon}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
const DownloadIcon = () => <svg {...icon}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
const InfoIcon = () => <svg {...icon}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
const ExternalIcon = () => <svg {...icon}><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>

/**
 * In-lesson viewer for a handwritten note set: the notebook is shown by default; the PDF tab has
 * an embedded preview, download, open-in-new-tab and a details panel (cover, facts, contents).
 */
export default function NotesViewer({ slug, lang, title }: Props) {
  const { language: ui } = useApp()
  const t = translations[ui]
  const id = useId()
  const [tab, setTab] = useState<Tab>('notes')
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [pdfPage, setPdfPage] = useState(1)
  const [meta, setMeta] = useState<NotesMeta | null>(null)
  const [coverOk, setCoverOk] = useState(true)
  const previewRef = useRef<HTMLDivElement>(null)
  // The Notes tab is a simple web page: the frame grows to the page's full height (no inner scrollbar).
  const webRef = useRef<HTMLIFrameElement>(null)
  const webObserver = useRef<ResizeObserver | null>(null)
  const [webHeight, setWebHeight] = useState<number | null>(null)
  const onWebLoad = () => {
    const doc = webRef.current?.contentDocument
    if (!doc) return
    const measure = () => setWebHeight(doc.documentElement.scrollHeight)
    measure()
    webObserver.current?.disconnect()
    webObserver.current = new ResizeObserver(measure)
    webObserver.current.observe(doc.body)
  }
  useEffect(() => () => webObserver.current?.disconnect(), [])

  const base = `/notes/${slug}/${slug}.${lang}`
  const fileName = `${slug}.${lang}.pdf`
  // Phones (e.g. Chrome on Android) cannot render PDFs inside a page; they get the cover + download.
  const canPreview = typeof navigator === 'undefined' || navigator.pdfViewerEnabled !== false

  useEffect(() => {
    let alive = true
    fetch(`${base}.json`)
      .then(r => (r.ok ? r.json() : null))
      .then((m: NotesMeta | null) => { if (alive) setMeta(m) })
      .catch(() => { /* details simply show dashes */ })
    return () => { alive = false }
  }, [base])

  const openPage = (page: number) => {
    setPdfPage(page)
    setDetailsOpen(false)
    requestAnimationFrame(() => previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  const pages = meta ? localDigits(String(meta.pages), ui) : null
  const size = meta ? megabytes(meta.pdfBytes, ui) : null
  const updated = meta
    ? new Date(meta.updated).toLocaleDateString(ui === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  const cover = coverOk ? `${base}.cover.jpg` : null

  return (
    <section className="nv" aria-label={title}>
      <header className="nv-head">
        <div className="nv-heading">
          <span className="nv-eyebrow"><PenIcon />{t.notesBadge}</span>
          <h2 className="nv-title">{title}</h2>
        </div>
        <div className="nv-toolbar" aria-label={t.notesViewsLabel}>
          <button type="button" className="nv-tab" aria-pressed={tab === 'notes'} onClick={() => setTab('notes')}>
            <NotebookIcon />{t.notesTabNotes}
          </button>
          <a className="nv-btn" href={`${base}.html?view=web`} target="_blank" rel="noopener"><ExternalIcon />{t.noteNewTab}</a>
          <button type="button" className="nv-tab" aria-pressed={tab === 'pdf'} onClick={() => setTab('pdf')}>
            <FileIcon />{t.notesTabPdf}
          </button>
          <a className="nv-btn" href={`${base}.pdf`} target="_blank" rel="noopener"><ExternalIcon />{t.handwrittenNewTab}</a>
          <a className="nv-btn nv-btn-primary" href={`${base}.note.pdf`} download={`${slug}.${lang}.note.pdf`}><DownloadIcon />{t.noteDownload}</a>
        </div>
      </header>

      {tab === 'notes' ? (
        <div className="nv-panel">
          <iframe
            ref={webRef}
            className="nv-frame nv-web"
            src={`${base}.html?view=web`}
            title={title}
            scrolling="no"
            style={webHeight ? { height: webHeight } : undefined}
            onLoad={onWebLoad}
          />
        </div>
      ) : (
        <div className="nv-panel">
          <div className="nv-bar">
            <div className="nv-file">
              <span className="nv-file-icon" aria-hidden="true">PDF</span>
              <span className="nv-file-text">
                <span className="nv-file-name">{fileName}</span>
                <span className="nv-file-meta">{pages && size ? `${pages} ${t.pdfPages} · ${size}` : '…'}</span>
              </span>
            </div>
            <div className="nv-actions">
              <button
                type="button"
                className="nv-btn"
                aria-expanded={detailsOpen}
                aria-controls={`${id}-details`}
                onClick={() => setDetailsOpen(o => !o)}
              >
                <InfoIcon />{t.pdfDetails}
              </button>
              <a className="nv-btn nv-btn-primary" href={`${base}.pdf`} download={fileName}><DownloadIcon />{t.pdfDownload}</a>
            </div>
          </div>

          {detailsOpen && (
            <div className="nv-details" id={`${id}-details`}>
              {cover && <img className="nv-cover-thumb" src={cover} alt="" onError={() => setCoverOk(false)} />}
              <div className="nv-details-body">
                <dl className="nv-meta">
                  <div><dt>{t.pdfTitle}</dt><dd>{meta?.title ?? title}</dd></div>
                  <div><dt>{t.pdfLanguage}</dt><dd>{lang === 'bn' ? 'বাংলা' : 'English'}</dd></div>
                  <div><dt>{t.pdfPages}</dt><dd>{pages ?? '—'}</dd></div>
                  <div><dt>{t.pdfFileSize}</dt><dd>{size ?? '—'}</dd></div>
                  <div><dt>{t.pdfFormat}</dt><dd>{t.pdfFormatValue}</dd></div>
                  <div><dt>{t.pdfUpdated}</dt><dd>{updated ?? '—'}</dd></div>
                </dl>
                {meta && meta.contents.length > 0 && (
                  <div className="nv-contents">
                    <h3>{t.pdfContents}</h3>
                    <ol>
                      {meta.contents.map((c, i) => (
                        <li key={i}>
                          <button type="button" onClick={() => openPage(c.page)} title={`${t.pdfGoToPage} ${localDigits(String(c.page), ui)}`}>
                            <span>{c.title}</span>
                            <span className="nv-page">{t.pdfPageShort} {localDigits(String(c.page), ui)}</span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          )}

          <div ref={previewRef} className="nv-preview">
            {canPreview ? (
              <iframe
                key={pdfPage}
                className="nv-frame nv-pdf"
                src={`${base}.pdf#page=${pdfPage}&view=FitH`}
                title={`${t.pdfPreviewTitle}: ${title}`}
              />
            ) : (
              <div className="nv-fallback">
                {cover && <img src={cover} alt="" onError={() => setCoverOk(false)} />}
                <p>{t.pdfNoPreview}</p>
                <a className="nv-btn nv-btn-primary" href={`${base}.pdf`} download={fileName}><DownloadIcon />{t.pdfDownload}</a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
