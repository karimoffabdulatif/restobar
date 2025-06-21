import React from 'react'

const categories = [
  {
    id: 1,
    title: 'Burgers',
    image: '/br.jpg',
  },
  {
    id: 2,
    title: 'Burgers',
    image: '/br.jpg',
  },
  {
    id: 3,
    title: 'Burgers',
    image: '/br.jpg',
  },
]

export const Category = () => {
  return (
    <section className='container mx-auto pt-[60px]'>
      <div>
  <div className='flex justify-center items-center gap-2 pb-4'>
      <div className='border-t border-2 border-amber-500 w-[100px] mt-2'></div>

    <h1 className='text-3xl font-bold lobster-regular whitespace-nowrap px-4 text-amber-500'>Menu Category</h1>
  <div className='border-t border-2 border-amber-500 w-[100px] mt-2'></div>
  </div>

        <div className='flex gap-[30px] justify-center pb-10 flex-wrap'>
          {categories.map((item) => (
            <div
              key={item.id}
              className='bg-white hover:shadow-2xl pb-4 border rounded-2xl transition-all duration-700 '
              style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
            >
              {/* Rasm konteyneri */}
              <div className='overflow-hidden rounded-t-2xl'>
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={600}
                  className='h-[320px]  object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Title */}
              <p className='text-2xl text-center font-semibold mt-3'>{item.title}</p>

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
          ))}
        </div>
      </div>
    </section>
  )
}
