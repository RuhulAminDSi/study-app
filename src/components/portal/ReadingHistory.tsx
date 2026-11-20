import { useMemo, useState } from 'react'
import { useApp, type OrderedLesson } from '../../context/AppContext'
import { useProgress } from '../../context/progress'
import { translations } from '../../data/translations'
import ContentStatus from '../ContentStatus'
import Icon from './icons'
import { chapterTitle, fill, lessonTitle, num } from './portalData'

/** `#/history`: every lesson you've opened, most recent first. */
export default function ReadingHistory() {
  const state = useApp()
  const progress = useProgress()
  const t = translations[state.language]
  const lang = state.language
  const [query, setQuery] = useState('')

  const byId = useMemo(() => new Map(state.orderedLessons.map(o => [o.lesson.id, o])), [state.orderedLessons])
  const history = useMemo(
    () => progress.recent.map(r => byId.get(r.lessonId)).filter((o): o is OrderedLesson => !!o),
    [progress.recent, byId],
  )

  if (state.loading || state.loadFailed) return <ContentStatus />

  const q = query.trim().toLowerCase()
  const shown = q
    ? history.filter(o => `${lessonTitle(o, lang)} ${chapterTitle(o, lang)}`.toLowerCase().includes(q))
    : history

  return (
    <main className="main-content portal-main">
      <div className="pd">
        <header className="pd-head">
          <p className="pd-eyebrow">{fill(t.historyCount, { n: num(history.length, lang) })}</p>
          <h1>{t.historyTitle}</h1>
          <p className="pd-sub">{t.historyIntro}</p>
        </header>

        <label className="pl-search">
          <Icon name="search" />
          <input type="search" value={query} onChange={e => setQuery(e.target.value)}
            placeholder={t.libFilter} aria-label={t.libFilter} />
        </label>

        {shown.length === 0 && <p className="pd-muted pd-empty">{t.historyEmpty}</p>}

        {shown.length > 0 && (
          <ul className="pl-grid">
            {shown.map(o => (
              <li key={o.lesson.id}>
                <a className="pl-card" href={`#/chapter/${o.chapterId}/lesson/${o.lesson.id}`}>
                  <div className="pl-cover">
                    <Icon name="clock" className="pi pl-cover-icon" />
                  </div>
                  <div className="pl-body">
                    <span className="pl-title">{lessonTitle(o, lang)}</span>
                    <span className="pl-sub">{chapterTitle(o, lang)}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
