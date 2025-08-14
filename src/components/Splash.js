'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Splash() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)

  // First load: keep splash until the full window load event fires
  useEffect(() => {
    function hideSoon() {
      // brief delay for a smoother transition after load
      const id = setTimeout(() => setVisible(false), 250)
      return () => clearTimeout(id)
    }

    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        return hideSoon()
      }
      const onLoad = () => hideSoon()
      window.addEventListener('load', onLoad, { once: true })
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  useEffect(() => {
    if (!pathname) return
    // route change quick splash
    setVisible(true)
    const id = setTimeout(() => setVisible(false), 350)
    return () => clearTimeout(id)
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}


