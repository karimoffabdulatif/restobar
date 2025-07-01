import React from 'react'

const Btable = () => {
    return (
        <section className='pt-10 pb-[200px]'>
            <div className='container mx-auto px-6 sm:px-10'>

                <div className='flex justify-center items-center gap-2 pb-4'>
                    <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
                        Book a table
                    </h1>
                    <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                </div>
                <div className='bg-[#0F172B] rounded-[5px] px-5 sm:px-14 py-8'>
                    <p className='text-white text-xl sm:text-2xl text-center'>This address is specifically for you. Now, please fill in the following fields with your personal information.
                        After that, our waiters will contact you, and you will be able to share your preferences with them.
                    </p>
                    <p className='text-amber-500 text-[20px] sm:text-4xl text-center'>We are happy to have you!</p>

                    <div className='block sm:flex sm:gap-5 justify-center ml-2 pt-[30px] '>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="bg-gray-200 rounded-[5px] w-[315px] px-2 text-[20px] sm:w-[552px] mb-3 sm:text-2xl sm:px-6 py-[10px] text-black"
                        />
                        <input
                            type="text"
                            placeholder="Your phone number"
                            className="bg-gray-200 rounded-[5px] w-[315px] px-2 text-[20px] sm:w-[552px]  sm:text-2xl sm:px-6 py-[10px] text-black"
                        />

                    </div>
                    <div className='flex justify-center pt-4'>
                        <button className="bg-amber-500 rounded-[5px] py-3 text-[20px] w-[315px] sm:text-2xl sm:px-[463px] sm:py-2 hover:bg-amber-600 hover:scale-105 transition duration-300 ease-in-out">
                            Confirm your booking
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Btable