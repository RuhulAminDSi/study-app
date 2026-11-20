import { useEffect, useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import { useCandidateAuth } from '../candidate/CandidateAuthContext'
import { ApiError } from '../candidate/candidateApi'
import { billingApi, type Billing, type PayMethod } from '../candidate/billingApi'
import { translations } from '../data/translations'
import Icon from '../components/portal/icons'
import { fill, num, pick } from '../exam/format'
import { plansApi, type Plan } from '../public/siteApi'
import type { Language, Translations } from '../types'

const METHODS: { key: PayMethod; label: string }[] = [
  { key: 'bkash', label: 'bKash' }, { key: 'nagad', label: 'Nagad' }, { key: 'rocket', label: 'Rocket' },
]

const FIELD_KEYS: Record<string, keyof Translations> = {
  phone_invalid: 'payErrPhone', trx_invalid: 'payErrTrx', trx_used: 'payErrTrxUsed', method_unavailable: 'payErrMethod',
  method_invalid: 'payErrMethod', plan_unknown: 'payErrPlan',
}

const until = (iso: string, lang: Language) =>
  new Date(iso).toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

/** `#/plans`: the paid plans; a signed-in candidate pays by bKash / Nagad / Rocket Send Money and submits the transaction ID. */
export default function PlansPage() {
  const { language: lang } = useApp()
  const t = translations[lang]
  const candidate = useCandidateAuth()
  const [plans, setPlans] = useState<Plan[] | null>(null)
  const [billing, setBilling] = useState<Billing | null>(null)
  const [buying, setBuying] = useState<Plan | null>(null)

  useEffect(() => { document.title = `${t.siteNavPlans} | StudyPath` }, [t])
  useEffect(() => { plansApi.list().then(setPlans).catch(() => setPlans([])) }, [])
  useEffect(() => {
    if (!candidate.token) return
    billingApi.get().then(setBilling).catch(() => {})
  }, [candidate.token])

  const pending = billing?.payments.find(p => p.status === 'pending')

  return (
    <main className="ft-main site-wide">
      <header className="pl-head">
        <p className="pd-eyebrow">{t.plEyebrow}</p>
        <h1 className="site-h1">{t.siteNavPlans}</h1>
        <p className="pd-sub">{t.plIntro}</p>
      </header>

      {billing?.active && billing.subscriptionUntil && (
        <p className="ex-alert good"><Icon name="check" /><span>{fill(t.plActiveUntil, { date: until(billing.subscriptionUntil, lang) })}</span></p>
      )}
      {pending && (
        <p className="ex-alert info"><Icon name="clock" /><span>{fill(t.plPendingNote, { trx: pending.trx_id })} <a href="#/account">{t.plSeeAccount}</a></span></p>
      )}

      {!plans && <div className="pl-grid" aria-busy="true">{[0, 1, 2].map(i => <div key={i} className="ex-card sp-skel pl-skel" />)}</div>}
      {plans && plans.length === 0 && <p className="ex-alert info"><Icon name="info" /><span>{t.plNone}</span></p>}
      {plans && plans.length > 0 && (
        <ul className="pl-grid">
          {plans.map(p => {
            const features = lang === 'bn' && p.features_bn.length ? p.features_bn : p.features_en
            return (
              <li key={p.id} className={`ex-card pl-card${p.is_featured ? ' featured' : ''}`}>
                {p.is_featured && <span className="pl-flag">{t.plPopular}</span>}
                <h2>{pick(lang, p.name_en, p.name_bn)}</h2>
                <p className="pl-price"><strong>৳{num(p.price_bdt, lang)}</strong> / {(p.months === 1 ? t.plOneMonth : fill(t.plMonthsN, { n: num(p.months, lang) }))}</p>
                {pick(lang, p.description_en, p.description_bn) && <p className="pd-muted">{pick(lang, p.description_en, p.description_bn)}</p>}
                {features.length > 0 && <ul className="pl-features">{features.map((f, i) => <li key={i}><Icon name="check" />{f}</li>)}</ul>}
                {candidate.token
                  ? <button type="button" className={`ex-btn${p.is_featured ? ' primary' : ''}`} onClick={() => setBuying(p)}>{t.plBuy}<Icon name="arrow" /></button>
                  : <a className={`ex-btn${p.is_featured ? ' primary' : ''}`} href="#/login?next=plans">{t.plSignInToBuy}<Icon name="arrow" /></a>}
              </li>
            )
          })}
        </ul>
      )}

      {buying && billing && (
        <PayForm plan={buying} billing={billing} lang={lang} t={t}
          onCancel={() => setBuying(null)}
          onDone={() => { setBuying(null); billingApi.get().then(setBilling).catch(() => {}) }} />
      )}
      {buying && !billing && <p className="ex-alert bad"><Icon name="alert" /><span>{t.ftLoadFailed}</span></p>}

      <section className="ex-card pl-how">
        <h2 className="site-h2">{t.plHowTitle}</h2>
        <ol>
          <li>{t.plHow1}</li>
          <li>{t.plHow2}</li>
          <li>{t.plHow3}</li>
        </ol>
        <p className="pd-muted">{t.plHowHelp} <a href="#/contact">{t.siteNavContact}</a></p>
      </section>
    </main>
  )
}

function PayForm({ plan, billing, lang, t, onCancel, onDone }: {
  plan: Plan; billing: Billing; lang: Language; t: Translations; onCancel: () => void; onDone: () => void
}) {
  const available = METHODS.filter(m => billing.payment[m.key])
  const [method, setMethod] = useState<PayMethod | null>(available[0]?.key ?? null)
  const [sender, setSender] = useState('')
  const [trx, setTrx] = useState('')
  const [fields, setFields] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const instructions = pick(lang, billing.payment.instructions_en || null, billing.payment.instructions_bn || null)

  async function send(e: FormEvent) {
    e.preventDefault()
    if (!method) return
    setBusy(true); setFields({}); setError('')
    try {
      await billingApi.pay({ planId: plan.id, method, senderNumber: sender, trxId: trx })
      setSent(true)
    } catch (err) {
      if (err instanceof ApiError) {
        setFields(err.fields)
        setError(err.code === 'too_many_pending' ? t.payErrTooMany : Object.keys(err.fields).length ? t.errFixFields : err.message)
      } else setError(t.ftLoadFailed)
    } finally { setBusy(false) }
  }
  const fe = (k: string) => (fields[k] ? <small className="site-field-error">{FIELD_KEYS[fields[k]] ? t[FIELD_KEYS[fields[k]]] : fields[k]}</small> : null)

  if (sent) {
    return (
      <section className="ex-card pl-pay" aria-live="polite">
        <h2 className="site-h2"><Icon name="check" />{t.paySentTitle}</h2>
        <p>{t.paySentBody}</p>
        <div className="ft-cta-actions">
          <a className="ex-btn primary" href="#/account">{t.plSeeAccount}</a>
          <button type="button" className="ex-btn" onClick={onDone}>{t.payClose}</button>
        </div>
      </section>
    )
  }

  return (
    <form className="ex-card pl-pay" onSubmit={send} aria-labelledby="pay-title">
      <h2 id="pay-title" className="site-h2">{fill(t.payTitle, { plan: pick(lang, plan.name_en, plan.name_bn) ?? plan.name_en })}</h2>
      {available.length === 0 ? (
        <p className="ex-alert info"><Icon name="info" /><span>{t.payNoNumbers} <a href="#/contact">{t.siteNavContact}</a></span></p>
      ) : (
        <>
          <div className="pay-methods" role="radiogroup" aria-label={t.payMethod}>
            {available.map(m => (
              <button key={m.key} type="button" role="radio" aria-checked={method === m.key} className={`pay-method pay-${m.key}${method === m.key ? ' active' : ''}`} onClick={() => setMethod(m.key)}>
                {m.label}
              </button>
            ))}
          </div>
          {method && (
            <ol className="pay-steps">
              <li>{fill(t.payStep1, { amount: `৳${num(plan.price_bdt, lang)}`, method: METHODS.find(m => m.key === method)!.label })} <strong className="pay-number">{billing.payment[method]}</strong></li>
              <li>{t.payStep2}</li>
            </ol>
          )}
          {instructions && <p className="pay-instructions">{instructions}</p>}
          <div className="pay-fields">
            <label>{t.paySender}
              <input className="site-input" inputMode="tel" value={sender} onChange={e => setSender(e.target.value)} placeholder="01XXXXXXXXX" required aria-invalid={!!fields.senderNumber} />
              {fe('senderNumber')}
            </label>
            <label>{t.payTrx}
              <input className="site-input pay-trx" value={trx} onChange={e => setTrx(e.target.value.toUpperCase())} placeholder="8N7A6D5C4B" required maxLength={30} aria-invalid={!!fields.trxId} />
              {fe('trxId')}
            </label>
          </div>
          {fe('method')}{fe('planId')}
          {error && <p className="ex-alert bad" role="alert"><Icon name="alert" /><span>{error}</span></p>}
        </>
      )}
      <div className="ft-cta-actions pay-actions">
        <button type="button" className="ex-btn" onClick={onCancel}>{t.adminCancel}</button>
        {available.length > 0 && <button type="submit" className="ex-btn primary" disabled={busy || !method}>{busy ? '…' : t.paySubmit}</button>}
      </div>
    </form>
  )
}
