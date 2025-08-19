'use client'

import { useState } from 'react'
import { Lock, Shield, Wallet, Copy, Check } from 'lucide-react'

export default function SiteBlock() {
  const [copied, setCopied] = useState(false)

  const address = '0x43c8922b00816609918fef14e562b95e418be49d'
  const network = 'BSC (BNB Smart Chain) - BEP20'
  const asset = 'USDT'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <main>
      <section className="relative w-full" style={{ minHeight: '100vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pl.avif')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        <div className="relative z-10 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-2xl text-center" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90">
              <Shield size={18} />
              <span className="text-sm">Access Locked</span>
            </div>

            <h1
              className="mt-4 leading-tight text-white"
              style={{ fontSize: 'clamp(26px, 6.2vw, 48px)', fontWeight: 800 }}
            >
              Complete Payment To Unlock The Website
            </h1>
            <p
              className="mt-3 text-white/90"
              style={{ fontSize: 'clamp(14px, 3.2vw, 18px)', fontWeight: 400, lineHeight: 1.7 }}
            >
              Send {asset} on {network}. After confirmation, access will be restored.
            </p>

            <div className="mx-auto mt-8 w-full max-w-xl rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-xl text-left">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Wallet size={18} />
                    <span className="text-sm">Payment Address</span>
                  </div>
                  <div className="mt-2 rounded-md bg-black/40 p-3">
                    <code className="block break-all text-white/95" style={{ letterSpacing: 0.2 }}>{address}</code>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-white hover:bg-white/10"
                  style={{ fontWeight: 600 }}
                  aria-label="Copy address"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-white/15 bg-black/30 p-3 text-white/90">
                  <div className="text-xs uppercase tracking-wide text-white/60">Asset</div>
                  <div className="mt-1 text-lg font-semibold">{asset}</div>
                </div>
                <div className="rounded-md border border-white/15 bg-black/30 p-3 text-white/90">
                  <div className="text-xs uppercase tracking-wide text-white/60">Network</div>
                  <div className="mt-1 text-lg font-semibold">{network}</div>
                </div>
              </div>

              <div className="mt-4 rounded-md border border-white/10 bg-[#e40014]/10 p-3 text-white/90">
                <div className="flex items-start gap-2">
                  <Lock size={16} className="mt-[2px]" />
                  <p className="text-sm">
                    Ensure you send only {asset} to this address on {network}. Sending any other asset or on a different
                    network may result in loss of funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


