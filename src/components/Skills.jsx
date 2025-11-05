import { motion } from 'framer-motion'
import { CheckCircle2, Settings, Workflow } from 'lucide-react'

const skills = [
  {
    title: 'UiPath',
    desc: 'RPA workflows, orchestrator, selectors, reusable components, and error handling.',
    icon: Workflow,
  },
  {
    title: 'Katalon Studio',
    desc: 'Web/API/mobile automation, data-driven tests, test objects, and reporting.',
    icon: Settings,
  },
  {
    title: 'QA Foundations',
    desc: 'Test strategy, BDD, CI integration, Git, and exploratory testing mindset.',
    icon: CheckCircle2,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0c] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Core Skills</h2>
          <div className="h-1 w-28 bg-[#ff4655] rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:-translate-y-1 hover:bg-white/[0.06] transition shadow-[0_20px_60px_-20px_rgba(255,70,85,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 grid place-items-center rounded-md bg-[#ff4655]/20 border border-[#ff4655]/40">
                  <s.icon className="h-5 w-5 text-[#ff4655]" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-white/80 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
