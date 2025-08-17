'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export default function SupportContent() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <h1 className="text-black" style={{ fontSize: 'clamp(26px,6vw,44px)', fontWeight: 800 }}>OXI Player Support</h1>
          <p className="mt-3 text-neutral-700" style={{ fontSize: 'clamp(14px,3vw,18px)' }}>
            Solutions to common issues and guidance for optimal performance
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6">
          <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)]">
            <div className="px-6 py-6">
              <h2 className="text-black" style={{ fontSize: 'clamp(18px,5vw,24px)', fontWeight: 800 }}>Getting Started with OXI Player</h2>
              <div className="mt-4">
                <h3 className="text-black" style={{ fontWeight: 700 }}>About OXI Player</h3>
                <p className="mt-2 text-neutral-700" style={{ lineHeight: 1.8 }}>
                  OXI Player is a premium media player supporting M3U/M3U8 playlists. Enjoy a 7‑day free trial upon installation.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-black" style={{ fontWeight: 700 }}>Setup Guide</h3>
                <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-2">
                  <li>Installation: Download from your device's app store</li>
                  <li>Launch: App auto‑activates 7‑day trial (note your MAC ID & Device Key)</li>
                  <li>
                    Add M3U/M3U8 Playlist:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>Visit our website → "Manage Playlist"</li>
                      <li>Enter MAC ID & Device Key</li>
                      <li>Add M3U/M3U8 URL (must start with http://)</li>
                      <li>Restart app to access your content</li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-3 text-neutral-700 italic">Important: Only use working and trusted M3U/M3U8 playlists. You can purchase M3U/M3U8 playlists from any reputable provider.</p>
              </div>
              <div className="mt-6">
                <h3 className="text-black" style={{ fontWeight: 700 }}>License Activation</h3>
                <p className="mt-2 text-neutral-700">After trial, visit our website → "Activate License" → Enter credentials (MAC ID and Device Key) → Complete purchase.</p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)]">
            <div className="px-6 py-6">
              <h2 className="text-black" style={{ fontSize: 'clamp(18px,5vw,24px)', fontWeight: 800 }}>Troubleshooting</h2>
              <div className="mt-4">
                <h3 className="text-black" style={{ fontWeight: 700 }}>App Stuck on Loading Page</h3>
                <p className="mt-2 text-neutral-700"><span className="font-semibold">Possible Causes:</span> M3U/M3U8 playlist errors, internet connection issues, ISP blocking</p>
                <div className="mt-2">
                  <p className="text-neutral-700"><span className="font-semibold">Solution:</span> Restart app 2‑3 times</p>
                  <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-2">
                    <li>If persists: remove the current M3U/M3U8 playlist on the website</li>
                    <li>Restart app</li>
                    <li>Check if the demo M3U/M3U8 playlist works</li>
                    <li>If demo works: contact your M3U/M3U8 playlist service provider</li>
                    <li>If demo fails: check internet/ISP for potential blocks</li>
                  </ol>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-black" style={{ fontWeight: 700 }}>Switching MAC ID</h3>
                <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-2">
                  <li>Login with old MAC ID at "Switch MAC ID"</li>
                  <li>Navigate to "Switch MAC ID"</li>
                  <li>Add new MAC ID and confirm</li>
                </ol>
              </div>

              <div className="mt-6">
                <h3 className="text-black" style={{ fontWeight: 700 }}>Resetting M3U/M3U8 Playlist</h3>
                <ol className="mt-2 list-decimal pl-6 text-neutral-700 space-y-2">
                  <li>Visit the activation portal</li>
                  <li>Select "Reset" → "App"</li>
                  <li>Enter MAC ID & Device Key</li>
                  <li>After reset, add a new working M3U/M3U8 playlist</li>
                </ol>
                <p className="mt-2 text-neutral-700">Resetting Playlist will remove all existing playlists on your device.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-black" style={{ fontWeight: 700 }}>Why Is My M3U/M3U8 Playlist Channel Freezing?</h3>
                <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-2">
                  <li><span className="font-semibold">Internet Connection:</span> Check speed/stability; restart your router if needed.</li>
                  <li><span className="font-semibold">Server Stability:</span> Contact your M3U/M3U8 playlist service provider.</li>
                  <li><span className="font-semibold">Device Performance:</span> Close background apps and restart your device.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="rounded-lg bg-white ring-1 ring-[rgba(228,0,20,0.15)]">
            <div className="px-6 py-6">
              <h2 className="text-black" style={{ fontSize: 'clamp(18px,5vw,24px)', fontWeight: 800 }}>Manual Installation Guide (Android Devices)</h2>
              <ol className="mt-4 list-decimal pl-6 text-neutral-700 space-y-2">
                <li>If OXI Player isn't on Google Play Store:</li>
                <li>Install "Downloader" app from Play Store</li>
                <li>Open Downloader and enter the provided official download URL</li>
                <li>Download and install the APK</li>
                <li>Enable "Unknown Sources" if prompted</li>
              </ol>
              <div className="mt-4 text-neutral-700">
                <p><span className="font-semibold">Quick Access:</span></p>
                <p className="mt-1">Downloader Code: 1171959</p>
                <p>Download URL: (official link provided by support)</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
}


