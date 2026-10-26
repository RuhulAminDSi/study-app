import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { navigate } from '../router'
import { errorText } from './adminErrors'
import { examsApi, type AdminTest, type ReadinessProblem } from './examsApi'
import { KIND_KEYS, marks, notReadyProblems } from './examLabels'
import { ExamPreviewModal, NotReadyModal } from './ExamDialogs'
import { EmptyState, Icon, IconButton, SearchBox, SkeletonRows } from './ui'
import { fill, useFeedback } from './feedback'
import './admin-exams.css'

type StatusFilter = '' | 'draft' | 'published' | 'archived' | 'all'
interface NotReady { test: AdminTest; problems: ReadinessProblem[]; sectionIds: string[]; questionIds: string[] }

const STATUS_KEYS = { draft: 'axStatusDraft', published: 'axStatusPublished', archived: 'axStatusArchived' } as const

/** Admin → Exams: every practice set, mock test and model test, with publishing and archiving. */
export default function AdminExams({ language }: { language: Language }) {
  const t = translations[language]
  const { toast, confirm } = useFeedback()
  const [q, setQ] = useState('')
  const [kind, setKind] = useState('')
  const [status, setStatus] = useState<StatusFilter>('')
  const [tests, setTests] = useState<AdminTest[] | null>(null)
  const [everything, setEverything] = useState<AdminTest[]>([])
  const [failed, setFailed] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [preview, setPreview] = useState<AdminTest | null>(null)
  const [notReady, setNotReady] = useState<NotReady | null>(null)
  const [busy, setBusy] = useState<string | null>(null)

  const reload = () => setReloadKey(k => k + 1)
  const load = useCallback(() => {
    Promise.all([examsApi.list({ q, kind, status: status || undefined }), examsApi.list({ status: 'all' })])
      .then(([list, all]) => { setTests(list); setEverything(all); setFailed(false) })
      .catch(e => { setFailed(true); toast(errorText(t, e), 'error') })
  }, [q, kind, status, t, toast])

  useEffect(() => {
    const timer = setTimeout(load, q ? 300 : 0) // debounce typing in the search box
    return () => clearTimeout(timer)
  }, [load, reloadKey, q])

  const title = (x: AdminTest) => (language === 'bn' && x.title_bn) || x.title_en

  async function run(x: AdminTest, action: () => Promise<unknown>, done: string) {
    setBusy(x.id)
    try { await action(); toast(done); reload() }
    catch (e) {
      const problems = notReadyProblems(e)
      if (problems) {
        // The list has no section or question order, so fetch the test to number the problems.
        const detail = await examsApi.get(x.id).catch(() => null)
        setNotReady({ test: x, problems, sectionIds: detail?.sections.map(s => s.id) ?? [], questionIds: detail?.questions.map(qq => qq.id) ?? [] })
      } else toast(errorText(t, e), 'error')
    } finally { setBusy(null) }
  }

  async function togglePublish(x: AdminTest) {
    if (x.is_published) {
      if (!await confirm({ title: t.axConfirmUnpublishTitle, body: fill(t.axConfirmUnpublish, { title: title(x) }), confirmLabel: t.adminUnpub, danger: true })) return
      return run(x, () => examsApi.publish(x.id, false), t.axUnpublishedToast)
    }
    return run(x, () => examsApi.publish(x.id, true), t.axPublishedToast)
  }

  async function toggleArchive(x: AdminTest) {
    if (x.is_archived) return run(x, () => examsApi.archive(x.id, false), t.axRestoredToast)
    if (!await confirm({ title: t.axConfirmArchiveTitle, body: fill(t.axConfirmArchive, { title: title(x) }), confirmLabel: t.axArchive, danger: true })) return
    return run(x, () => examsApi.archive(x.id, true), t.axArchivedToast)
  }

  async function remove(x: AdminTest) {
    if (!await confirm({ title: t.axConfirmDeleteTitle, body: fill(t.axConfirmDelete, { title: title(x) }), confirmLabel: t.adminDelete, danger: true })) return
    return run(x, () => examsApi.delete(x.id), t.axDeletedToast)
  }

  const count = (s: AdminTest['status']) => everything.filter(x => x.status === s).length
  const kpis = [
    { label: t.axKpiPublished, value: count('published'), tone: 'good' },
    { label: t.axKpiDrafts, value: count('draft'), tone: 'warn' },
    { label: t.axKpiArchived, value: count('archived') },
    { label: t.axKpiAttempts, value: everything.reduce((n, x) => n + x.attempt_count, 0) },
  ]

  return (
    <div className="adm-screen ax-screen">
      <div className="adm-kpis">
        {kpis.map(k => (
          <div key={k.label} className="adm-kpi static">
            <span className="adm-kpi-label">{k.label}</span>
            <div className={`adm-kpi-value${k.tone ? ` tone-${k.tone}` : ''}`}>{tests ? k.value : '–'}</div>
          </div>
        ))}
      </div>

      <div className="adm-toolbar">
        <SearchBox value={q} onChange={setQ} placeholder={t.axSearch} />
        <select className="adm-select" aria-label={t.axColKind} value={kind} onChange={e => setKind(e.target.value)}>
          <option value="">{t.axAllKinds}</option>
          <option value="quiz">{t.axKindQuiz}</option>
          <option value="mock">{t.axKindMock}</option>
          <option value="model">{t.axKindModel}</option>
        </select>
        <select className="adm-select" aria-label={t.axColStatus} value={status} onChange={e => setStatus(e.target.value as StatusFilter)}>
          <option value="">{t.axAllStatuses}</option>
          <option value="draft">{t.axStatusDraft}</option>
          <option value="published">{t.axStatusPublished}</option>
          <option value="archived">{t.axStatusArchived}</option>
          <option value="all">{t.axStatusAll}</option>
        </select>
        <div className="adm-toolbar-end">
          <button type="button" className="adm-btn primary" onClick={() => navigate('admin/exams/new')}>
            <Icon name="plus" size={15} />{t.axNew}
          </button>
        </div>
      </div>

      <div className="adm-table-card">
        {!tests && !failed ? <SkeletonRows /> : (
          <div className="adm-table-scroll">
            <table className="adm-table ax-table">
              <thead>
                <tr>
                  <th>{t.axColTest}</th>
                  <th>{t.axColKind}</th>
                  <th className="col-num">{t.axColQuestions}</th>
                  <th className="col-num">{t.axColMarks}</th>
                  <th className="col-num">{t.axColDuration}</th>
                  <th className="col-num">{t.axColNegative}</th>
                  <th className="col-num">{t.axColAttempts}</th>
                  <th>{t.axColStatus}</th>
                  <th className="col-actions"><span className="sr-only">{t.adminActions}</span></th>
                </tr>
              </thead>
              <tbody>
                {tests?.map(x => (
                  <tr key={x.id}>
                    <td className="ax-title-cell">
                      <button type="button" className="adm-cell-title adm-cell-link" onClick={() => navigate(`admin/exams/${x.id}`)}>{x.title_en}</button>
                      {x.title_bn && <div className="adm-cell-sub">{x.title_bn}</div>}
                    </td>
                    <td>
                      <span className={`adm-kind ax-kind-${x.kind}`}>{t[KIND_KEYS[x.kind]]}</span>
                      <div className="adm-cell-sub adm-nowrap">{x.mode === 'fixed' ? t.axModeFixed : t.axModeRandom}</div>
                    </td>
                    <td className="col-num adm-tabular">{x.question_count}</td>
                    <td className="col-num adm-tabular">{marks(x.total_marks)}</td>
                    <td className="col-num adm-nowrap">{fill(t.axMinutes, { n: x.duration_minutes })}</td>
                    <td className="col-num adm-tabular">{(x.negative_marks ?? [x.negative_mark]).map(marks).join(' / ')}</td>
                    <td className="col-num adm-tabular">{x.attempt_count}</td>
                    <td>
                      <span className={`adm-pill ${x.status === 'published' ? 'is-on' : 'is-off'}${x.status === 'archived' ? ' ax-archived' : ''}`}>
                        <i />{t[STATUS_KEYS[x.status]]}
                      </span>
                    </td>
                    <td className="col-actions">
                      <div className="adm-row-actions">
                        <IconButton icon="edit" label={t.adminEdit} onClick={() => navigate(`admin/exams/${x.id}`)} />
                        <IconButton icon="eye" label={t.axPreview} onClick={() => setPreview(x)} />
                        {!x.is_archived && (
                          <button type="button" className="adm-btn sm" disabled={busy === x.id} onClick={() => togglePublish(x)}>
                            {x.is_published ? t.adminUnpub : t.adminPub}
                          </button>
                        )}
                        <IconButton icon="copy" label={t.axDuplicate} disabled={busy === x.id}
                          onClick={() => run(x, () => examsApi.duplicate(x.id), t.axDuplicated)} />
                        <IconButton icon={x.is_archived ? 'undo' : 'inbox'} label={x.is_archived ? t.axRestore : t.axArchive}
                          disabled={busy === x.id} onClick={() => toggleArchive(x)} />
                        {x.attempt_count === 0 && (
                          <IconButton icon="trash" label={t.adminDelete} tone="danger" disabled={busy === x.id} onClick={() => remove(x)} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tests && tests.length === 0 && <EmptyState icon="exams" text={t.axNone} />}
        {failed && <EmptyState icon="alert" text={t.genericServerError} />}
      </div>

      {preview && (
        <ExamPreviewModal testId={preview.id} title={title(preview)} random={preview.mode === 'random'} language={language} onClose={() => setPreview(null)} />
      )}
      {notReady && (
        <NotReadyModal problems={notReady.problems} sectionIds={notReady.sectionIds} questionIds={notReady.questionIds} language={language}
          onClose={() => setNotReady(null)} onEdit={() => navigate(`admin/exams/${notReady.test.id}`)} />
      )}
    </div>
  )
}
