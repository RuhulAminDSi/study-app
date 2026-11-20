import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import type { Plan } from '../public/siteApi'
import { AdminApiError } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { fill, useFeedback } from './feedback'
import Modal from './Modal'
import { siteAdminApi, type AdminPayment, type PaymentStatus, type PlanInput } from './siteAdminApi'
import { EmptyState, Icon, IconButton, SkeletonRows } from './ui'

const METHOD_LABEL = { bkash: 'bKash', nagad: 'Nagad', rocket: 'Rocket' } as const
const STATUSES: (PaymentStatus | 'all')[] = ['pending', 'approved', 'rejected', 'all']

const blankPlan = (): PlanInput => ({
  name_en: '', name_bn: null, description_en: null, description_bn: null, features_en: [], features_bn: [],
  months: 1, price_bdt: 100, is_featured: false, is_active: true, sort_order: 0,
})

/**
 * Admin → Plans & payments. Candidates pay by bKash / Nagad / Rocket "Send Money" and submit the transaction ID;
 * an admin checks it in the merchant app and approves (adds the plan's months) or rejects with a reason.
 */
export default function AdminBilling({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [tab, setTab] = useState<'payments' | 'plans'>('payments')
  const [plans, setPlans] = useState<Plan[] | null>(null)
  const [payments, setPayments] = useState<AdminPayment[] | null>(null)
  const [counts, setCounts] = useState<Partial<Record<PaymentStatus, number>>>({})
  const [status, setStatus] = useState<PaymentStatus | 'all'>('pending')
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<{ id?: string; form: PlanInput; featuresEn: string; featuresBn: string } | null>(null)
  const [reviewing, setReviewing] = useState<{ payment: AdminPayment; action: 'approve' | 'reject'; note: string } | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(false)

  const date = (iso: string) => new Date(iso).toLocaleString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  const day = (iso: string) => new Date(iso).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  const loadPayments = useCallback(() => {
    siteAdminApi.payments(status, query)
      .then(r => { setPayments(r.items); setCounts(r.counts) })
      .catch(e => { toast(errorText(t, e), 'error'); setPayments([]) })
  }, [status, query, t, toast])

  useEffect(() => {
    const id = setTimeout(loadPayments, query ? 250 : 0)
    return () => clearTimeout(id)
  }, [loadPayments, query])
  useEffect(() => {
    siteAdminApi.plans().then(setPlans).catch(e => { toast(errorText(t, e), 'error'); setPlans([]) })
  }, [t, toast])

  function openPlan(p?: Plan) {
    setFieldErrors({})
    if (!p) { setEditing({ form: blankPlan(), featuresEn: '', featuresBn: '' }); return }
    const { id, ...form } = p
    setEditing({ id, form, featuresEn: p.features_en.join('\n'), featuresBn: p.features_bn.join('\n') })
  }

  async function savePlan() {
    if (!editing) return
    setBusy(true); setFieldErrors({})
    const lines = (s: string) => s.split('\n').map(x => x.trim()).filter(Boolean)
    const form = { ...editing.form, features_en: lines(editing.featuresEn), features_bn: lines(editing.featuresBn) }
    try {
      const saved = editing.id ? await siteAdminApi.updatePlan(editing.id, form) : await siteAdminApi.createPlan(form)
      setPlans(prev => [...(prev ?? []).filter(x => x.id !== saved.id), saved].sort((a, b) => a.sort_order - b.sort_order || a.months - b.months))
      setEditing(null)
      toast(editing.id ? t.adminSaved : t.adminCreated)
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setBusy(false) }
  }

  async function removePlan(p: Plan) {
    if (!await confirm({ title: t.adminConfirmDelete, body: fill(t.adminDeleteBody, { name: p.name_en }), confirmLabel: t.adminDelete, danger: true })) return
    try { await siteAdminApi.deletePlan(p.id); setPlans(prev => (prev ?? []).filter(x => x.id !== p.id)); toast(t.adminDeleted) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  async function review() {
    if (!reviewing) return
    setBusy(true); setFieldErrors({})
    try {
      const { payment, action, note } = reviewing
      await (action === 'approve' ? siteAdminApi.approve(payment.id, note) : siteAdminApi.reject(payment.id, note))
      setReviewing(null)
      toast(action === 'approve' ? t.plApprovedToast : t.plRejectedToast)
      loadPayments()
    } catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      toast(errorText(t, e), 'error')
    } finally { setBusy(false) }
  }

  const err = (k: string) => (fieldErrors[k] ? <small className="cm-field-error">{adminErrorText(t, fieldErrors[k], fieldErrors[k])}</small> : null)
  const statusLabel = { pending: t.plPending, approved: t.plApproved, rejected: t.plRejected, all: t.rsAll }
  const f = editing?.form
  const setPlan = <K extends keyof PlanInput>(k: K, v: PlanInput[K]) => setEditing(e => (e ? { ...e, form: { ...e.form, [k]: v } } : e))

  return (
    <div className="adm-screen">
      <div className="adm-toolbar">
        <div className="adm-segmented" role="tablist" aria-label={t.adminBilling}>
          <button type="button" role="tab" aria-selected={tab === 'payments'} className={tab === 'payments' ? 'active' : ''} onClick={() => setTab('payments')}>
            {t.plPayments} {!!counts.pending && <span className="adm-chip bl-chip-pending">{counts.pending}</span>}
          </button>
          <button type="button" role="tab" aria-selected={tab === 'plans'} className={tab === 'plans' ? 'active' : ''} onClick={() => setTab('plans')}>
            {t.plPlans} <span className="adm-chip">{plans?.length ?? 0}</span>
          </button>
        </div>
        {tab === 'payments' && (
          <label className="adm-search">
            <Icon name="search" size={15} />
            <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.plSearch} aria-label={t.plSearch} />
          </label>
        )}
        {tab === 'plans' && <button className="adm-btn primary adm-toolbar-end" onClick={() => openPlan()}><Icon name="plus" size={15} />{t.plNewPlan}</button>}
      </div>

      {tab === 'payments' && (
        <>
          <div className="adm-segmented bl-status" role="tablist" aria-label={t.adminStatus}>
            {STATUSES.map(s => (
              <button key={s} type="button" role="tab" aria-selected={status === s} className={status === s ? 'active' : ''} onClick={() => setStatus(s)}>
                {statusLabel[s]} {s !== 'all' && <span className="adm-chip">{counts[s] ?? 0}</span>}
              </button>
            ))}
          </div>
          <div className="adm-table-card">
            {!payments ? <SkeletonRows /> : payments.length === 0 ? <EmptyState icon="inbox" text={t.plNoPayments} /> : (
              <div className="adm-table-scroll">
                <table className="adm-table">
                  <thead>
                    <tr>
                      <th>{t.plCandidate}</th>
                      <th>{t.plPlan}</th>
                      <th>{t.plTransaction}</th>
                      <th>{t.adminStatus}</th>
                      <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(p => (
                      <tr key={p.id}>
                        <td>
                          <div className="adm-cell-title">{p.full_name}</div>
                          <div className="adm-cell-sub">{p.email}{p.phone && ` · ${p.phone}`}</div>
                          {p.subscription_until && <div className="adm-cell-sub">{fill(t.plPaidUntil, { date: day(p.subscription_until) })}</div>}
                        </td>
                        <td className="adm-nowrap">
                          <div>{p.plan_name}</div>
                          <div className="adm-cell-sub">৳{p.amount_bdt} · {(p.months === 1 ? t.plOneMonth : fill(t.plMonthsN, { n: p.months }))}</div>
                        </td>
                        <td className="adm-nowrap">
                          <div><span className={`bl-method bl-${p.method}`}>{METHOD_LABEL[p.method]}</span> <code className="bl-trx">{p.trx_id}</code></div>
                          <div className="adm-cell-sub">{fill(t.plFrom, { phone: p.sender_number })} · {date(p.created_at)}</div>
                        </td>
                        <td>
                          <span className={`bl-status-pill bl-${p.status}`}>{statusLabel[p.status]}</span>
                          {p.admin_note && <div className="adm-cell-sub">{p.admin_note}</div>}
                          {p.reviewed_at && <div className="adm-cell-sub">{p.reviewed_by_name ?? ''} {day(p.reviewed_at)}</div>}
                        </td>
                        <td className="col-actions">
                          {p.status === 'pending' && (
                            <div className="adm-row-actions">
                              <button type="button" className="adm-btn primary sm" onClick={() => { setFieldErrors({}); setReviewing({ payment: p, action: 'approve', note: '' }) }}>
                                <Icon name="check" size={14} />{t.plApprove}
                              </button>
                              <button type="button" className="adm-btn sm" onClick={() => { setFieldErrors({}); setReviewing({ payment: p, action: 'reject', note: '' }) }}>{t.plReject}</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <p className="adm-hint bl-hint">{t.plReviewHint}</p>
        </>
      )}

      {tab === 'plans' && (
        <div className="adm-table-card">
          {!plans ? <SkeletonRows /> : plans.length === 0 ? <EmptyState icon="inbox" text={t.plNoPlans} /> : (
            <div className="adm-table-scroll">
              <table className="adm-table">
                <thead>
                  <tr><th>{t.plPlan}</th><th>{t.plPrice}</th><th>{t.adminStatus}</th><th className="col-actions"><span className="sr-only">{t.adminActions}</span></th></tr>
                </thead>
                <tbody>
                  {plans.map(p => (
                    <tr key={p.id}>
                      <td>
                        <button type="button" className="adm-cell-title adm-cell-link" onClick={() => openPlan(p)}>
                          {p.is_featured && <span className="an-pin" title={t.plFeatured}><Icon name="pin" size={13} /></span>}{p.name_en}
                        </button>
                        {p.features_en.length > 0 && <div className="adm-cell-sub">{p.features_en.join(' · ')}</div>}
                      </td>
                      <td className="adm-nowrap">৳{p.price_bdt} / {(p.months === 1 ? t.plOneMonth : fill(t.plMonthsN, { n: p.months }))}</td>
                      <td><span className={`adm-pill ${p.is_active ? 'is-on' : 'is-off'}`}><i />{p.is_active ? t.plOnSale : t.plHidden}</span></td>
                      <td className="col-actions">
                        <div className="adm-row-actions">
                          <IconButton icon="edit" label={t.adminEdit} onClick={() => openPlan(p)} />
                          <IconButton icon="trash" label={t.adminDelete} tone="danger" onClick={() => removePlan(p)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? t.plEditPlan : t.plNewPlan} size="lg">
        {f && editing && (
          <div className="an-form">
            <div className="form-grid">
              <label>{t.plNameEn}<input value={f.name_en} maxLength={100} onChange={e => setPlan('name_en', e.target.value)} aria-invalid={!!fieldErrors.name_en} placeholder="3 months – full access" />{err('name_en')}</label>
              <label>{t.plNameBn}<input value={f.name_bn ?? ''} maxLength={100} onChange={e => setPlan('name_bn', e.target.value.trim() ? e.target.value : null)} />{err('name_bn')}</label>
              <label>{t.plMonths}<input type="number" min={1} max={36} value={f.months} onChange={e => setPlan('months', Number(e.target.value))} aria-invalid={!!fieldErrors.months} />{err('months')}</label>
              <label>{t.plPriceBdt}<input type="number" min={0} step={10} value={f.price_bdt} onChange={e => setPlan('price_bdt', Number(e.target.value))} aria-invalid={!!fieldErrors.price_bdt} />{err('price_bdt')}</label>
              <label>{t.plDescEn}<textarea rows={2} maxLength={1000} value={f.description_en ?? ''} onChange={e => setPlan('description_en', e.target.value.trim() ? e.target.value : null)} /></label>
              <label>{t.plDescBn}<textarea rows={2} maxLength={1000} value={f.description_bn ?? ''} onChange={e => setPlan('description_bn', e.target.value.trim() ? e.target.value : null)} /></label>
              <label>{t.plFeaturesEn}<textarea rows={4} value={editing.featuresEn} onChange={e => setEditing(x => (x ? { ...x, featuresEn: e.target.value } : x))} placeholder={'All mock & model tests\nQuestion bank & practice'} /><small className="adm-hint">{t.plFeaturesHint}</small></label>
              <label>{t.plFeaturesBn}<textarea rows={4} value={editing.featuresBn} onChange={e => setEditing(x => (x ? { ...x, featuresBn: e.target.value } : x))} /></label>
              <label>{t.plSort}<input type="number" value={f.sort_order} onChange={e => setPlan('sort_order', Number(e.target.value) || 0)} /></label>
              <span />
              <label className="rte-check"><input type="checkbox" checked={f.is_featured} onChange={e => setPlan('is_featured', e.target.checked)} /> {t.plFeatured}</label>
              <label className="rte-check"><input type="checkbox" checked={f.is_active} onChange={e => setPlan('is_active', e.target.checked)} /> {t.plOnSale}</label>
            </div>
            <div className="form-actions">
              <button className="adm-btn" onClick={() => setEditing(null)}>{t.adminCancel}</button>
              <button className="adm-btn primary" onClick={savePlan} disabled={busy}>{busy ? '…' : editing.id ? t.adminSave : t.adminCreate}</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={!!reviewing} onClose={() => setReviewing(null)} title={reviewing?.action === 'approve' ? t.plApproveTitle : t.plRejectTitle}>
        {reviewing && (
          <div className="an-form">
            <dl className="bl-review">
              <dt>{t.plCandidate}</dt><dd>{reviewing.payment.full_name} ({reviewing.payment.email})</dd>
              <dt>{t.plPlan}</dt><dd>{reviewing.payment.plan_name} · ৳{reviewing.payment.amount_bdt}</dd>
              <dt>{t.plTransaction}</dt><dd>{METHOD_LABEL[reviewing.payment.method]} <code className="bl-trx">{reviewing.payment.trx_id}</code> · {reviewing.payment.sender_number}</dd>
            </dl>
            <p className="adm-hint">{reviewing.action === 'approve' ? fill(t.plApproveHint, { n: reviewing.payment.months }) : t.plRejectHint}</p>
            <label className="bl-note">{reviewing.action === 'approve' ? t.plNoteOptional : t.plNoteRequired}
              <textarea rows={2} maxLength={500} value={reviewing.note} onChange={e => setReviewing(r => (r ? { ...r, note: e.target.value } : r))} aria-invalid={!!fieldErrors.note} />
              {err('note')}
            </label>
            <div className="form-actions">
              <button className="adm-btn" onClick={() => setReviewing(null)}>{t.adminCancel}</button>
              <button className={`adm-btn ${reviewing.action === 'approve' ? 'primary' : 'danger'}`} onClick={review} disabled={busy}>
                {busy ? '…' : reviewing.action === 'approve' ? t.plApprove : t.plReject}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
