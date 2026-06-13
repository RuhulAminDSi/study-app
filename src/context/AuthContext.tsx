import { createContext, useContext, useState, type ReactNode } from 'react'

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
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'))
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

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
