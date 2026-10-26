import type { CSSProperties } from 'react'
import type { Language, Translations } from '../types'
import Icon from '../components/portal/icons'
import type { ExamCard } from './examApi'
import { dateTime, DIFFICULTY_LABEL, fill, mark, negativeText, num, pick } from './format'
import { KindBadge } from './ExamUi'

/** One test in a list: what it is, its rules, where the candidate stands, and the next action. */
export default function TestCard({ test: x, t, lang, index = 0 }: { test: ExamCard; t: Translations; lang: Language; index?: number }) {
  const limitReached = x.maxAttempts !== null && x.attemptsUsed >= x.maxAttempts
  const upcoming = x.availability === 'upcoming'
  let state: { label: string; tone: string }
  if (x.openAttemptId) state = { label: t.exStatusInProgress, tone: 'progress' }
  else if (upcoming) state = { label: fill(t.exOpensOn, { date: dateTime(x.availableFrom, lang) }), tone: 'upcoming' }
  else if (x.best) state = { label: fill(t.exBestScore, { n: mark(x.best.percentage, lang) }), tone: 'done' }
  else state = { label: t.exNotStarted, tone: 'new' }

  const subjects = x.subjects.slice(0, 3)
  return (
    <li style={{ '--i': index } as CSSProperties}>
      <article className="ex-card">
        <div className="ex-card-top">
          <KindBadge kind={x.kind} t={t} />
          <span className={`ex-state ex-state-${state.tone}`}>{state.label}</span>
        </div>
        <h3 className="ex-card-title">{pick(lang, x.titleEn, x.titleBn)}</h3>
        {subjects.length > 0 && (
          <p className="ex-chips">
            {subjects.map(s => <span key={s.code} className="ex-chip">{pick(lang, s.nameEn, s.nameBn)}</span>)}
            {x.subjects.length > 3 && <span className="ex-chip muted">+{num(x.subjects.length - 3, lang)}</span>}
          </p>
        )}
        <dl className="ex-facts">
          <div><dt>{t.exQuestions}</dt><dd>{num(x.questionCount, lang)}</dd></div>
          <div><dt>{t.exDuration}</dt><dd>{fill(t.exMinutes, { n: num(x.durationMinutes, lang) })}</dd></div>
          <div><dt>{t.exTotalMarks}</dt><dd>{mark(x.totalMarks, lang)}</dd></div>
          <div><dt>{t.exDifficulty}</dt><dd>{t[DIFFICULTY_LABEL[x.difficulty]]}</dd></div>
        </dl>
        <p className="ex-card-rules">
          {negativeText(x.negativeMarks, t, lang)}
          {x.maxAttempts !== null && <> · {fill(t.exAttemptsUsed, { used: num(x.attemptsUsed, lang), max: num(x.maxAttempts, lang) })}</>}
        </p>
        <div className="ex-card-actions">
          {x.openAttemptId ? (
            <a className="ex-btn primary" href={`#/exams/attempt/${x.openAttemptId}`}>{t.exContinue}<Icon name="arrow" /></a>
          ) : (
            <a className={`ex-btn primary${upcoming || limitReached ? ' disabled' : ''}`} href={`#/exams/test/${x.id}`}
              aria-disabled={upcoming || limitReached || undefined}>
              {x.attemptsUsed > 0 ? t.exRetake : t.exStart}<Icon name="arrow" />
            </a>
          )}
          {x.lastAttemptId && <a className="ex-btn" href={`#/exams/result/${x.lastAttemptId}`}>{t.exViewResult}</a>}
        </div>
      </article>
    </li>
  )
}
