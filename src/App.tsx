import { Suspense, lazy, useEffect, useState, type ReactNode } from 'react'
import { AppProvider, useApp } from './context/AppContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { CandidateAuthProvider, useCandidateAuth } from './candidate/CandidateAuthContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Dashboard from './components/portal/Dashboard'
import NotesLibrary from './components/portal/NotesLibrary'
import CandidateLogin from './candidate/CandidateLogin'
import CandidateSignup from './candidate/CandidateSignup'
import ExamsPage from './exam/ExamsPage'
import ExamInstructions from './exam/ExamInstructions'
import ExamSession from './exam/ExamSession'
import ExamResult from './exam/ExamResult'
import { useRoute, navigate, type ExamRoute, type PublicView as View } from './router'
import './index.css'

// The admin panel (and its rich-text editor) loads only when an admin opens it, not for every reader.
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'))

function PublicView({ view, exam }: { view: View; exam?: ExamRoute }) {
  const state = useApp()
  const examPage = exam?.page

  // Switching pages (dashboard, libraries, reader, exam screens) starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view, examPage, exam?.id])

  return (
    <div className={`app-bg ${state.theme}`}>
      <Navbar onAdminClick={() => navigate('admin')} />
      {/* A test in progress gets the whole width: no side menu to wander off into. */}
      {examPage !== 'attempt' && <Sidebar view={view} exam={exam} />}
      {view === 'dashboard' && <Dashboard />}
      {(view === 'notes' || view === 'pyq') && <NotesLibrary key={view} kind={view} />}
      {view === 'lesson' && <MainContent />}
      {view === 'exams' && exam && <ExamView exam={exam} />}
    </div>
  )
}

function ExamView({ exam }: { exam: ExamRoute }) {
  if (exam.page === 'test' && exam.id) return <ExamInstructions key={exam.id} id={exam.id} />
  if (exam.page === 'attempt' && exam.id) return <ExamSession key={exam.id} id={exam.id} />
  if ((exam.page === 'result' || exam.page === 'review') && exam.id) return <ExamResult key={exam.id} id={exam.id} review={exam.page === 'review'} />
  return <ExamsPage tab={exam.tab} lesson={exam.lesson} />
}

function AdminRoute() {
  const auth = useAuth()

  useEffect(() => {
    if (!auth.isAuthenticated) navigate('login?next=admin', { replace: true })
  }, [auth.isAuthenticated])
  if (!auth.isAuthenticated) return null

  return (
    <Suspense fallback={null}>
      <AdminDashboard onBack={() => navigate('')} />
    </Suspense>
  )
}

/** The old admin sign-in URL (`#/admin/login`) now opens the one sign-in page, heading for the admin panel. */
function LoginRoute() {
  useEffect(() => {
    navigate('login?next=admin', { replace: true })
  }, [])
  return null
}

/** Who is reading: a candidate, or an admin previewing the portal. Null when signed out. */
function useReaderId(): string | null {
  const candidate = useCandidateAuth()
  const admin = useAuth()
  if (candidate.token) return `c:${candidate.candidate?.id ?? candidate.token.slice(-16)}`
  if (admin.isAuthenticated) return `a:${admin.user?.id ?? 'admin'}`
  return null
}

/** Remounts the content store when the reader changes, so a new sign-in loads fresh and a sign-out drops it. */
function ReaderAppProvider({ children }: { children: ReactNode }) {
  const readerId = useReaderId()
  return <AppProvider key={readerId ?? 'signed-out'} enabled={readerId !== null}>{children}</AppProvider>
}

/** Study Hub is for signed-in readers: anyone else goes to the login screen and comes back afterwards. */
function SignInRequired({ children }: { children: ReactNode }) {
  const readerId = useReaderId()
  // The page asked for, captured on first render: by the time the effect re-runs (React dev mode runs
  // it twice) the hash already points at the login screen.
  const [requested] = useState(() => window.location.hash.replace(/^#\//, '').split('?')[0])
  useEffect(() => {
    if (readerId) return
    navigate(requested ? `login?next=${encodeURIComponent(requested)}` : 'login', { replace: true })
  }, [readerId, requested])
  return readerId ? <>{children}</> : null
}

function AppShell() {
  const route = useRoute()

  return (
    <AuthProvider>
      <CandidateAuthProvider>
        <ReaderAppProvider>
          {route.type === 'public' && (
            <SignInRequired>
              <PublicView view={route.view ?? 'dashboard'} exam={route.exam} />
            </SignInRequired>
          )}
          {route.type === 'admin' && <AdminRoute />}
          {route.type === 'login' && <LoginRoute />}
          {route.type === 'candidate-login' && <CandidateLogin next={route.next} />}
          {route.type === 'candidate-signup' && <CandidateSignup next={route.next} />}
        </ReaderAppProvider>
      </CandidateAuthProvider>
    </AuthProvider>
  )
}

export default AppShell
