"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const listVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };
  return (
    <header className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-20 flex items-center justify-between lg:grid lg:grid-cols-3 lg:-translate-x-6">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/oxi-logo.jpg"
                alt="Logo"
                width={120}
                height={120}
                priority
                className="h-10 w-auto object-contain"
                style={{ width: '100px', height: '80px' }}
              />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center justify-center" aria-label="Main Navigation">
            <ul className="flex items-center gap-6 text-base font-bold" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
              <li>
                <Link href="/features" className="hover:text-gray-300">
                  FEATURES
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-gray-300">
                  DOWNLOADS
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-300">
                  SUPPORT
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="hover:text-gray-300 whitespace-nowrap">
                  BECOME RESELLER
                </Link>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden">
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90"
            onClick={() => setIsOpen(false)}
          >
            <button
              aria-label="Close menu"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="h-full flex items-center justify-center"
            >
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center gap-6 text-base font-bold text-white"
                style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.li variants={itemVariants}>
                  <Link href="/features" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                    FEATURES
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/downloads" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                    DOWNLOADS
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/support" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                    SUPPORT
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link href="/reseller" className="hover:text-gray-300 whitespace-nowrap" onClick={() => setIsOpen(false)}>
                    BECOME RESELLER
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


