'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: 'easeOut',
                type: 'tween',
            },
        }),
    }


    return (
        <section className='bg-gray-50 py-8'>
          <div className='container mx-auto px-8 sm:px-10'>
              <div className='flex justify-center items-center gap-2 pb-4'>
                <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
                <h1 className='text-2xl sm:text-3xl font-bold text-amber-500 px-2 sm:px-4 lobster-regular'>
                    About Us
                </h1>
                <div className='border-t border-2 border-amber-500 w-[80px] sm:w-[100px] mt-2'></div>
            </div>

            <div className=' sm:flex justify-between pt-[30px]'>
                <div className='block'>
                    <div className='flex gap-5'>
                        <motion.img
                            src="/ab1.jpg"
                            alt="about-img"
                            className='w-[150px] h-[150px] rounded-[5px] sm:w-[280px] sm:h-[280px]'
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                        <motion.img
                            src="/ab3.jpg"
                            alt="about-img"
                            className='w-[110px] h-[110px] rounded-[5px]  sm:h-[200px] sm:w-[200px] mt-[40px] sm:mt-[80px]'
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                    </div>

                    <div className='flex gap-5 pt-5 ml-[40px] sm:pl-22'>
                        <motion.img
                            src="/ab2.jpg"
                            alt="about-img"
                            width={200}
                            height={200}
                            className='w-[110px] h-[110px] rounded-[5px]  sm:h-[200px] sm:w-[200px] '
                            custom={2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                        <motion.img
                            src="/ab4.jpg"
                            alt="about-img"
                            width={200}
                            height={200}
                            className='w-[150px] h-[150px] rounded-[5px] sm:w-[280px] sm:h-[280px]'
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                    </div>
                </div>

                <motion.div
                    className='T pt-[50px] text-center  sm:pt-[200px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className='flex gap-2 justify-center pb-6'>
                        <h3 className='text-black text-4xl sm:text-5xl varela-round-regula'>Welcome to</h3>
                        <img src="/logo.svg" alt="logo" className='w-[120px] sm:w-[160px] h-auto' />
                    </div>
                    <div className='w-[350px] pr-3 sm:pr-0 sm:w-[500px]'>
                        <p className='text-xm text-black pb-5 opacity-70'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>
                        <p className='text-xm text-black opacity-70'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                </motion.div>

            </div>
          </div>
        </section>
    )
}

export default About
