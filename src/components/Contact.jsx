import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Kontakt</h2>
          <p className="mt-4 text-slate-400">Erzähl uns kurz von deinem Projekt. Wir melden uns in der Regel innerhalb von 24 Stunden.</p>

          <div className="mt-10 space-y-4 text-slate-400">
            <p><strong className="text-white">Adresse:</strong> Orbit Alley 42, 1010 Berlin</p>
            <p><strong className="text-white">Mail:</strong> hello@novastudio.io</p>
            <p><strong className="text-white">Social:</strong> @novastudio</p>
          </div>
        </motion.div>

        <motion.form initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} onSubmit={(e)=>{e.preventDefault(); alert('Danke! Wir melden uns.')}} className="relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-xl bg-slate-900/50 text-white px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-300 mb-1">E-Mail</label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl bg-slate-900/50 text-white px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="budget" className="block text-sm text-slate-300 mb-1">Budget</label>
            <select id="budget" name="budget" className="w-full rounded-xl bg-slate-900/50 text-white px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option>unter 5k</option>
              <option>5k - 15k</option>
              <option>15k - 30k</option>
              <option>30k+</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm text-slate-300 mb-1">Nachricht</label>
            <textarea id="message" name="message" rows="5" className="w-full rounded-xl bg-slate-900/50 text-white px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>

          <button type="submit" className="mt-6 group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_10px_40px_-10px_rgba(13,148,136,0.7)] transition-transform group-hover:scale-[1.02]" aria-hidden="true"></span>
            <span className="relative">Absenden</span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
