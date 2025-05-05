'use client';

import HeroSection from '@/components/business-components/hero-section';
import WhatYouGet from '@/components/business-components/what-you-get';
import Footer from '@/components/homepage-components/footer/footer';
import Packages from '@/components/business-components/packages';
import HowItWorks from '@/components/business-components/how-it-works';

const BusinessPage = () => {
  return (
    <div>
      <HeroSection />
      <WhatYouGet />
      <HowItWorks />
      <Packages />
      <Footer />
    </div>
  );
};

export default BusinessPage;
