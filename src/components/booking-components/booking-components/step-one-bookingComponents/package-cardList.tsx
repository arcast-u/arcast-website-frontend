'use client'
import React, {useState} from 'react';
import { PackageCard } from './package-card';

const pricingData = [
{
  title: "Recording + Professional Edit",
  originalPrice: "990 AED",
  price: "950 AED/hour",
  features: [
    { text: "Fully equipped studio set of your choice" },
    { text: "Studio operator to record everything (3 cinema cams, 4 mics)" },
    { text: "Dedicated podcast producer to edit your episode" },
    { text: "Professional audio mixer" },
    { text: "Suitable for up to 60 minutes of raw material" }
  ]
},
{
  title: "Recording + Professional Edit",
  originalPrice: "990 AED",
  price: "950 AED/hour",
  features: [
    { text: "Fully equipped studio set of your choice" },
    { text: "Studio operator to record everything (3 cinema cams, 4 mics)" },
    { text: "Dedicated podcast producer to edit your episode" },
    { text: "Professional audio mixer" },
    { text: "Suitable for up to 60 minutes of raw material" }
  ]
},
{
  title: "Recording + Professional Edit",
  originalPrice: "990 AED",
  price: "950 AED/hour",
  features: [
    { text: "Fully equipped studio set of your choice" },
    { text: "Studio operator to record everything (3 cinema cams, 4 mics)" },
    { text: "Dedicated podcast producer to edit your episode" },
    { text: "Professional audio mixer" },
    { text: "Suitable for up to 60 minutes of raw material" }
  ]
}
]
const PackageCardList =() =>{
  const [selectedPackage, setSelectedPackage] = useState(0);

  return (
    <section className="3xl:mt-12 mt-10 pb-10">
     <h2 className="text-[28px] leading-8 3xl:text-[32px] font-nunitoSans font-medium 3xl:leading-[43.65px] text-[#333333]">
       Choose your recording package
     </h2>
      <main className="flex flex-col mt-4 3xl:mt-6 justify-center " role="main">
        <div aria-label="Pricing options">
          {pricingData.map((packageItem, index) => (
            <div key={index} className={`mt-${index === 0 ? '0' : '5'}`}>
              <PackageCard {...packageItem} count={index} selectedPackage={selectedPackage} onSelect={setSelectedPackage} variant={index === 0 ? "light" : index === 1 ? "orange" : "dark"} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

export default PackageCardList