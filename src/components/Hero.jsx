import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient + grid */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1000px_400px_at_50%_-10%,rgba(56,189,248,0.35),transparent),radial-gradient(600px_300px_at_80%_10%,rgba(232,121,249,0.25),transparent)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-24">
        <div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Kreative Erlebnisse in 3D. Futuristisch. Flüssig. Schnell.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.7}} className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl">
            Nova Studio gestaltet moderne Webauftritte mit räumlicher Tiefe, viel Weißraum und präzisen Micro Interactions – performant und barrierearm.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.35, duration:0.7}} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_10px_40px_-10px_rgba(13,148,136,0.7)] transition-transform group-hover:scale-[1.02]" aria-hidden="true"></span>
              <span className="relative">Projekte ansehen</span>
            </a>
            <a href="#contact" className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-cyan-300 ring-1 ring-cyan-300/40 hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Kontakt aufnehmen</a>
          </motion.div>

          <div className="mt-10 text-slate-400 text-sm">Scroll · Discover</div>
        </div>

        {/* Spline 3D scene */}
        <div className="relative h-[420px] sm:h-[540px] lg:h-[640px] xl:h-[720px] rounded-2xl overflow-hidden">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* soft gradient overlay to blend edges, non-blocking */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="h-10 w-6 rounded-full border-2 border-slate-400/50 flex items-start justify-center p-1">
          <motion.span initial={{opacity:0, y:0}} animate={{opacity:[0,1,0], y:[0,8,0]}} transition={{repeat: Infinity, duration:1.6}} className="block h-2 w-1 rounded bg-slate-300" />
        </div>
      </div>
    </section>
  )
}
