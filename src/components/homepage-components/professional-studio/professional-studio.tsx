import React from 'react';
import { ProfessionalStudioHeader } from './header-container';
import Carousel3D from './3d-carousel';

function ProfessionalStudio() {
  return (
    <div className='w-full lg:h-screen 3xl:h-auto  md:pt-0 lg:pt-5 3xl:pt-0 pb-2 3xl:pb-4'>
      <div className='mx-auto h-full max-w-[1728px]'></div>
        <ProfessionalStudioHeader />
        <div className='h-[50%] md:h-[80%] lg:h-[70%]'>
        
        <Carousel3D/>
        </div>
    </div>
  )
}

export default ProfessionalStudio