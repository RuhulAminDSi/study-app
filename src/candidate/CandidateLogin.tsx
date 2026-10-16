import { useEffect, useState, type FormEvent } from 'react'
import { useApp } from '../context/AppContext'
import { useAuth } from '../context/AuthContext'
import { translations } from '../data/translations'
import { navigate } from '../router'
import { ApiError, candidateApi } from './candidateApi'
import { useCandidateAuth } from './CandidateAuthContext'
import { errorText } from './errors'
import Field from './Field'
import './candidate.css'

const wantsAdmin = (next?: string) => next === 'admin' || !!next?.startsWith('admin/')

/** Where to go after signing in: admins to the admin panel, candidates to Study Hub (never the admin panel). */
function destination(kind: 'candidate' | 'admin', next?: string): string {
  if (kind === 'admin') return wantsAdmin(next) ? next! : 'admin'
  return next && !wantsAdmin(next) ? next : ''
}

/**
 * The one sign-in page for everybody (`#/login`, also reached from `#/admin/login`): candidates sign in
 * with their email, admins with their username or email. The server says which kind of account it was.
 */
export default function CandidateLogin({ next }: { next?: string }) {
  const { language } = useApp()
  const t = translations[language]
  const candidateAuth = useCandidateAuth()
  const adminAuth = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  // Already signed in (e.g. a bookmarked login link): go straight on. A candidate heading for the admin
  // panel stays here instead, so they can sign in with an admin account.
  useEffect(() => {
    if (wantsAdmin(next)) {
      if (adminAuth.isAuthenticated) navigate(destination('admin', next))
    } else if (candidateAuth.isSignedIn) {
      navigate(destination('candidate', next))
    }
  }, [candidateAuth.isSignedIn, adminAuth.isAuthenticated, next])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setFieldErrors({})
    setSubmitting(true)
    try {
      const res = await candidateApi.signIn(identifier, password)
      if (res.kind === 'admin') {
        adminAuth.login(res.token, res.user)
        navigate(destination('admin', next))
      } else {
        candidateAuth.signIn(res.token, res.candidate)
        navigate(destination('candidate', next))
      }
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
        <a className="cand-back" href="/">← {t.navHome}</a>
        <h1 className="cand-auth-title">{t.candidateLoginTitle}</h1>
        <p className="cand-auth-desc">{t.candidateLoginDesc}</p>
        {error && <div className="cand-form-error" role="alert">{error}</div>}
        <Field id="cand-login-identifier" label={t.emailOrUsername} type="text" autoComplete="username" autoFocus
          autoCapitalize="none" spellCheck={false} value={identifier}
          onChange={e => setIdentifier(e.target.value)} error={fieldError('identifier')} />
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
