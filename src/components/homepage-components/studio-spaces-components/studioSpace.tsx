import React from 'react';
import { StudioHeader } from './header';
import StudioSpacesCarousel from './studioSpaces-carousel';

function StudioSpace() {
  return (
    <div className='w-full h-screen lg:h-[120vh] border border-[#FCFCFC] pb-2 3xl:pb-6'>
        <StudioHeader/>
        <div className='h-[70%] '>
        <StudioSpacesCarousel/>
        </div>

    </div>
  )
}

export default StudioSpace