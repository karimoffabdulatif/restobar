'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Hero = () => {
	return (
		<section className="relative w-full h-screen ">
			{/* Swiper background */}
			<div className="absolute inset-0 w-full h-screen z-[-10]">
				<Swiper
					modules={[Autoplay, EffectFade]}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					effect="fade"
					fadeEffect={{ crossFade: true }}
					speed={2000}
					loop={true}
					slidesPerView={1}
					className="w-full h-full"
				>
					<SwiperSlide>
						<Image src="/bg-banner.jpg" alt="bg1" fill className="object-cover" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src="/drink.jpg" alt="bg2" fill className="object-cover" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src="/kol.jpg" alt="bg3" fill className="object-cover" />
					</SwiperSlide>
				</Swiper>
			</div>

			{/* Overlay */}
			<div className=" absolute inset-0 h-screen bg-gray-900/70 z-[-5]" />

			{/* Text content */}
			<div className="relative z-20 h-screen flex items-center text-white text-3xl sm:px-4">
				<div className="container px-4 sm:px-14 mx-auto w-full">
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, ease: 'easeOut' }}
						className="sm:w-[500px] pt-[40px] sm:pt-[100px]"
					>
						<h1 className="text-center sm:text-start  text-4xl sm:text-6xl varela-round-regula font-bold">
							Enjoy Our Delicious Meal
						</h1>
						<p className="text-lg sm:text-xl pt-5 opacity-70 text-center sm:text-start">
							Delicious meals, a warm atmosphere, and unforgettable moments!
							Every dish is a work of art crafted with love. At our restaurant, every bite brings joy and warmth.
						</p>
					</motion.div>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
						className="flex gap-4 sm:gap-8 pt-5 ml-2 sm:ml-0 justify-center sm:justify-start"
					>
						<button className="bg-amber-500 animate-pulse py-2 px-4 sm:px-10 sm:py-3 text-base sm:text-xl rounded-sm hover:bg-amber-600 transition">
							Menu
						</button>
						<button className="border-amber-500 border text-amber-500 hover:text-white py-2 px-4 sm:px-10 sm:py-3 text-base sm:text-xl rounded-sm hover:bg-amber-600 transition">
							Book a table
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
