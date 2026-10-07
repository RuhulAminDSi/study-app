import { AppProvider, useApp } from './context/AppContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { CandidateAuthProvider } from './candidate/CandidateAuthContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import AdminDashboard from './admin/AdminDashboard'
import AdminLogin from './admin/AdminLogin'
import CandidateLogin from './candidate/CandidateLogin'
import CandidateSignup from './candidate/CandidateSignup'
import { useRoute, navigate } from './router'
import './index.css'

function PublicView() {
  const state = useApp()

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
    <AdminDashboard onBack={() => navigate('')} />
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
      <CandidateAuthProvider>
        <AppProvider>
          {route.type === 'public' && <PublicView />}
          {route.type === 'admin' && <AdminRoute />}
          {route.type === 'login' && <LoginRoute />}
          {route.type === 'candidate-login' && <CandidateLogin next={route.next} />}
          {route.type === 'candidate-signup' && <CandidateSignup next={route.next} />}
        </AppProvider>
      </CandidateAuthProvider>
    </AuthProvider>
  )
}

export default AppShell
