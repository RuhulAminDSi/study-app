import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import { freeTestApi, type FreeResult, type FreeSet, type FreeSubject } from '../public/siteApi'
import { clock, fill, num, pick } from './format'
import './exam.css'
import './free-test.css'

const LETTERS = ['A', 'B', 'C', 'D', 'E']
type Phase = 'intro' | 'loading' | 'running' | 'checking' | 'done'

/**
 * `#/free-test`: a timed sample of up to 20 MCQs that a visitor takes without an account (server: /api/site/free-test).
 * Nothing is saved; at the end it shows the score, every correct answer and an invitation to sign up.
 */
export default function FreeTest({ children }: { children?: ReactNode }) {
  const { language: lang } = useApp()
  const t = translations[lang]
  const [subjects, setSubjects] = useState<FreeSubject[] | null>(null)
  const [subject, setSubject] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>('intro')
  const [set, setSet] = useState<FreeSet | null>(null)
  const [answers, setAnswers] = useState<Record<string, string | null>>({})
  const [index, setIndex] = useState(0)
  const [endsAt, setEndsAt] = useState(0)
  const [now, setNow] = useState(() => Date.now())
  const [result, setResult] = useState<FreeResult | null>(null)
  const [error, setError] = useState('')
  const submitting = useRef(false)

  useEffect(() => { document.title = `${t.ftTitle} | StudyPath` }, [t])
  useEffect(() => {
    freeTestApi.subjects().then(setSubjects).catch(() => setSubjects([]))
  }, [])

  async function start() {
    setPhase('loading'); setError('')
    try {
      const s = await freeTestApi.start(subject)
      if (s.questions.length === 0) { setError(t.ftNoQuestions); setPhase('intro'); return }
      setSet(s); setAnswers({}); setIndex(0); setResult(null)
      setEndsAt(Date.now() + s.durationMinutes * 60_000)
      setPhase('running')
      submitting.current = false
      window.scrollTo(0, 0)
    } catch {
      setError(t.ftLoadFailed); setPhase('intro')
    }
  }

  const submit = useCallback(async () => {
    if (!set || submitting.current) return
    submitting.current = true
    setPhase('checking')
    try {
      const r = await freeTestApi.check(set.questions.map(q => ({ questionId: q.id, optionId: answers[q.id] ?? null })))
      setResult(r); setPhase('done'); window.scrollTo(0, 0)
    } catch {
      submitting.current = false
      setError(t.ftLoadFailed); setPhase('running')
    }
  }, [set, answers, t])

  // The clock: ticks every second and hands the paper in when time is up.
  const submitRef = useRef(submit)
  useEffect(() => { submitRef.current = submit }, [submit])
  useEffect(() => {
    if (phase !== 'running') return
    const id = setInterval(() => {
      const at = Date.now()
      setNow(at)
      if (at >= endsAt) void submitRef.current()
    }, 1000)
    return () => clearInterval(id)
  }, [phase, endsAt])
  const left = Math.max(0, Math.round((endsAt - now) / 1000))

  const answered = useMemo(() => Object.values(answers).filter(Boolean).length, [answers])
  /** The Submit buttons: ask first when questions are still unanswered (the clock running out submits without asking). */
  const handIn = () => {
    const missing = (set?.questions.length ?? 0) - answered
    if (missing > 0 && !window.confirm(fill(t.ftConfirmSubmit, { n: num(missing, lang) }))) return
    void submit()
  }
  const byId = useMemo(() => new Map(result?.results.map(r => [r.questionId, r]) ?? []), [result])

  return (
    <>
      {phase === 'running' && (
        <div className="ft-clockbar">
          <span className={`ft-clock${left <= 60 ? ' low' : ''}`} role="timer" aria-label={t.ftTimeLeft}>
            <Icon name="clock" />{clock(left, lang)}
          </span>
        </div>
      )}
      <main className="ft-main">
        {/* The free sets list sits above the quick random test, and steps aside while a quick test runs. */}
        {(phase === 'intro' || phase === 'loading') && children}
        {(phase === 'intro' || phase === 'loading') && (
          <section className="ex-card ft-intro">
            <p className="pd-eyebrow">{t.ftEyebrow}</p>
            <h2 className="ft-h">{t.ftTitle}</h2>
            <p className="pd-sub">{t.ftIntro}</p>
            <ul className="ft-rules">
              <li><Icon name="check" />{t.ftRule1}</li>
              <li><Icon name="clock" />{t.ftRule2}</li>
              <li><Icon name="target" />{t.ftRule3}</li>
            </ul>
            {subjects && subjects.length > 1 && (
              <label className="ft-subject">
                <span>{t.ftSubject}</span>
                <select value={subject ?? ''} onChange={e => setSubject(e.target.value || null)}>
                  <option value="">{t.ftAllSubjects}</option>
                  {subjects.map(s => <option key={s.code} value={s.code}>{pick(lang, s.nameEn, s.nameBn)} ({num(s.questionCount, lang)})</option>)}
                </select>
              </label>
            )}
            {subjects && subjects.length === 0 && <p className="ex-alert info"><Icon name="info" /><span>{t.ftNoQuestions}</span></p>}
            {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
            <button type="button" className="ex-btn primary lg" onClick={start} disabled={phase === 'loading' || subjects?.length === 0}>
              {phase === 'loading' ? t.exStarting : t.ftStart}<Icon name="arrow" />
            </button>
          </section>
        )}

        {(phase === 'running' || phase === 'checking') && set && (() => {
          const q = set.questions[index]
          return (
            <>
              <div className="ft-progress" aria-hidden="true"><span style={{ width: `${(answered / set.questions.length) * 100}%` }} /></div>
              <section className="ex-card ft-question" aria-live="polite">
                <div className="ex-q-head">
                  <h2>{fill(t.exQuestionN, { n: num(index + 1, lang) })} / {num(set.questions.length, lang)}</h2>
                  <span className="pd-muted ft-subject-tag">{pick(lang, q.subject.nameEn, q.subject.nameBn)}</span>
                </div>
                <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
                {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}
                <fieldset className="ex-options" disabled={phase === 'checking'}>
                  <legend className="sr-only">{t.exQuestionN}</legend>
                  {q.options.map((o, i) => {
                    const chosen = answers[q.id] === o.id
                    return (
                      <label key={o.id} className={`ex-option${chosen ? ' selected' : ''}`}>
                        <input type="radio" name={q.id} checked={chosen} onChange={() => setAnswers(a => ({ ...a, [q.id]: o.id }))} />
                        <span className="ex-option-letter" aria-hidden="true">{LETTERS[i]}</span>
                        <span className="ex-option-text">{pick(lang, o.textEn, o.textBn)}</span>
                      </label>
                    )
                  })}
                </fieldset>
                <div className="ft-nav">
                  <button type="button" className="ex-btn" disabled={index === 0} onClick={() => setIndex(i => i - 1)}><Icon name="chevronLeft" />{t.previous}</button>
                  {answers[q.id] && <button type="button" className="ex-btn sm" onClick={() => setAnswers(a => ({ ...a, [q.id]: null }))}>{t.ftClear}</button>}
                  {index < set.questions.length - 1
                    ? <button type="button" className="ex-btn primary" onClick={() => setIndex(i => i + 1)}>{t.next}<Icon name="chevron" /></button>
                    : <button type="button" className="ex-btn primary" onClick={handIn} disabled={phase === 'checking'}>{phase === 'checking' ? '…' : t.ftSubmit}</button>}
                </div>
              </section>

              <nav className="ex-card ft-grid-card" aria-label={t.ftQuestions}>
                <div className="ft-grid">
                  {set.questions.map((x, i) => (
                    <button key={x.id} type="button" className={`ft-cell${i === index ? ' current' : ''}${answers[x.id] ? ' done' : ''}`}
                      aria-current={i === index ? 'step' : undefined} onClick={() => setIndex(i)}>{num(i + 1, lang)}</button>
                  ))}
                </div>
                <p className="pd-muted ft-count">{fill(t.ftAnsweredOf, { n: num(answered, lang), total: num(set.questions.length, lang) })}</p>
                <button type="button" className="ex-btn primary" onClick={handIn} disabled={phase === 'checking'}>{t.ftSubmit}</button>
                {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
              </nav>
            </>
          )
        })()}

        {phase === 'done' && set && result && (
          <>
            <section className="ex-card ft-score">
              <p className="pd-eyebrow">{t.ftResult}</p>
              <p className="ft-score-big"><strong>{num(result.correct, lang)}</strong> / {num(result.total, lang)}</p>
              <p className="pd-muted">{fill(t.ftResultLine, { c: num(result.correct, lang), w: num(result.wrong, lang), s: num(result.skipped, lang) })}</p>
              <div className="ft-cta">
                <p>{t.ftCta}</p>
                <div className="ft-cta-actions">
                  <a className="ex-btn primary" href="#/signup">{t.ftSignUp}<Icon name="arrow" /></a>
                  <button type="button" className="ex-btn" onClick={() => { setPhase('intro'); setSet(null) }}><Icon name="refresh" />{t.ftAgain}</button>
                </div>
              </div>
            </section>

            <ol className="ex-review">
              {set.questions.map((q, n) => {
                const r = byId.get(q.id)
                const status = r?.isCorrect === true ? 'good' : r?.isCorrect === false ? 'bad' : 'skip'
                const explanation = r ? pick(lang, r.explanationEn, r.explanationBn) : null
                return (
                  <li key={q.id} className={`ex-card ex-review-item ${status}`}>
                    <div className="ex-q-head">
                      <h2>{fill(t.exQuestionN, { n: num(n + 1, lang) })}</h2>
                      <span className={`ex-verdict ${status}`}>{status === 'good' ? t.exCorrect : status === 'bad' ? t.exWrong : t.exSkipped}</span>
                    </div>
                    <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
                    {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}
                    <ul className="ex-options static">
                      {q.options.map((o, i) => {
                        const chosen = answers[q.id] === o.id
                        const right = r?.correctOptionId === o.id
                        return (
                          <li key={o.id} className={`ex-option${right ? ' correct' : chosen ? ' wrong' : ''}${chosen ? ' selected' : ''}`}>
                            <span className="ex-option-letter" aria-hidden="true">{LETTERS[i]}</span>
                            <span className="ex-option-text">{pick(lang, o.textEn, o.textBn)}</span>
                            {chosen && <span className="ex-option-tag">{t.exYourAnswer}</span>}
                            {right && <span className="ex-option-tag good">{t.exCorrectAnswer}</span>}
                          </li>
                        )
                      })}
                    </ul>
                    {explanation && <div className="ex-feedback neutral"><p className="ex-feedback-text"><strong>{t.exExplanation}: </strong>{explanation}</p></div>}
                  </li>
                )
              })}
            </ol>
          </>
        )}
      </main>
    </>
  )
}
