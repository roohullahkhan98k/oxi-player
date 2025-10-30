'use client'

import Link from 'next/link'
import { Mail, MessageCircle, Send } from 'lucide-react'

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
							<MessageCircle size={16} />
							<a
								href="https://wa.me/message/WKDPN6OWJPCGK1"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								WhatsApp
							</a>
						</li>
						<li className="flex items-center gap-2">
							<Send size={16} />
							<a
								href="https://t.me/+ouYqBtxJIHI4NDQ0"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								Telegram
							</a>
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


