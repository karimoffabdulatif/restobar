'use client'

import React from 'react'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    title: 'Plows',
    image: '/osh.jpg',
    path: 'menu#plows'
  },
  {
    id: 2,
    title: 'Steyks',
    image: '/steyk.jpg',
    path: 'menu#steyks'
  },
  {
    id: 3,
    title: 'Salads',
    image: '/salad.jpg',
    path: 'menu#salads'
  },
  {
    id: 4,
    title: 'Drinks',
    image: '/drinks.jpg',
    path: 'menu#drinks'
  },
  {
    id: 5,
    title: 'Hookah',
    image: '/hookah.jpg',
    path: 'menu#hookah'
  },
  {
    id: 6,
    title: 'Plows',
    image: '/osh.jpg',
    path: 'menu#plows'
  },
  {
    id: 7,
    title: 'Steyks',
    image: '/steyk.jpg',
    path: 'menu#steyks'
  },
  {
    id: 8,
    title: 'Salads',
    image: '/salad.jpg',
    path: 'menu#salads'
  },
  {
    id: 9,
    title: 'Drinks',
    image: '/drinks.jpg',
    path: 'menu#drinks'
  },
  {
    id: 10,
    title: 'Hookah',
    image: '/hookah.jpg',
    path: 'menu#hookah'
  },
  {
    id: 11,
    title: 'Plows',
    image: '/osh.jpg',
    path: 'menu#plows'
  },
  {
    id: 12,
    title: 'Steyks',
    image: '/steyk.jpg',
    path: 'menu#steyks'
  },
  {
    id: 13,
    title: 'Salads',
    image: '/salad.jpg',
    path: 'menu#salads'
  },
  {
    id: 14,
    title: 'Drinks',
    image: '/drinks.jpg',
    path: 'menu#drinks'
  },

]

const Category = () => {
  return (
    <section className='container  mx-auto px-6 py-14'>
      {/* Title */}
      <div className='flex justify-center items-center gap-2 pb-10'>
        <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
        <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
          Menu Category
        </h1>
        <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-[0.5px] sm:border-2 pb-6 p-6 sm:p-4 rounded-2xl border-amber-500 lg:grid-cols-3 gap-6 place-items-center">
        {categories.map((item) => (
          <Link href={`/${item.path}`} key={item.id}>
            <div className='cursor-pointer w-[300px] sm:w-[400px]  border border-amber-500  hover:shadow-2xl pb-4 rounded-2xl transition-all duration-700'
              style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
              
              {/* Image */}
              <div className='overflow-hidden rounded-t-2xl'>
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={600}
                  className='h-[240px] sm:h-[320px] object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Title */}
              <p className='text-2xl text-black text-center lobster-regular sm:font-semibold mt-3'>
                {item.title}
              </p>

              {/* Button */}
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
        ))}
      </div>
    </section>
  )
}

export default Category
