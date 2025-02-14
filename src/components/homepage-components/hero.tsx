'use client'
import React from 'react'
import NavigationBar from './nav-bar';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();
  const bookSession = () => {router.push('/book-session');};
  return (
    <div className="h-screen w-full mx-auto flex flex-col md:bg-[url('/images/studio6.webp')] bg-[url('/images/studio6.png')] bg-cover">
        <NavigationBar/>
        <div className='w-[85%] mx-[21px] lg:w-[55%] lg:mx-10 mb-16 md:mb-10 3xl:mx-[100px] mt-auto'>
            <p className='text-[#FCFCFC] font-hankenGrotesk font-medium text-3xl leading-[39.09px] xl:text-4xl xl:leading-[45px] 3xl:text-[52px] 3xl:leading-[67.76px]'>
              Where Dubai&apos;s Bold Voices Come to Life. Dubai&apos;s World-Class  Podcast Studio.
            </p>
            
            <div onClick={bookSession} className="flex w-fit 3xl:mt-8 mt-6 hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#64391E] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] ">
              <button className="flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg">
                Book Your Session
              </button>
            </div>
        </div>
    </div>
  )
}

export default Hero