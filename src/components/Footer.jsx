export default function Footer() {
  return (
    <footer className="relative py-10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Nova Studio — Crafted with care.</p>
        <nav aria-label="Footer Navigation" className="flex items-center gap-4">
          <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1">Twitter</a>
          <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1">Instagram</a>
          <a href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1">LinkedIn</a>
        </nav>
      </div>
    </footer>
  )
}
