'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade' 

const Hero = () => {
	return (
		<section className="relative w-full min-h-screen">
			<div className="absolute inset-0 z-[-10]">
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

			<div className="absolute inset-0 bg-gray-900/70 z-[-5]" />

			<div className="relative z-20 min-h-screen flex items-center text-white text-3xl  sm:px-4">
				<div className="container mx-auto w-full max-w-screen-xl">
					<div className="w-[450px]    sm:w-[500px] pt-[150px] sm:pt-[100px]">
						<h1 className="text-center sm:text-start text-5xl sm:text-6xl font-serif font-bold">Enjoy Our Delicious Meal</h1>
						<p className="text-xl pt-5 text-center sm:text-start">
							Delicious meals, a warm atmosphere, and unforgettable moments!
							Every dish is a work of art crafted with love. At our restaurant, every bite brings joy and warmth.
						</p>
					</div>
					<div className="flex gap-8 pt-5 ml-4 sm:ml-0 justify-center sm:justify-start">
						<button className="bg-amber-500 animate-pulse px-8 sm:px-12 py-3 text-2xl rounded-sm hover:bg-amber-600 transition">
							Menu
						</button>
						<button className="bg-amber-500 px-8 sm:px-12 py-3 text-2xl rounded-sm hover:bg-amber-600 transition">
							Book a table
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
