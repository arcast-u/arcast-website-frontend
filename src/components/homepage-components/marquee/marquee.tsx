import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const images = [
  '/icons/text1.svg',
  '/icons/bento.svg',
  '/icons/text2.svg',
  '/icons/bento.svg',
  '/icons/text3.svg',
  '/icons/bento.svg',
  '/icons/text4.svg',
  '/icons/bento.svg',
];

const MarqueeSlider =() => {
  return (
    <section className='w-full pb-[37px]'>
      <div className=' bg-[#0C0C0C] py-3 3xl:py-6 mx-auto '>
        <Marquee gradient={true} gradientColor='#0C0C0C' speed={100}>
          <div className='flex items-center md:gap-10 gap-5 pl-10 '>
            <Image src={images[0]} alt='y!' width={516} height={27} className='w-auto' />
            <Image
              src={images[1]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image src={images[2]} alt='the guardian' width={381} height={27} />
            <Image
              src={images[3]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image src={images[4]} alt='vanguard' width={321} height={27} />
            <Image
              src={images[5]}
              alt='business insider'
              width={13}
              height={27}
            />
            <Image src={images[6]} alt='this Day' width={229} height={27} />
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
}

export default MarqueeSlider;
