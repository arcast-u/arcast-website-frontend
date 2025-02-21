'use client'
import React, {useState, useEffect} from 'react'
import NavigationBar from '@/components/homepage-components/nav-bar';
import TabList from '@/components/booking-components/booking-components/navigation-tabList';
import { PricingDisplay } from '@/components/packages-components/pricingDisplay';
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
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
    : ['Starter Bundle', 'Premium Bundle', 'Ultimate Bundle'];

  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar/>
        <h1 className='mt-[100px] 3xl:mt-[134px] text-center mb-4 font-medium text-[32px] leading-[41.7px] 3xl:text-[64px] 3xl:leading-[83.39px] font-hankenGrotesk text-[#333333]'>Our Bundles</h1>
        <p className='px-[21px] md:px-0 md:w-[65%] lg:[55%] mb-[34px] 3xl:mb-16 mx-auto text-center font-nunitoSans text-xl leading-[27.8px] 3xl:text[28px] 3xl:leading-10 text-[#333333]'>
          Bundle our most popular add-on services into packages that save you more. 
        Choose the combination that works for you.</p>
        <TabList tabs={tabNames} currentStep={currentStep} setActiveIndex={setCurrentStep} />
        {currentStep === 0 && <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
          <div className='my-8 3xl:my-[50px] gap-16 mx-auto flex items-center'>
            <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-[40px] leading-[52px] 3xl:leading-[62.54px]'>2400 AED</p>
            <div className=" w-fit  hidden hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] ">
              <button className="flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg">
                Select Your Bundle
              </button>
            </div>
          </div>
          <PricingDisplay/>
        </div>}
        {currentStep === 1 && <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
          <div className='my-8 3xl:my-[50px] gap-16 mx-auto flex items-center'>
            <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-[40px] leading-[52px] 3xl:leading-[62.54px]'>4800 AED</p>
            <div className=" w-fit  hidden hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] ">
              <button className="flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg">
                Select Your Bundle
              </button>
            </div>
          </div>
          <PricingDisplayPremium/>
        </div>}
        {currentStep === 2 && <div className='w-full px-[21px] flex flex-col justify-center mb-10'>
          <div className='my-8 3xl:my-[50px] gap-16 mx-auto flex items-center'>
            <p className='text-[#333333] font-medium font-hankenGrostek 3xl:text-5xl text-[40px] leading-[52px] 3xl:leading-[62.54px]'>14,520 AED</p>
            <div className=" w-fit  hidden hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] ">
              <button className="flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg">
                Select Your Bundle
              </button>
            </div>
          </div>
          <PricingDisplayUltimate/>
        </div>}
      </div>
      <Community/>
      <NewsletterSignup/>
      <Footer/>
    </div>
  )
}

export default Page;