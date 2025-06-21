'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const categories = [
    {
        id: 1,
        title: 'Burgers',
        image: '/br.jpg',
    },
    {
        id: 2,
        title: 'Pizza',
        image: '/br.jpg',
    },
    {
        id: 3,
        title: 'Salads',
        image: '/br.jpg',
    },
    {
        id: 4,
        title: 'Pasta',
        image: '/br.jpg',
    },
    {
        id: 5,
        title: 'Drinks',
        image: '/br.jpg',
    },
]

export default function Category() {
    return (
        <div className='container mx-auto py-10'>
            {/* Title with lines */}
            <div className='flex justify-center items-center gap-2 pb-4'>
                <div className='border-t border-2 border-amber-500 w-[100px] mt-2'></div>
                <h1 className='text-3xl font-bold text-amber-500 px-4 lobster-regular'>
                    Menu Category
                </h1>
                <div className='border-t border-2 border-amber-500 w-[100px] mt-2'></div>
            </div>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                speed={6000}
                modules={[Pagination, Autoplay]}
                className="mySwiper !pb-14"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1090: { slidesPerView: 3 },
                }}
            >
                {categories.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='container mx-auto  w-[400px] bg-white border  hover:shadow-2xl pb-4 rounded-2xl transition-all duration-700'
                         style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                            {/* Image container */}
                            <div className='overflow-hidden rounded-t-2xl'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={600}
                                    className='h-[320px] border-0  object-cover transition-transform duration-300 hover:scale-105' />
                            </div>

                            {/* Title */}
                            <p className='text-2xl text-center font-semibold mt-3'>{item.title}</p>

                            <button
                                className='border-amber-500 border text-amber-500 
                hover:text-white hover:bg-amber-500 
                transition duration-300 ease-in-out 
                mb-3 cursor-pointer px-3 py-1 block mx-auto rounded-[4px] mt-2'
                            >
                                View Menu
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
