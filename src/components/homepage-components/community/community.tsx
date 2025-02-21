import React from 'react'
import CommunityHeader from './community-header';
import TestimonialMarquee from './testimonial';

function Community() {
  return (
    <div className='px-[21px] lg:px-10 3xl:px-[100px] mb-[51px] 3xl:mt-20'>
        <div className='max-w-[1728px] h-full mx-auto'>
            <CommunityHeader/>
            <div className='h-screen'>
            <TestimonialMarquee/>
            </div>
        </div>
    </div>
  )
}

export default Community