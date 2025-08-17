export const metadata = { title: 'Terms & Conditions - OXI Player' }

export default function TermsPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
        <h1 className="text-black" style={{ fontSize: 'clamp(24px,6vw,40px)', fontWeight: 800 }}>Terms & Conditions</h1>
        <p className="mt-4 text-neutral-700" style={{ lineHeight: 1.8 }}>
          By using OXI Player, you agree to comply with these terms. OXI Player does not sell playlists or provide any
          content. You are solely responsible for the content you access or upload through the app. Purchases are
          non‑refundable. The app may change or be discontinued without notice.
        </p>
        <ul className="mt-6 list-disc pl-6 text-neutral-700 space-y-2">
          <li>Licensing is per device and subject to change.</li>
          <li>No warranties are provided for compatibility or uptime.</li>
          <li>We reserve the right to terminate access in case of abuse.</li>
        </ul>
      </div>
    </main>
  )
}


