'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

const platforms = [
  { name: 'Android', img: '/android.jpg' },
  { name: 'Android TV', img: '/androidtv.png' },
  { name: 'Apple TV', img: '/appletv.png' },
  { name: 'Samsung TV', img: '/samsung.jpg' },
  { name: 'LG TV', img: '/lg.png' },
  { name: 'Roku', img: '/roku.png' },
]

export default function DownloadsContent() {
  return (
    <main className="min-h-[60vh] bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((p) => (
            <motion.div key={p.name} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-black ring-1 ring-white/10 p-4 text-center">
              <div className="mx-auto h-16 w-28 flex items-center justify-center">
                <Image src={p.img} alt={p.name} width={140} height={64} className="h-full w-full object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}


