import React from 'react';

export const StudioHeader= () => {
  return (
    <header className="flex gap-5 justify-between mx-auto mt-10 mb-[51px] 3xl:mt-20 3xl:mb-[121px] w-full text-[#333333]">
      <div className="flex flex-col font-hankenGrotesk">
        <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl">
          Studio Spaces Designed for Every Story
        </h1>
        <p className="mt-4 lg:w-[50%] 3xl:w-[45%] text-xl 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal">
          Every great show needs the right atmosphere. From professional to
          personal, find your perfect stage to{' '}
          <span className="text-[#619B8A]">connect with your audience.</span>
        </p>
      </div>
    </header>
  );
};