import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(800px_200px_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_200px_at_90%_20%,rgba(232,121,249,0.15),transparent)]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.6}} className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Über uns</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Wir sind ein kleines Team aus Designer:innen und Entwickler:innen, die digitale Erlebnisse mit Tiefe erschaffen. Unser Stil: klare Typografie, großzügiger Weißraum und eine Prise Zukunft.
          </p>
          <p className="text-slate-400">
            Barrierefreiheit ist für uns kein Add-on, sondern Standard. Jede Animation ist optional, performant und respektiert die Einstellung „Bewegung reduzieren“.
          </p>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true, amount:0.3}} transition={{duration:0.6}} className="relative">
          <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_-30px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(200px_80px_at_70%_30%,rgba(56,189,248,0.2),transparent),radial-gradient(200px_80px_at_30%_70%,rgba(232,121,249,0.2),transparent)]" aria-hidden="true" />
            {/* 3D-esque layered cards */}
            <div className="absolute -left-10 top-10 rotate-[-8deg]">
              <div className="w-56 h-36 rounded-2xl bg-white/5 border border-white/10 shadow-2xl translate-z-10 backdrop-blur-md" />
            </div>
            <div className="absolute left-16 top-20 rotate-[6deg]">
              <div className="w-56 h-36 rounded-2xl bg-white/5 border border-white/10 shadow-2xl translate-z-20 backdrop-blur-md" />
            </div>
            <div className="absolute left-40 top-6 rotate-[-2deg]">
              <div className="w-56 h-36 rounded-2xl bg-white/10 border border-white/10 shadow-2xl translate-z-30 backdrop-blur-md" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
