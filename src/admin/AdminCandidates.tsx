import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { AdminApiError } from './api'
import { adminErrorText, errorText } from './adminErrors'
import { candidatesApi, type AdminCandidate, type CandidateList, type CandidateListParams, type CandidateStats, type JobPostOption } from './candidatesApi'
import Modal from './Modal'
import { EmptyState, Pager, SearchBox } from './ui'
import { fill, useFeedback } from './feedback'

const PAGE_SIZE = 25

function formatDate(value: string | null, language: Language, withTime = false): string | null {
  if (!value) return null
  return new Date(value).toLocaleString(language === 'bn' ? 'bn-BD' : 'en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  })
}

const initials = (name: string) => name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()


/** Admin → Candidates: who has signed up, with search, status, editing, password reset and removal. */
export default function AdminCandidates({ language }: { language: Language }) {
  const t = translations[language]
  const [stats, setStats] = useState<CandidateStats | null>(null)
  const [filters, setFilters] = useState<Required<Pick<CandidateListParams, 'q' | 'status' | 'sort'>>>({ q: '', status: '', sort: 'created' })
  const [page, setPage] = useState(1)
  const [data, setData] = useState<CandidateList | null>(null)
  const [posts, setPosts] = useState<JobPostOption[]>([])
  const [openId, setOpenId] = useState<string | null>(null)
  const { toast, confirm } = useFeedback()
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => { candidatesApi.jobPosts().then(setPosts).catch(() => {}) }, [])

  const load = useCallback(() => {
    Promise.all([candidatesApi.list({ ...filters, page, pageSize: PAGE_SIZE }), candidatesApi.stats()])
      .then(([list, s]) => {
        // Deleting the last row of the last page: step back to a page that has rows.
        if (list.items.length === 0 && list.total > 0 && page > 1) { setPage(Math.ceil(list.total / PAGE_SIZE)); return }
        setData(list); setStats(s)
      })
      .catch(e => toast(errorText(t, e), 'error'))
  }, [filters, page, t, toast])

  useEffect(() => {
    const timer = setTimeout(load, filters.q ? 300 : 0) // debounce typing in the search box
    return () => clearTimeout(timer)
  }, [load, reloadKey, filters.q])

  const setFilter = <K extends keyof typeof filters>(key: K, value: (typeof filters)[K]) => { setFilters(f => ({ ...f, [key]: value })); setPage(1) }
  const reload = () => setReloadKey(k => k + 1)

  async function toggleActive(c: AdminCandidate) {
    if (c.isActive && !await confirm({ title: t.candDeactivate, body: fill(t.candConfirmDeactivate, { name: c.fullName }), confirmLabel: t.candDeactivate, danger: true })) return
    try { await candidatesApi.update(c.id, { isActive: !c.isActive }); reload(); toast(t.candSaved) }
    catch (e) { toast(errorText(t, e), 'error') }
  }

  const statCards: { label: string; value: number | undefined; tone?: string }[] = [
    { label: t.candTotal, value: stats?.total },
    { label: t.candActive, value: stats?.active, tone: 'good' },
    { label: t.candInactive, value: stats?.inactive, tone: 'bad' },
    { label: t.candNew7, value: stats?.newLast7Days, tone: 'warn' },
    { label: t.candSignedIn7, value: stats?.activeLast7Days },
  ]

  return (
    <div className="adm-screen cm-screen">
      <div className="adm-kpis cm-stats">
        {statCards.map(s => (
          <div key={s.label} className="adm-kpi static">
            <span className="adm-kpi-label">{s.label}</span>
            <div className={`adm-kpi-value${s.tone ? ` tone-${s.tone}` : ''}`}>{s.value ?? '–'}</div>
          </div>
        ))}
      </div>

      <div className="adm-toolbar">
        <SearchBox value={filters.q} onChange={v => setFilter('q', v)} placeholder={t.candSearch} />
        <select className="adm-select" aria-label={t.candStatus} value={filters.status} onChange={e => setFilter('status', e.target.value as typeof filters.status)}>
          <option value="">{t.candAllStatuses}</option>
          <option value="active">{t.candActive}</option>
          <option value="inactive">{t.candInactive}</option>
        </select>
        <select className="adm-select" aria-label="Sort" value={filters.sort} onChange={e => setFilter('sort', e.target.value as typeof filters.sort)}>
          <option value="created">{t.candSortNewest}</option>
          <option value="last_login">{t.candSortLastLogin}</option>
          <option value="name">{t.candSortName}</option>
        </select>
      </div>

      <div className="adm-table-card">
        <div className="adm-table-scroll">
          <table className="adm-table cm-table">
            <thead>
              <tr>
                <th>{t.candName}</th>
                <th>{t.candPhone}</th>
                <th>{t.candTargetPost}</th>
                <th>{t.candJoined}</th>
                <th>{t.candLastLogin}</th>
                <th>{t.candStatus}</th>
                <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
              </tr>
            </thead>
            <tbody>
              {data?.items.map(c => (
                <tr key={c.id}>
                  <td className="cm-person">
                    <div className="cm-person-row">
                      <span className="adm-avatar sm" aria-hidden="true">{initials(c.fullName)}</span>
                      <div>
                        <button type="button" className="adm-cell-title adm-cell-link" onClick={() => setOpenId(c.id)}>{c.fullName}</button>
                        <div className="adm-cell-sub">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="adm-tabular">{c.phone ?? <span className="cm-dim">—</span>}</td>
                  <td>{c.targetPostTitle ?? <span className="cm-dim">{t.candNoPost}</span>}</td>
                  <td className="adm-nowrap">{formatDate(c.createdAt, language)}</td>
                  <td className="adm-nowrap">{formatDate(c.lastLogin, language, true) ?? <span className="cm-dim">{t.candNever}</span>}</td>
                  <td><span className={`adm-pill ${c.isActive ? 'is-on' : 'is-off'}`}><i />{c.isActive ? t.candActive : t.candInactive}</span></td>
                  <td className="col-actions">
                    <div className="adm-row-actions">
                      <button className="adm-btn sm" onClick={() => setOpenId(c.id)}>{t.adminEdit}</button>
                      <button className={`adm-btn sm${c.isActive ? ' ghost-danger' : ''}`} onClick={() => toggleActive(c)}>
                        {c.isActive ? t.candDeactivate : t.candActivate}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data && data.items.length === 0 && <EmptyState icon="candidates" text={t.candNone} />}
        {data && <Pager page={page - 1} pageSize={PAGE_SIZE} total={data.total} onPage={p => setPage(p + 1)} t={t} />}
      </div>

      {openId && (
        <CandidateDetail id={openId} language={language} posts={posts}
          onClose={changed => { setOpenId(null); if (changed) reload() }} />
      )}
    </div>
  )
}

type Draft = { fullName: string; email: string; phone: string; targetPostId: string; preferredLanguage: 'bn' | 'en'; isActive: boolean }
const toDraft = (c: AdminCandidate): Draft => ({
  fullName: c.fullName, email: c.email, phone: c.phone ?? '', targetPostId: c.targetPostId ?? '', preferredLanguage: c.preferredLanguage, isActive: c.isActive,
})

function CandidateDetail({ id, language, posts, onClose }: {
  id: string; language: Language; posts: JobPostOption[]; onClose: (changed: boolean) => void
}) {
  const t = translations[language]
  const { confirm } = useFeedback()
  const [candidate, setCandidate] = useState<AdminCandidate | null>(null)
  const [draft, setDraft] = useState<Draft | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    candidatesApi.get(id).then(c => { setCandidate(c); setDraft(toDraft(c)) }).catch(e => setError(errorText(t, e)))
  }, [id, t])

  const close = () => onClose(changed)
  const fieldError = (name: string) => (fieldErrors[name] ? adminErrorText(t, fieldErrors[name], fieldErrors[name]) : null)
  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft(d => (d ? { ...d, [key]: value } : d))

  async function run(action: () => Promise<void>) {
    setBusy(true); setError(''); setNotice(''); setFieldErrors({})
    try { await action() }
    catch (e) {
      if (e instanceof AdminApiError) setFieldErrors(e.fields)
      setError(errorText(t, e))
    } finally { setBusy(false) }
  }

  const save = () => run(async () => {
    if (!candidate || !draft) return
    if (candidate.isActive && !draft.isActive && !await confirm({ title: t.candDeactivate, body: fill(t.candConfirmDeactivate, { name: candidate.fullName }), confirmLabel: t.candDeactivate, danger: true })) return
    const updated = await candidatesApi.update(id, {
      fullName: draft.fullName, email: draft.email, phone: draft.phone.trim() || null,
      targetPostId: draft.targetPostId || null, preferredLanguage: draft.preferredLanguage, isActive: draft.isActive,
    })
    setCandidate(updated); setDraft(toDraft(updated)); setChanged(true); setNotice(t.candSaved)
  })

  const resetPassword = () => run(async () => {
    await candidatesApi.setPassword(id, password)
    setPassword(''); setNotice(t.candPasswordUpdated)
  })

  const remove = () => run(async () => {
    if (!candidate || !await confirm({ title: t.candDelete, body: fill(t.candConfirmDelete, { name: candidate.fullName }), confirmLabel: t.candDelete, danger: true })) return
    await candidatesApi.delete(id)
    onClose(true)
  })

  return (
    <Modal open onClose={close} title={t.candDetails} wide>
      {!candidate || !draft ? (
        error ? <div className="cm-alert bad" role="alert">{error}</div> : <div className="admin-loading">{t.adminLoading}</div>
      ) : (
        <div className="cm-detail">
          <div className="cm-summary">
            <span className="adm-avatar lg" aria-hidden="true">{initials(candidate.fullName)}</span>
            <div>
              <strong>{candidate.fullName}</strong>
              <span>{candidate.email}</span>
            </div>
            <span className={`adm-pill ${candidate.isActive ? 'is-on' : 'is-off'}`}><i />{candidate.isActive ? t.candActive : t.candInactive}</span>
          </div>
          <dl className="cm-facts">
            <div><dt>{t.candJoined}</dt><dd>{formatDate(candidate.createdAt, language, true)}</dd></div>
            <div><dt>{t.candLastLogin}</dt><dd>{formatDate(candidate.lastLogin, language, true) ?? t.candNever}</dd></div>
            <div><dt>{t.candAttempts}</dt><dd>{candidate.attemptCount}</dd></div>
          </dl>

          {error && <div className="cm-alert bad" role="alert">{error}</div>}
          {notice && <div className="cm-alert good" role="status">{notice}</div>}

          <div className="form-grid">
            <label>{t.candName}
              <input value={draft.fullName} onChange={e => set('fullName', e.target.value)} aria-invalid={!!fieldErrors.fullName} />
              {fieldError('fullName') && <small className="cm-field-error">{fieldError('fullName')}</small>}
            </label>
            <label>{t.candEmail}
              <input type="email" value={draft.email} onChange={e => set('email', e.target.value)} aria-invalid={!!fieldErrors.email} />
              {fieldError('email') && <small className="cm-field-error">{fieldError('email')}</small>}
            </label>
            <label>{t.candPhone}
              <input type="tel" value={draft.phone} placeholder="01XXXXXXXXX" onChange={e => set('phone', e.target.value)} aria-invalid={!!fieldErrors.phone} />
              {fieldError('phone') && <small className="cm-field-error">{fieldError('phone')}</small>}
            </label>
            <label>{t.candTargetPost}
              <select value={draft.targetPostId} onChange={e => set('targetPostId', e.target.value)}>
                <option value="">{t.candNoPost}</option>
                {posts.map(p => <option key={p.id} value={p.id}>{p.organization} — {(language === 'bn' && p.title_bn) || p.title_en}</option>)}
              </select>
              {fieldError('targetPostId') && <small className="cm-field-error">{fieldError('targetPostId')}</small>}
            </label>
            <label>{t.candLanguage}
              <select value={draft.preferredLanguage} onChange={e => set('preferredLanguage', e.target.value as 'bn' | 'en')}>
                <option value="en">{t.candLangEn}</option>
                <option value="bn">{t.candLangBn}</option>
              </select>
            </label>
            <label className="qe-publish cm-active">
              <input type="checkbox" checked={draft.isActive} onChange={e => set('isActive', e.target.checked)} /> {t.candAccountActive}
            </label>
          </div>
          <div className="form-actions">
            <button className="adm-btn" onClick={close}>{t.adminCancel}</button>
            <button className="adm-btn primary" onClick={save} disabled={busy}>{t.candSaveChanges}</button>
          </div>

          <h4 className="cm-h">{t.candAccountActions}</h4>
          <div className="cm-actions">
            <div className="cm-password">
              <label htmlFor="cm-new-password">{t.candResetPassword}</label>
              <div className="cm-row">
                <input id="cm-new-password" type="text" autoComplete="new-password" value={password} placeholder={t.candNewPassword}
                  onChange={e => setPassword(e.target.value)} aria-invalid={!!fieldErrors.password} />
                <button className="adm-btn" onClick={resetPassword} disabled={busy || !password}>{t.adminSave}</button>
              </div>
              {fieldError('password') && <small className="cm-field-error">{fieldError('password')}</small>}
            </div>
            <button className="adm-btn danger" onClick={remove} disabled={busy}>{t.candDelete}</button>
          </div>
        </div>
      )}
    </Modal>
  )
}
