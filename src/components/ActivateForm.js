'use client'

import { useEffect, useState } from 'react'

const LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ'

function generateCode() {
  const a = LETTERS[Math.floor(Math.random() * LETTERS.length)]
  const b = LETTERS[Math.floor(Math.random() * LETTERS.length)]
  return `${a}${b}`
}

function normalize(value) {
  return value.toUpperCase().replace(/[^A-Z]/g, '')
}

function createNoisePaths(width, height, count = 4) {
  const paths = []
  for (let i = 0; i < count; i++) {
    const y0 = Math.random() * height
    const y1 = Math.random() * height
    const c1x = Math.random() * (width * 0.4)
    const c1y = Math.random() * height
    const c2x = width - Math.random() * (width * 0.4)
    const c2y = Math.random() * height
    const d = `M 0 ${y0.toFixed(2)} C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${width} ${y1.toFixed(2)}`
    paths.push({ d, opacity: 0.18 + Math.random() * 0.18, width: 1 + Math.random() * 1.5 })
  }
  return paths
}

export default function ActivateForm() {
  const [macAddress, setMacAddress] = useState('')
  const [deviceKey, setDeviceKey] = useState('')
  const [userAnswer, setUserAnswer] = useState('')

  // Captcha state with deterministic SSR-safe defaults
  const [code, setCode] = useState('AA')
  const [noise, setNoise] = useState([])
  const [rotA, setRotA] = useState(0)
  const [rotB, setRotB] = useState(0)
  const [dxA, setDxA] = useState(0)
  const [dxB, setDxB] = useState(0)
  const [dyA, setDyA] = useState(0)
  const [dyB, setDyB] = useState(0)
  const [fontA, setFontA] = useState(41)
  const [fontB, setFontB] = useState(41)

  useEffect(() => {
    // Generate the random captcha only on the client after mount to avoid hydration mismatch
    refreshChallenge()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refreshChallenge = () => {
    setCode(generateCode())
    setNoise(createNoisePaths(260, 80))
    setRotA((Math.random() * 36) - 18)
    setRotB((Math.random() * 36) - 18)
    setDxA((Math.random() * 16) - 8)
    setDxB((Math.random() * 16) - 8)
    setDyA((Math.random() * 12) - 6)
    setDyB((Math.random() * 12) - 6)
    setFontA(40 + Math.floor(Math.random() * 8))
    setFontB(40 + Math.floor(Math.random() * 8))
    setUserAnswer('')
  }

  const isChallengeValid = normalize(userAnswer) === normalize(code)
  const isFormValid = macAddress.trim().length > 0 && deviceKey.trim().length > 0 && isChallengeValid

  return (
    <div className="mx-auto mt-8 w-full max-w-xl rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-xl">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="text-center">
          <h2 className="text-white/90" style={{ fontSize: 'clamp(14px, 3.2vw, 18px)', fontWeight: 600 }}>
            Login to add your playlist
          </h2>
        </div>

        <input
          type="text"
          inputMode="text"
          autoComplete="off"
          placeholder="MAC Address"
          className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:ring-2 focus:ring-white/30"
          value={macAddress}
          onChange={(e) => setMacAddress(e.target.value)}
          aria-label="MAC Address"
        />

        <input
          type="password"
          placeholder="Enter Device Key"
          className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:ring-2 focus:ring-white/30"
          value={deviceKey}
          onChange={(e) => setDeviceKey(e.target.value)}
          aria-label="Device Key"
        />

        <div className="rounded-lg border border-white/15 bg-black/30 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <svg width="100%" height="80" viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Security code">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="260" height="80" fill="url(#g)" />
                {noise.map((n, i) => (
                  <path key={i} d={n.d} stroke="#ffffff" strokeOpacity={n.opacity} strokeWidth={n.width} fill="none" />
                ))}
                <g fontFamily="'Product Sans','Segoe UI',sans-serif" fontWeight="800" fill="#ffffff">
                  <text x="80" y="54" fontSize={fontA} transform={`rotate(${rotA} 80 54) translate(${dxA} ${dyA})`}>
                    {code[0]}
                  </text>
                  <text x="150" y="52" fontSize={fontB} transform={`rotate(${rotB} 150 52) translate(${dxB} ${dyB})`}>
                    {code[1]}
                  </text>
                </g>
              </svg>
            </div>
            <button
              type="button"
              onClick={refreshChallenge}
              className="rounded-md px-3 py-2 text-white hover:bg-white/10"
              style={{ fontWeight: 500 }}
              aria-label="Refresh security code"
            >
              New Code
            </button>
          </div>

          <input
            type="text"
            placeholder="Type the two letters"
            className="mt-3 w-full rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/70 focus:ring-2 focus:ring-white/30"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            aria-label="Security letters"
          />

          {!isChallengeValid && userAnswer.trim().length > 0 && (
            <p className="mt-2 text-xs text-[#ffb3bb]">The letters you entered don’t match. Try again.</p>
          )}
        </div>

        {/* Honeypot field */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-flex min-w-28 items-center justify-center rounded-md px-6 py-3 text-white ${
              isFormValid ? '' : 'opacity-60 cursor-not-allowed'
            }`}
            style={{ backgroundColor: '#e40014', fontWeight: 600, letterSpacing: 0.3 }}
            aria-disabled={!isFormValid}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}


