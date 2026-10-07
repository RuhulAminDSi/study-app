import { useState } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { examApi, type ImportReport } from './examApi'
import { adminErrorText } from './adminErrors'
import { AdminApiError } from './api'

const TEMPLATE_COLUMNS = [
  'subject_code', 'topic', 'type', 'difficulty', 'stem_en', 'stem_bn', 'code_snippet', 'code_language',
  'option_a_en', 'option_a_bn', 'option_b_en', 'option_b_bn', 'option_c_en', 'option_c_bn', 'option_d_en', 'option_d_bn',
  'option_e_en', 'option_e_bn', 'correct', 'explanation_en', 'explanation_bn', 'model_answer_en', 'model_answer_bn',
  'exam_org', 'exam_post', 'exam_year',
]
const TEMPLATE_EXAMPLE = [
  'NET', 'Transport Protocols', 'mcq', '1', 'Which port does HTTPS use by default?', 'HTTPS ডিফল্টভাবে কোন পোর্ট ব্যবহার করে?', '', '',
  '80', '80', '443', '443', '21', '21', '25', '25', '', '', 'B', 'HTTPS uses TCP port 443.', 'HTTPS TCP পোর্ট 443 ব্যবহার করে।', '', '',
  '', '', '',
]

function downloadTemplate() {
  const quote = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v)
  const csv = '\uFEFF' + [TEMPLATE_COLUMNS, TEMPLATE_EXAMPLE].map(r => r.map(quote).join(',')).join('\r\n') + '\r\n'
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'question-import-template.csv'
  a.click()
  URL.revokeObjectURL(url)
}

export default function AdminImport({ language }: { language: Language }) {
  const t = translations[language]
  const [file, setFile] = useState<{ name: string; format: 'csv' | 'json'; content: string } | null>(null)
  const [report, setReport] = useState<ImportReport | null>(null)
  const [busy, setBusy] = useState<'check' | 'import' | null>(null)
  const [error, setError] = useState('')
  const [done, setDone] = useState<number | null>(null)

  async function pick(f: File | undefined) {
    setReport(null); setDone(null); setError('')
    if (!f) { setFile(null); return }
    setFile({ name: f.name, format: f.name.toLowerCase().endsWith('.json') ? 'json' : 'csv', content: await f.text() })
  }

  async function run(dryRun: boolean) {
    if (!file) { setError(t.impNoFile); return }
    setBusy(dryRun ? 'check' : 'import'); setError('')
    try {
      const r = await examApi.importQuestions(file.format, file.content, dryRun)
      setReport(r)
      if (!dryRun) setDone(r.imported ?? 0)
    } catch (e) {
      setReport(null)
      setError(e instanceof AdminApiError ? adminErrorText(t, e.code, e.message) : String(e))
    } finally { setBusy(null) }
  }

  return (
    <div className="imp">
      <p className="imp-help">{t.impHelp}</p>
      <div className="imp-actions">
        <label className="admin-action-btn imp-file-label">
          {t.impChooseFile}
          <input id="imp-file" type="file" accept=".csv,.json,text/csv,application/json" onChange={e => pick(e.target.files?.[0])} />
        </label>
        <span className="imp-file-name">{file?.name ?? ''}</span>
        <button className="admin-action-btn primary" onClick={() => run(true)} disabled={!file || busy !== null}>{busy === 'check' ? t.impChecking : t.impCheck}</button>
        <button className="admin-action-btn" onClick={downloadTemplate}>{t.impTemplate}</button>
      </div>

      {error && <div className="admin-error q-banner" role="alert">{error}</div>}
      {done !== null && <div className="imp-done" role="status">{done} · {t.impDone}</div>}

      {report && (
        <>
          <div className="imp-stats">
            <div className="imp-stat"><strong>{report.total}</strong><span>{t.impTotal}</span></div>
            <div className="imp-stat good"><strong>{report.valid}</strong><span>{t.impReady}</span></div>
            <div className="imp-stat"><strong>{report.duplicates}</strong><span>{t.impDuplicates}</span></div>
            <div className={`imp-stat${new Set(report.problems.map(p => p.row)).size ? ' bad' : ''}`}><strong>{new Set(report.problems.map(p => p.row)).size}</strong><span>{t.impProblems}</span></div>
          </div>
          {report.problems.length > 0 && (
            <div className="admin-data-table-container">
              <table className="admin-data-table imp-problems">
                <thead><tr><th>{t.impRow}</th><th>{t.impField}</th><th>{t.impProblem}</th></tr></thead>
                <tbody>
                  {report.problems.map((p, i) => (
                    <tr key={i}><td className="td-num">{p.row}</td><td><code>{p.field}</code></td><td>{adminErrorText(t, p.code, p.code)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {done === null && report.valid > 0 && (
            <div className="form-actions">
              <button className="admin-action-btn primary" onClick={() => run(false)} disabled={busy !== null}>
                {busy === 'import' ? t.impImporting : `${t.impCommit} (${report.valid})`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
