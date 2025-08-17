export const metadata = { title: 'Privacy Policy - OXI Player' }

export default function PrivacyPage() {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
        <h1 className="text-black" style={{ fontSize: 'clamp(24px,6vw,40px)', fontWeight: 800 }}>Privacy Policy</h1>
        <p className="mt-4 text-neutral-700" style={{ lineHeight: 1.8 }}>
          OXI Player respects your privacy. We do not sell data. Information collected is used to provide and improve the
          app experience. We do not access your playlists or media. For support inquiries, you may provide contact
          information which will be used solely to respond to you.
        </p>
        <ul className="mt-6 list-disc pl-6 text-neutral-700 space-y-2">
          <li>We use basic analytics to improve performance.</li>
          <li>Data is retained only as long as necessary.</li>
          <li>You can contact support to request data deletion related to support tickets.</li>
        </ul>
      </div>
    </main>
  )
}


