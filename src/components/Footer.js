'use client'

import Link from 'next/link'
import { Phone, Mail, MessageSquare } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="w-full bg-black text-white">
			<div className="mx-auto max-w-7xl px-6 py-12" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
				<div className="grid gap-8 md:grid-cols-3">
					<div>
						<h4 className="text-lg font-semibold">OXI Player</h4>
						<p className="mt-2 text-sm text-white/70">Stream smarter with our powerful, user‑friendly media player experience.</p>
					</div>
					<div>
						<h5 className="text-base font-semibold">Contact</h5>
						<ul className="mt-3 space-y-2 text-sm text-white/80">
							<li className="flex items-center gap-2">
								<Mail size={16} />
								<span>support@oxi-player.com</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone size={16} />
								<span>+1 (000) 000‑0000</span>
							</li>
							<li className="flex items-center gap-2">
								<MessageSquare size={16} />
								<span>Telegram (coming soon)</span>
							</li>
						</ul>
					</div>
					<div>
						<h5 className="text-base font-semibold">Legal</h5>
						<ul className="mt-3 space-y-2 text-sm text-white/80">
							<li>
								<Link href="/terms" className="hover:underline">Terms & Conditions</Link>
							</li>
							<li>
								<Link href="/privacy" className="hover:underline">Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
					<p>© {new Date().getFullYear()} OXI Player. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}


