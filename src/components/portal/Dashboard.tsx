import { useMemo, type CSSProperties } from 'react'
import { useApp } from '../../context/AppContext'
import type { OrderedLesson } from '../../context/AppContext'
import { useProgress } from '../../context/progress'
import { useCandidateAuth } from '../../candidate/CandidateAuthContext'
import { translations } from '../../data/translations'
import ContentStatus from '../ContentStatus'
import Announcements from './Announcements'
import { CONTENT_MANAGEMENT } from '../../features'
import Icon, { type IconName } from './icons'
import { chapterTitle, fill, lessonTitle, noteSets, num, subjectSummaries } from './portalData'

const lessonHref = (o: OrderedLesson) => `#/chapter/${o.chapterId}/lesson/${o.lesson.id}`

/** `#/`: the portal home. Every number comes from the loaded content or this browser's reading progress. */
export default function Dashboard() {
  const state = useApp()
  const progress = useProgress()
  const { candidate } = useCandidateAuth()
  const t = translations[state.language]
  const lang = state.language

  const sets = useMemo(() => noteSets(state.orderedLessons, lang), [state.orderedLessons, lang])
  const subjects = useMemo(
    () => subjectSummaries(state.chapters, state.orderedLessons, sets),
    [state.chapters, state.orderedLessons, sets],
  )
  const byId = useMemo(() => new Map(state.orderedLessons.map(o => [o.lesson.id, o])), [state.orderedLessons])
  const opened = useMemo(() => new Set(progress.opened), [progress.opened])

  if (state.loading || state.loadFailed || state.orderedLessons.length === 0) return <ContentStatus />

  const total = state.orderedLessons.length
  const done = state.orderedLessons.filter(o => opened.has(o.lesson.id)).length
  const pct = Math.round((done / total) * 100)
  const recent = progress.recent.map(r => byId.get(r.lessonId)).filter((o): o is OrderedLesson => !!o)
  const last = recent[0]
  const pyqSets = sets.filter(s => s.isPyq)

  const stats: { label: string; value: number; icon: IconName; href?: string }[] = [
    { label: t.dashStatSubjects, value: subjects.length, icon: 'layers' },
    { label: t.dashStatLessons, value: total, icon: 'book' },
    { label: t.dashStatNotes, value: sets.length - pyqSets.length, icon: 'notes', href: '#/notes' },
    { label: t.dashStatPyq, value: pyqSets.length, icon: 'pyq', href: '#/pyq' },
  ]

  return (
    <main className="main-content portal-main">
      <div className="pd">
        <header className="pd-head">
          <p className="pd-eyebrow">{t.navDashboard}</p>
          <h1>{candidate ? fill(t.dashWelcomeName, { name: candidate.fullName.split(' ')[0] }) : t.dashWelcome}</h1>
          <p className="pd-sub">{t.dashSubtitle}</p>
        </header>

        {CONTENT_MANAGEMENT && <Announcements lang={lang} t={t} />}

        <section className="pd-continue" aria-label={last ? t.dashContinue : t.dashStart}>
          <div className="pd-continue-body">
            <p className="pd-kicker">{last ? t.dashLastRead : t.dashStart}</p>
            {last ? (
              <>
                <h2>{lessonTitle(last, lang)}</h2>
                <p className="pd-muted">{chapterTitle(last, lang)}</p>
              </>
            ) : (
              <p className="pd-muted">{t.dashStartHint}</p>
            )}
            <a className="pd-btn" href={lessonHref(last ?? state.orderedLessons[0])}>
              {last ? t.dashContinue : t.dashStart}
              <Icon name="arrow" />
            </a>
          </div>
          <div className="pd-ring-wrap">
            <svg className="pd-ring" viewBox="0 0 120 120" role="img" aria-label={`${pct}%`}>
              <circle cx="60" cy="60" r="52" className="pd-ring-track" />
              <circle cx="60" cy="60" r="52" className="pd-ring-fill"
                strokeDasharray={`${(pct / 100) * 326.7} 326.7`} transform="rotate(-90 60 60)" />
              <text x="60" y="66" textAnchor="middle">{num(pct, lang)}%</text>
            </svg>
            <div>
              <p className="pd-ring-title">{t.dashProgress}</p>
              <p className="pd-muted">{fill(t.dashProgressOf, { done: num(done, lang), total: num(total, lang) })}</p>
              <p className="pd-fine">{t.dashProgressNote}</p>
            </div>
          </div>
        </section>

        <ul className="pd-stats">
          {stats.map((s, i) => {
            const body = (
              <>
                <span className="pd-stat-icon"><Icon name={s.icon} /></span>
                <span className="pd-stat-text">
                  <strong>{num(s.value, lang)}</strong>
                  <span>{s.label}</span>
                </span>
              </>
            )
            return (
              <li key={s.label} style={{ '--i': i } as CSSProperties}>
                {s.href ? <a className="pd-stat link" href={s.href}>{body}</a> : <div className="pd-stat">{body}</div>}
              </li>
            )
          })}
        </ul>

        <div className="pd-columns">
          <section aria-labelledby="pd-subjects-title">
            <div className="pd-section-head">
              <h2 id="pd-subjects-title">{t.navSubjects}</h2>
            </div>
            <ul className="pd-subjects">
              {subjects.map((s, i) => {
                const seen = s.lessons.filter(o => opened.has(o.lesson.id)).length
                const next = s.lessons.find(o => !opened.has(o.lesson.id)) ?? s.lessons[0]
                const action = seen === 0 ? t.dashOpen : seen === s.lessons.length ? t.dashReview : t.dashResume
                return (
                  <li key={s.chapterId} style={{ '--i': i } as CSSProperties}>
                    <a className="pd-subject" href={lessonHref(next)}>
                      <div className="pd-subject-top">
                        <span className="pd-subject-num">{num(s.number, lang)}</span>
                        <span className="pd-subject-title">{chapterTitle(s.lessons[0], lang)}</span>
                      </div>
                      <p className="pd-subject-meta">
                        {fill(t.dashLessonsCount, { n: num(s.lessons.length, lang) })}
                        {s.noteCount > 0 && <> · {fill(t.dashNotesCount, { n: num(s.noteCount, lang) })}</>}
                      </p>
                      {s.hasPyq && <span className="pd-tag">{t.navPyq}</span>}
                      <div className="pd-subject-foot">
                        <div className="pd-bar" aria-hidden="true">
                          <span style={{ width: `${(seen / s.lessons.length) * 100}%` }} />
                        </div>
                        <span className="pd-subject-count">{num(seen, lang)}/{num(s.lessons.length, lang)}</span>
                        <span className="pd-subject-action">{action}<Icon name="arrow" /></span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <aside className="pd-rail">
            <section className="pd-panel" aria-labelledby="pd-recent-title">
              <h2 id="pd-recent-title"><Icon name="clock" />{t.dashRecent}</h2>
              {recent.length === 0 ? (
                <p className="pd-muted pd-empty">{t.dashRecentEmpty}</p>
              ) : (
                <ul className="pd-list">
                  {recent.map(o => (
                    <li key={o.lesson.id}>
                      <a href={lessonHref(o)}>
                        <span className="pd-list-title">{lessonTitle(o, lang)}</span>
                        <span className="pd-list-sub">{chapterTitle(o, lang)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {pyqSets.length > 0 && (
              <section className="pd-panel" aria-labelledby="pd-pyq-title">
                <h2 id="pd-pyq-title"><Icon name="pyq" />{t.dashPyqTitle}</h2>
                <ul className="pd-list">
                  {pyqSets.slice(0, 5).map(n => (
                    <li key={n.slug}>
                      <a href={lessonHref(n.item)}>
                        <span className="pd-list-title">{chapterTitle(n.item, lang)}</span>
                        <span className="pd-list-sub">{lessonTitle(n.item, lang)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="pd-more" href="#/pyq">{t.dashViewAll}<Icon name="arrow" /></a>
              </section>
            )}
          </aside>
        </div>
      </div>
    </main>
  )
}
