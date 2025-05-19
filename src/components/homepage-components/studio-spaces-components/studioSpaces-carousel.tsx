'use client';
import { useState, useEffect } from 'react';
import { useSpring, animated, config, SpringValue } from '@react-spring/web';
// import { TbCaretLeft, TbCaretRight } from 'react-icons/tb';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SlideData {
  id: number;
  title: string;
  buttonText: string;
  images: string[];
  mobileImages: string[];
}

// Define the animated component type
interface AnimatedDivProps {
  style: {
    transform: SpringValue<string>;
    opacity: SpringValue<number>;
  };
  className: string;
  children: React.ReactNode;
}

// Create a properly typed animated div
const AnimatedDiv = animated.div as unknown as React.FC<AnimatedDivProps>;

const slides: SlideData[] = [

  {
    id: 0,
    title: 'Setup 1',
    buttonText: 'Book Your Session',
    images: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053609/2_wjhzy8.webp',
    
    ],
    mobileImages: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053627/1_jjuxxw.webp',
     
    ],
  },
  {
    id: 1,
    title: 'Setup 2',
    buttonText: 'Book Your Session',
    images: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053700/newstudio3_kh29wg.png',

    ],
    mobileImages: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053720/2_d3zquf.webp',
   
    ],
  },

  {
    id: 2,
    title: 'Setup 3',
    buttonText: 'Book Your Session',
    images: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053774/3_punbx2.webp',

    ],
    mobileImages: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053803/3_jsv0ln.webp',

    ],
  },
  
  {
    id: 3,
    title: 'Setup 4',
    buttonText: 'Book Your Session',
    images: [
      'https://res.cloudinary.com/deuvbiekl/image/upload/v1747053839/6_rjojnw.webp'
    ],
    mobileImages: ['https://res.cloudinary.com/deuvbiekl/image/upload/v1747053886/4_yod3yq.webp'],
  },
 
];

const StudioSpacesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const [gapSize, setGapSize] = useState(280);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const router = useRouter();
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Update gap size on mount and window resize
  useEffect(() => {
    const updateGapSize = () => {
      const width = window.innerWidth;
      if (width < 900) setIsMobile(true);

      if (width < 640) {
        setGapSize(85);
      } else if (width < 768) {
        setGapSize(110);
      } else if (width < 900) {
        setGapSize(120);
      } else if (width < 1024) {
        setGapSize(140);
      } else if (width < 1100) {
        setGapSize(150);
      } else if (width < 1200) {
        setGapSize(170);
      } else if (width < 1400) {
        setGapSize(200);
      } else if (width < 1600) {
        setGapSize(230);
      } else {
        // desktop
        setGapSize(270);
      }
    };

    updateGapSize();
    window.addEventListener('resize', updateGapSize);
    return () => window.removeEventListener('resize', updateGapSize);
  }, []);

  const CalculateStyles = (index: number) => {
    const totalSlides = slides.length;
    const position =
      (((index - currentIndex) % totalSlides) + totalSlides) % totalSlides;

    let adjustedPosition = position;
    if (position > totalSlides / 2) adjustedPosition = position - totalSlides;

    return useSpring({
      to: {
        transform: `translateX(calc(${adjustedPosition * 85}% + ${
          adjustedPosition * gapSize
        }px))`,
        opacity: adjustedPosition === 0 ? 1 : 0.9,
      },
      config: config.gentle,
    });
  };

  const handleBookSession = (setupId: number) => {
    router.push(`/bookings?setup=${setupId}`);
    localStorage.setItem('selectedStudio', setupId.toString());
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

 

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className='relative w-full h-full overflow-hidden'
    >
      {/* Main Content */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[455px] sm:w-[85%] sm:h-[90%]'>
        {slides.map((slide, index) => (
          <AnimatedDiv
            key={slide.id}
            style={CalculateStyles(index)}
            className='absolute w-full h-full'
          >
            <div className='relative w-full h-full'>
              {/* Display Current Image */}
              <div className='relative w-full h-full'>
                <Image
                  src={isMobile ? slide.mobileImages[0] : slide.images[0]}
                  alt={slide.title}
                  fill
                  quality={100}
                  className='object-cover object-center rounded-lg'
                  loading='lazy'
                />
              </div>

              {/* Content and Controls */}
              {index === currentIndex && (
                <>
                  {/* Image Change Buttons */}
                  {/* <button
                    onClick={() => handleImageChange('prev')}
                    className='absolute left-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded flex items-center justify-center transition-colors'
                  >
                    <TbCaretLeft className='size-5 text-white' />
                  </button>

                  <button
                    onClick={() => handleImageChange('next')}
                    className='absolute right-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded flex items-center justify-center transition-colors'
                  >
                    <TbCaretRight className='size-5 text-white' />
                  </button> */}

                  {/* Button for Booking */}
                  <div className='absolute bottom-12 sm:bottom-8 left-6 w-fit 3xl:px-6 3xl:py-4 py-3 px-[14px] bg-[#F5F5F7] font-nunitoSans rounded-lg'>
                    <h3 className='text-sm 3xl:text-2xl font-medium text-[#333333] mb-2 3xl:mb-4'>
                      {slide.title}
                    </h3>
                    <button
                      onClick={() => handleBookSession(slide.id)}
                      className='px-4 py-2 3xl:py-3 bg-[#FF8C42] border border-[#FFC49D] text-[#FCFCFC] font-nunitoSans text-xs 3xl:text-base rounded-md shadow-md shadow-[#FAE2D2] transition-colors'
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </>
              )}
            </div>
          </AnimatedDiv>
        ))}
      </div>

      {/* Slide Navigation */}
      <div className='absolute z-40 bottom-0 w-[90%] lg:w-auto lg:right-10 flex justify-between lg:justify-end gap-2'>
        <button
          onClick={handlePrevious}
          className='p-1 md:p-2 rounded-lg ml-9 lg:ml-0  border-[1.5px] border-gray-500 shadow-sm'
        >
          <IoIosArrowBack className='size-4 text-gray-500' />
        </button>

        <button
          onClick={handleNext}
          className='p-1 md:p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm'
        >
          <IoIosArrowForward className='size-4 text-gray-500' />
        </button>
      </div>
    </div>
  );
};

export default StudioSpacesCarousel;
