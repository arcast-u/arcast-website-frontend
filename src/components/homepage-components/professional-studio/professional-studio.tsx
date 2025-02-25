import React from 'react';
import { ProfessionalStudioHeader } from './header-container';
import Carousel3D from './3d-carousel';

function ProfessionalStudio() {
  return (
    <div className='w-full lg:h-screen ipadPro:h-fit ipadPro:pt-0 3xl:h-auto  md:pt-0 lg:pt-5 3xl:pt-0 pb-2 3xl:pb-4'>
      <div className='max-w-[1728px] h-full mx-auto'>
        <ProfessionalStudioHeader />
        <div className='h-[50%] md:h-[80%] lg:h-[70%]'>
        
        <Carousel3D/>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalStudio