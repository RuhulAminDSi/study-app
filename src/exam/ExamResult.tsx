import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import type { Language, Translations } from '../types'
import { navigate } from '../router'
import Icon from '../components/portal/icons'
import { ApiError } from '../candidate/candidateApi'
import { examApi, type AttemptQuestion, type AttemptResult, type TopicBucket } from './examApi'
import { attemptTitle, dateTime, duration, examError, fill, mark, num, pick } from './format'
import { KindBadge, LoadError } from './ExamUi'
import { useRemote } from './useRemote'
import './exam.css'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

/** `#/exams/result/<id>`: score, pass/fail, breakdowns, weak topics with lessons to study; `/review` lists every answer. */
export default function ExamResult({ id, review }: { id: string; review: boolean }) {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const { data: result, error, retry } = useRemote(useCallback(() => examApi.result(id), [id]))
  const unfinished = error instanceof ApiError && error.code === 'not_finished'

  // Still running (e.g. opened from an old link): back into the attempt.
  useEffect(() => { if (unfinished) navigate(`exams/attempt/${id}`, { replace: true }) }, [unfinished, id])

  if (error && !unfinished) return <Shell t={t}><LoadError text={examError(t, error)} onRetry={retry} t={t} /></Shell>
  if (!result) return <Shell t={t}><div className="sp-skel ex-skel-question" aria-busy="true" /></Shell>

  const a = result.attempt
  const title = attemptTitle({ mode: a.mode, settings: a.settings, titleEn: a.titleEn, titleBn: a.titleBn }, t, lang)
  const kind = a.mode === 'mock' ? (a.kind ?? 'mock') : a.mode

  return (
    <Shell t={t}>
      <header className="pd-head ex-result-head">
        <p className="pd-eyebrow"><KindBadge kind={kind} t={t} /></p>
        <h1>{title}</h1>
        <p className="pd-sub">
          {fill(t.exTakenOn, { date: dateTime(a.startedAt, lang) })}
          {a.status === 'expired' && <> · <span className="ex-status ex-status-expired">{t.exStatusExpired}</span></>}
        </p>
        {review && <a className="ex-back" href={`#/exams/result/${id}`}><Icon name="back" />{t.exBackToResult}</a>}
      </header>
      {review ? <Review id={id} t={t} lang={lang} /> : <Summary result={result} t={t} lang={lang} />}
    </Shell>
  )
}

function Shell({ t, children }: { t: Translations; children: ReactNode }) {
  return (
    <main className="main-content portal-main">
      <div className="pd ex-page ex-result">
        <a className="ex-back" href="#/exams?tab=results"><Icon name="back" />{t.exBackToExams}</a>
        {children}
      </div>
    </main>
  )
}

function Summary({ result: r, t, lang }: { result: AttemptResult; t: Translations; lang: Language }) {
  const [busy, setBusy] = useState<string | null>(null)
  const [practiceError, setPracticeError] = useState('')
  const pct = Math.max(0, Math.min(100, r.percentage))
  const timedOut = r.attempt.status === 'expired' ||
    (!!r.attempt.deadlineAt && !!r.attempt.submittedAt && new Date(r.attempt.submittedAt).getTime() >= new Date(r.attempt.deadlineAt).getTime() - 2000)

  async function practise(key: string, topic: TopicBucket | null) {
    setBusy(key); setPracticeError('')
    try {
      const { attemptId } = await examApi.practice(topic ? { topicId: topic.topicId, count: 10 } : { status: 'wrong', count: 20 })
      navigate(`exams/attempt/${attemptId}`)
    } catch (e) {
      setPracticeError(examError(t, e))
      setBusy(null)
    }
  }

  const tiles = [
    { label: t.exCorrect, value: num(r.correct, lang), tone: 'good' },
    { label: t.exWrong, value: num(r.wrong, lang), tone: 'bad' },
    { label: t.exSkipped, value: num(r.skipped, lang), tone: '' },
    { label: t.exAccuracy, value: `${num(Math.round(r.accuracy * 100), lang)}%`, tone: '' },
    { label: t.exTimeTaken, value: duration(r.timeTakenSec, t, lang), tone: '' },
    { label: t.exAvgPerQuestion, value: r.correct + r.wrong ? duration(r.avgTimePerQuestionSec, t, lang) : '–', tone: '' },
  ]

  return (
    <>
      {timedOut && <p className="ex-alert info"><Icon name="clock" /><span>{t.exTimedOutNote}</span></p>}
      <section className="pd-continue ex-score" aria-label={t.exYourScore}>
        <div className="pd-ring-wrap ex-score-ring">
          <svg className="pd-ring" viewBox="0 0 120 120" role="img" aria-label={`${mark(r.percentage, lang)}%`}>
            <circle cx="60" cy="60" r="52" className="pd-ring-track" />
            {pct > 0 && (
              <circle cx="60" cy="60" r="52" className={`pd-ring-fill${r.passed === false ? ' ex-ring-fail' : ''}`}
                strokeDasharray={`${(pct / 100) * 326.7} 326.7`} transform="rotate(-90 60 60)" />
            )}
            <text x="60" y="66" textAnchor="middle">{mark(r.percentage, lang)}%</text>
          </svg>
          <div>
            <p className="pd-kicker">{t.exYourScore}</p>
            <p className="ex-score-big"><strong>{mark(r.score, lang)}</strong> / {mark(r.maxScore, lang)}</p>
            {r.passed !== null && (
              <p className={`ex-pass lg ${r.passed ? 'yes' : 'no'}`}>
                {r.passed ? t.exPassed : t.exFailed}
                {r.attempt.passMark !== null && <span> · {fill(t.exPassMarkWas, { n: mark(r.attempt.passMark, lang) })}</span>}
              </p>
            )}
          </div>
        </div>
        {r.rank && (
          <div className="ex-rank">
            <p><strong>{fill(t.exRank, { rank: num(r.rank.rank, lang), n: num(r.rank.candidates, lang) })}</strong></p>
            <p className="pd-muted">{fill(t.exPercentile, { n: mark(r.rank.percentile, lang) })}</p>
            <p className="pd-fine">{t.exRankNote}</p>
          </div>
        )}
      </section>

      <ul className="ex-tiles">
        {tiles.map(x => (
          <li key={x.label} className={x.tone ? `tone-${x.tone}` : undefined}><strong>{x.value}</strong><span>{x.label}</span></li>
        ))}
      </ul>

      <div className="ex-actions">
        {r.review.available
          ? <a className="ex-btn primary" href={`#/exams/result/${r.attempt.id}/review`}><Icon name="check" />{t.exReviewAnswers}</a>
          : <p className="ex-alert info"><Icon name="info" /><span>{r.review.availableAt ? fill(t.exReviewLater, { date: dateTime(r.review.availableAt, lang) }) : t.exReviewNever}</span></p>}
        {r.test?.canRetry && <a className="ex-btn" href={`#/exams/test/${r.test.id}`}><Icon name="refresh" />{t.exRetake}</a>}
        {r.attempt.mode !== 'mock' && (
          <button type="button" className="ex-btn" disabled={busy !== null || r.wrong === 0} onClick={() => practise('wrong', null)}>
            <Icon name="refresh" />{busy === 'wrong' ? t.exStarting : t.exPractiseMistakes}
          </button>
        )}
        <a className="ex-btn" href="#/exams">{t.exBackToExams}</a>
      </div>
      {practiceError && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{practiceError}</span></p>}

      <div className="ex-result-grid">
        <section className="ex-card" aria-labelledby="ex-subjects-title">
          <h2 id="ex-subjects-title"><Icon name="chart" />{t.exBySubject}</h2>
          <ul className="ex-breakdown">
            {r.bySubject.map(s => (
              <li key={s.code}>
                <div className="ex-breakdown-top">
                  <span>{pick(lang, s.nameEn, s.nameBn)}</span>
                  <span className="pd-muted">{mark(s.score, lang)}/{mark(s.maxScore, lang)}</span>
                </div>
                <Bar b={s} />
                <p className="pd-fine">{fill(t.exBreakdownCounts, { c: num(s.correct, lang), w: num(s.wrong, lang), s: num(s.skipped, lang) })}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="ex-card" aria-labelledby="ex-weak-title">
          <h2 id="ex-weak-title"><Icon name="target" />{t.exWeakTopics}</h2>
          {r.weakTopics.length === 0 ? (
            <p className="pd-muted">{r.byTopic.length ? t.exNoWeakTopics : t.exNoTopicData}</p>
          ) : (
            <ul className="ex-weak">
              {r.weakTopics.map(x => (
                <li key={x.topicId}>
                  <div>
                    <strong>{pick(lang, x.nameEn, x.nameBn)}</strong>
                    <span className="pd-muted">{fill(t.exTopicScore, { c: num(x.correct, lang), n: num(x.total, lang) })}</span>
                  </div>
                  <div className="ex-weak-actions">
                    {x.lesson && (
                      <a className="ex-btn sm" href={`#/chapter/${x.lesson.chapterId}/lesson/${x.lesson.lessonId}`}><Icon name="book" />{t.exStudyLesson}</a>
                    )}
                    <button type="button" className="ex-btn sm" disabled={busy !== null} onClick={() => practise(x.topicId, x)}>
                      {busy === x.topicId ? t.exStarting : t.exPractiseTopic}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {r.byTopic.length > 1 && (
        <section className="ex-card ex-topics" aria-labelledby="ex-topics-title">
          <h2 id="ex-topics-title"><Icon name="layers" />{t.exByTopic}</h2>
          <div className="ex-table-wrap">
            <table className="ex-table compact">
              <thead>
                <tr><th scope="col">{t.exTopic}</th><th scope="col">{t.exCorrect}</th><th scope="col">{t.exWrong}</th><th scope="col">{t.exSkipped}</th><th scope="col">{t.exAccuracy}</th></tr>
              </thead>
              <tbody>
                {[...r.byTopic].sort((x, y) => x.accuracy - y.accuracy).map(x => (
                  <tr key={x.topicId}>
                    <td data-label={t.exTopic}>
                      {x.lesson ? <a className="ex-link" href={`#/chapter/${x.lesson.chapterId}/lesson/${x.lesson.lessonId}`}>{pick(lang, x.nameEn, x.nameBn)}</a> : pick(lang, x.nameEn, x.nameBn)}
                    </td>
                    <td data-label={t.exCorrect}>{num(x.correct, lang)}</td>
                    <td data-label={t.exWrong}>{num(x.wrong, lang)}</td>
                    <td data-label={t.exSkipped}>{num(x.skipped, lang)}</td>
                    <td data-label={t.exAccuracy}>{num(Math.round(x.accuracy * 100), lang)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  )
}

/** Correct / wrong / skipped as one stacked bar. */
function Bar({ b }: { b: { total: number; correct: number; wrong: number } }) {
  const pct = (n: number) => `${b.total ? (n / b.total) * 100 : 0}%`
  return (
    <span className="ex-stack" aria-hidden="true">
      <span className="good" style={{ width: pct(b.correct) }} />
      <span className="bad" style={{ width: pct(b.wrong) }} />
    </span>
  )
}

type ReviewFilter = 'all' | 'wrong' | 'skipped' | 'flagged' | 'correct'

function Review({ id, t, lang }: { id: string; t: Translations; lang: Language }) {
  const { data, error, retry } = useRemote(useCallback(() => examApi.review(id), [id]))
  const questions: AttemptQuestion[] | null = data?.questions ?? null
  const [filter, setFilter] = useState<ReviewFilter>('all')

  const counts = useMemo(() => {
    const qs = questions ?? []
    return {
      all: qs.length,
      wrong: qs.filter(q => q.isCorrect === false).length,
      skipped: qs.filter(q => q.isCorrect == null).length,
      flagged: qs.filter(q => q.flagged).length,
      correct: qs.filter(q => q.isCorrect === true).length,
    }
  }, [questions])

  if (error) return <LoadError text={examError(t, error)} onRetry={retry} t={t} />
  if (!questions) return <div className="sp-skel ex-skel-question" aria-busy="true" />

  const shown = questions.filter(q =>
    filter === 'all' || (filter === 'wrong' && q.isCorrect === false) || (filter === 'skipped' && q.isCorrect == null)
    || (filter === 'flagged' && q.flagged) || (filter === 'correct' && q.isCorrect === true))
  const labels: Record<ReviewFilter, string> = { all: t.exFilterAll, wrong: t.exWrong, skipped: t.exSkipped, flagged: t.exMarked, correct: t.exCorrect }

  return (
    <>
      <div className="ex-seg wrap" role="group" aria-label={t.exReviewFilter}>
        {(Object.keys(labels) as ReviewFilter[]).map(k => (
          <button key={k} type="button" aria-pressed={filter === k} className={filter === k ? 'active' : ''} onClick={() => setFilter(k)} disabled={counts[k] === 0 && k !== 'all'}>
            {labels[k]}<span className="ex-seg-hint">{num(counts[k], lang)}</span>
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="pd-muted pd-empty">{t.exNoMatch}</p>}
      <ol className="ex-review">
        {shown.map(q => {
          const status = q.isCorrect === true ? 'good' : q.isCorrect === false ? 'bad' : 'skip'
          const explanation = pick(lang, q.explanationEn, q.explanationBn)
          return (
            <li key={q.questionId} className={`ex-card ex-review-item ${status}`}>
              <div className="ex-q-head">
                <h2>{fill(t.exQuestionN, { n: num(q.position, lang) })}</h2>
                <span className={`ex-verdict ${status}`}>
                  {status === 'good' ? t.exCorrect : status === 'bad' ? t.exWrong : t.exSkipped}
                  {q.awarded != null && <> · {q.awarded > 0 ? '+' : ''}{mark(q.awarded, lang)}</>}
                </span>
              </div>
              <p className="ex-q-meta">
                {pick(lang, q.subject.nameEn, q.subject.nameBn)}{q.topic && <> · {pick(lang, q.topic.nameEn, q.topic.nameBn)}</>}
                {q.flagged && <span className="ex-flag-tag"><Icon name="flag" />{t.exMarked}</span>}
              </p>
              <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
              {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}
              <ul className="ex-options static">
                {q.options.map((o, i) => {
                  const chosen = q.selectedOptionId === o.id
                  const tone = o.isCorrect ? ' correct' : chosen ? ' wrong' : ''
                  return (
                    <li key={o.id} className={`ex-option${tone}${chosen ? ' selected' : ''}`}>
                      <span className="ex-option-letter" aria-hidden="true">{LETTERS[i]}</span>
                      <span className="ex-option-text">{pick(lang, o.textEn, o.textBn)}</span>
                      {chosen && <span className="ex-option-tag">{t.exYourAnswer}</span>}
                      {o.isCorrect && <span className="ex-option-tag good">{t.exCorrectAnswer}</span>}
                    </li>
                  )
                })}
              </ul>
              {(explanation || q.lesson) && (
                <div className="ex-feedback neutral">
                  {explanation && <p className="ex-feedback-text"><strong>{t.exExplanation}: </strong>{explanation}</p>}
                  {q.lesson && <a className="ex-link" href={`#/chapter/${q.lesson.chapterId}/lesson/${q.lesson.lessonId}`}><Icon name="book" />{t.exReadLesson}</a>}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </>
  )
}
