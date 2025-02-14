'use client'
import React from 'react'
import NavigationBar from './nav-bar';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();
  const bookSession = () => {router.push('/book-session');};
  return (
    <div className="h-screen w-full mx-auto flex flex-col bg-[url('/images/hero-bg.webp')] bg-cover">
        <NavigationBar/>
        <div className='w-[85%] mx-[21px] lg:w-[55%] lg:mx-10 mb-10 3xl:mx-[100px]  mt-auto'>
            <p className='text-[#FCFCFC] font-hankenGrotesk font-medium text-3xl leading-[39.09px] xl:text-4xl xl:leading-[45px] 3xl:text-[52px] 3xl:leading-[67.76px]'>
              Where Dubai&apos;s Bold Voices Come to Life. Dubai&apos;s World-Class  Podcast Studio.
            </p>
            <button onClick={bookSession}
                className="overflow-hidden cursor-none 3xl:mt-8 mt-6 hover:scale-105 lg:flex border border-[#FFC49D] gap-2.5 self-stretch px-3 py-2 3xl:px-4 3xl:py-3 my-auto bg-[#FF8C42] rounded-lg shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium 3xl:leading-[21.82px] 3xl:text-base "
                aria-label="Book Your Session"
                >
                Book Your Session
            </button>
        </div>
    </div>
  )
}

export default Hero