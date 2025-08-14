'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-[700px] transform min-[1000px]:-translate-x-12 min-[1000px]:-translate-y-4 lg:-translate-x-20 xl:-translate-x-24 min-[1450px]:-translate-x-20">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="leading-tight text-white"
        style={{ fontSize: "clamp(22px, 6vw, 49.6px)", fontFamily: "'Product Sans','Segoe UI',sans-serif", fontWeight: 700 }}
      >
        <span style={{ color: "#e40014" }}>OXI Player: </span>
        Where Media Player Evolution Takes Center Stage
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="mt-4 text-white/90"
        style={{ fontSize: "clamp(13px, 3.5vw, 17.6px)", fontFamily: "'Product Sans','Segoe UI',sans-serif", fontWeight: 400, lineHeight: 1.6 }}
      >
        Step into IBO Player, the beating heart of Media Player innovation! Our platform is the hub for cutting-edge
        entertainment solutions, boasting an extensive collection of state-of-the-art streaming technologies and
        thoughtfully curated content
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="mt-6"
      >
        <a
          href="#explore"
          className="inline-flex items-center justify-center rounded-md px-10 py-3 text-white"
          style={{ backgroundColor: "#e40014", fontWeight: 500 }}
        >
          explore
        </a>
      </motion.div>
    </div>
  );
}


