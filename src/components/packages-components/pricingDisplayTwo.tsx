import React from 'react';
import { Timeline } from './starter-components/timelineOne';
import Image from 'next/image';

const pricingItems = [
  {
    imageSrc: '/images/custom3.webp',
    title: '4 hours of Recording + Professional Edit',
    price: 'AED 940',
    times: '4X',
  },
  {
    imageSrc: '/images/custom2.webp',
    title: 'Podcast Branding',
    price: 'AED 6400',
  },
  {
    imageSrc: '/images/custom10.webp',
    title: '3 Custom Edit (Short Form)',
    price: 'AED 176',
    times: '3X',
  },
  {
    imageSrc: '/images/custom12.webp',
    title: '1 Standard Edit (Long Form)',
    price: 'AED 440',
  },
  {
    imageSrc: '/images/custom1.png',
    title: '1 Content Distribution',
    price: 'AED 440',
  },
];

export const PricingDisplayPremium = () => {
  const [visibleItems, setVisibleItems] = React.useState<Set<number>>(
    new Set()
  );

  const observerCallback = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleItems((prev) => new Set(prev).add(index));
        }
      });
    },
    []
  );

  const imageRef = React.useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        const observer = new IntersectionObserver(observerCallback, {
          threshold: 0.2,
          rootMargin: '50px',
        });
        observer.observe(node);
        return () => observer.disconnect();
      }
    },
    [observerCallback]
  );

  const getImageClassName = (index: number) => {
    return `object-contain rounded-xl 3xl:w-[453px] 3xl:h-[360px] max-md:max-w-full 
      transition-opacity duration-700 ease-in-out
      ${visibleItems.has(index) ? 'opacity-100' : 'opacity-0'}`;
  };

  return (
    <div className='flex justify-center max-w-[1400px] mx-auto'>
      {/* Mobile View */}
      <div className='md:hidden grid grid-cols-[auto,1fr] gap-6 items-start justify-start'>
        {pricingItems.map((item, index) => (
          <React.Fragment key={index}>
            {/* Timeline - only render once */}
            {index === 0 && (
              <div className='row-span-9'>
                <Timeline maxSteps={4} />
              </div>
            )}

            {/* Right side */}
            <div className={`${index > 0 ? 'mt-[70px]' : 'mt-0'}`}>
              <div className='flex flex-col mb-4'>
                <h2 className='3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5'>
                  {item.title}
                </h2>
                <p className='3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium'>
                  <span className='text-sm'>{item.times}</span> {item.price}
                </p>
              </div>
              <div ref={(node) => imageRef(node)} data-index={index}>
                <Image
                  loading='lazy'
                  width={287}
                  height={260}
                  src={item.imageSrc}
                  alt={item.title || 'Pricing item image'}
                  quality={100}
                  className={getImageClassName(index)}
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Desktop View */}
      <div className='hidden md:grid md:grid-cols-[1fr,auto,1fr] grid-cols-[auto,1fr] md:gap-10 items-start'>
        {pricingItems.map((item, index) => (
          <React.Fragment key={index}>
            {/* Left side */}
            <div
              className={`flex justify-end ${
                index > 0 ? 'md:mt-[16.5rem] 3xl:mt-14 mt-10' : 'mt-0'
              }`}
            >
              {index % 2 === 0 ? (
                <div ref={(node) => imageRef(node)} data-index={index}>
                  <Image
                    loading='lazy'
                    width={287}
                    height={260}
                    src={item.imageSrc}
                    quality={100}
                    alt={item.title || 'Pricing item image'}
                    className={getImageClassName(index)}
                  />
                </div>
              ) : (
                <div className='flex flex-col'>
                  <h2 className='3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5'>
                    {item.title}
                  </h2>
                  <p className='3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium'>
                    <span className='text-sm'>{item.times}</span> {item.price}
                  </p>
                </div>
              )}
            </div>

            {/* Timeline - only render once */}
            {index === 0 && (
              <div className='row-span-5'>
                <Timeline maxSteps={5} />
              </div>
            )}

            {/* Right side */}
            <div
              className={`${
                index > 0 ? 'md:mt-[16.5rem] 3xl:mt-14 mt-10' : 'mt-0'
              }`}
            >
              {index % 2 === 0 ? (
                <div className='flex flex-col'>
                  <h2 className='3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5'>
                    {item.title}
                  </h2>
                  <p className='3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium'>
                    <span className='text-sm'>{item.times}</span>
                    {item.price}
                  </p>
                </div>
              ) : (
                <div ref={(node) => imageRef(node)} data-index={index}>
                  <Image
                    loading='lazy'
                    width={287}
                    height={260}
                    src={item.imageSrc}
                    quality={100}
                    alt={item.title || 'Pricing item image'}
                    className={getImageClassName(index)}
                  />
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
