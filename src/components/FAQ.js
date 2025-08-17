'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
	{
		q: 'Does OXI Player contain any channels? Where can I get a good playlist?',
		a:
			"OXI Player and its administrators do not help you find playlists and we don't provide any playlists. We are not responsible for content uploaded to our app. Please don't buy the app if you don't have a playlist or media, because no channels are included after activation. Purchases are non‑refundable if you buy without having a list or something is not working.",
	},
	{
		q: 'My MAC address has changed after I switched to another connection type.',
		a:
			'Each TV has two MAC addresses (Wi‑Fi and Ethernet). The second MAC is activated automatically after you switch the connection type and restart the app. A MAC address is unique for every TV and cannot be changed manually.',
	},
	{
		q: 'Why is the app not working when the playlist worked on my computer?',
		a:
			'This can be caused by ISP locks if your computer is on a different network. If the network is the same and it still does not work, it may be due to your TV’s supported formats. Not every Smart TV supports all stream formats; support varies by model.',
	},
	{
		q: "My playlist won't open, freezes or slows down. What should I do?",
		a:
			'Make sure your playlist is working and active, and that it has no limitations or problems. For privacy reasons we do not have access to your playlists and do not provide assistance with them.',
	},
	{
		q: 'Why can I not start the app?',
		a:
			'This is often due to your internet connection. Please check your connection first before contacting your provider. Many issues are connection related rather than provider related.',
	},
	{
		q: 'Does the OXI Player app have an EPG system?',
		a:
			"No, the app does not include a built‑in EPG system. If your provider offers an EPG‑ready system, it may work with our platform.",
	},
	{
		q: '“Unable to Stream” error — playlist not working',
		a:
			'This message appears when there are restrictions on a playlist. For privacy reasons we do not have access to playlists and cannot provide assistance with them.',
	},
]

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<section className="w-full bg-white">
			<div className="mx-auto max-w-7xl px-6 py-20" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
				<div className="text-center">
					<h3
						className="leading-tight text-black"
						style={{ fontSize: 'clamp(22px, 5.5vw, 36px)', fontWeight: 800 }}
					>
						Frequently Asked Questions
					</h3>
				</div>

				<div className="mt-10 mx-auto w-full">
					<ul className="space-y-3">
						{faqs.map((item, idx) => (
							<motion.li key={idx} layout>
								<div className={`rounded-lg bg-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] ring-1 transition-colors ${openIndex === idx ? 'ring-[#e40014] ring-2' : 'ring-[rgba(228,0,20,0.15)]'}`}>
									<button
										onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
										className="w-full flex items-center justify-between px-5 py-4 text-left"
										aria-expanded={openIndex === idx}
									>
										<span className="text-black" style={{ fontSize: 'clamp(14px, 3.2vw, 18px)', fontWeight: 600 }}>{item.q}</span>
										<span className={`ml-4 inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors ${openIndex === idx ? 'bg-[rgba(228,0,20,0.12)] text-[rgba(228,0,20,1)]' : 'bg-black/5 text-black'}`}>
											<AnimatePresence initial={false} mode="wait">
												{openIndex === idx ? (
													<motion.span
														key="x"
														initial={{ rotate: -90, opacity: 0 }}
														animate={{ rotate: 0, opacity: 1 }}
														exit={{ rotate: 90, opacity: 0 }}
														transition={{ duration: 0.2 }}
													>
														<X size={18} />
													</motion.span>
												) : (
													<motion.span
														key="plus"
														initial={{ rotate: -90, opacity: 0 }}
														animate={{ rotate: 0, opacity: 1 }}
														exit={{ rotate: 90, opacity: 0 }}
														transition={{ duration: 0.2 }}
													>
														<Plus size={18} />
													</motion.span>
												)}
											</AnimatePresence>
										</span>
									</button>

									{/* smoother open/close using grid auto-rows trick */}
									<motion.div
										initial={false}
										animate={{ gridTemplateRows: openIndex === idx ? '1fr' : '0fr' }}
										transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
										style={{ display: 'grid' }}
									>
										<div className="overflow-hidden">
											<div className="px-5 pb-5">
												<p className="text-neutral-700" style={{ fontSize: 'clamp(13px, 2.9vw, 16px)', lineHeight: 1.7 }}>
													{item.a}
												</p>
											</div>
										</div>
									</motion.div>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}


