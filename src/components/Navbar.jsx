import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Rocket } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Über uns' },
  { id: 'projects', label: 'Projekte' },
  { id: 'services', label: 'Leistungen' },
  { id: 'contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  const handleNav = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/50 dark:bg-slate-900/50 shadow-sm' : 'bg-transparent'}`} aria-label="Hauptnavigation">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1" aria-label="Zur Startsektion">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white shadow-[0_8px_20px_-6px_rgba(14,165,233,0.6)]">
            <Rocket size={16} />
          </span>
          <span className="font-semibold tracking-tight">Nova Studio</span>
        </button>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {sections.map((s) => (
            <button key={s.id} onClick={() => handleNav(s.id)} className="px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              {s.label}
            </button>
          ))}
          <button onClick={toggleTheme} className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Theme umschalten">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-900/10 dark:border-white/10 hover:bg-slate-900/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200" aria-label="Theme umschalten">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Menü umschalten">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-lg border border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleNav(s.id)} className="w-full text-left px-3 py-2 rounded-md text-slate-800 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
