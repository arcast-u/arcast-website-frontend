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

const MarqueeBookingSlider = () => {
  return (
    <section className='w-full bg-[#0C0C0C]'>
      <div className='max-w-[1728px] py-[0.5] 3xl:py-2 mx-auto'>
        <Marquee gradient={true} gradientColor='#0C0C0C' speed={180}>
          <div className='flex items-center md:gap-18 gap-3 pl-18'>
            {/* Wide logo 1 */}
            <Image
              src={images[0]}
              alt='y!'
              width={200}
              height={18}
              className='w-auto h-[14px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Small divider logo */}
            <Image
              src={images[1]}
              alt='business insider'
              width={13}
              height={18}
              className='w-auto h-[12px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Wide logo 2 */}
            <Image
              src={images[2]}
              alt='the guardian'
              width={300}
              height={18}
              className='w-auto h-[14px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Small divider logo */}
            <Image
              src={images[3]}
              alt='business insider'
              width={13}
              height={18}
              className='w-auto h-[12px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Wide logo 3 */}
            <Image
              src={images[4]}
              alt='vanguard'
              width={200}
              height={18}
              className='w-auto h-[14px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Small divider logo */}
            <Image
              src={images[5]}
              alt='business insider'
              width={13}
              height={18}
              className='w-auto h-[12px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Wide logo 4 */}
            <Image
              src={images[6]}
              alt='this Day'
              width={300}
              height={18}
              className='w-auto h-[14px] md:h-[18px]' // Smaller on mobile
            />
            
            {/* Small divider logo */}
            <Image
              src={images[7]}
              alt='business insider'
              width={13}
              height={18}
              className='w-auto h-[12px] md:h-[18px]' // Smaller on mobile
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeBookingSlider;