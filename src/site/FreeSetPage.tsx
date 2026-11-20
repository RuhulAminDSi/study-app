import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import { clock, duration, fill, mark, num, pick } from '../exam/format'
import { freeSetsApi, SiteError, type FreeSetCard, type FreeSetPaper, type FreeSetQuestion, type FreeSetResult, type MeritEntry } from '../public/siteApi'
import type { Language, Translations } from '../types'

const LETTERS = ['A', 'B', 'C', 'D', 'E']
const NAME_KEY = 'free_set_name'
type Mode = 'home' | 'answers' | 'take' | 'merit'

/** `#/free-test/<id>[/answers|/take|/merit]`: one free set — read it with answers, take it under a name, or see the merit list. */
export default function FreeSetPage({ id, mode }: { id: string; mode: Mode }) {
  const { language: lang } = useApp()
  const t = translations[lang]
  const [set, setSet] = useState<FreeSetCard | null>(null)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    let live = true
    freeSetsApi.get(id).then(s => { if (live) setSet(s) }).catch(() => { if (live) setMissing(true) })
    return () => { live = false }
  }, [id])
  useEffect(() => { if (set) document.title = `${pick(lang, set.titleEn, set.titleBn)} | StudyPath` }, [set, lang])

  if (missing) {
    return (
      <main className="ft-main">
        <section className="ex-card">
          <p className="ex-alert bad"><Icon name="alert" /><span>{t.fsMissing}</span></p>
          <a className="ex-btn" href="#/free-test"><Icon name="back" />{t.fsBack}</a>
        </section>
      </main>
    )
  }
  if (!set) return <main className="ft-main"><div className="ex-card sp-skel fs-skel" aria-busy="true" /></main>

  const tabs: { key: Exclude<Mode, 'home'>; label: string; icon: 'target' | 'eye' | 'trophy' }[] = [
    { key: 'take', label: t.fsTake, icon: 'target' },
    { key: 'answers', label: t.fsAnswers, icon: 'eye' },
    { key: 'merit', label: t.fsMerit, icon: 'trophy' },
  ]
  const current = mode === 'home' ? 'take' : mode

  return (
    <main className="ft-main">
      <a className="site-back" href="#/free-test"><Icon name="back" />{t.fsBack}</a>
      <header className="fs-head">
        <h1 className="site-h1">{pick(lang, set.titleEn, set.titleBn)}</h1>
        <p className="pd-muted">
          {fill(t.fsQuestionsN, { n: num(set.questionCount, lang) })} · {fill(t.fsMinutesN, { n: num(set.durationMinutes, lang) })}
          {' · '}{fill(t.fsMarksEach, { n: mark(set.marksPerQuestion, lang) })}
          {set.negativeMark > 0 && <> · {fill(t.fsNegative, { n: mark(set.negativeMark, lang) })}</>}
        </p>
      </header>
      <nav className="fs-tabs" aria-label={t.fsTitle}>
        {tabs.map(x => (
          <a key={x.key} href={`#/free-test/${id}/${x.key}`} className={current === x.key ? 'active' : ''} aria-current={current === x.key ? 'page' : undefined}>
            <Icon name={x.icon} />{x.label}
          </a>
        ))}
      </nav>
      {current === 'take' && <TakeSet key={id} set={set} lang={lang} t={t} />}
      {current === 'answers' && <Answers id={id} lang={lang} t={t} />}
      {current === 'merit' && <Merit id={id} lang={lang} t={t} />}
    </main>
  )
}

/** One question with its options; `correctId`/`chosenId` mark the answer key and the reader's pick. */
function QuestionView({ q, n, lang, t, correctId, chosenId, explanation, verdict }: {
  q: FreeSetQuestion; n: number; lang: Language; t: Translations
  correctId: string | null; chosenId?: string | null; explanation: string | null; verdict?: 'good' | 'bad' | 'skip'
}) {
  return (
    <li className={`ex-card ex-review-item${verdict ? ` ${verdict}` : ''}`}>
      <div className="ex-q-head">
        <h2>{fill(t.exQuestionN, { n: num(n, lang) })}</h2>
        {verdict
          ? <span className={`ex-verdict ${verdict}`}>{verdict === 'good' ? t.exCorrect : verdict === 'bad' ? t.exWrong : t.exSkipped}</span>
          : <span className="pd-muted ft-subject-tag">{pick(lang, q.subject.nameEn, q.subject.nameBn)}</span>}
      </div>
      <p className="ex-q-stem">{pick(lang, q.stemEn, q.stemBn)}</p>
      {q.code && <pre className="ex-q-code"><code>{q.code}</code></pre>}
      <ul className="ex-options static">
        {q.options.map((o, i) => {
          const chosen = chosenId === o.id
          const right = correctId === o.id
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
}

function Answers({ id, lang, t }: { id: string; lang: Language; t: Translations }) {
  const [paper, setPaper] = useState<FreeSetPaper | null>(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => { freeSetsApi.answers(id).then(setPaper).catch(() => setFailed(true)) }, [id])
  if (failed) return <p className="ex-alert bad"><Icon name="alert" /><span>{t.ftLoadFailed}</span></p>
  if (!paper) return <div className="ex-card sp-skel fs-skel" aria-busy="true" />
  return (
    <>
      <p className="ex-alert info"><Icon name="info" /><span>{t.fsAnswersNote}</span></p>
      <ol className="ex-review">
        {paper.questions.map((q, i) => (
          <QuestionView key={q.id} q={q} n={i + 1} lang={lang} t={t}
            correctId={q.options.find(o => o.isCorrect)?.id ?? null} explanation={pick(lang, q.explanationEn ?? null, q.explanationBn ?? null) || null} />
        ))}
      </ol>
    </>
  )
}

type Phase = 'name' | 'loading' | 'running' | 'checking' | 'done'

function TakeSet({ set, lang, t }: { set: FreeSetCard; lang: Language; t: Translations }) {
  const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) ?? '')
  const [phase, setPhase] = useState<Phase>('name')
  const [paper, setPaper] = useState<FreeSetPaper | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [index, setIndex] = useState(0)
  const [endsAt, setEndsAt] = useState(0)
  const [now, setNow] = useState(() => Date.now())
  const [result, setResult] = useState<FreeSetResult | null>(null)
  const [error, setError] = useState('')
  const submitting = useRef(false)

  async function start(e: FormEvent) {
    e.preventDefault()
    const clean = name.replace(/\s+/g, ' ').trim()
    if (clean.length < 2 || clean.length > 40) { setError(t.fsNameHint); return }
    localStorage.setItem(NAME_KEY, clean)
    setPhase('loading'); setError('')
    try {
      const p = await freeSetsApi.start(set.id)
      setPaper(p); setAnswers({}); setIndex(0); setResult(null)
      setEndsAt(Date.now() + p.durationMinutes * 60_000)
      submitting.current = false
      setPhase('running'); window.scrollTo(0, 0)
    } catch { setError(t.ftLoadFailed); setPhase('name') }
  }

  const submit = useCallback(async () => {
    if (!paper?.ticket || submitting.current) return
    submitting.current = true
    setPhase('checking')
    try {
      const r = await freeSetsApi.submit(set.id, {
        name: name.replace(/\s+/g, ' ').trim(), ticket: paper.ticket,
        answers: Object.entries(answers).map(([questionId, optionId]) => ({ questionId, optionId })),
      })
      setResult(r); setPhase('done'); window.scrollTo(0, 0)
    } catch (e) {
      submitting.current = false
      if (e instanceof SiteError && e.code === 'ticket_invalid') { setError(t.fsExpired); setPhase('name'); return }
      setError(t.ftLoadFailed); setPhase('running')
    }
  }, [paper, answers, name, set.id, t])

  const submitRef = useRef(submit)
  useEffect(() => { submitRef.current = submit }, [submit])
  useEffect(() => {
    if (phase !== 'running') return
    const timer = setInterval(() => {
      const at = Date.now()
      setNow(at)
      if (at >= endsAt) void submitRef.current()
    }, 1000)
    return () => clearInterval(timer)
  }, [phase, endsAt])
  const left = Math.max(0, Math.round((endsAt - now) / 1000))
  const answered = Object.keys(answers).length
  const byId = useMemo(() => new Map(result?.results.map(r => [r.questionId, r]) ?? []), [result])

  const handIn = () => {
    const missing = (paper?.questions.length ?? 0) - answered
    if (missing > 0 && !window.confirm(fill(t.ftConfirmSubmit, { n: num(missing, lang) }))) return
    void submit()
  }

  if (phase === 'name' || phase === 'loading') {
    return (
      <form className="ex-card fs-start" onSubmit={start}>
        <h2>{t.fsReady}</h2>
        <ul className="ft-rules">
          <li><Icon name="clock" />{fill(t.fsRuleTime, { n: num(set.durationMinutes, lang) })}</li>
          <li><Icon name="trophy" />{t.fsRuleMerit}</li>
          <li><Icon name="check" />{t.fsRuleNoAccount}</li>
        </ul>
        <label className="ft-subject">
          <span>{t.fsYourName}</span>
          <input className="site-input" value={name} maxLength={40} autoComplete="name" onChange={e => setName(e.target.value)} aria-describedby="fs-name-hint" required />
          <small id="fs-name-hint" className="pd-muted">{t.fsNameHint}</small>
        </label>
        {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
        <button type="submit" className="ex-btn primary lg" disabled={phase === 'loading' || set.questionCount === 0}>
          {phase === 'loading' ? t.exStarting : t.fsStart}<Icon name="arrow" />
        </button>
      </form>
    )
  }

  if (phase === 'done' && result && paper) {
    return (
      <>
        <section className="ex-card ft-score">
          <p className="pd-eyebrow">{t.ftResult}</p>
          <p className="ft-score-big"><strong>{mark(result.score, lang)}</strong> / {mark(result.maxScore, lang)}</p>
          <p className="pd-muted">{fill(t.ftResultLine, { c: num(result.correct, lang), w: num(result.wrong, lang), s: num(result.skipped, lang) })} · {duration(result.seconds, t, lang)}</p>
          <p className="fs-rank"><Icon name="trophy" />{fill(t.fsRankLine, { rank: num(result.rank, lang), n: num(result.participants, lang) })}</p>
          <div className="ft-cta">
            <p>{t.ftCta}</p>
            <div className="ft-cta-actions">
              <a className="ex-btn primary" href={`#/free-test/${set.id}/merit`}><Icon name="trophy" />{t.fsMerit}</a>
              <a className="ex-btn" href="#/signup">{t.ftSignUp}<Icon name="arrow" /></a>
              <button type="button" className="ex-btn" onClick={() => setPhase('name')}><Icon name="refresh" />{t.fsAgain}</button>
            </div>
          </div>
        </section>
        <ol className="ex-review">
          {paper.questions.map((q, i) => {
            const r = byId.get(q.id)
            const ex = result.explanations[q.id]
            return (
              <QuestionView key={q.id} q={q} n={i + 1} lang={lang} t={t} correctId={r?.correctOptionId ?? null} chosenId={answers[q.id] ?? null}
                verdict={r?.isCorrect === true ? 'good' : r?.isCorrect === false ? 'bad' : 'skip'} explanation={ex ? pick(lang, ex.en, ex.bn) || null : null} />
            )
          })}
        </ol>
      </>
    )
  }

  if (!paper) return null
  const q = paper.questions[index]
  return (
    <>
      <div className="ft-clockbar">
        <span className={`ft-clock${left <= 60 ? ' low' : ''}`} role="timer" aria-label={t.ftTimeLeft}><Icon name="clock" />{clock(left, lang)}</span>
      </div>
      <div className="ft-progress" aria-hidden="true"><span style={{ width: `${(answered / paper.questions.length) * 100}%` }} /></div>
      <section className="ex-card ft-question" aria-live="polite">
        <div className="ex-q-head">
          <h2>{fill(t.exQuestionN, { n: num(index + 1, lang) })} / {num(paper.questions.length, lang)}</h2>
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
          {answers[q.id] && (
            <button type="button" className="ex-btn sm" onClick={() => setAnswers(a => { const next = { ...a }; delete next[q.id]; return next })}>{t.ftClear}</button>
          )}
          {index < paper.questions.length - 1
            ? <button type="button" className="ex-btn primary" onClick={() => setIndex(i => i + 1)}>{t.next}<Icon name="chevron" /></button>
            : <button type="button" className="ex-btn primary" onClick={handIn} disabled={phase === 'checking'}>{phase === 'checking' ? '…' : t.ftSubmit}</button>}
        </div>
      </section>
      <nav className="ex-card ft-grid-card" aria-label={t.ftQuestions}>
        <div className="ft-grid">
          {paper.questions.map((x, i) => (
            <button key={x.id} type="button" className={`ft-cell${i === index ? ' current' : ''}${answers[x.id] ? ' done' : ''}`}
              aria-current={i === index ? 'step' : undefined} onClick={() => setIndex(i)}>{num(i + 1, lang)}</button>
          ))}
        </div>
        <p className="pd-muted ft-count">{fill(t.ftAnsweredOf, { n: num(answered, lang), total: num(paper.questions.length, lang) })}</p>
        <button type="button" className="ex-btn primary" onClick={handIn} disabled={phase === 'checking'}>{t.ftSubmit}</button>
        {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
      </nav>
    </>
  )
}

function Merit({ id, lang, t }: { id: string; lang: Language; t: Translations }) {
  const [entries, setEntries] = useState<MeritEntry[] | null>(null)
  const [failed, setFailed] = useState(false)
  const mine = (localStorage.getItem(NAME_KEY) ?? '').toLowerCase()
  useEffect(() => { freeSetsApi.merit(id).then(m => setEntries(m.entries)).catch(() => setFailed(true)) }, [id])
  if (failed) return <p className="ex-alert bad"><Icon name="alert" /><span>{t.ftLoadFailed}</span></p>
  if (!entries) return <div className="ex-card sp-skel fs-skel" aria-busy="true" />
  if (entries.length === 0) {
    return (
      <section className="ex-card">
        <p className="pd-muted">{t.fsMeritEmpty}</p>
        <a className="ex-btn primary" href={`#/free-test/${id}/take`}><Icon name="target" />{t.fsTake}</a>
      </section>
    )
  }
  return (
    <section className="ex-card fs-merit">
      <p className="pd-muted fs-merit-note">{t.fsMeritNote}</p>
      <div className="site-table-scroll">
        <table className="fs-merit-table">
          <thead><tr><th>{t.fsRank}</th><th>{t.fsName}</th><th>{t.fsScore}</th><th>{t.fsCorrect}</th><th>{t.fsTime}</th></tr></thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={i} className={`${e.rank <= 3 ? `top top-${e.rank}` : ''}${mine && e.name.toLowerCase() === mine ? ' mine' : ''}`}>
                <td className="fs-place">{num(e.rank, lang)}</td>
                <td>{e.name}</td>
                <td><strong>{mark(e.score, lang)}</strong> / {mark(e.maxScore, lang)}</td>
                <td>{num(e.correct, lang)} / {num(e.total, lang)}</td>
                <td>{duration(e.seconds, t, lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
