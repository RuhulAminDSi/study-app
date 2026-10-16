import { useMemo, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { useProgress } from '../../context/progress'
import { translations } from '../../data/translations'
import ContentStatus from '../ContentStatus'
import Icon from './icons'
import { chapterTitle, fill, lessonTitle, noteSets, num, type NoteSet } from './portalData'

/** `#/notes` and `#/pyq`: every published note set (or past-question set), grouped by subject. */
export default function NotesLibrary({ kind }: { kind: 'notes' | 'pyq' }) {
  const state = useApp()
  const progress = useProgress()
  const t = translations[state.language]
  const lang = state.language
  const [query, setQuery] = useState('')

  const sets = useMemo(
    () => noteSets(state.orderedLessons, lang).filter(n => n.isPyq === (kind === 'pyq')),
    [state.orderedLessons, lang, kind],
  )
  const opened = useMemo(() => new Set(progress.opened), [progress.opened])

  if (state.loading || state.loadFailed) return <ContentStatus />

  const q = query.trim().toLowerCase()
  const shown = q
    ? sets.filter(n => `${lessonTitle(n.item, lang)} ${chapterTitle(n.item, lang)} ${n.item.lesson.title_en}`.toLowerCase().includes(q))
    : sets

  const groups: { chapterId: string; title: string; items: NoteSet[] }[] = []
  for (const n of shown) {
    const last = groups[groups.length - 1]
    if (last?.chapterId === n.item.chapterId) last.items.push(n)
    else groups.push({ chapterId: n.item.chapterId, title: chapterTitle(n.item, lang), items: [n] })
  }

  return (
    <main className="main-content portal-main">
      <div className="pd">
        <header className="pd-head">
          <p className="pd-eyebrow">{fill(t.libCount, { n: num(sets.length, lang) })}</p>
          <h1>{kind === 'pyq' ? t.dashPyqTitle : t.navNotes}</h1>
          <p className="pd-sub">{kind === 'pyq' ? t.libPyqIntro : t.libNotesIntro}</p>
        </header>

        <label className="pl-search">
          <Icon name="search" />
          <input type="search" value={query} onChange={e => setQuery(e.target.value)}
            placeholder={t.libFilter} aria-label={t.libFilter} />
        </label>

        {groups.length === 0 && <p className="pd-muted pd-empty">{t.libEmpty}</p>}

        {groups.map(g => (
          <section key={g.chapterId} className="pl-group" aria-label={g.title}>
            <h2 className="pl-group-title">{g.title}<span>{num(g.items.length, lang)}</span></h2>
            <ul className="pl-grid">
              {g.items.map(n => (
                <li key={n.slug}>
                  <a className="pl-card" href={`#/chapter/${n.item.chapterId}/lesson/${n.item.lesson.id}`}>
                    <div className="pl-cover">
                      {n.coverUrl
                        ? <img src={n.coverUrl} alt="" loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
                        : null}
                      <Icon name={kind === 'pyq' ? 'pyq' : 'notes'} className="pi pl-cover-icon" />
                    </div>
                    <div className="pl-body">
                      <span className="pl-title">{lessonTitle(n.item, lang)}</span>
                      {opened.has(n.item.lesson.id) && (
                        <span className="pl-seen"><Icon name="check" />{t.libOpened}</span>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
