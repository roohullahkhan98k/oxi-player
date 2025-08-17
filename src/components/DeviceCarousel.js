'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DeviceCarousel({ logos = [] }) {
	const slides = (logos.length ? logos : [
		'/lg.png',
        '/android.jpg',
		'/samsung.jpg',
		'/sony.jpg',
		'/appletv.png',
        "/roku.png",
		'/androidtv.png',
	]).map((src, i) => ({ id: `${i}-${src}`, src }))

	const doubled = [...slides, ...slides]

	return (
		<section className="w-full bg-black">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="text-center" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
					<h3
						className="text-white leading-tight"
						style={{ fontSize: 'clamp(16px, 3.8vw, 22px)', fontWeight: 700 }}
					>
						Watch OXI Player with these compatible streaming devices
					</h3>
				</div>

				<div className="relative mt-12 overflow-hidden">
					<div
						className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"
						aria-hidden
					/>

					<motion.div
						className="flex"
						style={{ width: 'max-content' }}
						animate={{ x: ['0%', '-50%'] }}
						transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
					>
						{doubled.map(({ id, src }, idx) => {
							const loopIndex = Math.floor(idx / slides.length)
							const uniqueKey = `${id}-loop-${loopIndex}`
							return <LogoItem key={uniqueKey} src={src} />
						})}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

function LogoItem({ src }) {
	const [loaded, setLoaded] = useState(false)
	const [errored, setErrored] = useState(false)
	if (errored) return null
	return (
		<div className="mx-6 md:mx-8 flex items-center justify-center">
			<div className="h-16 w-40 sm:h-20 sm:w-52 md:h-24 md:w-64 flex items-center justify-center">
				<Image
					src={src}
					alt=""
					width={256}
					height={96}
					className="h-full w-full object-contain"
					priority={false}
					onLoad={() => setLoaded(true)}
					onError={() => setErrored(true)}
					style={{ opacity: loaded ? 1 : 0 }}
				/>
			</div>
		</div>
	)
}


