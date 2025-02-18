'use client'
import React from 'react'
// import NavigationBar from '@/components/homepage-components/nav-bar';
// import TabList from '@/components/booking-components/booking-components/navigation-tabList';
// import { PricingDisplay } from '@/components/packages-components/pricingDisplay';
// import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
// import Footer from '@/components/homepage-components/footer/footer';



const Page = () => {
  // const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className='bg-[#FCFCFC]'>
      <NavigationBar/>
      {/* <h1 className='mt-[100px] 3xl:mt-[134px] text-center mb-4 font-medium text-[32px] leading-[41.7px] 3xl:text-[64px] 3xl:leading-[83.39px] font-hankenGrotesk text-[#333333]'>Our Bundles</h1>
      <p className='px-[21px] md:px-0 md:w-[55%] mx-auto text-center font-nunitoSans text-xl leading-[27.8px] 3xl:text[28px] 3xl:leading-10 text-[#333333]'>Bundle our most popular add-on services into packages that save you more. 
      Choose the combination that works for you.</p>
      <div className='w-full'>
        <TabList tabs={['Starter Bundle', 'Premium Bundle', 'Ultimate Bundle']} currentStep={currentStep} setActiveIndex={setCurrentStep} />
        <PricingDisplay/>
      </div>
      <NewsletterSignup/>
      <Footer/> */}
    </div>
  )
}

export default Page;