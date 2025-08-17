'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { Play, SkipBack, SkipForward } from 'lucide-react'

export default function Showcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0.15 1', '0.5 0'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 220, damping: 18, mass: 0.5 })
  const scale = useTransform(smoothProgress, [0, 1], [0.84, 1.08])
  const y = useTransform(smoothProgress, [0, 1], [28, 0])
  const opacity = useTransform(smoothProgress, [0, 1], [0.6, 1])

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <motion.div
          ref={ref}
          className="mx-auto w-full"
          style={{ transformOrigin: 'center center', scale, y, opacity }}
        >
          <Image
            src="/tv.webp"
            alt="TV showcase"
            width={1280}
            height={720}
            priority={false}
            className="h-auto w-full object-cover"
          />
        </motion.div>

        <VideoProgress />
      </div>
    </section>
  )
}

function VideoProgress() {
  const barRef = useRef(null)
  const [progress, setProgress] = useState(0.35)

  function handleMove(e) {
    if (!barRef.current) return
    const rect = barRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width)
    const pct = rect.width === 0 ? 0 : x / rect.width
    setProgress(pct)
  }

  function handleClick(e) {
    handleMove(e)
  }

  function handleKey(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      setProgress((p) => Math.min(1, p + 0.05))
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      setProgress((p) => Math.max(0, p - 0.05))
    }
  }

  return (
    <div className="mt-4 select-none" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-center gap-4 md:gap-6 text-neutral-900/80">
          <button aria-label="Previous" className="inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full hover:bg-neutral-200 transition-colors">
            <SkipBack size={18} />
          </button>
          <button aria-label="Play" className="inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full text-white" style={{ backgroundColor: '#e40014' }}>
            <Play size={20} fill="currentColor" />
          </button>
          <button aria-label="Next" className="inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full hover:bg-neutral-200 transition-colors">
            <SkipForward size={18} />
          </button>
        </div>

        <div
          ref={barRef}
          onMouseMove={handleMove}
          onClick={handleClick}
          onKeyDown={handleKey}
          tabIndex={0}
          className="relative mx-auto mt-2 w-full cursor-pointer select-none"
          aria-label="Video progress"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <div className="h-8 w-full">
            <div className="relative top-1/2 -translate-y-1/2 h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
              <motion.div
                animate={{ width: `${Math.round(progress * 100)}%` }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="h-full"
                style={{ backgroundColor: '#e40014' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


