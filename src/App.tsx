import { useEffect } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import { AdminProvider } from './context/AdminContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import AdminDashboard from './admin/AdminDashboard'
import AdminLogin from './admin/AdminLogin'
import { useRoute, navigate } from './router'
import './index.css'

function PublicView() {
  const state = useApp()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state.currentModule, state.currentLesson])

  return (
    <div className={`app-bg ${state.theme}`}>
      <Navbar onAdminClick={() => navigate('admin')} />
      <Sidebar />
      <MainContent />
    </div>
  )
}

function AdminRoute() {
  const auth = useAuth()

  if (!auth.isAuthenticated) {
    navigate('admin/login')
    return null
  }

  return (
    <AdminProvider>
      <AdminDashboard onBack={() => navigate('')} />
    </AdminProvider>
  )
}

function LoginRoute() {
  return (
    <AdminLogin onLogin={() => navigate('admin')} />
  )
}

function AppShell() {
  const route = useRoute()

  return (
    <AuthProvider>
      <AppProvider>
        {route === 'public' && <PublicView />}
        {route === 'admin' && <AdminRoute />}
        {route === 'login' && <LoginRoute />}
      </AppProvider>
    </AuthProvider>
  )
}

export default AppShell
