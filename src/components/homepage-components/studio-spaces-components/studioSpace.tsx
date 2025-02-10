import React from 'react';
import { StudioHeader } from './header';
import StudioSpacesCarousel from './studioSpaces-carousel';

function StudioSpace() {
  return (
    <div className='w-full h-screen px-[21px] lg:px-10 3xl:px-[100px]'>
        <StudioHeader/>
        <StudioSpacesCarousel/>

    </div>
  )
}

export default StudioSpace