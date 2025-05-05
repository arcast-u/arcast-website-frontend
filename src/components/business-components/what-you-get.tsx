/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { GoClock } from 'react-icons/go';

const WhatYouGet = () => {
  const offers = [
    {
      icon: (
        <Image
          src={'/icons/film-icon.svg'}
          alt='film-icon'
          width={22}
          height={22}
        />
      ),
      title: '30+ short-form videos',
      description: 'Reels, TikToks, Shorts every month',
    },
    {
      icon: (
        <Image
          src={'/icons/movie-icon.svg'}
          alt='movie-icon'
          width={22}
          height={22}
        />
      ),
      title: '2–3 long-form videos',
      description: 'Perfect for YouTube content',
    },
    {
      icon: (
        <Image
          src={'/icons/building-icon.svg'}
          alt='building-icon'
          width={22}
          height={22}
        />
      ),
      title: 'High-End Studio',
      description: 'Professional quality production',
    },
    {
      icon: (
        <Image
          src={'/icons/cut-icon.svg'}
          alt='cut-icon'
          width={22}
          height={22}
        />
      ),
      title: 'Crisp Editing',
      description: 'Ready-to-post delivery',
    },
    {
      icon: <GoClock size={22} className='text-[#FF8C42]' />,
      title: 'Fast Turnaround',
      description: 'Quick delivery of content',
    },
    {
      icon: (
        <Image
          src={'/icons/circle.svg'}
          alt='circle-icon'
          width={22}
          height={22}
        />
      ),
      title: 'Tailored Content',
      description: 'Customized for your brand & audience',
    },
  ];
  return (
    <div>
      <div className='bg-[#FCFCFC] md:py-12 py-6'>
        <div className='max-w-[1024px] mx-auto p-5 flex flex-col md:items-center'>
          <h3 className='text-[#333333] font-medium font-hankenGrotesk text-3xl mdLg:text-5xl'>
            What You Get
          </h3>
          <p className='text-[#333333] font-normal font-hankenGrotesk text-lg sm:text-xl mt-4 max-w-[600px] md:text-center'>
            Professional video content production tailored to elevate your
            brand&apos;s digital presence.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 mx-auto w-full'>
            {offers.map((item, index) => (
              <div
                key={index}
                className='w-full lg:w-[480px] h-[112px] bg-[#F5F5F7] rounded-[8px] flex gap-4 items-center p-4 hover:border border-[#FF8C42] hover:shadow-sm'
              >
                <div className='bg-[#EAEAEA] w-16 h-16 rounded-[8px] flex items-center justify-center'>
                  {item.icon}
                </div>
                <div>
                  <p className='font-semibold text-base md:text-2xl text-[#333333]'>
                    {item.title}
                  </p>
                  <p className='text-[#989898] text-sm sm:text-base font-medium mt-1'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className='text-[#989898] text-sm sm:text-base mt-4'>
            Limited time slots available each month
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
