import NavigationBar from '@/components/homepage-components/nav-bar';
import FeatureGrid from '@/components/membership-components/how-it-works-components/featureGrid';
import PricingTable from '@/components/membership-components/pricingTable';
import Community from '@/components/homepage-components/community/community';
import Footer from '@/components/homepage-components/footer/footer';
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
import React from 'react'



const Page = () => {
  return (
    <div className='bg-[#FCFCFC]'>
      <div className='max-w-[1728px] mx-auto'>
        <NavigationBar/>
        <div className='px-[21px] md:px-10 3xl:px-[100px]'>
          <h1 className='mt-[100px] 3xl:mt-[134px] text-center mb-4 font-semibold text-[32px] leading-[41.7px] 3xl:text-[64px] 3xl:leading-[83.39px] font-hankenGrotesk text-[#333333]'>Memberships</h1>
          <p className='px-[21px] md:px-0 md:w-[65%] lg:[55%] mb-[34px] 3xl:mb-16 mx-auto text-center font-nunitoSans text-xl leading-[27.8px] 3xl:text[28px] 3xl:leading-10 text-[#333333]'>
            Unlock Exclusive Discounts, Priority Access, and Premium Perks with Our Podcast Memberships
          </p>
          <div className=' flex flex-col justify-center'>
            <PricingTable/> 
          </div>
        </div>
        <div className='bg-[#F5F5F7] px-[21px] mb-10 3xl:mb-20 py-10 3xl:pb-20 md:px-10 3xl:px-[100px] '>
          <header className="flex gap-5 justify-between mx-auto mb-[64px] lg:mb-[85px] 3xl:mb-[120px] w-full text-[#333333]">
            <div className="flex flex-col font-hankenGrotesk">
              <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium ">
                How it works
              </h1>
              <p className="mt-4 font-nunitoSans text-xl 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal">
              Your Path to VIP Podcasting in Three Simple Steps.
              
              </p>
            </div>
          </header>
          <FeatureGrid/>
        </div>
      </div>
      <Community/>
      <NewsletterSignup/>
      <Footer/>

    </div>
    )
}

export default Page;