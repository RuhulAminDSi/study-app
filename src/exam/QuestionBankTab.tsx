import { useCallback, useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import type { Language, Translations } from '../types'
import Icon from '../components/portal/icons'
import { bankApi, examApi, type BankAnswer, type BankFormat, type BankQuestion } from './examApi'
import { dateTime, examError, fill, mark, num, pick } from './format'
import { CardSkeleton, EmptyPanel, LoadError } from './ExamUi'
import { useRemote } from './useRemote'

const PAGE_SIZE = 10
const LETTERS = ['A', 'B', 'C', 'D', 'E']
const FORMATS: { key: BankFormat; label: keyof Translations }[] = [
  { key: 'mcq', label: 'qbMcq' },
  { key: 'short', label: 'qbShort' },
  { key: 'written', label: 'qbWritten' },
]

/**
 * Question bank: study the questions before taking a test. Plain MCQs (pick an option or just show the answer),
 * CQs (short questions) and written questions (write an answer, compare it with the model answer, mark yourself).
 */
export default function QuestionBankTab() {
  const state = useApp()
  const t = translations[state.language]
  const lang = state.language
  const [format, setFormat] = useState<BankFormat>('mcq')
  const [subjectId, setSubjectId] = useState('')
  const [topicId, setTopicId] = useState('')
  const [difficulty, setDifficulty] = useState(0)
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  // Typing waits a moment before searching.
  useEffect(() => {
    const timer = setTimeout(() => setSearch(query.trim()), 300)
    return () => clearTimeout(timer)
  }, [query])

  const { data: catalog } = useRemote(useCallback(() => examApi.catalog(), []))
  const { data, error, retry } = useRemote(useCallback(
    () => bankApi.list({ format, subjectId, topicId, difficulty, q: search, page, pageSize: PAGE_SIZE }),
    [format, subjectId, topicId, difficulty, search, page],
  ))
  const subject = catalog?.subjects.find(s => s.id === subjectId)
  const pages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1

  const goPage = (p: number) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="qb" data-format={format}>
      <div className="ex-seg qb-formats" role="group" aria-label={t.qbFormat}>
        {FORMATS.map(f => (
          <button key={f.key} type="button" aria-pressed={format === f.key} className={format === f.key ? 'active' : ''}
            onClick={() => { setFormat(f.key); setPage(1) }}>
            {t[f.label]}
            {data && <span className="ex-seg-hint">{num(data.counts[f.key], lang)}</span>}
          </button>
        ))}
      </div>
      <p className="pd-fine qb-format-note">{format === 'mcq' ? t.qbMcqNote : format === 'short' ? t.qbShortNote : t.qbWrittenNote}</p>

      <div className="ex-toolbar">
        <label className="pl-search ex-search">
          <Icon name="search" />
          <input type="search" value={query} onChange={e => { setQuery(e.target.value); setPage(1) }} placeholder={t.qbSearch} aria-label={t.qbSearch} />
        </label>
        <select className="ex-select" value={subjectId} aria-label={t.exSubject} onChange={e => { setSubjectId(e.target.value); setTopicId(''); setPage(1) }}>
          <option value="">{t.exAllSubjects}</option>
          {catalog?.subjects.map(s => <option key={s.id} value={s.id}>{pick(lang, s.nameEn, s.nameBn)}</option>)}
        </select>
        <select className="ex-select" value={topicId} aria-label={t.exTopic} disabled={!subject} onChange={e => { setTopicId(e.target.value); setPage(1) }}>
          <option value="">{subject ? t.exAllTopics : t.exPickSubjectFirst}</option>
          {subject?.topics.map(x => <option key={x.id} value={x.id}>{pick(lang, x.nameEn, x.nameBn)}</option>)}
        </select>
        <select className="ex-select" value={difficulty} aria-label={t.exDifficulty} onChange={e => { setDifficulty(Number(e.target.value)); setPage(1) }}>
          <option value={0}>{t.qbAnyDifficulty}</option>
          <option value={1}>{t.exDiffEasy}</option>
          <option value={2}>{t.exDiffMedium}</option>
          <option value={3}>{t.exDiffHard}</option>
        </select>
      </div>

      {error !== null && <LoadError text={examError(t, error)} onRetry={retry} t={t} />}
      {error === null && !data && <CardSkeleton rows />}
      {data && data.items.length === 0 && <EmptyPanel icon="search" title={t.qbEmpty} text={t.qbEmptyHint} />}
      {data && data.items.length > 0 && (
        <>
          <p className="pd-fine qb-count">
            {fill(t.qbShowing, { from: num((page - 1) * PAGE_SIZE + 1, lang), to: num(Math.min(page * PAGE_SIZE, data.total), lang), total: num(data.total, lang) })}
          </p>
          <ol className="qb-list" start={(page - 1) * PAGE_SIZE + 1}>
            {data.items.map((q, i) => (
              <li key={q.id}>
                {q.type === 'mcq'
                  ? <McqCard q={q} n={(page - 1) * PAGE_SIZE + i + 1} t={t} lang={lang} />
                  : <WrittenCard q={q} n={(page - 1) * PAGE_SIZE + i + 1} t={t} lang={lang} />}
              </li>
            ))}
          </ol>
          {pages > 1 && (
            <nav className="qb-pager" aria-label={t.qbPages}>
              <button type="button" className="ex-btn" disabled={page <= 1} onClick={() => goPage(page - 1)}><Icon name="back" />{t.previous}</button>
              <span>{fill(t.qbPageOf, { n: num(page, lang), total: num(pages, lang) })}</span>
              <button type="button" className="ex-btn" disabled={page >= pages} onClick={() => goPage(page + 1)}>{t.next}<Icon name="arrow" /></button>
            </nav>
          )}
        </>
      )}
    </div>
  )
}

function CardHead({ q, n, t, lang }: { q: BankQuestion; n: number; t: Translations; lang: Language }) {
  return (
    <>
      <div className="ex-q-head">
        <h3 className="qb-num">{fill(t.exQuestionN, { n: num(n, lang) })}</h3>
        <span className={`ex-q-marks qb-diff qb-diff-${q.difficulty}`}>
          {[t.exDiffEasy, t.exDiffMedium, t.exDiffHard][q.difficulty - 1]}
          {q.type !== 'mcq' && <> · {fill(t.qbMarks, { n: mark(q.marks, lang) })}</>}
        </span>
      </div>
      <p className="ex-q-meta">
        {pick(lang, q.subject.nameEn, q.subject.nameBn)}
        {q.topic && <> · {pick(lang, q.topic.nameEn, q.topic.nameBn)}</>}
        {q.repeatCount > 1 && <span className="ex-flag-tag">{fill(t.qbAskedTimes, { n: num(q.repeatCount, lang) })}</span>}
      </p>
      <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
      {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}
    </>
  )
}

function LessonLink({ answer, t }: { answer: BankAnswer; t: Translations }) {
  if (!answer.lesson) return null
  return (
    <a className="ex-link" href={`#/chapter/${answer.lesson.chapterId}/lesson/${answer.lesson.lessonId}`}>
      <Icon name="book" />{t.exReadLesson}
    </a>
  )
}

/** A plain MCQ: pick an option to check yourself, or just show the answer. Nothing is recorded. */
function McqCard({ q, n, t, lang }: { q: BankQuestion; n: number; t: Translations; lang: Language }) {
  const [chosen, setChosen] = useState<string | null>(null)
  const [answer, setAnswer] = useState<BankAnswer | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function reveal(optionId: string | null) {
    setBusy(true); setError(''); setChosen(optionId)
    try { setAnswer(await bankApi.check(q.id, optionId)) }
    catch (e) { setError(examError(t, e)); setChosen(null) }
    finally { setBusy(false) }
  }
  const reset = () => { setChosen(null); setAnswer(null) }
  const explanation = answer ? pick(lang, answer.explanationEn, answer.explanationBn) : ''
  const correctIndex = answer ? q.options.findIndex(o => o.id === answer.correctOptionId) : -1

  return (
    <article className="ex-q qb-card">
      <CardHead q={q} n={n} t={t} lang={lang} />
      <ul className="ex-options qb-options">
        {q.options.map((o, i) => {
          const tone = answer ? (o.id === answer.correctOptionId ? ' correct' : o.id === chosen ? ' wrong' : '') : ''
          return (
            <li key={o.id}>
              <button type="button" className={`ex-option${tone}${o.id === chosen ? ' selected' : ''}`}
                disabled={!!answer || busy} onClick={() => reveal(o.id)} aria-pressed={o.id === chosen}>
                <span className="ex-option-letter" aria-hidden="true">{LETTERS[i]}</span>
                <span className="ex-option-text">{pick(lang, o.textEn, o.textBn)}</span>
                {answer && o.id === answer.correctOptionId && <Icon name="check" className="pi ex-option-mark" />}
              </button>
            </li>
          )
        })}
      </ul>
      {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
      {answer ? (
        <div className={`ex-feedback ${answer.isCorrect === null ? 'neutral' : answer.isCorrect ? 'good' : 'bad'}`} role="status">
          <p className="ex-feedback-head">
            {answer.isCorrect !== null && <Icon name={answer.isCorrect ? 'check' : 'close'} />}
            {answer.isCorrect !== null && <strong>{answer.isCorrect ? t.exFeedbackRight : t.exFeedbackWrong}</strong>}
            {correctIndex >= 0 && <span>{fill(t.exCorrectAnswerIs, { letter: LETTERS[correctIndex] })}</span>}
          </p>
          {explanation && <p className="ex-feedback-text">{explanation}</p>}
          <div className="qb-actions">
            <LessonLink answer={answer} t={t} />
            <button type="button" className="ex-btn sm" onClick={reset}><Icon name="refresh" />{t.qbTryAgain}</button>
          </div>
        </div>
      ) : (
        <div className="qb-actions">
          <span className="pd-fine">{t.qbPickHint}</span>
          <button type="button" className="ex-btn sm" disabled={busy} onClick={() => reveal(null)}>{t.qbShowAnswer}</button>
        </div>
      )}
    </article>
  )
}

/** A CQ or written question: write an answer (optional), compare it with the model answer, then mark yourself. */
function WrittenCard({ q, n, t, lang }: { q: BankQuestion; n: number; t: Translations; lang: Language }) {
  const [writing, setWriting] = useState(false)
  const [text, setText] = useState('')
  const [answer, setAnswer] = useState<BankAnswer | null>(null)
  const [last, setLast] = useState(q.lastCheck)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [savedNow, setSavedNow] = useState(false)

  async function reveal() {
    setBusy(true); setError('')
    try { setAnswer(await bankApi.check(q.id)) }
    catch (e) { setError(examError(t, e)) }
    finally { setBusy(false) }
  }
  async function rate(score: number) {
    setBusy(true); setError('')
    try { setLast(await bankApi.respond(q.id, text, score)); setSavedNow(true) }
    catch (e) { setError(examError(t, e)) }
    finally { setBusy(false) }
  }

  const model = answer ? pick(lang, answer.modelAnswerEn, answer.modelAnswerBn) : ''
  const explanation = answer ? pick(lang, answer.explanationEn, answer.explanationBn) : ''
  const scores = [
    { label: t.qbGotIt, value: q.marks },
    { label: t.qbPartly, value: Math.round(q.marks * 50) / 100 },
    { label: t.qbMissed, value: 0 },
  ]

  return (
    <article className="ex-q qb-card">
      <CardHead q={q} n={n} t={t} lang={lang} />
      {last && (
        <p className="pd-fine qb-last">
          {fill(t.qbLastCheck, { score: mark(last.selfScore, lang), marks: mark(q.marks, lang), date: dateTime(last.at, lang) })}
        </p>
      )}
      {writing && (
        <label className="qb-write">
          <span className="sr-only">{t.qbYourAnswer}</span>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={q.format === 'short' ? 5 : 9}
            placeholder={t.qbWritePlaceholder} disabled={!!answer && savedNow} maxLength={10000} />
        </label>
      )}
      {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
      {!answer ? (
        <div className="qb-actions">
          <button type="button" className="ex-btn sm" aria-expanded={writing} onClick={() => setWriting(w => !w)}>
            <Icon name="notes" />{writing ? t.qbHideWriting : t.qbWriteAnswer}
          </button>
          <button type="button" className="ex-btn sm primary" disabled={busy} onClick={reveal}>{t.qbShowModel}</button>
        </div>
      ) : (
        <div className="ex-feedback neutral qb-model">
          <p className="ex-feedback-head"><strong>{t.qbModelAnswer}</strong></p>
          {q.type === 'programming'
            ? <pre className="ex-q-code"><code>{model}</code></pre>
            : <p className="ex-feedback-text">{model}</p>}
          {explanation && <p className="ex-feedback-text"><strong>{t.exExplanation}: </strong>{explanation}</p>}
          <LessonLink answer={answer} t={t} />
          <div className="qb-rate">
            {savedNow ? (
              <p className="qb-saved" role="status"><Icon name="check" />{fill(t.qbSaved, { score: mark(last?.selfScore ?? 0, lang), marks: mark(q.marks, lang) })}</p>
            ) : (
              <>
                <span>{t.qbHowDidYouDo}</span>
                {scores.map(s => (
                  <button key={s.label} type="button" className="ex-btn sm" disabled={busy} onClick={() => rate(s.value)}>
                    {s.label} <span className="pd-muted">({mark(s.value, lang)})</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
