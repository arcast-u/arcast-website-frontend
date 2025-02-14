import React from 'react'
import CommunityHeader from './community-header';
import Image from 'next/image';

function Community() {
  return (
    <div className='px-[21px] lg:px-10 3xl:px-[100px] mb-[51px] 3xl:mt-20'>
        <CommunityHeader/>
        <div className=' md:hidden relative w-full'>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#FCFCFC] via-transparent to-[#FCFCFC]' />
            <Image 
                src="/images/community-mobile.webp" 
                alt="community" 
                width={150} 
                height={1212} 
                className="w-full "
            />
        </div>
        {/* desktop */}
        <div className=' hidden md:block relative w-full'>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-[#FCFCFC] via-transparent to-[#FCFCFC]' />
            <Image 
                src="/images/community.webp" 
                alt="community" 
                width={1000} 
                height={500} 
                className="w-full"
            />
        </div>
    </div>
  )
}

export default Community