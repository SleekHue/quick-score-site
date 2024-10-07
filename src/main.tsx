import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <>
      <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <Navbar/>
      <App />
    </div>
  </>
)
