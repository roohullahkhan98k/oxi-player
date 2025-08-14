'use client'

import { motion } from 'framer-motion'
import { Mail, User, MessageSquareText, Type } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      // Placeholder: integrate with API or email service
    }, 1000)
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
            <span style={{ color: '#e40014' }}>Contact</span> Us
          </h1>
          <a href="mailto:dev@iboplayerapp.de" className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base">
            <Mail size={18} /> dev@iboplayerapp.de
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-black/10 shadow-xl overflow-hidden">
              <div className="px-6 py-5 border-b border-black/10 flex items-center gap-2">
                <MessageSquareText size={18} className="text-black/80" />
                <h2 className="text-black text-lg font-semibold">Send Us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 gap-4">
                <label className="text-xs font-medium text-black/80">
                  Name
                  <div className="mt-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"><User size={16} /></span>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-black/10 bg-white pl-9 pr-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="Your name"
                    />
                  </div>
                </label>

                <label className="text-xs font-medium text-black/80">
                  Email
                  <div className="mt-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"><Mail size={16} /></span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-black/10 bg-white pl-9 pr-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </label>

                <label className="text-xs font-medium text-black/80">
                  Subject
                  <div className="mt-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"><Type size={16} /></span>
                    <input
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-black/10 bg-white pl-9 pr-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="Subject"
                    />
                  </div>
                </label>

                <label className="text-xs font-medium text-black/80">
                  Message
                  <div className="mt-1 relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="Type your message..."
                    />
                  </div>
                </label>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center rounded-md px-8 py-3 text-white disabled:opacity-70"
                  style={{ backgroundColor: '#e40014', fontWeight: 600 }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-black/60 text-white p-6 h-full">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="text-xl font-semibold"
              >
                We're here to help
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
                className="mt-2 text-sm text-white/80"
                style={{ lineHeight: 1.6 }}
              >
                Send us a message and our team will get back to you as soon as possible. For quick answers, check the FAQ in the chat widget.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="mt-6"
              >
                <a href="mailto:dev@iboplayerapp.de" className="inline-flex items-center gap-2 text-white hover:text-white/90">
                  <Mail size={18} /> dev@iboplayerapp.de
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}


