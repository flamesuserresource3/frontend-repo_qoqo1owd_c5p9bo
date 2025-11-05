import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Loader2, Check } from 'lucide-react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Failed to send')
      setStatus({ ok: true, message: data.email_sent ? 'Message sent successfully!' : 'Message received. Email notification pending.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-[#0b0b0e] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <div className="h-1 w-28 bg-[#ff4655] rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 grid place-items-center rounded-md bg-[#ff4655]/20 border border-[#ff4655]/40">
                <Mail className="h-5 w-5 text-[#ff4655]" />
              </div>
              <div>
                <h3 className="font-semibold">Send me a message</h3>
                <p className="text-sm text-white/70">I’ll get back to you as soon as I can.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff4655]/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff4655]/60"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff4655]/60"
                  placeholder="How can I help?"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff4655]/60"
                  placeholder="Tell me a bit about your project or question..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-md bg-[#ff4655] px-5 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_#ff4655] hover:bg-[#ff2e44] transition disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Mail className="h-5 w-5" />} {loading ? 'Sending...' : 'Send message'}
              </button>

              {status && (
                <div className={`mt-3 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
                  <div className="flex items-center gap-2">
                    {status.ok ? <Check className="h-4 w-4" /> : null}
                    <span>{status.message}</span>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="font-semibold">Availability</h4>
              <p className="text-white/70 text-sm mt-2">Open to full-time roles, freelance, and collaboration.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="font-semibold">Location</h4>
              <p className="text-white/70 text-sm mt-2">Remote-friendly. Will align with your timezone as needed.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
