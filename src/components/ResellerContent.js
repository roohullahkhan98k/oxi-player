'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export default function ResellerContent() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <h1 className="text-black" style={{ fontSize: 'clamp(26px,6vw,44px)', fontWeight: 800 }}>Become a Reseller Today!</h1>
          <p className="mt-3 text-neutral-700" style={{ fontSize: 'clamp(14px,3vw,18px)' }}>
            Expand your business with OXI Player's premium solutions.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)] p-6 lg:col-span-2">
            <h2 className="text-black" style={{ fontSize: 'clamp(18px,5vw,24px)', fontWeight: 800 }}>Why Choose Us?</h2>
            <ul className="mt-4 space-y-3 text-neutral-800">
              <li>✔ 20+ high‑quality apps across all major platforms</li>
              <li>✔ 1‑year & lifetime license options</li>
              <li>✔ Exclusive reseller pricing</li>
              <li>✔ Dedicated support and resources</li>
              <li>✔ All major devices (Android, iOS, Windows, macOS, Roku, Smart TVs)</li>
            </ul>
            <div className="mt-6">
              <Link href="#register" className="inline-flex items-center justify-center rounded-md px-8 py-3 text-white shadow-lg shadow-black/20" style={{ backgroundColor: '#e40014', fontWeight: 700 }}>
                Start Registration Now
              </Link>
            </div>
          </motion.section>

          <motion.aside variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)] p-6">
            <h3 className="text-black" style={{ fontWeight: 800 }}>Resources</h3>
            <p className="mt-2 text-neutral-700">Simple registration process to become a reseller.</p>
            <ol className="mt-3 list-decimal pl-6 text-neutral-700 space-y-2">
              <li>Visit our website to register <span className="underline">ibosol.com</span></li>
              <li>Fill out the registration form</li>
              <li>Verify your email address</li>
              <li>Set up your account password and PIN</li>
              <li>Log in to your reseller dashboard</li>
            </ol>
            <p className="mt-4 text-neutral-800">Already a reseller? <Link href="#" className="text-[rgba(228,0,20,1)] underline">Access your reseller dashboard</Link></p>
          </motion.aside>
        </div>

        <motion.section id="register" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-10 rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)] p-6">
          <h2 className="text-black" style={{ fontSize: 'clamp(18px,5vw,24px)', fontWeight: 800 }}>Start Registration Now</h2>
          <p className="mt-2 text-neutral-700">We’ll guide you through the steps above. Registration happens on our main site.</p>
          <div className="mt-4">
            <Link href="#" className="inline-flex items-center justify-center rounded-md px-8 py-3 text-white shadow-lg shadow-black/20" style={{ backgroundColor: '#e40014', fontWeight: 700 }}>
              Go to Registration
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}


