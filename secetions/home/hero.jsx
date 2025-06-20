'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Hero = () => {
	return (
		<section className="relative w-full min-h-screen">
			<div className="absolute inset-0 z-[-10]">
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					loop={true}
					slidesPerView={1}
					className="w-full h-full"
				>
					<SwiperSlide>
						<Image
							src="/bg-banner.jpg"
							alt="bg1"
							fill
							className="object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/drink.jpg"
							alt="bg2"
							fill
							className="object-cover"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/kol.jpg"
							alt="bg3"
							fill
							className="object-cover"
						/>
					</SwiperSlide>
				</Swiper>
			</div>

			<div className="absolute inset-0 bg-gray-900/70 z-[-5]" />

			<div className="relative z-20 min-h-screen flex items-center text-white text-3xl px-4">
				<div className="container mx-auto w-full max-w-screen-xl">
					<div className="w-[500px] pt-[100px]">
						<h1 className="text-6xl font-serif font-bold">Enjoy Our Delicious Meal</h1>
						<p className="text-xl pt-5">
							Delicious meals, a warm atmosphere, and unforgettable moments!  
							Every dish is a work of art crafted with love. At our restaurant, every bite brings joy and warmth.
						</p>
					</div>
					<div className="flex gap-8 pt-5">
						<button className="bg-amber-500 px-12 py-3 text-2xl rounded-sm hover:bg-amber-600 transition">
							Menu
						</button>
						<button className="bg-amber-500 px-12 py-3 text-2xl rounded-sm hover:bg-amber-600 transition">
							Book a table
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
