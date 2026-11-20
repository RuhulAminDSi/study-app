import { useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { AdminApiError } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { useFeedback } from './feedback'
import { siteAdminApi, type ContactSettings, type PaymentSettings, type PaywallSettings, type SiteSettings } from './siteAdminApi'
import { SkeletonRows } from './ui'

/** Admin → Settings: contact details (site footer, Contact page, WhatsApp button), payment numbers and the paywall. */
export default function AdminSettings({ language }: { language: Language }) {
  const t = translations[language]
  const { toast } = useFeedback()
  const [s, setS] = useState<SiteSettings | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState<keyof SiteSettings | null>(null)

  useEffect(() => {
    siteAdminApi.settings().then(setS).catch(e => toast(errorText(t, e), 'error'))
  }, [t, toast])

  if (!s) return <SkeletonRows />

  async function save(key: keyof SiteSettings) {
    if (!s) return
    setSaving(key); setFieldErrors({})
    try {
      setS(await siteAdminApi.saveSetting(key, s[key]))
      toast(t.adminSaved)
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setSaving(null) }
  }

  const contact = <K extends keyof ContactSettings>(k: K, v: ContactSettings[K]) => setS(x => (x ? { ...x, contact: { ...x.contact, [k]: v } } : x))
  const payment = <K extends keyof PaymentSettings>(k: K, v: PaymentSettings[K]) => setS(x => (x ? { ...x, payment: { ...x.payment, [k]: v } } : x))
  const paywall = <K extends keyof PaywallSettings>(k: K, v: PaywallSettings[K]) => setS(x => (x ? { ...x, paywall: { ...x.paywall, [k]: v } } : x))
  const err = (k: string) => (fieldErrors[k] ? <small className="cm-field-error">{adminErrorText(t, fieldErrors[k], fieldErrors[k])}</small> : null)
  const saveButton = (key: keyof SiteSettings) => (
    <div className="form-actions">
      <button className="adm-btn primary" onClick={() => save(key)} disabled={saving !== null}>{saving === key ? '…' : t.adminSave}</button>
    </div>
  )

  return (
    <div className="adm-screen st-screen">
      <section className="adm-card">
        <header className="adm-card-head"><h2>{t.stContact}</h2><p className="adm-hint">{t.stContactHint}</p></header>
        <div className="ax-card-body form-grid">
          <label>{t.stEmail}<input type="email" value={s.contact.email} onChange={e => contact('email', e.target.value)} aria-invalid={!!fieldErrors['contact.email']} />{err('contact.email')}</label>
          <label>{t.stPhone}<input value={s.contact.phone} onChange={e => contact('phone', e.target.value)} placeholder="+880 1XXX-XXXXXX" /></label>
          <label>{t.stWhatsapp}
            <input value={s.contact.whatsapp} onChange={e => contact('whatsapp', e.target.value)} placeholder="8801XXXXXXXXX" aria-invalid={!!fieldErrors['contact.whatsapp']} />
            {err('contact.whatsapp') ?? <small className="adm-hint">{t.stWhatsappHint}</small>}
          </label>
          <label>{t.stHours}<input value={s.contact.hours} onChange={e => contact('hours', e.target.value)} placeholder="Sat–Thu, 10am–8pm" /></label>
          <label className="full-width">{t.stAddress}<textarea rows={2} value={s.contact.address} onChange={e => contact('address', e.target.value)} /></label>
          <label>Facebook<input value={s.contact.facebook} onChange={e => contact('facebook', e.target.value)} placeholder="https://facebook.com/…" aria-invalid={!!fieldErrors['contact.facebook']} />{err('contact.facebook')}</label>
          <label>YouTube<input value={s.contact.youtube} onChange={e => contact('youtube', e.target.value)} placeholder="https://youtube.com/@…" aria-invalid={!!fieldErrors['contact.youtube']} />{err('contact.youtube')}</label>
        </div>
        {saveButton('contact')}
      </section>

      <section className="adm-card">
        <header className="adm-card-head"><h2>{t.stPayment}</h2><p className="adm-hint">{t.stPaymentHint}</p></header>
        <div className="ax-card-body form-grid">
          {(['bkash', 'nagad', 'rocket'] as const).map(k => (
            <label key={k}>{{ bkash: 'bKash', nagad: 'Nagad', rocket: 'Rocket' }[k]}
              <input value={s.payment[k]} onChange={e => payment(k, e.target.value)} placeholder="01XXXXXXXXX" aria-invalid={!!fieldErrors[`payment.${k}`]} />
              {err(`payment.${k}`)}
            </label>
          ))}
          <span />
          <label>{t.stInstructionsEn}<textarea rows={3} value={s.payment.instructions_en} onChange={e => payment('instructions_en', e.target.value)} placeholder={t.stInstructionsPlaceholder} /></label>
          <label>{t.stInstructionsBn}<textarea rows={3} value={s.payment.instructions_bn} onChange={e => payment('instructions_bn', e.target.value)} /></label>
        </div>
        {saveButton('payment')}
      </section>

      <section className="adm-card">
        <header className="adm-card-head"><h2>{t.stPaywall}</h2><p className="adm-hint">{t.stPaywallHint}</p></header>
        <div className="ax-card-body form-grid">
          <label className="cm-active full-width"><input type="checkbox" checked={s.paywall.enabled} onChange={e => paywall('enabled', e.target.checked)} /> {t.stPaywallOn}</label>
          <label className="cm-active full-width"><input type="checkbox" disabled={!s.paywall.enabled} checked={s.paywall.tests} onChange={e => paywall('tests', e.target.checked)} /> {t.stPaywallTests}</label>
          <label className="cm-active full-width"><input type="checkbox" disabled={!s.paywall.enabled} checked={s.paywall.practice} onChange={e => paywall('practice', e.target.checked)} /> {t.stPaywallPractice}</label>
          <small className="adm-hint full-width">{t.stPaywallNote}</small>
        </div>
        {saveButton('paywall')}
      </section>
    </div>
  )
}
