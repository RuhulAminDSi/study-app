import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useApp } from '../context/AppContext'
import { translations } from '../data/translations'
import { navigate } from '../router'

const API_BASE = '/api'

interface LoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: LoginProps) {
  const auth = useAuth()
  const appState = useApp()
  const t = translations[appState.language]
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || t.adminLoginFailed)
        return
      }

      auth.login(data.token, data.user)
      onLogin()
      navigate('admin')
    } catch {
      setError(t.adminServerError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-main)',
      padding: '1rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: 'clamp(1.5rem, 5vw, 2.5rem)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          color: 'var(--accent)',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}>
          {t.adminLoginTitle}
        </h1>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-dim)',
          fontSize: '0.85rem',
          marginBottom: '2rem',
        }}>
          {t.adminLoginDesc}
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
              <label style={{
              display: 'block',
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              marginBottom: '0.4rem',
              fontWeight: 500,
            }}>
              {t.adminUsername}
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
              placeholder={t.adminUsername}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
              display: 'block',
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              marginBottom: '0.4rem',
              fontWeight: 500,
            }}>
              {t.adminPassword}
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
              placeholder={t.adminPassword}
              required
            />
          </div>

          {error && (
            <div style={{
              padding: '0.75rem',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '8px',
              color: '#ef4444',
              fontSize: '0.8rem',
              marginBottom: '1rem',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: loading ? 'var(--text-dim)' : 'var(--accent)',
              color: '#0d0d0d',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {loading ? t.adminSigningIn : t.adminSignIn}
          </button>
        </form>

        <div style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
        }}>
          <span
            style={{ color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => { navigate(''); window.location.reload() }}
          >
            {t.adminBack}
          </span>
        </div>
      </div>
    </div>
  )
}
