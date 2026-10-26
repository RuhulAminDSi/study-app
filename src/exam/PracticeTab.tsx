import { useCallback, useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate } from '../router'
import Icon from '../components/portal/icons'
import { examApi, type ExamCard, type ExamOverview, type PracticeCatalog, type PracticeRequest } from './examApi'
import { examError, fill, num, pick } from './format'
import { CardSkeleton, EmptyPanel, LoadError } from './ExamUi'
import TestCard from './TestCard'
import { useRemote } from './useRemote'

const COUNTS = [5, 10, 20, 30, 50]
type Source = NonNullable<PracticeRequest['status']>

/**
 * Practice: build an untimed session from the question bank (instant feedback, no negative marking), go back over
 * mistakes and due revisions, or take a curated practice set. `lesson` comes from a lesson's Exam Kit.
 */
export default function PracticeTab({ lesson, overview }: { lesson?: string; overview: ExamOverview | null }) {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const { data, error, retry } = useRemote(useCallback(() => Promise.all([examApi.catalog(), examApi.list('quiz')]), []))
  const catalog: PracticeCatalog | null = data?.[0] ?? null
  const sets: ExamCard[] | null = data?.[1] ?? null
  const [subjectId, setSubjectId] = useState('')
  const [topicId, setTopicId] = useState('')
  const [difficulty, setDifficulty] = useState(0)
  const [source, setSource] = useState<Source>('any')
  const [count, setCount] = useState(10)
  const [busy, setBusy] = useState<string | null>(null)
  const [startError, setStartError] = useState('')

  const subject = catalog?.subjects.find(s => s.id === subjectId)
  const pool = useMemo(() => {
    if (!catalog) return 0
    if (topicId) return subject?.topics.find(x => x.id === topicId)?.questionCount ?? 0
    if (subject) return subject.questionCount
    return catalog.subjects.reduce((n, s) => n + s.questionCount, 0)
  }, [catalog, subject, topicId])
  const lessonCount = lesson ? catalog?.lessons.find(l => l.slug === lesson)?.questionCount ?? 0 : 0

  async function start(key: string, req: PracticeRequest) {
    setBusy(key); setStartError('')
    try {
      const { attemptId } = await examApi.practice(req)
      navigate(`exams/attempt/${attemptId}`)
    } catch (e) {
      setStartError(examError(t, e))
      setBusy(null)
    }
  }

  if (error) return <LoadError text={examError(t, error)} onRetry={retry} t={t} />
  if (!catalog) return <CardSkeleton />
  if (catalog.subjects.length === 0) return <EmptyPanel icon="target" title={t.exPracticeEmpty} text={t.exPracticeEmptyHint} />

  const due = overview?.dueCount ?? catalog.due
  const wrong = overview?.wrongCount ?? catalog.wrong
  const sources: { key: Source; label: string; hint?: string; disabled?: boolean }[] = [
    { key: 'any', label: t.exSourceAny },
    { key: 'unseen', label: t.exSourceUnseen },
    { key: 'wrong', label: t.exSourceWrong, hint: num(wrong, lang), disabled: wrong === 0 },
    { key: 'due', label: t.exSourceDue, hint: num(due, lang), disabled: due === 0 },
  ]

  return (
    <div className="ex-practice">
      {startError && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{startError}</span></p>}

      {lesson && (
        <section className="ex-lesson-banner" aria-labelledby="ex-lesson-title">
          <div>
            <p className="pd-kicker">{t.exFromLesson}</p>
            <h2 id="ex-lesson-title">{t.exLessonQuestions}</h2>
            <p className="pd-muted">
              {lessonCount > 0 ? fill(t.exLessonCount, { n: num(lessonCount, lang) }) : t.exLessonNone}
            </p>
          </div>
          {lessonCount > 0 && (
            <button type="button" className="ex-btn primary" disabled={busy !== null}
              onClick={() => start('lesson', { lessonSlug: lesson, count: Math.min(50, Math.max(5, Math.min(20, lessonCount))) })}>
              {busy === 'lesson' ? t.exStarting : t.exStartPractice}<Icon name="arrow" />
            </button>
          )}
        </section>
      )}

      <div className="ex-practice-grid">
        <section className="ex-builder" aria-labelledby="ex-builder-title">
          <h2 id="ex-builder-title">{t.exBuildTitle}</h2>
          <p className="pd-muted">{t.exBuildIntro}</p>
          <div className="ex-form">
            <label className="ex-field">
              <span>{t.exSubject}</span>
              <select className="ex-select" value={subjectId} onChange={e => { setSubjectId(e.target.value); setTopicId('') }}>
                <option value="">{t.exAllSubjects}</option>
                {catalog.subjects.map(s => (
                  <option key={s.id} value={s.id}>{pick(lang, s.nameEn, s.nameBn)} ({num(s.questionCount, lang)})</option>
                ))}
              </select>
            </label>
            <label className="ex-field">
              <span>{t.exTopic}</span>
              <select className="ex-select" value={topicId} onChange={e => setTopicId(e.target.value)} disabled={!subject}>
                <option value="">{subject ? t.exAllTopics : t.exPickSubjectFirst}</option>
                {subject?.topics.map(x => (
                  <option key={x.id} value={x.id}>{pick(lang, x.nameEn, x.nameBn)} ({num(x.questionCount, lang)})</option>
                ))}
              </select>
            </label>
            <fieldset className="ex-field">
              <legend>{t.exDifficulty}</legend>
              <div className="ex-seg">
                {[0, 1, 2, 3].map(d => (
                  <button key={d} type="button" aria-pressed={difficulty === d} className={difficulty === d ? 'active' : ''} onClick={() => setDifficulty(d)}>
                    {[t.exDiffAny, t.exDiffEasy, t.exDiffMedium, t.exDiffHard][d]}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="ex-field">
              <legend>{t.exSource}</legend>
              <div className="ex-seg wrap">
                {sources.map(s => (
                  <button key={s.key} type="button" aria-pressed={source === s.key} className={source === s.key ? 'active' : ''}
                    disabled={s.disabled} onClick={() => setSource(s.key)}>
                    {s.label}{s.hint !== undefined && <span className="ex-seg-hint">{s.hint}</span>}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="ex-field">
              <legend>{t.exCount}</legend>
              <div className="ex-seg">
                {COUNTS.map(c => (
                  <button key={c} type="button" aria-pressed={count === c} className={count === c ? 'active' : ''} onClick={() => setCount(c)}>
                    {num(c, lang)}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="ex-builder-foot">
            <p className="pd-fine">{fill(t.exPoolSize, { n: num(pool, lang) })} · {t.exPracticeRules}</p>
            <button type="button" className="ex-btn primary" disabled={busy !== null || pool === 0}
              onClick={() => start('build', { subjectId: subjectId || null, topicId: topicId || null, difficulty: difficulty || null, status: source, count })}>
              {busy === 'build' ? t.exStarting : t.exStartPractice}<Icon name="arrow" />
            </button>
          </div>
        </section>

        <aside className="ex-side">
          <section className="pd-panel ex-quick" aria-labelledby="ex-quick-title">
            <h2 id="ex-quick-title"><Icon name="refresh" />{t.exQuickTitle}</h2>
            <QuickAction title={t.exReviewMistakes} text={wrong > 0 ? fill(t.exMistakesCount, { n: num(wrong, lang) }) : t.exMistakesNone}
              disabled={wrong === 0 || busy !== null} busy={busy === 'wrong'} label={t.exStartPractice}
              onClick={() => start('wrong', { status: 'wrong', count: Math.min(50, Math.max(5, Math.min(20, wrong))) })} startingLabel={t.exStarting} />
            <QuickAction title={t.exRevisionDue} text={due > 0 ? fill(t.exDueCount, { n: num(due, lang) }) : t.exDueNone}
              disabled={due === 0 || busy !== null} busy={busy === 'due'} label={t.exStartPractice}
              onClick={() => start('due', { status: 'due', count: Math.min(50, Math.max(5, Math.min(20, due))) })} startingLabel={t.exStarting} />
          </section>

          <section className="pd-panel" aria-labelledby="ex-mastery-title">
            <h2 id="ex-mastery-title"><Icon name="chart" />{t.exMastery}</h2>
            <ul className="ex-mastery">
              {catalog.subjects.map(s => {
                const pct = s.accuracy === null ? null : Math.round(s.accuracy * 100)
                return (
                  <li key={s.id}>
                    <button type="button" className="ex-mastery-row" onClick={() => { setSubjectId(s.id); setTopicId('') }}
                      title={fill(t.exSeenOf, { n: num(s.seen, lang), total: num(s.questionCount, lang) })}>
                      <span className="ex-mastery-name">{pick(lang, s.nameEn, s.nameBn)}</span>
                      <span className="pd-bar" aria-hidden="true"><span style={{ width: `${pct ?? 0}%` }} /></span>
                      <span className="ex-mastery-pct">{pct === null ? '–' : `${num(pct, lang)}%`}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
            <p className="pd-fine">{t.exMasteryNote}</p>
          </section>
        </aside>
      </div>

      {sets && sets.length > 0 && (
        <section className="ex-sets" aria-labelledby="ex-sets-title">
          <h2 id="ex-sets-title" className="ex-h2">{t.exPracticeSets}</h2>
          <ul className="ex-grid">{sets.map((x, i) => <TestCard key={x.id} test={x} t={t} lang={lang} index={i} />)}</ul>
        </section>
      )}
    </div>
  )
}

function QuickAction({ title, text, disabled, busy, label, startingLabel, onClick }: {
  title: string; text: string; disabled: boolean; busy: boolean; label: string; startingLabel: string; onClick: () => void
}) {
  return (
    <div className="ex-quick-row">
      <div>
        <strong>{title}</strong>
        <span className="pd-muted">{text}</span>
      </div>
      <button type="button" className="ex-btn sm" disabled={disabled} onClick={onClick}>{busy ? startingLabel : label}</button>
    </div>
  )
}
