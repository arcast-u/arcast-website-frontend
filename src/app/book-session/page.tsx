import React from 'react';
import StudioBooking from '@/components/booking-components/booking-components/booking-component';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';



const BookinPage = () => {
  return (
    <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='w-full max-w-[1728px] grid grid-cols-1 lg:flex mx-auto'>
          
          <div className='fixed top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto '>
            <Carousel/>
          </div>
          
          <div className="mt-[39vh] lg:mt-0 lg:w-[35.7%]">
            <StudioBooking />
          </div>
        </main>
    </section>
  )
}

export default BookinPage