import React from 'react';
import StudioBooking from '@/components/booking-components/booking-components/booking-component';
import { Carousel } from '@/components/booking-components/carousel-components/carousel';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const BookinPage = (props: Props) => {
  return (
    <section className='w-full h-screen overflow-hidden'>
        <main className='max-w-[1728px] h-screen relative flex flex-wrap lg:flex-nowrap mx-auto'>
          <Link href='/' className='absolute top-6 left-5 border-red-800 z-10'>
            <Image
              src='/icons/logo.svg'
              alt='logo'
              width={140}
              height={40}
              className='object-cover'
            />
          </Link>
          <Carousel/>
          <StudioBooking/>
        </main>
    </section>
  )
}

export default BookinPage