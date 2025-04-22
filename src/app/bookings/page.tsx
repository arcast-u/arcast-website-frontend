'use client';
import React, { useState } from 'react';
import StudioBooking from '@/components/booking-components/booking-components/booking-component';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';

const BookinPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const showCarouselOnMobile = currentStep === 0;
  return (
    <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
      <main className='w-full grid grid-cols-1 lg:flex '>
        <div
          className={` top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto ${
            showCarouselOnMobile ? 'fixed' : 'hidden md:block'
          }`}
        >
          <Carousel />
        </div>

        <div
          className={` lg:mt-0 lg:w-[35.7%] ${
            showCarouselOnMobile ? 'mt-[39vh]' : 'mt-0'
          }`}
        >
          <StudioBooking onStepChange={setCurrentStep} />
        </div>
      </main>
    </section>
  );
};

export default BookinPage;
