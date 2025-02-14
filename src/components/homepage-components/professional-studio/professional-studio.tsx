import React from 'react';
import { ProfessionalStudioHeader } from './header-container';
import Carousel3D from './3d-carousel';

function ProfessionalStudio() {
  return (
    <div className='w-full lg:h-screen 3xl:h-auto pt-12 md:pt-0 lg:pt-0 pb-2 3xl:pb-4'>
        <ProfessionalStudioHeader />
        <div className='h-[70%] 3xl:'>
        
        <Carousel3D/>
        </div>
    </div>
  )
}

export default ProfessionalStudio