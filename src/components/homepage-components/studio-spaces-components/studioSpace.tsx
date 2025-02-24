import React from 'react';
import { StudioHeader } from './header';
import StudioSpacesCarousel from './studioSpaces-carousel';

function StudioSpace() {
  return (
    <div className='w-full h-screen lg:h-[120vh] border border-[#FCFCFC] pb-2 3xl:pb-6'>
      <div className='h-full mx-auto max-w-[1728px]'>
        <StudioHeader/>
        <div className='h-[50%] mt-10 md:mt-0 md:h-[70%] '>
        <StudioSpacesCarousel/>
        </div>
      </div>
    </div>
  )
}

export default StudioSpace