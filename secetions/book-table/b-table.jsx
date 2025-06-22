import React from 'react'

const Btable = () => {
    return (
        <section className='pt-10 pb-[200px]'>
            <div className='container mx-auto px-8 sm:px-10'>

                <div className='flex justify-center items-center gap-2 pb-4'>
                    <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
                        Book a table
                    </h1>
                    <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                </div>
                <div className='bg-[#0F172B] rounded-[5px] px-14 py-8'>
                    <p className='text-white text-2xl text-center'>This address is specifically for you. Now, please fill in the following fields with your personal information.
                        After that, our waiters will contact you, and you will be able to share your preferences with them.
                    </p>
                    <p className='text-amber-500 text-4xl text-center'>We are happy to have you!</p>

                    <div className='flex gap-5 justify-center pt-[30px] '>
                        <input type="text" className='bg-gray-100 rounded-[5px] px-[180px] py-[10px]' />
                        <input type="text" className='bg-gray-100 rounded-[5px] px-[180px] py-[10px]' />
                    </div>
                        <div className='flex justify-center pt-4'>
                            <button className='bg-amber-500 rounded-[5px] text-2xl px-[463px] py-2'>Confirm your booking</button>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Btable