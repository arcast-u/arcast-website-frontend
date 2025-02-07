import React from 'react';
import StudioBooking from '@/components/booking-components/booking-components/booking-component';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import Image from 'next/image';
import Link from 'next/link';


const BookinPage = () => {
  return (
    <section className='w-full lg:h-screen bg-[#FCFCFC] lg:overflow-hidden'>
        <main className='max-w-[1728px] relative grid grid-cols2 lg:flex mx-auto'>
          <Link href='/' className='fixed top-5 left-5 3xl:top-6 3xl:left-5 border-red-800 z-30'>
            <Image
              src='/icons/logo.svg'
              alt='logo'
              width={84}
              height={23.9}
              className='object-cover lg:h-10 lg:w-[140px]'
            />
          </Link>
          <div className='fixed top-0 left-0 z-[20] w-full h-[39.vh] lg:static lg:h-auto lg:w-auto'>
            <Carousel/>
          </div>
          
          <div className="mt-[39vh] lg:mt-0">
            <StudioBooking />
          </div>
        </main>
    </section>
  )
}

export default BookinPage