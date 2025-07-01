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

  const steyksData = [
    {
      id: 1,
      title: "Ribeye Steak",
      price: 145,
      image: "/steyk.jpg",
      description: "A juicy and flavorful cut known for its marbling. Grilled to perfection for meat lovers."
    },
    {
      id: 2,
      title: "T-Bone Steak",
      price: 160,
      image: "/steyk.jpg",
      description: "A combination of tenderloin and strip steak, offering two textures in one."
    },
    {
      id: 3,
      title: "Filet Mignon",
      price: 180,
      image: "/steyk.jpg",
      description: "The most tender cut of beef, buttery soft and served with a rich sauce."
    },
    {
      id: 4,
      title: "Sirloin Steak",
      price: 130,
      image: "/steyk.jpg",
      description: "Lean and flavorful, this steak is a favorite for its great balance and taste."
    },
    {
      id: 5,
      title: "Porterhouse Steak",
      price: 175,
      image: "/steyk.jpg",
      description: "A larger version of the T-bone, perfect for sharing with a rich, meaty flavor."
    },
    {
      id: 6,
      title: "New York Strip",
      price: 150,
      image: "/steyk.jpg",
      description: "A classic cut known for its firmness and bold beefy flavor."
    },
    {
      id: 7,
      title: "Tomahawk Steak",
      price: 200,
      image: "/steyk.jpg",
      description: "A show-stopping bone-in ribeye with dramatic presentation and intense flavor."
    },
    {
      id: 8,
      title: "Flank Steak",
      price: 125,
      image: "/steyk.jpg",
      description: "Lean and flavorful, best served medium-rare and sliced against the grain."
    }
  ];

  const saladsData = [
    {
      id: 1,
      title: "Greek Salad",
      price: 45,
      image: "/salad.jpg",
      description: "Fresh tomatoes, cucumbers, olives, feta cheese, and red onions with olive oil dressing."
    },
    {
      id: 2,
      title: "Caesar Salad",
      price: 50,
      image: "/salad.jpg",
      description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese."
    },
    {
      id: 3,
      title: "Garden Salad",
      price: 35,
      image: "/salad.jpg",
      description: "A mix of fresh greens, carrots, tomatoes, cucumbers, and choice of dressing."
    },
    {
      id: 4,
      title: "Chicken Salad",
      price: 60,
      image: "/salad.jpg",
      description: "Grilled chicken breast over lettuce, cherry tomatoes, and cucumbers with vinaigrette."
    },
    {
      id: 5,
      title: "Tuna Salad",
      price: 55,
      image: "/salad.jpg",
      description: "Flaked tuna with greens, boiled egg, olives, and a light lemon-mayo dressing."
    },
    {
      id: 6,
      title: "Coleslaw",
      price: 30,
      image: "/salad.jpg",
      description: "Shredded cabbage and carrots in a creamy dressing, perfect as a side."
    },
    {
      id: 7,
      title: "Caprese Salad",
      price: 50,
      image: "/salad.jpg",
      description: "Sliced fresh mozzarella, tomatoes, and basil, drizzled with balsamic glaze."
    },
    {
      id: 8,
      title: "Quinoa Salad",
      price: 65,
      image: "/salad.jpg",
      description: "Healthy mix of quinoa, cherry tomatoes, cucumbers, parsley, and lemon dressing."
    }
  ];



  const hookahsData = [
    {
      id: 1,
      title: "Apple Hookah",
      price: 80,
      image: "/hookah.jpg",
      description: "A smooth and fruity apple flavor that offers a refreshing and classic smoke."
    },
    {
      id: 2,
      title: "Double Apple",
      price: 85,
      image: "/hookah.jpg",
      description: "A traditional mix of red and green apples with a sweet and spicy aroma."
    },
    {
      id: 3,
      title: "Mint Chill",
      price: 90,
      image: "/hookah.jpg",
      description: "Cool and refreshing mint blend that provides a relaxing experience."
    },
    {
      id: 4,
      title: "Grape Escape",
      price: 85,
      image: "/hookah.jpg",
      description: "Sweet grape flavor with smooth smoke, perfect for social gatherings."
    },
    {
      id: 5,
      title: "Blueberry Blast",
      price: 95,
      image: "/hookah.jpg",
      description: "A burst of juicy blueberry flavor with a soft aftertaste."
    },
    {
      id: 6,
      title: "Lemon Mint",
      price: 90,
      image: "/hookah.jpg",
      description: "Tangy lemon blended with fresh mint for a crisp, citrusy smoke."
    },
    {
      id: 7,
      title: "Watermelon Freeze",
      price: 100,
      image: "/hookah.jpg",
      description: "Cool watermelon flavor combined with ice-cold freshness."
    },
    {
      id: 8,
      title: "Mango Tango",
      price: 95,
      image: "/hookah.jpg",
      description: "Sweet tropical mango with a hint of citrus twist for a vibrant session."
    }
  ];


  const drinksData = [
  {
    id: 1,
    title: "Coca-Cola",
    price: 15,
    image: "/drinks.jpg",
    description: "Classic fizzy cola drink served chilled for ultimate refreshment."
  },
  {
    id: 2,
    title: "Pepsi",
    price: 15,
    image: "/drinks.jpg",
    description: "A bold and sweet cola with a refreshing taste to energize your meal."
  },
  {
    id: 3,
    title: "Fanta Orange",
    price: 15,
    image: "/drinks.jpg",
    description: "Fruity orange soda, sweet and sparkling, perfect for a summer vibe."
  },
  {
    id: 4,
    title: "Sprite",
    price: 15,
    image: "/drinks.jpg",
    description: "Lemon-lime soda with a clean, crisp taste to refresh your mood."
  },
  {
    id: 5,
    title: "Iced Tea Lemon",
    price: 18,
    image: "/drinks.jpg",
    description: "Chilled black tea with a splash of lemon – smooth and thirst-quenching."
  },
  {
    id: 6,
    title: "Mojito (Non-Alcoholic)",
    price: 22,
    image: "/drinks.jpg",
    description: "Minty lime drink with soda and crushed ice for a cool refreshment."
  },
  {
    id: 7,
    title: "Fresh Orange Juice",
    price: 25,
    image: "/drinks.jpg",
    description: "Freshly squeezed oranges, rich in vitamin C and full of flavor."
  },
  {
    id: 8,
    title: "Mango Smoothie",
    price: 28,
    image: "/drinks.jpg",
    description: "Creamy blend of ripe mangoes and yogurt, served chilled."
  }
];





  return (
    <div className="px-4 sm:px-14 container mx-auto pb-14">
      <h1 className="text-4xl pt-4 lobster-regular font-bold mb-10 text-center text-amber-500">
        Menu Sections
      </h1>

      <section id="plows" className="mb-20 scroll-mt-24 border-amber-500 border-2 px-4 py-4 rounded-2xl bg-gray-100">
        <div className='flex  items-center mx-[60px] sm:mx-0 gap-2 pb-4'>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
          <h1 className='text-2xl sm:text-3xl font-bold text-amber-500  sm:px-4 lobster-regular'>
            Uzbek Plows
          </h1>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>

          {plowsData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img
                src={item.image}
                alt={item.title}
                className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded'
              />
              <div className='w-full sm:pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-[20px] sm:text-2xl font-semibold text-black'>
                    <span className="block sm:hidden">
                      {item.title.split(" ").length > 1.5
                        ? item.title.split(" ").slice(0, 1.5).join(" ") + "..."
                        : item.title}
                    </span>
                    <span className="hidden sm:block">
                      {item.title}
                    </span>
                  </h3>
                  <span className='text-[18px] font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>
                  <span className="block sm:hidden">
                    {item.description.split(" ").length > 5
                      ? item.description.split(" ").slice(0, 5).join(" ") + "..."
                      : item.description}
                  </span>
                  <span className="hidden sm:block">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="steyks" className="mb-20 scroll-mt-24 border-amber-500 border-2 px-4 py-4 rounded-2xl bg-gray-100">
        <div className='flex  items-center mx-[100px] sm:mx-0 gap-2 pb-4'>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
          <h1 className='text-2xl sm:text-3xl font-bold text-amber-500  sm:px-4 lobster-regular'>
            Steyks
          </h1>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>

          {steyksData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img
                src={item.image}
                alt={item.title}
                className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded'
              />
              <div className='w-full sm:pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-[20px] sm:text-2xl font-semibold text-black'>
                    <span className="block sm:hidden">
                      {item.title.split(" ").length > 1.5
                        ? item.title.split(" ").slice(0, 1.5).join(" ") + "..."
                        : item.title}
                    </span>
                    <span className="hidden sm:block">
                      {item.title}
                    </span>
                  </h3>
                  <span className='text-[18px] font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>
                  <span className="block sm:hidden">
                    {item.description.split(" ").length > 5
                      ? item.description.split(" ").slice(0, 5).join(" ") + "..."
                      : item.description}
                  </span>
                  <span className="hidden sm:block">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="salads" className="mb-20 scroll-mt-24 border-amber-500 border-2 px-4 py-4 rounded-2xl bg-gray-100">
        <div className='flex  items-center mx-[100px] sm:mx-0 gap-2 pb-4'>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
          <h1 className='text-2xl sm:text-3xl font-bold text-amber-500  sm:px-4 lobster-regular'>
            Salads
          </h1>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>

          {saladsData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img
                src={item.image}
                alt={item.title}
                className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded'
              />
              <div className='w-full sm:pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-[20px] sm:text-2xl font-semibold text-black'>
                    <span className="block sm:hidden">
                      {item.title.split(" ").length > 1.5
                        ? item.title.split(" ").slice(0, 1.5).join(" ") + "..."
                        : item.title}
                    </span>
                    <span className="hidden sm:block">
                      {item.title}
                    </span>
                  </h3>
                  <span className='text-[18px] font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>
                  <span className="block sm:hidden">
                    {item.description.split(" ").length > 5
                      ? item.description.split(" ").slice(0, 5).join(" ") + "..."
                      : item.description}
                  </span>
                  <span className="hidden sm:block">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="drinks" className="mb-20 scroll-mt-24 border-amber-500 border-2 px-4 py-4 rounded-2xl bg-gray-100">
        <div className='flex  items-center mx-[100px] sm:mx-0 gap-2 pb-4'>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
          <h1 className='text-2xl sm:text-3xl font-bold text-amber-500  sm:px-4 lobster-regular'>
            Drinks
          </h1>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>

          {drinksData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img
                src={item.image}
                alt={item.title}
                className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded'
              />
              <div className='w-full sm:pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-[20px] sm:text-2xl font-semibold text-black'>
                    <span className="block sm:hidden">
                      {item.title.split(" ").length > 1.5
                        ? item.title.split(" ").slice(0, 1.5).join(" ") + "..."
                        : item.title}
                    </span>
                    <span className="hidden sm:block">
                      {item.title}
                    </span>
                  </h3>
                  <span className='text-[18px] font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>
                  <span className="block sm:hidden">
                    {item.description.split(" ").length > 5
                      ? item.description.split(" ").slice(0, 5).join(" ") + "..."
                      : item.description}
                  </span>
                  <span className="hidden sm:block">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="hookah" className="mb-20 scroll-mt-24 border-amber-500 border-2 px-4 py-4 rounded-2xl bg-gray-100">
        <div className='flex  items-center mx-[100px] sm:mx-0 gap-2 pb-4'>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
          <h1 className='text-2xl sm:text-3xl font-bold text-amber-500  sm:px-4 lobster-regular'>
            Hookah
          </h1>
          <div className='border-t border-2 border-amber-500 w-[30px] sm:w-[80px] mt-2'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 pt-4'>

          {hookahsData.map((item) => (
            <div key={item.id} className='flex gap-6'>
              <img
                src={item.image}
                alt={item.title}
                className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded'
              />
              <div className='w-full sm:pt-4'>
                <div className='flex justify-between pb-2'>
                  <h3 className='text-[20px] sm:text-2xl font-semibold text-black'>
                    <span className="block sm:hidden">
                      {item.title.split(" ").length > 1.5
                        ? item.title.split(" ").slice(0, 1.5).join(" ") + "..."
                        : item.title}
                    </span>
                    <span className="hidden sm:block">
                      {item.title}
                    </span>
                  </h3>
                  <span className='text-[18px] font-bold text-amber-500'>$ {item.price}</span>
                </div>
                <div className='border text-gray-400 mb-2'></div>
                <p className='text-[16px] text-gray-500 font-serif'>
                  <span className="block sm:hidden">
                    {item.description.split(" ").length > 5
                      ? item.description.split(" ").slice(0, 5).join(" ") + "..."
                      : item.description}
                  </span>
                  <span className="hidden sm:block">
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Menu