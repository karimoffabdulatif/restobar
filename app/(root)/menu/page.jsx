import React from 'react'

const Menu = () => {

  const plowsData = [
    {
      id: 1,
      title: "Traditional Wedding Plow",
      price: 115,
      image: "/osh.jpg",
      description: "In Uzbekistan, a traditional wedding feast includes plov, salads, and sweets."
    },
    {
      id: 2,
      title: "Holiday Plow",
      price: 105,
      image: "/osh.jpg",
      description: "Served during holidays with rich ingredients and flavors."
    },
    {
      id: 3,
      title: "Family Feast Plow",
      price: 95,
      image: "/osh.jpg",
      description: "Perfect for a family gathering with traditional toppings."
    },
    {
      id: 4,
      title: "Meat Lover’s Plow",
      price: 120,
      image: "/osh.jpg",
      description: "Loaded with extra meat and spices for meat lovers."
    },
    {
      id: 5,
      title: "Vegetarian Plow",
      price: 90,
      image: "/osh.jpg",
      description: "A vegetarian version with fresh veggies and rice."
    },
    {
      id: 6,
      title: "Classic Tashkent Plow",
      price: 110,
      image: "/osh.jpg",
      description: "Authentic Tashkent-style plow with yellow carrots."
    },
    {
      id: 7,
      title: "Student Budget Plow",
      price: 70,
      image: "/osh.jpg",
      description: "Affordable and tasty option for students."
    },
    {
      id: 8,
      title: "Deluxe Celebration Plow",
      price: 130,
      image: "/osh.jpg",
      description: "Top-quality ingredients for special celebrations."
    }
  ]

  return (
    <div className="px-12 container mx-auto">
      <h1 className="text-4xl pt-4 lobster-regular font-bold mb-10 text-center text-amber-500">
        Menu Sections
      </h1>

      <section id="plows" className="mb-20 scroll-mt-24">

           <div className='flex  items-center gap-2 pb-4'>
                <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
                <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
                   Uzbek Plows
                </h1>
                <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[80px] mt-2'></div>
            </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>
       
            {plowsData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img src={item.image} alt={item.title} className='w-[120px] h-[120px] object-cover rounded' />
              <div className='w-full pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-2xl font-semibold text-black'>{item.title}</h3>
                  <span className='text-xl font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pizza" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-amber-600 mb-2">🍕 Pizza</h2>
        <p>Pizza bu yerda bo'ladi.</p>
      </section>

      <section id="salads" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-amber-600 mb-2">🥗 Salads</h2>
        <p>Salatlar haqida ma'lumotlar.</p>
      </section>

      <section id="pasta" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-amber-600 mb-2">🍝 Pasta</h2>
        <p>Pasta bu yerda ko‘rsatiladi.</p>
      </section>

      <section id="drinks" className="mb-20 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-amber-600 mb-2">🥤 Drinks</h2>
        <p>Ichimliklar bu yerda.</p>
      </section>
    </div>
  )
}

export default Menu