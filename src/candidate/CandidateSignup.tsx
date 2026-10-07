import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate } from '../router'
import { ApiError, candidateApi } from './candidateApi'
import { useCandidateAuth } from './CandidateAuthContext'
import { errorText } from './errors'
import Field from './Field'
import './candidate.css'

type FormState = { fullName: string; email: string; phone: string; password: string; confirm: string }
const EMPTY: FormState = { fullName: '', email: '', phone: '', password: '', confirm: '' }

export default function CandidateSignup({ next }: { next?: string }) {
  const { language } = useApp()
  const t = translations[language]
  const auth = useCandidateAuth()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const update = (name: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [name]: e.target.value }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) {
      setFieldErrors({ confirm: 'passwords_mismatch' })
      return
    }
    setFieldErrors({})
    setSubmitting(true)
    try {
      const { token, candidate } = await candidateApi.register({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        phone: form.phone || undefined,
      })
      auth.signIn(token, candidate)
      navigate(next ?? '')
    } catch (err) {
      if (err instanceof ApiError) {
        setFieldErrors(err.fields)
        setError(errorText(t, err.code, err.message))
      } else {
        setError(t.genericServerError)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const fieldError = (name: string) => (fieldErrors[name] ? errorText(t, fieldErrors[name], fieldErrors[name]) : undefined)
  const loginHref = `#/login${next ? `?next=${encodeURIComponent(next)}` : ''}`

  return (
    <main className="cand-auth">
      <form className="cand-auth-card" onSubmit={handleSubmit} noValidate>
        <a className="cand-back" href="#/">{t.backToLessons}</a>
        <h1 className="cand-auth-title">{t.candidateSignupTitle}</h1>
        <p className="cand-auth-desc">{t.candidateSignupDesc}</p>
        {error && <div className="cand-form-error" role="alert">{error}</div>}
        <Field id="cand-signup-name" label={t.fullName} autoComplete="name" autoFocus value={form.fullName}
          onChange={update('fullName')} error={fieldError('fullName')} />
        <Field id="cand-signup-email" label={t.email} type="email" autoComplete="email" value={form.email}
          onChange={update('email')} error={fieldError('email')} />
        <Field id="cand-signup-phone" label={t.phoneOptional} type="tel" autoComplete="tel" inputMode="tel"
          placeholder="01712345678" value={form.phone} onChange={update('phone')} error={fieldError('phone')} />
        <Field id="cand-signup-password" label={t.password} type="password" autoComplete="new-password" value={form.password}
          onChange={update('password')} error={fieldError('password')} hint={t.passwordHint} reveal={{ show: t.showPassword, hide: t.hidePassword }} />
        <Field id="cand-signup-confirm" label={t.confirmPassword} type="password" autoComplete="new-password" value={form.confirm}
          onChange={update('confirm')} error={fieldError('confirm')} reveal={{ show: t.showPassword, hide: t.hidePassword }} />
        <button className="cand-submit" type="submit" disabled={submitting}>
          {submitting ? t.creatingAccount : t.createAccount}
        </button>
        <p className="cand-switch"><a href={loginHref}>{t.haveAccount}</a></p>
      </form>
    </main>
  )
}
