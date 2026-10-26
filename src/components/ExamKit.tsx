import { useEffect, useState, type ReactNode } from 'react'
import type { Language, Translations } from '../types'
import { fetchExamKit, type Bi, type ExamKitResponse } from '../public/publicApi'
import KitText from './KitText'

const ASKED_PREVIEW = 8
const BODY_KEYS: Record<string, keyof Translations> = {
  bpsc: 'ekBodyBpsc', bcs: 'ekBodyBcs', ntrca: 'ekBodyNtrca', bank: 'ekBodyBank', psu: 'ekBodyPsu',
  buet: 'ekBodyBuet', private: 'ekBodyPrivate', other: 'ekBodyOther',
}

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
/** "ex-question/duranta/1716…/1716….md#p3" -> "1716….md": the document a question was taken from. */
const sourceName = (p: string) => p.replace(/#.*$/, '').split('/').pop() ?? p

/** Stroke icons (24px grid) for the section headings and answer panels. */
const ICONS = {
  layers: 'M12 3 2 8l10 5 10-5-10-5ZM2 13l10 5 10-5M2 18l10 5 10-5',
  check: 'M20 6 9 17l-5-5',
  sigma: 'M18 6V4H6l7 8-7 8h12v-2',
  pen: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z',
  history: 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 3',
  alert: 'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
  bulb: 'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z',
  steps: 'M4 6h16M4 12h10M4 18h6',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  doc: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 13h8M8 17h5',
  chart: 'M3 3v18h18M7 15l4-4 3 3 5-6',
} as const
type IconName = keyof typeof ICONS

function Icon({ name }: { name: IconName }) {
  return (
    <svg className="ek-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS[name]} /></svg>
  )
}

function Heading({ icon, title, extra }: { icon: IconName; title: string; extra?: ReactNode }) {
  return <h2 className="ek-h2"><span className="ek-ico"><Icon name={icon} /></span><span>{title}</span>{extra}</h2>
}

/** "Address format. An IPv6 address is…" -> the short lead term as a heading */
function Point({ text }: { text: string }) {
  const m = text.match(/^([^.।\n]{2,72})[.।]\s([\s\S]*)$/)
  return m
    ? <><strong className="ek-point-title">{m[1]}</strong><KitText text={m[2]} /></>
    : <KitText text={text} />
}

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
        <section className="ek-card ek-sec ek-sec-heat" aria-label={t.ekByBody}>
          <div className="ek-tiles">
            <div className="ek-tile"><span className="ek-tile-num">{heat.asked}</span><span className="ek-tile-label">{t.ekAskedCount}</span></div>
            <div className="ek-tile"><span className="ek-tile-num">{heat.recent}</span><span className="ek-tile-label">{t.ekRecent}</span></div>
            <div className="ek-tile"><span className="ek-tile-num">{heat.repeats}</span><span className="ek-tile-label">{t.ekRepeats}</span></div>
          </div>
          <div className="ek-heat-grid">
            {bodies.length > 0 && (
              <div>
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
              </div>
            )}
            {heat.topClusters.length > 0 && (
              <div>
                <h3 className="ek-h3">{t.ekTopTopics}</h3>
                <ul className="ek-chips">
                  {heat.topClusters.map(c => <li key={c.name} className="ek-chip">{c.name} <b>{c.asked}</b></li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {(k.topics?.length ?? 0) > 0 && (
        <section className="ek-card ek-sec ek-sec-topics">
          <Heading icon="layers" title={t.ekTopicsDeep} />
          <ul className="ek-topic-nav">
            {k.topics!.map((topic, ti) => (
              <li key={topic.name}>
                <button type="button" onClick={() => document.getElementById(`ek-topic-${ti}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  <span className="ek-num">{ti + 1}</span>{topic.name}
                </button>
              </li>
            ))}
          </ul>
          {k.topics!.map((topic, ti) => {
            const count = heat?.topClusters.find(c => c.name === topic.name)?.asked
            const share = count !== undefined && heat?.asked ? Math.round((count / heat.asked) * 100) : null
            return (
              <article key={topic.name} id={`ek-topic-${ti}`} className="ek-topic">
                <header className="ek-topic-head">
                  <span className="ek-num">{ti + 1}</span>
                  <div className="ek-topic-heading">
                    <h3 className="ek-topic-title">{topic.name}</h3>
                    {count !== undefined && (
                      <div className="ek-topic-stat">
                        <span>{fill(t.ekTopicAsked, { n: count })}</span>
                        {share !== null && <span className="ek-topic-bar" aria-hidden="true"><span style={{ width: `${Math.max(share, 3)}%` }} /></span>}
                        {share !== null && <span>{share}%</span>}
                      </div>
                    )}
                  </div>
                </header>
                <div className="ek-topic-body">
                  <KitText className="ek-overview" text={pick(topic.overview)} />
                  {topic.points.length > 0 && (
                    <details className="ek-details ek-panel">
                      <summary><Icon name="bulb" /><span>{t.ekKeyPoints}</span><span className="ek-summary-count">{topic.points.length}</span></summary>
                      <ol className="ek-points">{topic.points.map((pt, i) => <li key={i}><span className="ek-point-n">{i + 1}</span><div className="ek-point-body"><Point text={pick(pt)} /></div></li>)}</ol>
                    </details>
                  )}
                  {topic.examples.length > 0 && (
                    <div className="ek-examples">
                      <h4 className="ek-h4"><Icon name="sigma" />{t.ekExamples}</h4>
                      {topic.examples.map((e, i) => (
                        <div key={i} className="ek-example">
                          <span className="ek-example-label">{fill(t.ekExampleN, { n: i + 1 })}</span>
                          <KitText className="ek-example-q" text={pick(e.question)} />
                          <details className="ek-details ek-answer">
                            <summary><Icon name="steps" /><span>{t.ekWorking}</span></summary>
                            <KitText text={pick(e.working)} />
                            <div className="ek-final"><b>{t.ekAnswer}</b><KitText text={pick(e.answer)} /></div>
                          </details>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </section>
      )}

      {k.mustKnow.length > 0 && (
        <section className="ek-card ek-sec ek-sec-must">
          <Heading icon="check" title={t.ekMustKnow} />
          <ul className="ek-marks ek-marks-check">{k.mustKnow.map((m, i) => <li key={i}>{pick(m)}</li>)}</ul>
        </section>
      )}

      {k.formulas.length > 0 && (
        <section className="ek-card ek-sec ek-sec-formulas">
          <Heading icon="sigma" title={t.ekFormulas} />
          {k.formulas.map((f, i) => (
            <div key={i} className="ek-formula">
              <h3 className="ek-h3">{pick(f.title)}</h3>
              <code className="ek-formula-expr">{f.formula}</code>
              <p className="ek-formula-q">{pick(f.example.question)}</p>
              <details className="ek-details ek-answer">
                <summary><Icon name="steps" /><span>{t.ekWorking}</span></summary>
                <p className="ek-pre">{pick(f.example.working)}</p>
                <p className="ek-final"><b>{t.ekAnswer}:</b> {f.example.answer}</p>
              </details>
            </div>
          ))}
        </section>
      )}

      {k.writtenPlan.length > 0 && (
        <section className="ek-card ek-sec ek-sec-plan">
          <Heading icon="pen" title={t.ekWrittenPlan} />
          {k.writtenPlan.map((w, i) => (
            <div key={i} className="ek-plan">
              <h3 className="ek-h3">{pick(w.question)}</h3>
              {w.askedIn.length > 0 && <p className="ek-meta"><b>{t.ekAskedIn}:</b> {w.askedIn.join(' · ')}</p>}
              <ol className="ek-steps">{(language === 'bn' && w.skeleton.bn.length ? w.skeleton.bn : w.skeleton.en).map((s, j) => <li key={j}>{s}</li>)}</ol>
              {(['5', '10', '20'] as const).filter(m => w.marks[m]).map(m => (
                <details key={m} className="ek-details ek-answer">
                  <summary><Icon name="doc" /><span>{fill(t.ekMarksVersion, { n: m })}</span></summary>
                  <p className="ek-pre">{pick(w.marks[m]!)}</p>
                </details>
              ))}
            </div>
          ))}
        </section>
      )}

      {asked.length > 0 && (
        <section className="ek-card ek-sec ek-sec-asked">
          <Heading icon="history" title={t.ekAsked} extra={<span className="ek-pill">{asked.length}</span>} />
          <ol className="ek-asked">
            {shownAsked.map((q, qi) => {
              const sol = k.solutions?.[q.group]
              const mcq = q.kind === 'mcq'
              return (
                <li key={q.group} className="ek-asked-item">
                  <div className="ek-asked-head">
                    <span className="ek-num">{qi + 1}</span>
                    <div className="ek-asked-body">
                      <div className="ek-tags">
                        <span className={`ek-tag ${mcq ? 'ek-tag-mcq' : 'ek-tag-written'}`}>{mcq ? t.ekKindMcq : t.ekKindWritten}</span>
                        {q.repeat && <span className="ek-tag ek-tag-repeat">{t.ekRepeat} · {q.askedIn.length}×</span>}
                        <span className="ek-tag ek-tag-topic">{q.cluster}</span>
                      </div>
                      <p className="ek-asked-q">{q.question}</p>
                      <dl className="ek-asked-meta">
                        <dt>{t.ekAskedIn}</dt><dd>{q.askedIn.join(' · ')}</dd>
                        <dt>{t.ekSource}</dt><dd>{[...new Set(q.sources.map(sourceName))].join(' · ')}</dd>
                      </dl>
                    </div>
                  </div>
                  {sol && (
                    <div className="ek-asked-sol">
                      <details className="ek-details ek-answer">
                        <summary><Icon name="bulb" /><span>{t.ekSolution}</span></summary>
                        <KitText text={pick(sol.answer)} />
                      </details>
                      {sol.example && (
                        <details className="ek-details ek-practice">
                          <summary><Icon name="target" /><span>{t.ekPracticeExample}</span></summary>
                          <KitText text={pick(sol.example)} />
                        </details>
                      )}
                    </div>
                  )}
                </li>
              )
            })}
          </ol>
          {asked.length > ASKED_PREVIEW && (
            <button type="button" className="ek-more" onClick={() => setShowAllAsked(v => !v)}>
              {showAllAsked ? t.ekShowLess : fill(t.ekShowMore, { n: asked.length })}
            </button>
          )}
        </section>
      )}

      {k.traps.length > 0 && (
        <section className="ek-card ek-sec ek-sec-traps">
          <Heading icon="alert" title={t.ekTraps} />
          <ul className="ek-marks ek-marks-warn">{k.traps.map((m, i) => <li key={i}>{pick(m)}</li>)}</ul>
        </section>
      )}

      {k.viva.length > 0 && (
        <section className="ek-card ek-sec ek-sec-viva">
          <Heading icon="chat" title={t.ekViva} />
          {k.viva.map((v, i) => (
            <details key={i} className="ek-details ek-viva">
              <summary><span className="ek-q">Q</span><span>{pick(v.q)}</span></summary>
              <p className="ek-pre">{pick(v.a)}</p>
            </details>
          ))}
        </section>
      )}

      {(k.factsResolved?.length ?? 0) > 0 && (
        <section className="ek-card ek-sec ek-sec-facts">
          <Heading icon="calendar" title={t.ekFacts} />
          <ul className="ek-marks">
            {k.factsResolved!.map(f => (
              <li key={f.id}>{language === 'bn' ? f.bn : f.en} <span className="ek-meta">({fill(t.ekAsOf, { date: f.asOf })})</span></li>
            ))}
          </ul>
        </section>
      )}

      {k.sources.length > 0 && (
        <section className="ek-card ek-sec ek-sec-sources">
          <Heading icon="link" title={t.ekSources} />
          <ul className="ek-marks ek-sources">
            {k.sources.map((s, i) => (
              <li key={i}>
                {/^https?:\/\//.test(s.url) ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> : s.title}
                <span className="ek-meta"> · {s.accessed}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <a className="ek-quiz" href={`#/exams/practice?lesson=${slug}`}><Icon name="target" />{t.ekPractise}</a>
    </div>
  )
}
