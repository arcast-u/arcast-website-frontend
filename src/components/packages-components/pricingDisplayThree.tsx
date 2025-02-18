import React from 'react';
import { PricingItemProps } from './starter-components/pricingItemOne';
import { Timeline } from './starter-components/timelineOne';
import Image from 'next/image';


const pricingItems: PricingItemProps[] = [
    {
      imageSrc: "/images/custom3.webp",
      title: "6 hours of Recording + Professional Edit",
      price: "AED 5640",
    },
    {
      imageSrc: "/images/custom2.webp",
      title: "2 Signature Reels",
      price: "AED 880",
    },
    {
      imageSrc: "/images/custom8.webp",
      title: "Jingle",
      price: "AED 720",
    },
    {
      imageSrc: "/images/custom7.webp",
      title: "Podcast Branding",
      price: "AED 6400",
    },
    {
      imageSrc: "/images/custom15.webp",
      title: "Subtitles for up to 2 episodes",
      price: "AED 880",
    },
  ];

export const PricingDisplayUltimate = () => {
    return (
      <div className="flex justify-center max-w-[1400px]  mx-auto">
        <div className='md:hidden grid grid-cols-[auto,1fr] gap-6 items-start justify-start'>
            {pricingItems.map((item, index) => (
                <React.Fragment key={index}>
    
                {/* Timeline - only render once */}
                {index === 0 && (
                    <div className="row-span-9">
                        <Timeline  maxSteps={4} />
                    </div>
                )}
    
                {/* Right side */}
                <div className={`${index > 0 ? " mt-[70px]" : "mt-0"}`}>
                    
                    <div className="flex flex-col mb-4">
                        <h2 className="3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5">{item.title}</h2>
                        <p className="3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium">{item.price}</p>
                    </div>
                    <Image
                        loading="lazy"
                        width={287}
                        height={260}
                        src={item.imageSrc}
                        alt={item.title || "Pricing item image"}
                        className="object-contain rounded-xl 3xl:w-[453px] 3xl:h-[360px] max-md:max-w-full"
                    />
                    
                </div>
                </React.Fragment>
            ))}
        </div>
        <div className="hidden md:grid grid-cols-[1fr,auto,1fr] gap-10 items-start">
          {pricingItems.map((item, index) => (
            <React.Fragment key={index}>
              {/* Left side */}
              <div className={`flex justify-end ${index > 0 ? "mt-[16.5rem] max-md:mt-10" : "mt-0"}`}>
                {index % 2 === 0 ? (
                  <Image
                    loading="lazy"
                    width={287}
                    height={260}
                    src={item.imageSrc}
                    alt={item.title || "Pricing item image"}
                    className="object-contain rounded-xl 3xl:w-[453px] 3xl:h-[360px] self-start max-md:max-w-full"
                  />
                ) : (
                  <div className="flex flex-col">
                    <h2 className="3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5">{item.title}</h2>
                    <p className="3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium">{item.price}</p>
                  </div>
                )}
              </div>
  
              {/* Timeline - only render once */}
              {index === 0 && (
                <div className="row-span-5">
                  <Timeline  maxSteps={5} />
                </div>
              )}
  
              {/* Right side */}
              <div className={`${index > 0 ? "mt-[16.5rem] max-md:mt-10" : "mt-0"}`}>
                {index % 2 === 0 ? (
                  <div className="flex flex-col">
                    <h2 className="3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5">{item.title}</h2>
                    <p className="3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium">{item.price}</p>
                  </div>
                ) : (
                  <Image
                    loading="lazy"
                    width={287}
                    height={260}
                    src={item.imageSrc}
                    alt={item.title || "Pricing item image"}
                    className="object-contain rounded-xl 3xl:w-[453px] 3xl:h-[360px] max-md:max-w-full"
                  />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };