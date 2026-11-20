import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { useCandidateAuth } from '../../candidate/CandidateAuthContext'
import { billingApi, type Billing } from '../../candidate/billingApi'
import { translations } from '../../data/translations'
import { fill, num } from '../../exam/format'
import Icon from './icons'
import '../../site/site.css'

const METHOD_LABEL = { bkash: 'bKash', nagad: 'Nagad', rocket: 'Rocket' } as const

/** `#/account`: the candidate's plan (paid until when) and every payment request with its review status. */
export default function AccountPage() {
  const { language: lang } = useApp()
  const t = translations[lang]
  const candidate = useCandidateAuth()
  const [billing, setBilling] = useState<Billing | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => { document.title = `${t.acTitle} | StudyPath` }, [t])
  useEffect(() => {
    if (!candidate.token) return
    billingApi.get().then(setBilling).catch(() => setFailed(true))
  }, [candidate.token])

  const day = (iso: string) => new Date(iso).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const statusLabel = { pending: t.plPending, approved: t.plApproved, rejected: t.plRejected }

  return (
    <main className="main-content portal-main">
      <div className="pd ac-page">
        <header className="pd-head">
          <p className="pd-eyebrow">{t.acEyebrow}</p>
          <h1>{t.acTitle}</h1>
          {candidate.candidate && <p className="pd-sub">{candidate.candidate.fullName} · {candidate.candidate.email}</p>}
        </header>

        {!candidate.token && <p className="ex-alert info"><Icon name="info" /><span>{t.acAdminPreview}</span></p>}
        {failed && <p className="ex-alert bad"><Icon name="alert" /><span>{t.ftLoadFailed}</span></p>}

        {billing && (
          <>
            <section className={`ex-card ac-plan${billing.active ? ' active' : ''}`}>
              <span className="ac-plan-icon"><Icon name={billing.active ? 'check' : 'wallet'} /></span>
              <div>
                <h2 className="site-h2">{billing.active ? t.acActive : t.acFree}</h2>
                <p className="pd-muted">
                  {billing.active && billing.subscriptionUntil
                    ? fill(t.plActiveUntil, { date: day(billing.subscriptionUntil) })
                    : billing.subscriptionUntil ? fill(t.acExpired, { date: day(billing.subscriptionUntil) }) : billing.paywall.enabled ? t.acFreeLocked : t.acFreeOpen}
                </p>
              </div>
              <a className="ex-btn primary" href="#/plans">{billing.active ? t.acExtend : t.acSeePlans}<Icon name="arrow" /></a>
            </section>

            <section className="ex-card">
              <h2 className="site-h2">{t.acPayments}</h2>
              {billing.payments.length === 0 ? <p className="pd-muted">{t.acNoPayments}</p> : (
                <div className="site-table-scroll">
                  <table className="ac-table">
                    <thead><tr><th>{t.acDate}</th><th>{t.plPlan}</th><th>{t.plTransaction}</th><th>{t.adminStatus}</th></tr></thead>
                    <tbody>
                      {billing.payments.map(p => (
                        <tr key={p.id}>
                          <td>{day(p.created_at)}</td>
                          <td>{p.plan_name}<div className="pd-muted">৳{num(p.amount_bdt, lang)} · {(p.months === 1 ? t.plOneMonth : fill(t.plMonthsN, { n: num(p.months, lang) }))}</div></td>
                          <td>{METHOD_LABEL[p.method]} <code>{p.trx_id}</code><div className="pd-muted">{p.sender_number}</div></td>
                          <td>
                            <span className={`bl-status-pill bl-${p.status}`}>{statusLabel[p.status]}</span>
                            {p.admin_note && <div className="pd-muted">{p.admin_note}</div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  )
}
