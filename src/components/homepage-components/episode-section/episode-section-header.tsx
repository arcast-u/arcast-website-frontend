import React from 'react';

export const EpisodeSectionHeader = () => {
  return (
    <header className='flex gap-5 justify-center items-center  px-[21px] md:px-10 3xl:px-[100px] mt-10 mb-[21px] md:mb-12 3xl:mt-20 3xl:mb-[91px] w-full text-[#333333]'>
      <div className='flex flex-col font-hankenGrotesk'>
        <h2 className='text-[32px] text-center leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium '>
        Episodes That Happened Right Here
        </h2>
        <div className='w-full flex flex-row justify-center items-center '>
        <p className=' lg:w-[80%]  text-center 3xl:w-[45%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
        Watch the conversations recorded in our studio—and see how your brand could show up next.
      
        </p>
        </div>
       
      </div>
    </header>
  );
};
