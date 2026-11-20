import { useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import Icon, { type IconName } from '../components/portal/icons'
import { useSiteInfo } from './useSiteInfo'

/** `#/contact`: how to reach the team, from Admin → Settings → Contact. */
export default function ContactPage() {
  const { language: lang } = useApp()
  const t = translations[lang]
  const info = useSiteInfo()
  useEffect(() => { document.title = `${t.siteNavContact} | StudyPath` }, [t])

  const c = info?.contact
  const rows: { icon: IconName; label: string; value: string; href?: string; external?: boolean }[] = c ? [
    ...(c.whatsapp ? [{ icon: 'chat' as const, label: 'WhatsApp', value: `+${c.whatsapp}`, href: `https://wa.me/${c.whatsapp}`, external: true }] : []),
    ...(c.phone ? [{ icon: 'phone' as const, label: t.ctPhone, value: c.phone, href: `tel:${c.phone.replace(/[^\d+]/g, '')}` }] : []),
    ...(c.email ? [{ icon: 'mail' as const, label: t.ctEmail, value: c.email, href: `mailto:${c.email}` }] : []),
    ...(c.address ? [{ icon: 'mapPin' as const, label: t.ctAddress, value: c.address }] : []),
    ...(c.hours ? [{ icon: 'clock' as const, label: t.ctHours, value: c.hours }] : []),
    ...(c.facebook ? [{ icon: 'external' as const, label: 'Facebook', value: c.facebook.replace(/^https:\/\/(www\.)?/, ''), href: c.facebook, external: true }] : []),
    ...(c.youtube ? [{ icon: 'external' as const, label: 'YouTube', value: c.youtube.replace(/^https:\/\/(www\.)?/, ''), href: c.youtube, external: true }] : []),
  ] : []

  return (
    <main className="ft-main">
      <header>
        <p className="pd-eyebrow">{t.ctEyebrow}</p>
        <h1 className="site-h1">{t.siteNavContact}</h1>
        <p className="pd-sub">{t.ctIntro}</p>
      </header>
      {!info && <div className="ex-card sp-skel fs-skel" aria-busy="true" />}
      {info && rows.length === 0 && <p className="ex-alert info"><Icon name="info" /><span>{t.ctNone}</span></p>}
      {rows.length > 0 && (
        <ul className="ct-grid">
          {rows.map(r => (
            <li key={r.label} className="ex-card ct-card">
              <span className="ct-icon"><Icon name={r.icon} /></span>
              <span className="ct-text">
                <span className="pd-muted">{r.label}</span>
                {r.href
                  ? <a href={r.href} {...(r.external ? { target: '_blank', rel: 'noreferrer' } : {})}>{r.value}</a>
                  : <span>{r.value}</span>}
              </span>
            </li>
          ))}
        </ul>
      )}
      <section className="ex-card ct-faq">
        <h2 className="site-h2">{t.ctFaqTitle}</h2>
        <details><summary>{t.ctQ1}</summary><p>{t.ctA1}</p></details>
        <details><summary>{t.ctQ2}</summary><p>{t.ctA2}</p></details>
        <details><summary>{t.ctQ3}</summary><p>{t.ctA3}</p></details>
      </section>
    </main>
  )
}
