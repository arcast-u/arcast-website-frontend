'use client';
import React, { useEffect } from 'react';
// import {GoogleAnalytics} from '@next/third-parties/google';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import { TiCancel } from 'react-icons/ti';
import { useRouter, useSearchParams } from 'next/navigation';

const BookingFailedPage = () => {
  const router = useRouter();
  const onClose = () => router.push('/bookings');

  const searchParams = useSearchParams();

  useEffect(() => {
    // Extract all query parameters into an object
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  }, [searchParams]);
  return (
    <>
      {/* <GoogleAnalytics gaId="G-M1E9W0FZ76" /> */}
      <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='w-full grid grid-cols-1 lg:flex '>
          <div className='fixed top-0 left-0 z-[20] w-full h-[39vh] lg:w-[64.3%] lg:static lg:h-auto '>
            <Carousel />
          </div>

          <div className='mt-[39vh] lg:mt-0 lg:w-[35.7%]'>
            <div className='w-full mt-5 '>
              <button
                onClick={onClose}
                className=' ml-4 inline-block w-fit font-nunitoSans font-normal text-xs 3xl:text-base 3xl:leading-[21.82px] leading-[16.37px] 3xl:py-3 3xl:px-8 3xl:border  px-6 py-2 text-[#333333] rounded-lg border-[0.8px] border-[#989898] hover:scale-105'
              >
                Back
              </button>
            </div>
            <div className='flex flex-col items-center justify-center h-full mx-4'>
              <TiCancel className='text-red-600' size={100} />
              <p className='mb-4 text-2xl 3xl:text-[32px] font-hankenGrotesk font-medium text-[#333333] text-center'>
                Booking Failed
              </p>
              <p className='mb-8 font-nunitoSans font-normal text-lg 3xl:text-xl text-center text-[#333333] max-w-md'>
                Something went wrong. Please try again.
              </p>
              {/* Contact Information */}
              <div className='text-center text-base 3xl:text-xl '>
                <p className='text-[#989898] mb-2'>
                  If you need assistance, contact us at
                </p>
                <a
                  href='mailto:booking@arcast.studio'
                  className='text-blue-500 hover:text-blue-600 block mb-1'
                >
                  booking@arcast.studio
                </a>
                <a
                  href='tel:+971508249795'
                  className='text-blue-500 hover:text-blue-600'
                >
                  +971 508249795
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default BookingFailedPage;
