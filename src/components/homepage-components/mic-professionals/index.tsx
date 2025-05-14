'use client';
import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export interface CardData {
  name: string;
  description: string;
  src: string;
}

function MicProfessionals() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const videoSrcs = [
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050684/2_ssrr1a.mp4', 
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747227007/2_wolyas.mp4',
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050720/mic-vid1_ugqam6.mp4', 
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050645/3_m2uegj.mp4', 
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050645/4_yskuov.mp4',
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050719/mic-vid_zmnyvj.mp4', 
    'https://res.cloudinary.com/deuvbiekl/video/upload/v1747050640/1_sngfk4.mp4', 
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer for rounding errors
    }
  };

  const handleScroll = () => {
    checkScrollability();
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75; // Scroll 75% of the container width
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75; // Scroll 75% of the container width
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Initialize scroll state on component mount
  React.useEffect(() => {
    checkScrollability();
    // Add resize listener to recheck scrollability when window size changes
    window.addEventListener('resize', checkScrollability);
    return () => {
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  return (
    <div className='bg-[#FCFCFC] w-full py-10 3xl:py-20 3xl:mt-0'>
      <div className='max-w-[1728px] h-full px-[21px] mx-auto md:px-10 3xl:px-[100px]'>
        <header className='flex relative gap-5 justify-between mx-auto mb-[51px] 3xl:mb-[100px] w-full text-[#333333]'>
          <div className='flex flex-col font-hankenGrotesk'>
            <h2 className='text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl'>
              Who&apos;s Been on the Mic?
            </h2>
            <p className='mt-4 lg:w-[65%] 3xl:w-[75%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
              From founders to thought leaders — see how{' '}
              <span className='text-[#619B8A]'>
                ARcast studio brings every story to life
              </span>
            </p>
          </div>
        </header>

        {/* Video slider with touch support */}
        <div 
          ref={scrollContainerRef}
          className='flex flex-row gap-4 w-full overflow-x-scroll no-scrollbar scroll-smooth snap-x'
          onScroll={handleScroll}
        >
          {videoSrcs.map((videoSrc, index) => (
            <div 
              key={index}
              className="flex-shrink-0 snap-center" 
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-[200px] h-[350px] sm:w-[300px]  lg:w-[294px] sm:h-[600px] rounded-[12px] object-cover object-center'
                src={videoSrc}
              >
                {/* Fallback image if video can't load */}
                <img
                  src={'/images/prof-1.png'}
                  alt='fallback'
                  className='w-full min-w-[350px] h-[430px] sm:h-[650px] rounded-[12px] object-cover object-center'
                />
              </video>
            </div>
          ))}
        </div>

        {/* Navigation arrows at the bottom */}
      
        <div className='z-40 lg:flex bottom-0 w-[90%] mt-6 lg:w-auto lg:right-10 hidden justify-between lg:justify-end gap-2'>
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
       
          aria-label="Scroll left"
          className='p-1 md:p-2 rounded-lg ml-9 cursor-pointer lg:ml-0  border-[1.5px] border-gray-500 shadow-sm'
        >
          <IoIosArrowBack  className="text-gray-800 text-xl" />
        </button>

        <button
        onClick={scrollRight}
        disabled={!canScrollRight}
      
        aria-label="Scroll right"
          className='p-1 md:p-2  cursor-pointer rounded-lg border-[1.5px] border-gray-500 shadow-sm'
        >
          <IoIosArrowForward  className="text-gray-800 text-xl"/>
        </button>
      </div>
      
      </div>
    </div>
  );
}

export default MicProfessionals;