import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import { fill, num, pick } from '../exam/format'
import { freeSetsApi, type FreeSetCard } from '../public/siteApi'

/** `#/free-test`: the sets an admin marked free. Each one can be read with answers, taken under a name, or ranked. */
export default function FreeSets() {
  const { language: lang } = useApp()
  const t = translations[lang]
  const [sets, setSets] = useState<FreeSetCard[] | null>(null)

  useEffect(() => { document.title = `${t.fsTitle} | StudyPath` }, [t])
  useEffect(() => { freeSetsApi.list().then(setSets).catch(() => setSets([])) }, [])

  return (
    <section className="fs-section" aria-labelledby="fs-title">
      <p className="pd-eyebrow">{t.ftEyebrow}</p>
      <h1 id="fs-title" className="site-h1">{t.fsTitle}</h1>
      <p className="pd-sub">{t.fsIntro}</p>
      {!sets && <div className="fs-grid" aria-busy="true">{[0, 1, 2].map(i => <div key={i} className="ex-card fs-card sp-skel" />)}</div>}
      {sets && sets.length === 0 && <p className="ex-alert info"><Icon name="info" /><span>{t.fsNone}</span></p>}
      {sets && sets.length > 0 && (
        <ul className="fs-grid">
          {sets.map(s => (
            <li key={s.id} className="ex-card fs-card">
              <h2>{pick(lang, s.titleEn, s.titleBn)}</h2>
              {pick(lang, s.descriptionEn, s.descriptionBn) && <p className="pd-muted fs-desc">{pick(lang, s.descriptionEn, s.descriptionBn)}</p>}
              <ul className="fs-facts">
                <li><Icon name="exam" />{fill(t.fsQuestionsN, { n: num(s.questionCount, lang) })}</li>
                <li><Icon name="clock" />{fill(t.fsMinutesN, { n: num(s.durationMinutes, lang) })}</li>
                <li><Icon name="trophy" />{fill(t.fsParticipantsN, { n: num(s.participants, lang) })}</li>
              </ul>
              {s.negativeMark > 0 && <p className="pd-muted fs-neg">{fill(t.fsNegative, { n: num(s.negativeMark, lang) })}</p>}
              <div className="fs-actions">
                <a className="ex-btn primary" href={`#/free-test/${s.id}/take`}><Icon name="target" />{t.fsTake}</a>
                <a className="ex-btn" href={`#/free-test/${s.id}/answers`}><Icon name="eye" />{t.fsAnswers}</a>
                <a className="ex-btn" href={`#/free-test/${s.id}/merit`}><Icon name="trophy" />{t.fsMerit}</a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
