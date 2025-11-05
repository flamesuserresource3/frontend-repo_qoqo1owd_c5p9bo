import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight">Ananda Fadhilah</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="text-sm font-semibold rounded-md bg-[#ff4655] px-4 py-2 hover:bg-[#ff2e44] transition">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0a0c]">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Ananda Fadhilah. Built with care and a touch of Valorant energy.
        </div>
      </footer>
    </div>
  )
}

export default App
