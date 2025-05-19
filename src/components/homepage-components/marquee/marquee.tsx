import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const images = [
  '/icons/marq1.svg',
  '/icons/bento.svg',
  '/icons/marq2.svg',
  '/icons/bento.svg',
  '/icons/marq1.svg',
  '/icons/bento.svg',
  '/icons/marq2.svg',
  '/icons/bento.svg',
];

const MarqueeSlider = () => {
  return (
    <section className='w-full bg-[#0C0C0C] '>
      <div className=' max-w-[1728px]  py-3 3xl:py-6 mx-auto '>
        <Marquee gradient={true} gradientColor='#0C0C0C' speed={100}>
          <div className='flex items-center md:gap-10 gap-5 pl-10 '>
            <Image
              src={images[0]}
              alt='y!'
              width={321}
              height={27}
              className='w-auto h-[27px]'
            />
            <Image
              src={images[1]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image
              src={images[2]}
              alt='the guardian'
              width={597}
              height={27}
              className='w-auto h-[27px]'
            />
            <Image
              src={images[3]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image
              src={images[4]}
              alt='vanguard'
              width={321}
              height={27}
              className='w-auto h-[27px]'
            />
            <Image
              src={images[5]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image
              src={images[6]}
              alt='this Day'
              width={597}
              height={27}
              className='w-auto h-[27px]'
            />
            <Image
              src={images[7]}
              alt='business insider'
              width={13}
              height={27}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeSlider;
