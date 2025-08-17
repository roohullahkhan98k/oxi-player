'use client'

import { motion } from 'framer-motion'

export default function PostHero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: 'beforeChildren',
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="explore" className="w-full bg-white">
      <motion.div
        className="mx-auto max-w-4xl px-6 py-24 text-center"
        style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h2
          variants={itemVariants}
          className="leading-tight text-black"
          style={{ fontSize: 'clamp(24px, 6vw, 44px)', fontWeight: 800 }}
        >
          <span style={{ color: '#e40014' }}>OXI Player: </span>
          Stream Smarter, Binge Better with Our Media Player Service
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-5 text-neutral-700"
          style={{ fontSize: 'clamp(14px, 3.2vw, 18px)', fontWeight: 400, lineHeight: 1.7 }}
        >
          Experience seamless streaming with IBO Player's user-friendly interface, diverse channel lineup, and high-quality
          content. Dive into a world of live TV, on-demand entertainment, and innovative features, all tailored to your
          preferences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="/features"
            className="inline-flex items-center justify-center rounded-md px-10 py-3 text-white shadow-lg shadow-black/20"
            style={{ backgroundColor: '#e40014', fontWeight: 600, letterSpacing: 0.3 }}
          >
            Explore
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}


