import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// After App so its rules come after the component stylesheets (portal.css, candidate.css) in the bundle.
import './motion.css'
import './colors.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
