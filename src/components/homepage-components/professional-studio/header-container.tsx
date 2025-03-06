import React from 'react';

export const ProfessionalStudioHeader = () => {
  return (
    <header className='flex gap-5 justify-between mx-auto px-[21px] md:px-10 3xl:px-[100px] lg:mt-10  md:mb-[51px] lg:mb-0  3xl:mb-[120px] w-full text-[#333333]'>
      <div className='flex flex-col font-hankenGrotesk'>
        <h2 className='text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium '>
          Studio + Professional Add-on Services
        </h2>
        <p className='mt-4 lg:w-[50%] 3xl:w-[45%] font-nunitoSans text-xl 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal'>
          Because{' '}
          <span className='text-[#619B8A]'>
            your story deserves to be told in more ways than one.
          </span>
          Make every episode work harder for your brand.
        </p>
      </div>
    </header>
  );
};
