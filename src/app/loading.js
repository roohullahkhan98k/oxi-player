'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center justify-center" aria-live="polite" aria-busy="true">
        <motion.div
          aria-hidden
          className="rounded-full"
          style={{
            width: 96,
            height: 96,
            background: 'linear-gradient(90deg, #bf232e -20%, #000 140%)',
            WebkitMask: 'radial-gradient(farthest-side, #000 calc(100% - 8px), transparent 0)',
            mask: 'radial-gradient(farthest-side, #000 calc(100% - 8px), transparent 0)'
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="mt-4 text-white text-sm tracking-wide"
          style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}
        >
          Loading
        </motion.div>
      </div>
    </div>
  )
}


