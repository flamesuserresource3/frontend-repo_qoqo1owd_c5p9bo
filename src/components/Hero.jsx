import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-[#0a0a0c] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-[#ff4655] shadow-[0_0_20px_#ff4655]" />
            <span className="text-sm text-white/80">QA Automation Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Ananda Fadhilah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
          >
            QA Automation Engineer with 2 years of hands-on experience building robust, scalable test automation using UiPath and Katalon Studio. I bring a focus on reliability, speed, and developer-friendly feedback loops.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-[#ff4655] px-5 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_#ff4655] hover:bg-[#ff2e44] transition">
              <Mail className="h-5 w-5" /> Get in touch
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-11 w-11 rounded-md bg-white/5 hover:bg-white/10 transition border border-white/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-11 w-11 rounded-md bg-white/5 hover:bg-white/10 transition border border-white/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <a href="#about" className="text-white/70 hover:text-white transition text-sm">Scroll to learn more</a>
      </div>
    </section>
  )
}
