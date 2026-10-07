import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import type { Translations } from '../types'

/** Written next to each published note set by notes/build/publish.mjs. */
interface NotesMeta {
  title: string
  /** handwritten PDF */
  pages: number
  pdfBytes: number
  contents: { page: number; title: string }[]
  /** typed note PDF ("Download note") */
  notePages?: number
  notePdfBytes?: number
  noteContents?: { page: number | null; title: string }[]
  updated: string
}

type View = 'note' | 'handwritten'
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
const DocIcon = () => <svg {...icon}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
const PenDocIcon = () => <svg {...icon}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" /><path d="M14 2v6h6v3" /><path d="M18.4 14.6a1.9 1.9 0 0 1 2.7 2.7L16 22.4l-3.4.6.6-3.4Z" /></svg>
const DownloadIcon = () => <svg {...icon}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
const InfoIcon = () => <svg {...icon}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
const ExternalIcon = () => <svg {...icon}><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg {...icon} className={`nv-chev${open ? ' is-open' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
)

interface FileInfo {
  kind: View
  label: string
  fileName: string
  href: string
  pages: number | null
  bytes: number | null
  cover: string
  downloadLabel: string
  contents: { page: number | null; title: string }[]
}

/** One document (typed note or handwritten note): bar, details panel and embedded preview. */
function DocumentView({ file, meta, lang, ui, t, title }: {
  file: FileInfo
  meta: NotesMeta | null
  lang: Lang
  ui: Lang
  t: Translations
  title: string
}) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [coverOk, setCoverOk] = useState(true)
  const previewRef = useRef<HTMLDivElement>(null)
  // Phones (e.g. Chrome on Android) cannot render PDFs inside a page; they get the cover + download.
  const canPreview = typeof navigator === 'undefined' || navigator.pdfViewerEnabled !== false

  const pages = file.pages != null ? localDigits(String(file.pages), ui) : null
  const size = file.bytes != null ? megabytes(file.bytes, ui) : null
  const updated = meta
    ? new Date(meta.updated).toLocaleDateString(ui === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : null
  const openPage = (p: number) => {
    setOpen(false)
    setPage(p)
    requestAnimationFrame(() => previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  return (
    <div className="nv-doc">
      <div className="nv-bar">
        <div className="nv-doc-id">
          <span className={`nv-doc-badge nv-doc-badge--${file.kind}`} aria-hidden="true">
            {file.kind === 'note' ? <DocIcon /> : <PenDocIcon />}
          </span>
          <span className="nv-doc-text">
            <span className="nv-doc-label">{file.label}</span>
            <span className="nv-doc-meta">
              {pages && size ? <>PDF · {pages} {t.pdfPages} · {size}</> : 'PDF'}
            </span>
          </span>
        </div>
        <div className="nv-bar-actions">
          <button type="button" className="nv-btn nv-btn-ghost" aria-expanded={open} aria-controls={`${id}-details`} onClick={() => setOpen(o => !o)}>
            <InfoIcon /><span>{t.pdfDetails}</span><ChevronIcon open={open} />
          </button>
          <a className="nv-btn nv-btn-soft" href={file.href} download={file.fileName}><DownloadIcon /><span>{file.downloadLabel}</span></a>
        </div>
      </div>

      {open && (
        <div className="nv-details" id={`${id}-details`}>
          {coverOk && (
            <div className="nv-cover">
              <img src={file.cover} alt="" onError={() => setCoverOk(false)} />
            </div>
          )}
          <div className="nv-details-body">
            <dl className="nv-stats">
              <div><dt>{t.pdfPages}</dt><dd>{pages ?? '—'}</dd></div>
              <div><dt>{t.pdfFileSize}</dt><dd>{size ?? '—'}</dd></div>
              <div><dt>{t.pdfLanguage}</dt><dd>{lang === 'bn' ? 'বাংলা' : 'English'}</dd></div>
              <div><dt>{t.pdfFormat}</dt><dd>A4</dd></div>
              <div><dt>{t.pdfUpdated}</dt><dd>{updated ?? '—'}</dd></div>
            </dl>
            {file.contents.length > 0 && (
              <nav className="nv-toc" aria-label={t.pdfContents}>
                <h3>{t.pdfContents}</h3>
                <ol>
                  {file.contents.map((c, i) => (
                    <li key={i}>
                      <button type="button" onClick={() => openPage(c.page ?? 1)}>
                        <span className="nv-toc-no">{localDigits(String(i + 1).padStart(2, '0'), ui)}</span>
                        <span className="nv-toc-title">{c.title}</span>
                        {c.page != null && <span className="nv-toc-page">{t.pdfPageShort} {localDigits(String(c.page), ui)}</span>}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </div>
      )}

      <div ref={previewRef} className="nv-preview">
        {canPreview ? (
          <iframe key={page} className="nv-frame" src={`${file.href}#page=${page}&view=FitH`} title={`${t.pdfPreviewTitle}: ${title}`} />
        ) : (
          <div className="nv-fallback">
            {coverOk && <img src={file.cover} alt="" onError={() => setCoverOk(false)} />}
            <p>{t.pdfNoPreview}</p>
            <a className="nv-btn nv-btn-primary" href={file.href} download={file.fileName}><DownloadIcon /><span>{file.downloadLabel}</span></a>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * In-lesson viewer for a note set. "Note" (default) is the typed note; "Handwritten note" is the
 * handwritten notebook. Both are PDFs shown the same way: bar, details, download, embedded preview.
 */
export default function NotesViewer({ slug, lang, title }: Props) {
  const { language: ui } = useApp()
  const t = translations[ui]
  const [view, setView] = useState<View>('note')
  const [meta, setMeta] = useState<NotesMeta | null>(null)
  const base = `/notes/${slug}/${slug}.${lang}`

  useEffect(() => {
    let alive = true
    fetch(`${base}.json`)
      .then(r => (r.ok ? r.json() : null))
      .then((m: NotesMeta | null) => { if (alive) setMeta(m) })
      .catch(() => { /* details simply show dashes */ })
    return () => { alive = false }
  }, [base])

  const files: Record<View, FileInfo> = {
    note: {
      kind: 'note',
      label: t.noteTypedLabel,
      fileName: `${slug}.${lang}.note.pdf`,
      href: `${base}.note.pdf`,
      pages: meta?.notePages ?? null,
      bytes: meta?.notePdfBytes ?? null,
      cover: `${base}.note.cover.jpg`,
      downloadLabel: t.noteDownload,
      contents: meta?.noteContents ?? [],
    },
    handwritten: {
      kind: 'handwritten',
      label: t.notesTabPdf,
      fileName: `${slug}.${lang}.pdf`,
      href: `${base}.pdf`,
      pages: meta?.pages ?? null,
      bytes: meta?.pdfBytes ?? null,
      cover: `${base}.cover.jpg`,
      downloadLabel: t.pdfDownload,
      contents: meta?.contents ?? [],
    },
  }
  const pages = meta?.notePages ?? meta?.pages
  const updated = meta
    ? new Date(meta.updated).toLocaleDateString(ui === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : null

  // Split button: choose the view, or open that document in a new tab.
  const segment = (v: View, label: string, newTabLabel: string, glyph: ReactNode) => (
    <div className={`nv-seg${view === v ? ' is-active' : ''}`}>
      <button type="button" className="nv-seg-main" aria-pressed={view === v} onClick={() => setView(v)}>
        {glyph}<span>{label}</span>
      </button>
      <a className="nv-seg-ext" href={files[v].href} target="_blank" rel="noopener" title={newTabLabel} aria-label={newTabLabel}>
        <ExternalIcon />
      </a>
    </div>
  )

  return (
    <section className="nv" aria-label={title}>
      <header className="nv-head">
        <div className="nv-heading">
          <span className="nv-eyebrow"><PenIcon />{t.notesBadge}</span>
          <h2 className="nv-title">{title}</h2>
          <ul className="nv-chips">
            {pages != null && <li>{localDigits(String(pages), ui)} {t.pdfPages}</li>}
            <li>A4</li>
            <li>{lang === 'bn' ? 'বাংলা' : 'English'}</li>
            {updated && <li>{t.pdfUpdated} {updated}</li>}
          </ul>
        </div>
        <div className="nv-controls" aria-label={t.notesViewsLabel}>
          <div className="nv-segments">
            {segment('note', t.notesTabNotes, t.noteNewTab, <DocIcon />)}
            {segment('handwritten', t.notesTabPdf, t.handwrittenNewTab, <PenDocIcon />)}
          </div>
          <a className="nv-btn nv-btn-primary" href={files.note.href} download={files.note.fileName}>
            <DownloadIcon /><span>{t.noteDownload}</span>
          </a>
        </div>
      </header>

      <DocumentView key={view} file={files[view]} meta={meta} lang={lang} ui={ui} t={t} title={title} />
    </section>
  )
}
