'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

function Video() {
  const pathname = usePathname();
  return (
    <div className='pt-10 3xl:pt-20 pb-6 px-[21px] overflow-hidden rounded-2xl lg:h-screen w-full lg:px-10 3xl:px-[100px]'>
        <video src="/video/video.mp4" poster={pathname === '/about-us' ? '/images/about.webp' : '/images/welcome.png'} controls={true} className='w-full rounded-2xl object-cover h-full'/>
    </div>
  )
}

export default Video