import { motion, useReducedMotion } from 'framer-motion'

const items = [
  { title: 'Holo Commerce', tag: 'E-Commerce · WebGL', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbe7?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Orbit App', tag: 'Mobile · UI', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Pulse Analytics', tag: 'Dashboard', img: 'https://images.unsplash.com/photo-1551286923-c83dedae0b48?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Spectra VR', tag: 'VR · 3D', img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop' },
]

export default function Projects() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Projekte</h2>
          <p className="text-slate-400 max-w-xl">Eine Auswahl unserer Arbeiten. Karten reagieren subtil in 3D auf den Cursor. Bei reduzierter Bewegung bleiben sie statisch.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <TiltCard key={idx} item={it} disabled={prefersReduced} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TiltCard({ item, disabled }) {
  const handleMove = (e) => {
    if (disabled) return
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xc = rect.width / 2
    const yc = rect.height / 2
    const dx = (x - xc) / xc
    const dy = (y - yc) / yc
    el.style.transform = `perspective(900px) rotateX(${(-dy * 6).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg) translateZ(0)`
  }
  const reset = (e) => {
    e.currentTarget.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)'
  }

  return (
    <motion.article
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true, amount:0.3}}
      transition={{duration:0.5}}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] will-change-transform">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold">{item.title}</h3>
          <p className="text-slate-400 text-sm">{item.tag}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.7)]" />
      </div>
    </motion.article>
  )
}
