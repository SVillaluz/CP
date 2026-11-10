import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import LoginSkeleton from './LoginSkeleton.jsx'

export const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoginSkeleton />}>
      <App />
    </Suspense>
  </StrictMode>,
)
