import { motion } from 'framer-motion'
import { ShieldCheck, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0e] text-white py-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="mx-auto max-w-6xl h-full px-6 grid grid-cols-12 gap-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-b border-r border-white/5" />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m a QA Automation Engineer with 2 years of experience designing and implementing automated testing frameworks. My primary tools are UiPath for RPA-driven workflows and Katalon Studio for web, API, and mobile testing.
            </p>
            <p className="mt-3 text-white/80 leading-relaxed">
              I focus on building resilient tests, integrating them in CI/CD pipelines, and delivering fast, actionable feedback to teams. I enjoy turning complex flows into clean, maintainable automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-[#ff4655]/20 border border-[#ff4655]/40">
                  <ShieldCheck className="h-5 w-5 text-[#ff4655]" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality & Reliability</h3>
                  <p className="text-sm text-white/70">Stable tests with clear reporting and low flakiness.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-md bg-[#ff4655]/20 border border-[#ff4655]/40">
                  <Zap className="h-5 w-5 text-[#ff4655]" />
                </div>
                <div>
                  <h3 className="font-semibold">Speed & Automation</h3>
                  <p className="text-sm text-white/70">CI-friendly automation that scales with your product.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
