import { motion } from 'framer-motion'
import { Sparkles, Zap, Shield, Boxes } from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Brand & Design', desc: 'Klarer Look, moderne Typografie und visuelle Systeme.' },
  { icon: Zap, title: 'WebGL & 3D', desc: 'Interaktive 3D-Szenen mit Spline und Three.js, optimiert für Performance.' },
  { icon: Boxes, title: 'Web Apps', desc: 'Schnelle, barrierearme Frontends mit React und Tailwind.' },
  { icon: Shield, title: 'Accessibility', desc: 'Saubere Semantik, Kontraste, Tastaturnavigation und reduzierte Bewegungen.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-10">Leistungen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(56,189,248,0.7)] mb-4">
                <s.icon />
              </div>
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
