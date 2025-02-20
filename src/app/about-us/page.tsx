import React from 'react';
import LandingPage from '@/components/aboutUs-compnents/landing-section/landing-page';
import NewsletterSignup from '@/components/homepage-components/newsletter/newsletter';
import Footer from '@/components/homepage-components/footer/footer';
import Mission from '@/components/aboutUs-compnents/our-mission/mission';
// import Video from '@/components/video-section/video';
import CitySlider from '@/components/aboutUs-compnents/city-slider/page';



const Page = () => {
  return (
    <div className='bg-[#0C0C0C] overflow-x-hidden'>
        <LandingPage/>
        {/* <Video/> */}
        <Mission/>
        <CitySlider/>
        <div className='bg-[#FCFCFC]'>
          <NewsletterSignup/>
          <Footer/>
        </div>
    </div>
  )
}

export default Page;