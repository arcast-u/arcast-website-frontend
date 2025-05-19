'use client';

import React, { useState } from 'react';
import StudioBooking from '@/components/booking-components/booking-components/booking-component';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import MarqueeSlider from '@/components/homepage-components/marquee/marquee';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const showCarouselOnMobile = currentStep === 0;
  
  return (
    <div className="relative max-h-[100vh] flex flex-col">
      {/* Main content wrapper */}
      <div className=" fixed top-0 left-0 right-0 w-full z-50">
        <MarqueeSlider />
      </div>
      <section className='w-full flex-grow bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='w-full grid grid-cols-1 lg:flex'>
          <div
            className={`top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto ${
              showCarouselOnMobile ? 'fixed' : 'hidden md:block'
            }`}
          >
            <Carousel />
          </div>
          
          <div
            className={`lg:mt-0 lg:w-[35.7%] ${
              showCarouselOnMobile ? 'mt-[39vh]' : 'mt-0'
            } pb-16`} // Added padding bottom to ensure content doesn't overlap with marquee
          >
            <StudioBooking onStepChange={setCurrentStep} />
          </div>
        </main>
      </section>
      
     
    
    </div>
  );
};

export default BookingPage;