import { useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate } from '../router'
import { ApiError, candidateApi } from './candidateApi'
import { useCandidateAuth } from './CandidateAuthContext'
import { errorText } from './errors'
import Field from './Field'
import './candidate.css'

export default function CandidateLogin({ next }: { next?: string }) {
  const { language } = useApp()
  const t = translations[language]
  const auth = useCandidateAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setFieldErrors({})
    setSubmitting(true)
    try {
      const { token, candidate } = await candidateApi.login(email, password)
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
  const signupHref = `#/signup${next ? `?next=${encodeURIComponent(next)}` : ''}`

  return (
    <main className="cand-auth">
      <form className="cand-auth-card" onSubmit={handleSubmit} noValidate>
        <a className="cand-back" href="#/">{t.backToLessons}</a>
        <h1 className="cand-auth-title">{t.candidateLoginTitle}</h1>
        <p className="cand-auth-desc">{t.candidateLoginDesc}</p>
        {error && <div className="cand-form-error" role="alert">{error}</div>}
        <Field id="cand-login-email" label={t.email} type="email" autoComplete="email" autoFocus value={email}
          onChange={e => setEmail(e.target.value)} error={fieldError('email')} />
        <Field id="cand-login-password" label={t.password} type="password" autoComplete="current-password" value={password}
          onChange={e => setPassword(e.target.value)} error={fieldError('password')} reveal={{ show: t.showPassword, hide: t.hidePassword }} />
        <button className="cand-submit" type="submit" disabled={submitting}>
          {submitting ? t.signingIn : t.signIn}
        </button>
        <p className="cand-switch"><a href={signupHref}>{t.noAccountYet}</a></p>
      </form>
    </main>
  )
}
