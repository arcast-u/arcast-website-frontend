import React from 'react';

export const ProfessionalStudioHeader= () => {
  return (
    <header className="flex gap-5 justify-between mx-auto px-[21px] lg:px-10 3xl:px-[100px] mt-10 mb-[51px] 3xl:mt-20 3xl:mb-[120px] w-full text-[#333333]">
      <div className="flex flex-col font-hankenGrotesk">
        <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium ">
            Studio Plus: Professional Add-on Services
        </h1>
        <p className="mt-4 lg:w-[50%] 3xl:w-[45%] font-nunitoSans text-xl 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal">
        Because <span className="text-[#619B8A]">your story deserves to be told in more ways than one.</span> 
        Make every episode work harder for your brand.
        
        </p>
      </div>
    </header>
  );
};