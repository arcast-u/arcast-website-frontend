'use client';

import NavigationBar from '@/components/homepage-components/nav-bar';
import FeatureGrid from '@/components/membership-components/how-it-works-components/featureGrid';
import Community from '@/components/homepage-components/community/community';
import Footer from '@/components/homepage-components/footer/footer';
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
import React, { useState } from 'react';
import BasicPricingTable from '@/components/membership-components/Basic-pricing-table';

const Page = () => {
  const [selectedMembership, setSelectedMembership] = useState<
    'Basic' | 'Standard' | 'Premium'
  >('Basic');
  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar />
        <div className='px-[21px] md:px-10 3xl:px-[100px]'>
          <h2 className='mt-[100px] 3xl:mt-[134px] text-center mb-4 font-semibold text-[32px] leading-[41.7px] 3xl:text-[64px] 3xl:leading-[83.39px] font-hankenGrotesk text-[#333333]'>
            Memberships
          </h2>
          <p className='px-[21px] md:px-0 md:w-[65%] lg:[55%] mb-[34px] 3xl:mb-16 mx-auto text-center font-nunitoSans text-xl leading-[27.8px] 3xl:text[28px] 3xl:leading-10 text-[#333333]'>
            Unlock Exclusive Discounts, Priority Access, and Premium Perks with
            Our Podcast Memberships
          </p>
          <div className='max-w-[752px] h-[61px] mx-auto bg-[#F5F5F7] rounded-[8px] mb-6 flex justify-between items-center'>
            <p
              onClick={() => setSelectedMembership('Basic')}
              className={` px-4 py-2 text-base mdLg:text-lg flex items-center justify-center h-[57px] w-[249.33px] ${
                selectedMembership === 'Basic'
                  ? 'bg-gradient-to-r from-[#F3F3F3] to-transparent rounded-[8px] border border-white shadow-md text-[#333333]'
                  : 'text-[#989898] '
              }`}
            >
              Basic
            </p>
            <p
              onClick={() => setSelectedMembership('Standard')}
              className={` px-4 py-2 text-base mdLg:text-lg flex items-center justify-center  h-[57px] w-[249.33px] ${
                selectedMembership === 'Standard'
                  ? 'bg-gradient-to-r from-[#F3F3F3] to-transparent rounded-[8px] border border-white shadow-md text-[#333333]'
                  : 'text-[#989898] '
              }`}
            >
              Standard
            </p>
            <p
              onClick={() => setSelectedMembership('Premium')}
              className={` px-4 py-2 text-base mdLg:text-lg flex items-center justify-center  h-[57px] w-[249.33px] ${
                selectedMembership === 'Premium'
                  ? 'bg-gradient-to-r from-[#F3F3F3] to-transparent rounded-[8px] border border-white shadow-md text-[#333333]'
                  : 'text-[#989898] '
              }`}
            >
              Premium
            </p>
          </div>
          <div className=' flex flex-col justify-center'>
            {selectedMembership === 'Basic' && <BasicPricingTable />}
            {/* {selectedMembership === 'Standard' && <StandardPricingTable />}
            {selectedMembership === 'Premium' && <PremiumPricingTable />} */}
          </div>
        </div>
        <div className='bg-[#F5F5F7] px-[21px] mb-10 3xl:mb-20 py-10 3xl:pb-20 md:px-10 3xl:px-[100px] '>
          <header className='flex gap-5 justify-between mx-auto mb-[64px] lg:mb-[85px] 3xl:mb-[120px] w-full text-[#333333]'>
            <div className='flex flex-col font-hankenGrotesk'>
              <h2 className='text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium '>
                How it works
              </h2>
              <p className='mt-4 font-nunitoSans text-xl 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal'>
                Your Path to VIP Podcasting in Three Simple Steps.
              </p>
            </div>
          </header>
          <FeatureGrid />
        </div>
      </div>
      <Community />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Page;
