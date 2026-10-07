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
  /** typed note PDF ("Download note") */
  notePages?: number
  notePdfBytes?: number
  noteContents?: { page: number | null; title: string }[]
  updated: string
  contents: { page: number; title: string }[]
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
const NotebookIcon = () => <svg {...icon}><path d="M2 6h4M2 10h4M2 14h4M2 18h4" /><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M16 2v20" /></svg>
const FileIcon = () => <svg {...icon}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
const DownloadIcon = () => <svg {...icon}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
const InfoIcon = () => <svg {...icon}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
const ExternalIcon = () => <svg {...icon}><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>

interface FileInfo {
  fileName: string
  href: string
  pages: number | null
  bytes: number | null
  cover: string
  downloadLabel: string
}

/** File bar + Details panel, identical for the typed note and the handwritten PDF. */
function FileDetails({ file, meta, contents, title, lang, ui, t, onContents }: {
  file: FileInfo
  meta: NotesMeta | null
  /** contents of this file, with page numbers in this file */
  contents: { page: number | null; title: string }[]
  title: string
  lang: Lang
  ui: Lang
  t: Translations
  onContents: (page: number) => void
}) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [coverOk, setCoverOk] = useState(true)
  const pages = file.pages != null ? localDigits(String(file.pages), ui) : null
  const size = file.bytes != null ? megabytes(file.bytes, ui) : null
  const updated = meta
    ? new Date(meta.updated).toLocaleDateString(ui === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  return (
    <>
      <div className="nv-bar">
        <div className="nv-file">
          <span className="nv-file-icon" aria-hidden="true">PDF</span>
          <span className="nv-file-text">
            <span className="nv-file-name">{file.fileName}</span>
            <span className="nv-file-meta">{pages && size ? `${pages} ${t.pdfPages} · ${size}` : '…'}</span>
          </span>
        </div>
        <div className="nv-actions">
          <button type="button" className="nv-btn" aria-expanded={open} aria-controls={`${id}-details`} onClick={() => setOpen(o => !o)}>
            <InfoIcon />{t.pdfDetails}
          </button>
          <a className="nv-btn nv-btn-primary" href={file.href} download={file.fileName}><DownloadIcon />{file.downloadLabel}</a>
        </div>
      </div>
      {open && (
        <div className="nv-details" id={`${id}-details`}>
          {coverOk && <img className="nv-cover-thumb" src={file.cover} alt="" onError={() => setCoverOk(false)} />}
          <div className="nv-details-body">
            <dl className="nv-meta">
              <div><dt>{t.pdfTitle}</dt><dd>{meta?.title ?? title}</dd></div>
              <div><dt>{t.pdfLanguage}</dt><dd>{lang === 'bn' ? 'বাংলা' : 'English'}</dd></div>
              <div><dt>{t.pdfPages}</dt><dd>{pages ?? '—'}</dd></div>
              <div><dt>{t.pdfFileSize}</dt><dd>{size ?? '—'}</dd></div>
              <div><dt>{t.pdfFormat}</dt><dd>{t.pdfFormatValue}</dd></div>
              <div><dt>{t.pdfUpdated}</dt><dd>{updated ?? '—'}</dd></div>
            </dl>
            {contents.length > 0 && (
              <div className="nv-contents">
                <h3>{t.pdfContents}</h3>
                <ol>
                  {contents.map((c, i) => (
                    <li key={i}>
                      <button type="button" onClick={() => { setOpen(false); onContents(c.page ?? 1) }} title={c.title}>
                        <span>{c.title}</span>
                        {c.page != null && <span className="nv-page">{t.pdfPageShort} {localDigits(String(c.page), ui)}</span>}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

/** Embedded PDF with its file bar and details; on phones without inline PDF support, the cover + download. */
function PdfView({ file, contents, meta, title, lang, ui, t }: {
  file: FileInfo
  contents: { page: number | null; title: string }[]
  meta: NotesMeta | null
  title: string
  lang: Lang
  ui: Lang
  t: Translations
}) {
  const [page, setPage] = useState(1)
  const [coverOk, setCoverOk] = useState(true)
  const previewRef = useRef<HTMLDivElement>(null)
  // Phones (e.g. Chrome on Android) cannot render PDFs inside a page.
  const canPreview = typeof navigator === 'undefined' || navigator.pdfViewerEnabled !== false
  const openPage = (p: number) => {
    setPage(p)
    requestAnimationFrame(() => previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  return (
    <div className="nv-panel">
      <FileDetails file={file} meta={meta} contents={contents} title={title} lang={lang} ui={ui} t={t} onContents={openPage} />
      <div ref={previewRef} className="nv-preview">
        {canPreview ? (
          <iframe key={page} className="nv-frame nv-pdf" src={`${file.href}#page=${page}&view=FitH`} title={`${t.pdfPreviewTitle}: ${title}`} />
        ) : (
          <div className="nv-fallback">
            {coverOk && <img src={file.cover} alt="" onError={() => setCoverOk(false)} />}
            <p>{t.pdfNoPreview}</p>
            <a className="nv-btn nv-btn-primary" href={file.href} download={file.fileName}><DownloadIcon />{file.downloadLabel}</a>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * In-lesson viewer for a note set. "Note" (default) is the typed note PDF; "Handwritten note" is the
 * handwritten PDF. Both are shown the same way: embedded preview, file bar, details, download.
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

  const noteFile: FileInfo = {
    fileName: `${slug}.${lang}.note.pdf`,
    href: `${base}.note.pdf`,
    pages: meta?.notePages ?? null,
    bytes: meta?.notePdfBytes ?? null,
    cover: `${base}.note.cover.jpg`,
    downloadLabel: t.noteDownload,
  }
  const handwrittenFile: FileInfo = {
    fileName: `${slug}.${lang}.pdf`,
    href: `${base}.pdf`,
    pages: meta?.pages ?? null,
    bytes: meta?.pdfBytes ?? null,
    cover: `${base}.cover.jpg`,
    downloadLabel: t.pdfDownload,
  }

  const toggle = (v: View, label: string, glyph: ReactNode) => (
    <button type="button" className="nv-tab" aria-pressed={view === v} onClick={() => setView(v)}>
      {glyph}{label}
    </button>
  )

  return (
    <section className="nv" aria-label={title}>
      <header className="nv-head">
        <div className="nv-heading">
          <span className="nv-eyebrow"><PenIcon />{t.notesBadge}</span>
          <h2 className="nv-title">{title}</h2>
        </div>
        <div className="nv-toolbar" aria-label={t.notesViewsLabel}>
          {toggle('note', t.notesTabNotes, <NotebookIcon />)}
          <a className="nv-btn" href={noteFile.href} target="_blank" rel="noopener"><ExternalIcon />{t.noteNewTab}</a>
          {toggle('handwritten', t.notesTabPdf, <FileIcon />)}
          <a className="nv-btn" href={handwrittenFile.href} target="_blank" rel="noopener"><ExternalIcon />{t.handwrittenNewTab}</a>
          <a className="nv-btn nv-btn-primary" href={noteFile.href} download={noteFile.fileName}><DownloadIcon />{t.noteDownload}</a>
        </div>
      </header>
      {view === 'note' ? (
        <PdfView key="note" file={noteFile} contents={meta?.noteContents ?? []} meta={meta} title={title} lang={lang} ui={ui} t={t} />
      ) : (
        <PdfView key="handwritten" file={handwrittenFile} contents={meta?.contents ?? []} meta={meta} title={title} lang={lang} ui={ui} t={t} />
      )}
    </section>
  )
}
