'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './swiper.css'

import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link' // Link import qilingan

const categories = [
    {
        id: 1,
        title: 'Plows',
        image: '/br.jpg',
        path: 'menu#plows' // ✅ faqat bitta slash bilan boshlanmaydi
    },
    {
        id: 2,
        title: 'Pizza',
        image: '/br.jpg',
        path: 'menu#pizza'
    },
    {
        id: 3,
        title: 'Salads',
        image: '/br.jpg',
        path: 'menu#salads'
    },
    {
        id: 4,
        title: 'Pasta',
        image: '/br.jpg',
        path: 'menu#pasta'
    },
    {
        id: 5,
        title: 'Drinks',
        image: '/br.jpg',
        path: 'menu#drinks'
    },
]

export default function Category() {
    return (
        <div className='container mx-auto px-10 py-14'>
            {/* Title with lines */}
            <div className='flex justify-center items-center gap-2 pb-4'>
                <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
                    Menu Category
                </h1>
                <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                speed={6000}
                modules={[Pagination, Autoplay]}
                className="mySwiper !pb-14 mt-10"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1090: { slidesPerView: 3 },
                }}
            >
                {categories.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link href={`/${item.path}`}>
                            <div className='cursor-pointer container mx-auto w-[300px] sm:w-[400px] bg-white border hover:shadow-2xl pb-2 sm:pb-4 rounded-2xl transition-all duration-700'
                                style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                                {/* Image container */}
                                <div className='overflow-hidden rounded-t-2xl'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={600}
                                        className='h-[240px] sm:h-[320px] border-0 object-cover transition-transform duration-300 hover:scale-105'
                                    />
                                </div>

                                {/* Title */}
                                <p className='text-2xl text-black text-center lobster-regular sm:font-semibold mt-3'>
                                    {item.title}
                                </p>

                                <button
                                    className='border-amber-500 border text-amber-500 
                                    hover:text-white hover:bg-amber-500 
                                    transition duration-300 ease-in-out 
                                    mb-3 cursor-pointer px-3 py-1 block mx-auto rounded-[4px] mt-2'
                                >
                                    View Menu
                                </button>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
