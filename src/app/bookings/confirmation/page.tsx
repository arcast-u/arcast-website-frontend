'use client';
import React, { Suspense } from 'react';
// import {GoogleAnalytics} from '@next/third-parties/google';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import BookingConfirmationContent from './content';
import Script from 'next/script';

const BookingConfirmationPage = () => {
  return (
    <>
     <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16991448779"
      />
      <Script id="google-ads-conversion-tracking" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'AW-16991448779');
        `}
      </Script>
      {/* <GoogleAnalytics gaId="G-M1E9W0FZ76" /> */}
      <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='w-full grid grid-cols-1 lg:flex '>
          <div className='fixed top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto '>
            <Carousel />
          </div>

          <div className='mt-[39vh] lg:mt-0 lg:w-[35.7%]'>
            <Suspense fallback={<div className='p-4'>Loading ...</div>}>
              <BookingConfirmationContent />
            </Suspense>
          </div>
        </main>
      </section>
    </>
  );
};

export default BookingConfirmationPage;
