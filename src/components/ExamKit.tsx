import { useEffect, useState } from 'react'
import type { Language, Translations } from '../types'
import { fetchExamKit, type Bi, type ExamKitResponse } from '../public/publicApi'

const ASKED_PREVIEW = 8
const BODY_KEYS: Record<string, keyof Translations> = {
  bpsc: 'ekBodyBpsc', bcs: 'ekBodyBcs', ntrca: 'ekBodyNtrca', bank: 'ekBodyBank', psu: 'ekBodyPsu',
  buet: 'ekBodyBuet', private: 'ekBodyPrivate', other: 'ekBodyOther',
}

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
/** "ex-question/duranta/1716…/1716….md#p3" -> "1716….md": the document a question was taken from. */
const sourceName = (p: string) => p.replace(/#.*$/, '').split('/').pop() ?? p

/** One lesson's Exam Kit: what the exams ask, and what to know and write to score on it. */
export default function ExamKit({ slug, language, t }: { slug: string; language: Language; t: Translations }) {
  const [kit, setKit] = useState<ExamKitResponse | null>(null)
  const [failed, setFailed] = useState(false)
  const [showAllAsked, setShowAllAsked] = useState(false)

  // the parent keys this component by slug, so a new lesson starts from fresh state
  useEffect(() => {
    let live = true
    fetchExamKit(slug).then(k => { if (live) setKit(k) }).catch(() => { if (live) setFailed(true) })
    return () => { live = false }
  }, [slug])

  if (failed) return <p className="ek-status">{t.ekLoadFailed}</p>
  if (!kit) return <p className="ek-status" aria-busy="true">…</p>

  const k = kit.data
  const pick = (b: Bi) => (language === 'bn' && b.bn ? b.bn : b.en)
  const heat = k.heat
  const bodies = heat ? Object.entries(heat.byBody).filter(([, n]) => n > 0).sort((a, b) => b[1] - a[1]) : []
  const maxBody = Math.max(1, ...bodies.map(([, n]) => n))
  const asked = k.asked ?? []
  const shownAsked = showAllAsked ? asked : asked.slice(0, ASKED_PREVIEW)

  return (
    <div className="ek">
      {!kit.is_published && <p className="ek-draft">{t.ekDraft}</p>}
      <p className="ek-lead">{t.ekLead}</p>

      {heat && (
        <section className="ek-card ek-heat" aria-label={t.ekByBody}>
          <div className="ek-tiles">
            <div className="ek-tile"><span className="ek-tile-num">{heat.asked}</span><span className="ek-tile-label">{t.ekAskedCount}</span></div>
            <div className="ek-tile"><span className="ek-tile-num">{heat.recent}</span><span className="ek-tile-label">{t.ekRecent}</span></div>
            <div className="ek-tile"><span className="ek-tile-num">{heat.repeats}</span><span className="ek-tile-label">{t.ekRepeats}</span></div>
          </div>
          {bodies.length > 0 && (
            <>
              <h3 className="ek-h3">{t.ekByBody}</h3>
              <ul className="ek-bars">
                {bodies.map(([body, n]) => {
                  const label = t[BODY_KEYS[body] ?? 'ekBodyOther']
                  return (
                    <li key={body} className="ek-bar-row" title={`${label}: ${n}`}>
                      <span className="ek-bar-label">{label}</span>
                      <span className="ek-bar-track"><span className="ek-bar" style={{ width: `${(n / maxBody) * 100}%` }} /></span>
                      <span className="ek-bar-value">{n}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
          {heat.topClusters.length > 0 && (
            <>
              <h3 className="ek-h3">{t.ekTopTopics}</h3>
              <ul className="ek-chips">
                {heat.topClusters.map(c => <li key={c.name} className="ek-chip">{c.name} <b>{c.asked}</b></li>)}
              </ul>
            </>
          )}
        </section>
      )}

      {k.mustKnow.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekMustKnow}</h2>
          <ul className="ek-list">{k.mustKnow.map((m, i) => <li key={i}>{pick(m)}</li>)}</ul>
        </section>
      )}

      {k.formulas.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekFormulas}</h2>
          {k.formulas.map((f, i) => (
            <div key={i} className="ek-formula">
              <h3 className="ek-h3">{pick(f.title)}</h3>
              <code className="ek-formula-expr">{f.formula}</code>
              <p className="ek-formula-q">{pick(f.example.question)}</p>
              <details className="ek-details">
                <summary>{t.ekWorking}</summary>
                <p className="ek-pre">{pick(f.example.working)}</p>
                <p><b>{t.ekAnswer}:</b> {f.example.answer}</p>
              </details>
            </div>
          ))}
        </section>
      )}

      {k.writtenPlan.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekWrittenPlan}</h2>
          {k.writtenPlan.map((w, i) => (
            <div key={i} className="ek-plan">
              <h3 className="ek-h3">{pick(w.question)}</h3>
              {w.askedIn.length > 0 && <p className="ek-meta">{t.ekAskedIn}: {w.askedIn.join(' · ')}</p>}
              <ol className="ek-steps">{(language === 'bn' && w.skeleton.bn.length ? w.skeleton.bn : w.skeleton.en).map((s, j) => <li key={j}>{s}</li>)}</ol>
              {(['5', '10', '20'] as const).filter(m => w.marks[m]).map(m => (
                <details key={m} className="ek-details">
                  <summary>{fill(t.ekMarksVersion, { n: m })}</summary>
                  <p className="ek-pre">{pick(w.marks[m]!)}</p>
                </details>
              ))}
            </div>
          ))}
        </section>
      )}

      {asked.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekAsked}</h2>
          <ol className="ek-asked">
            {shownAsked.map(q => (
              <li key={q.group} className="ek-asked-item">
                <p className="ek-asked-q">
                  {q.repeat && <span className="ek-badge">{t.ekRepeat}</span>}
                  {q.question}
                </p>
                <p className="ek-meta">{t.ekAskedIn}: {q.askedIn.join(' · ')}</p>
                <p className="ek-meta">{t.ekSource}: {[...new Set(q.sources.map(sourceName))].join(' · ')}</p>
              </li>
            ))}
          </ol>
          {asked.length > ASKED_PREVIEW && (
            <button type="button" className="ek-more" onClick={() => setShowAllAsked(v => !v)}>
              {showAllAsked ? t.ekShowLess : fill(t.ekShowMore, { n: asked.length })}
            </button>
          )}
        </section>
      )}

      {k.traps.length > 0 && (
        <section className="ek-card ek-traps">
          <h2 className="ek-h2">{t.ekTraps}</h2>
          <ul className="ek-list">{k.traps.map((m, i) => <li key={i}>{pick(m)}</li>)}</ul>
        </section>
      )}

      {k.viva.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekViva}</h2>
          {k.viva.map((v, i) => (
            <details key={i} className="ek-details ek-viva">
              <summary>{pick(v.q)}</summary>
              <p>{pick(v.a)}</p>
            </details>
          ))}
        </section>
      )}

      {(k.factsResolved?.length ?? 0) > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekFacts}</h2>
          <ul className="ek-list">
            {k.factsResolved!.map(f => (
              <li key={f.id}>{language === 'bn' ? f.bn : f.en} <span className="ek-meta">({fill(t.ekAsOf, { date: f.asOf })})</span></li>
            ))}
          </ul>
        </section>
      )}

      {k.sources.length > 0 && (
        <section className="ek-card">
          <h2 className="ek-h2">{t.ekSources}</h2>
          <ul className="ek-list ek-sources">
            {k.sources.map((s, i) => (
              <li key={i}>
                {/^https?:\/\//.test(s.url) ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> : s.title}
                <span className="ek-meta"> · {s.accessed}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <a className="ek-quiz" href={`#/exams/practice?lesson=${slug}`}>{t.ekPractise}</a>
    </div>
  )
}
