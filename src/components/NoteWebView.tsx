import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { Translations } from '../types'

interface Section {
  id: string
  title: string
}

interface Parsed {
  html: string
  sections: Section[]
}

const LEAD_DOTS = /…{2,}|\.{4,}/
/** Placeholder for the answer-key toggle label, filled in per UI language */
const ANSWERS_SLOT = '<summary></summary>'
const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Turns a published note sheet (public/notes/<dir>/<slug>/<slug>.<lang>.html, written for A4 paper) into
 * one flowing article: drops the sheet chrome (page heads, page numbers, cover band, scripts), the cover title
 * (the viewer header already shows it) and the paper "Contents … p. N" list, pulls each section's tag into its
 * heading, and gives every section an id for the on-this-page navigation.
 */
function parseNote(source: string, idPrefix: string): Parsed {
  const doc = new DOMParser().parseFromString(source, 'text/html')
  const body = doc.body
  body.querySelectorAll('script, style, link, meta, iframe, object, embed, .pg-head, .pg-no, .cover-band').forEach(n => n.remove())
  body.querySelectorAll('*').forEach(el => {
    for (const { name } of [...el.attributes]) if (/^on/i.test(name)) el.removeAttribute(name)
  })

  // The cover's h1 repeats the lesson title; keep its subtitle as the article's lead.
  const firstPage = body.querySelector('section.page')
  firstPage?.querySelector('h1.title')?.remove()
  firstPage?.querySelector('.subtitle')?.classList.add('nw-lead')

  // The paper table of contents points at sheet numbers; the web view builds its own.
  body.querySelectorAll('ul.tick').forEach(list => {
    const items = [...list.querySelectorAll('li')]
    if (!items.length || !items.every(li => LEAD_DOTS.test(li.textContent ?? ''))) return
    const block = list.parentElement?.classList.contains('cols') ? list.parentElement : list
    const heading = block.previousElementSibling
    if (heading?.tagName === 'H3') heading.remove()
    block.remove()
  })

  // Sheets become plain blocks of one article.
  body.querySelectorAll('section.page').forEach(page => {
    const block = doc.createElement('div')
    block.className = 'nw-block'
    block.append(...page.childNodes)
    page.replaceWith(block)
  })

  // Tables scroll sideways on narrow screens instead of squeezing.
  body.querySelectorAll('table').forEach(table => {
    const wrap = doc.createElement('div')
    wrap.className = 'nw-table'
    table.replaceWith(wrap)
    wrap.append(table)
  })

  // Answer keys stay hidden until asked for.
  body.querySelectorAll('.anskey').forEach(key => {
    const details = doc.createElement('details')
    details.className = 'nw-anskey'
    const summary = doc.createElement('summary')
    const text = doc.createElement('div')
    text.append(...key.childNodes)
    details.append(summary, text)
    key.replaceWith(details)
  })

  const sections: Section[] = []
  body.querySelectorAll('h1.title, h2').forEach((heading, i) => {
    const tag = heading.nextElementSibling
    if (tag?.classList.contains('tag')) heading.append(tag)
    const id = `${idPrefix}-${i}`
    heading.id = id
    const clone = heading.cloneNode(true) as Element
    clone.querySelectorAll('.no, .tag').forEach(n => n.remove())
    const title = (clone.textContent ?? '').replace(/\s+/g, ' ').trim()
    if (title) sections.push({ id, title })
  })

  return { html: body.innerHTML, sections }
}

const cache = new Map<string, Parsed>()

/**
 * The note as a native, theme-aware article inside the lesson, with on-this-page navigation.
 * Mount it with key={src} so a different note starts from a fresh state.
 */
export default function NoteWebView({ src, lang, title, pdfHref, t }: {
  src: string
  /** language of the note itself (sets lang= for fonts and option lettering) */
  lang: 'en' | 'bn'
  title: string
  /** offered when the web note cannot be loaded */
  pdfHref: string
  t: Translations
}) {
  const idPrefix = `nw${src.replace(/[^a-z0-9]/gi, '').slice(-24)}`
  const [note, setNote] = useState<Parsed | null>(() => cache.get(src) ?? null)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [active, setActive] = useState<string | null>(null)
  const [tocOpen, setTocOpen] = useState(false)
  const tocId = useId()
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (cache.has(src)) return
    let alive = true
    fetch(src)
      .then(r => {
        if (!r.ok) throw new Error(String(r.status))
        return r.text()
      })
      .then(text => {
        const parsed = parseNote(text, idPrefix)
        cache.set(src, parsed)
        if (alive) setNote(parsed)
      })
      .catch(() => { if (alive) setFailed(true) })
    return () => { alive = false }
  }, [src, idPrefix, attempt])

  // Answer-key toggles are labelled in the UI language, which can differ from the note's.
  const html = useMemo(
    () => note?.html.replaceAll(ANSWERS_SLOT, `<summary>${escapeHtml(t.notesShowAnswers)}</summary>`) ?? '',
    [note, t.notesShowAnswers],
  )

  // Highlight the section being read.
  useEffect(() => {
    if (!note || !note.sections.length) return
    const update = () => {
      // looked up on every call: the article's markup is replaced whenever React re-applies it
      const headings = [...(articleRef.current?.querySelectorAll<HTMLElement>('h1.title[id], h2[id]') ?? [])]
      let id = headings[0]?.id ?? null
      for (const h of headings) {
        if (h.getBoundingClientRect().top < 140) id = h.id
        else break
      }
      setActive(id)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [note])

  const jump = (id: string) => {
    setTocOpen(false)
    articleRef.current?.querySelector(`#${CSS.escape(id)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const retry = () => {
    setFailed(false)
    setAttempt(a => a + 1)
  }

  if (failed) {
    return (
      <div className="nw-status">
        <p>{t.notesWebFailed}</p>
        <div className="nw-status-actions">
          <button type="button" className="nv-btn nv-btn-ghost nv-btn-outline" onClick={retry}>{t.retry}</button>
          <a className="nv-btn nv-btn-primary" href={pdfHref} target="_blank" rel="noopener">{t.noteNewTab}</a>
        </div>
      </div>
    )
  }

  if (!note) {
    return (
      <div className="nw-skeleton" aria-busy="true" aria-label={t.notesWebLoading}>
        <span style={{ width: '62%' }} /><span /><span /><span style={{ width: '80%' }} />
        <span className="nw-skeleton-block" /><span /><span style={{ width: '70%' }} />
      </div>
    )
  }

  return (
    <div className="nw">
      <div className="nw-layout">
        {note.sections.length > 1 && (
          <nav className={`nw-toc${tocOpen ? ' is-open' : ''}`} aria-label={t.notesOnThisPage}>
            <p className="nw-toc-title">{t.notesOnThisPage}</p>
            {/* narrow layouts: the list folds behind this button; wide layouts show it as a sticky rail */}
            <button type="button" className="nw-toc-toggle" aria-expanded={tocOpen} aria-controls={tocId} onClick={() => setTocOpen(o => !o)}>
              <span className="nw-toc-toggle-label">{t.notesOnThisPage}</span>
              <span className="nw-toc-current">{note.sections.find(s => s.id === active)?.title ?? note.sections[0].title}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <ol id={tocId}>
              {note.sections.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={active === s.id ? 'is-active' : undefined}
                    aria-current={active === s.id ? 'location' : undefined}
                    onClick={() => jump(s.id)}
                  >
                    <span className="nw-toc-no">{String(i + 1).padStart(2, '0')}</span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {/* our own published note, with scripts and event handlers stripped in parseNote */}
        <article ref={articleRef} className="nw-article" lang={lang} aria-label={title} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
