export const metadata = {
  title: "Activate Device | Oxi Player",
  description: "Activate your device for Oxi Player.",
}

import ActivateForm from "@/components/ActivateForm"

export default function ActivateDevicePage() {
  return (
    <main>
      <section className="relative w-full" style={{ minHeight: "calc(100vh - 5rem)" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pl.avif')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-2xl text-center" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
            <h1
              className="leading-tight text-white"
              style={{ fontSize: "clamp(26px, 6.2vw, 48px)", fontWeight: 800 }}
            >
              Manage Your Playlist
            </h1>
            <p
              className="mt-3 text-white/90"
              style={{ fontSize: "clamp(14px, 3.2vw, 18px)", fontWeight: 400, lineHeight: 1.7 }}
            >
              Do It Simply Wherever You Go
            </p>
            <ActivateForm />
          </div>
        </div>
      </section>
    </main>
  )
}


