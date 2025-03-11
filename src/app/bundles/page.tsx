'use client';
import React, { useState, useEffect } from 'react';
import NavigationBar from '@/components/homepage-components/nav-bar';
import TabList from '@/components/booking-components/booking-components/navigation-tabList';
import { PricingDisplay } from '@/components/packages-components/pricingDisplay';
import Footer from '@/components/homepage-components/footer/footer';
import Community from '@/components/homepage-components/community/community';
import { PricingDisplayPremium } from '@/components/packages-components/pricingDisplayTwo';
import { PricingDisplayUltimate } from '@/components/packages-components/pricingDisplayThree';

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768);

    // Add window resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tabNames = isMobile
    ? ['Basic', 'Premium', 'VIP']
    : ['Launch Bundle', 'Growth Bundle', 'Elite Bundle'];

  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar />
        <h2 className='mt-[100px] 3xl:mt-[134px] text-center mb-4 font-medium text-[32px] leading-[41.7px] 3xl:text-[64px] 3xl:leading-[83.39px] font-hankenGrotesk text-[#333333]'>
          Our Bundles
        </h2>
        <p className='px-[21px] md:px-0 max-w-[540px] mb-[34px] 3xl:mb-16 mx-auto text-center font-nunitoSans text-xl lg:text-2xl leading-[27.8px] 3xl:text[28px] 3xl:leading-10 text-[#333333]'>
          Simplified, High-Quality Podcasting – Choose the Plan That Fits Your
          Vision
        </p>
        <div className='w-[90%] md:w-[70%] lg:w-[40%] mx-auto relative'>
          <p
            className={`text-center ${
              tabNames[currentStep] === 'Launch Bundle'
                ? 'place-self-start'
                : tabNames[currentStep] === 'Growth Bundle'
                ? 'place-self-center'
                : 'place-self-end'
            } text-xs text-[#FF8C42] p-2 bg-[#F5F5F7] rounded-t-[8px] w-[76px] `}
          >
            Save{' '}
            {tabNames[currentStep] === 'Launch Bundle'
              ? '15%'
              : tabNames[currentStep] === 'Growth Bundle'
              ? '15%'
              : '20%'}
          </p>
        </div>
        <TabList
          tabs={tabNames}
          currentStep={currentStep}
          setActiveIndex={setCurrentStep}
        />
        {currentStep === 0 && (
          <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
            <div className='my-8 3xl:my-[50px] gap-8 md:gap-16 mx-auto flex items-center justify-between w-[90%] md:w-[70%] lg:w-[40%] '>
              <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-2xl md:text-[40px] leading-[52px] 3xl:leading-[62.54px]'>
                AED 4,800
              </p>
              <div className=' w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '>
                <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
                  Select Your Bundle
                </button>
              </div>
            </div>
            <PricingDisplay />
          </div>
        )}
        {currentStep === 1 && (
          <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
            <div className='my-8 3xl:my-[50px] gap-8 md:gap-16 lg:gap-12 mx-auto flex items-center justify-between w-[90%] md:w-[70%] lg:w-[40%] '>
              <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-2xl md:text-[40px] leading-[52px] 3xl:leading-[62.54px]'>
                AED 10,500
              </p>
              <div className=' w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '>
                <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
                  Select Your Bundle
                </button>
              </div>
            </div>
            <PricingDisplayPremium />
          </div>
        )}
        {currentStep === 2 && (
          <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
            <div className='my-8 3xl:my-[50px] gap-16 mx-auto flex items-center justify-between w-[90%] md:w-[70%] lg:w-[40%] '>
              <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-2xl md:text-[40px] leading-[52px] 3xl:leading-[62.54px]'>
                AED 14,240
              </p>
              <div className=' w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '>
                <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
                  Select Your Bundle
                </button>
              </div>
            </div>
            <PricingDisplayUltimate />
          </div>
        )}
      </div>
      <Community />
      {/* <NewsletterSignup /> */}
      <Footer />
    </div>
  );
};

export default Page;
