'use client'

import { motion } from 'framer-motion'

export default function FeatureIntro() {
  return (
    <section id="features" className="w-full bg-white">
      <motion.div
        className="mx-auto max-w-5xl px-6 py-20 text-center"
        style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="leading-tight text-black"
          style={{ fontSize: 'clamp(28px, 6vw, 53px)', fontWeight: 800 }}
        >
          Unlocking Limitless Entertainment
          <br />
          Explore a New Realm in Viewing
        </h2>
        <p
          className="mt-6 text-neutral-700"
          style={{ fontSize: 'clamp(16px, 3vw, 24px)', fontWeight: 400, lineHeight: 1.7 }}
        >
          Embark on an adventure where entertainment knows no limits. Our Media Player-inspired service is your gateway to a
          universe of on-demand content, live TV, and innovative features
        </p>
      </motion.div>
    </section>
  )
}


