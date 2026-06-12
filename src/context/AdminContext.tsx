import { createContext, useContext, useState, type ReactNode } from 'react'

interface AdminState {
  view: 'dashboard' | 'chapters' | 'lessons' | 'content' | 'files'
}

interface AdminContextValue {
  state: AdminState
  setView: (view: AdminState['view']) => void
}

const AdminContext = createContext<AdminContextValue | null>(null)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AdminState>({ view: 'dashboard' })

  const setView = (view: AdminState['view']) => setState({ view })

  return (
    <AdminContext.Provider value={{ state, setView }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}
