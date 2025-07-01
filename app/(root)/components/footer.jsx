'use client';
import Image from 'next/image'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <section className='bg-[#0F172B]'>
      <div className='container mx-auto px-14'>
        <div className='sm:flex sm:gap-[150px]'>
          <div className='ml-[10px] sm:ml-0 text-center sm:text-start'>
            <Image src="/logo3.png" alt="Logo" width={150} height={100} className='ml-[60px] sm:ml-0' />
            <div className='mt-[-30px]'>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Mail: agora@support.com</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Phone number: +998 (94) 001-76-53</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Address: Tashkent Yunusobod 14</p>
            </div>
          </div>

          <div className='flex pt-5 sm:pt-0 justify-between sm:gap-[150px]'>

            <div className='mt-[15px] sm:mt-[50px]'>
              <h3 className='font-semibold text-[20px] hover:text-amber-500 pb-6'>Useful link</h3>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>About Us</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Menu</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>List a them</p>
            </div>

            <div className='mt-[15px] sm:mt-[50px]'>
              <h3 className='font-semibold text-[20px] hover:text-amber-500 pb-6'>Community</h3>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Map</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Store Location</p>
              <p className='text-[15px] pb-6 font-sans hover:text-amber-500 cursor-pointer'>Photography</p>
            </div>
          </div>

          <div className='mt-[15px] sm:mt-[50px]'>
            <h3 className='font-semibold text-[20px] text-center sm:text-start hover:text-amber-500 pb-6'>Social</h3>
            <div className='flex relative justify-center sm:justify-start'>
              <input type="text" placeholder='Your Email Address' className='w-[300px] pl-4 rounded-4xl py-[13px] border-2 border-amber-500' />
              <button
                className="w-[100px] ml-[201px] absolute py-[15px] rounded-r-4xl bg-amber-500 hover:bg-amber-600 transition-all duration-300 ease-in-out text-white"
              >
                Submit
              </button>
            </div>

            <div className="flex gap-6 pt-5 justify-center sm:justify-start pb-10">
              <TelegramIcon style={{ fontSize: '35px' }} className="text-white hover:text-amber-500 transition-colors duration-300 ease-in-out cursor-pointer" />
              <InstagramIcon style={{ fontSize: '35px' }} className="text-white hover:text-amber-500 transition-colors duration-300 ease-in-out cursor-pointer" />
              <FacebookIcon style={{ fontSize: '35px' }} className="text-white hover:text-amber-500 transition-colors duration-300 ease-in-out cursor-pointer" />
              <EmailIcon style={{ fontSize: '35px' }} className="text-white hover:text-amber-500 transition-colors duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer