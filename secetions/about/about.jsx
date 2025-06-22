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
        <section className='container mx-auto px-10 pt-14 pb-[100px]'>
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
                            className='sm:w-[280px] sm:h-[280px]'
                            custom={0}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                        <motion.img
                            src="/ab3.jpg"
                            alt="about-img"
                            className='h-[200px] w-[200px] mt-[80px]'
                            custom={1}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                    </div>

                    <div className='flex gap-5 pt-5 pl-22'>
                        <motion.img
                            src="/ab2.jpg"
                            alt="about-img"
                            width={200}
                            height={200}
                            className='h-[200px] w-[200px]'
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
                            className='w-[280px] h-[280px]'
                            custom={3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants}
                        />
                    </div>
                </div>

                <motion.div
                    className='T pt-[200px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className='flex gap-2 pb-6'>
                        <h3 className='text-black text-5xl varela-round-regula'>Welcome to</h3>
                        <img src="/logo.svg" alt="logo" className='w-[160px] h-auto' />
                    </div>
                    <div className='w-[500px]'>
                        <p className='text-xm text-black pb-5 opacity-70'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>
                        <p className='text-xm text-black opacity-70'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About
