'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function RightNotice() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, x: 80, scaleY: 0.9 }}
          animate={{ opacity: 1, x: 0, scaleY: 1 }}
          exit={{ opacity: 0, x: 80, scaleY: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 bottom-4 md:right-20 md:bottom-4 z-40 w-[90vw] sm:w-[360px] md:w-[460px] lg:w-[520px] max-w-[95vw] max-h-[65vh] sm:max-h-[50vh] shadow-xl rounded-lg overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #bf232e -20%, #000 140%)', transformOrigin: 'bottom right' }}
          aria-live="polite"
        >
          <div className="relative p-4 text-white" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
            <button
              aria-label="Close notice"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded hover:bg-white/10 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="pr-8 sm:max-h-[38vh] sm:overflow-y-auto">
              <p className="text-[13px] sm:text-sm leading-6">
                OXI PLAYER does not sell playlists or subscriptions. It is a video media player and does not offer
                channels or include any content. Clients must acquire content externally from our website. Please note,
                OXI PLAYER is not responsible for the content utilized within our app. The app offers a 7-day trial
                period for testing purposes. After this period, a license must be purchased to continue using the app.
                Please be advised that there are no refunds after purchase.
              </p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}


