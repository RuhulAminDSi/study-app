import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ADMIN_UNAUTHORIZED_EVENT } from '../admin/api'
import { readStoredToken } from '../utils/storedToken'

interface AuthUser {
  id: string
  username: string
  email: string
  role: string
}

interface AuthContextValue {
  token: string | null
  user: AuthUser | null
  isAuthenticated: boolean
  login: (token: string, user: AuthUser) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => readStoredToken('admin_token', 'admin_user'))
  const [user, setUser] = useState<AuthUser | null>(() => {
    const raw = localStorage.getItem('admin_user')
    return raw ? JSON.parse(raw) : null
  })

  const persistToken = (t: string | null) => {
    if (t) localStorage.setItem('admin_token', t)
    else localStorage.removeItem('admin_token')
  }
  const persistUser = (u: AuthUser | null) => {
    if (u) localStorage.setItem('admin_user', JSON.stringify(u))
    else localStorage.removeItem('admin_user')
  }

  const login = (newToken: string, newUser: AuthUser) => {
    persistToken(newToken)
    persistUser(newUser)
    setToken(newToken)
    setUser(newUser)
  }

  const logout = () => {
    persistToken(null)
    persistUser(null)
    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    const onUnauthorized = () => {
        localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_user')
      setToken(null)
      setUser(null)
    }
    window.addEventListener(ADMIN_UNAUTHORIZED_EVENT, onUnauthorized)
    return () => window.removeEventListener(ADMIN_UNAUTHORIZED_EVENT, onUnauthorized)
  }, [])

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() { // eslint-disable-line react-refresh/only-export-components
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
