'use client'
import React from 'react';
import { LinkedInScripts } from '@/lib/linkedinscript';
import { AnalyticScripts } from '@/lib/analyticScripts';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import BookingConfirmation from '@/components/booking-components/booking-components/step-three-booking-components/bookingConfirmation';
import {GoogleScripts} from '@/lib/googlescripts';


const BookinPage = () => {
  return (
    <>
    <GoogleScripts/>
    <LinkedInScripts/>
    <AnalyticScripts/>
    <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='w-full grid grid-cols-1 lg:flex '>
          
          <div className='fixed top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto '>
            <Carousel/>
          </div>
          
          <div className="mt-[39vh] lg:mt-0 lg:w-[35.7%]">
            <BookingConfirmation/>
          </div>
        </main>
    </section>
    </>
  )
}

export default BookinPage