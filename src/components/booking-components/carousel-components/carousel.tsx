'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { TbCaretLeft, TbCaretRight } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';

// Define which images should have shorter height with black background
const SHORT_HEIGHT_IMAGES = [
  '/images/setupSlides/setup1/1.webp',
  '/images/setupSlides/setup1/2.webp',
  '/images/setupSlides/setup2/1.webp',
  '/images/setupSlides/setup2/2.webp',
  '/images/setupSlides/setup2/5.webp',
  '/images/setupSlides/setup2/6.webp',
  '/images/setupSlides/setup2/9.webp',
  '/images/setupSlides/setup2/10.webp',
  '/images/setupSlides/setup3/1.webp',
  '/images/setupSlides/setup3/2.webp',
];

const CarouselContent = () => {
  const [setup, setSetup] = useState<string | null>(null);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const endX = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSetup = useRef<string | null>(null);
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map());

  // Preload images using the browser's Image constructor
  const preloadImages = (images: string[]) => {
    return Promise.all(images.map(src => {
      if (imageCache.current.has(src)) {
        return Promise.resolve();
      }
      
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          imageCache.current.set(src, img);
          resolve();
        };
        img.onerror = () => {
          // Handle error but still resolve
          console.error(`Failed to load image: ${src}`);
          resolve();
        };
        img.src = src;
      });
    }));
  };

  // Get setup images based on setup value
  const getSetupImages = (setupValue: string | null): string[] => {
    switch (setupValue) {
      case '0':
        return [
          '/images/setupSlides/setup1/1.webp',
          '/images/setupSlides/setup1/2.webp',
          '/images/setupSlides/setup1/3.webp',
          '/images/setupSlides/setup1/6.webp',
        ];
      case '1':
        return [
          '/images/setupSlides/setup2/1.webp',
          '/images/setupSlides/setup2/2.webp',
          '/images/setupSlides/setup2/3.webp',
          '/images/setupSlides/setup2/4.webp',
          '/images/setupSlides/setup2/5.webp',
          '/images/setupSlides/setup2/6.webp',
          '/images/setupSlides/setup2/7.webp',
          '/images/setupSlides/setup2/8.webp',
          '/images/setupSlides/setup2/9.webp',
          '/images/setupSlides/setup2/10.webp',
          '/images/setupSlides/setup2/11.webp',
        ];
      case '2':
        return [
          '/images/setupSlides/setup3/1.webp',
          '/images/setupSlides/setup3/2.webp',
          '/images/setupSlides/setup3/3.webp',
          '/images/setupSlides/setup3/4.webp',
        ];
      case '3':
        return [
          '/images/setupSlides/setup4/6.webp',
          '/images/setupSlides/setup4/7.webp',
          '/images/setupSlides/setup4/8.webp',
          '/images/setupSlides/setup4/9.webp',
          '/images/setupSlides/setup4/10.webp',
          '/images/setupSlides/setup4/11.webp',
        ];
      default:
        return [];
    }
  };

  // Load setup from localStorage and set images immediately
  useEffect(() => {
    const loadSetup = async () => {
      setIsLoading(true);
      
      // Get setup from localStorage
      const storedSetup = typeof window !== 'undefined' ? localStorage.getItem('selectedStudio') : null;
      setSetup(storedSetup);
      
      // If setup changes, update images immediately
      if (storedSetup !== lastSetup.current) {
        lastSetup.current = storedSetup;
        
        // Get new images based on setup
        const newImages = getSetupImages(storedSetup);
        
        // Set empty carousel instantly to clear old images
        setCarouselImages([]);
        setCurrentIndex(0);
        
        // Preload all images
        await preloadImages(newImages);
        
        // Update carousel with new images
        setCarouselImages(newImages);
        setIsLoading(false);
        
        // Reset the auto-slide interval
        resetAutoSlide(newImages);
      } else {
        setIsLoading(false);
      }
    };
    
    loadSetup();
    
    // Setup a listener for localStorage changes
    const handleStorageChange = () => {
      loadSetup();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Watch for setup changes manually too (in case it's changed programmatically)
  useEffect(() => {
    const checkSetup = async () => {
      const storedSetup = typeof window !== 'undefined' ? localStorage.getItem('selectedStudio') : null;
      
      if (storedSetup !== setup && storedSetup !== lastSetup.current) {
        setIsLoading(true);
        setSetup(storedSetup);
        lastSetup.current = storedSetup;
        
        // Get new images
        const newImages = getSetupImages(storedSetup);
        
        // Clear carousel first
        setCarouselImages([]);
        setCurrentIndex(0);
        
        // Preload and update
        await preloadImages(newImages);
        setCarouselImages(newImages);
        setIsLoading(false);
        
        // Reset auto-slide
        resetAutoSlide(newImages);
      }
    };
    
    const interval = setInterval(checkSetup, 500); // Check every 500ms
    return () => clearInterval(interval);
  }, [setup]);

  // Reset the carousel and start auto-sliding
  const resetAutoSlide = (images: string[] = carouselImages) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (images.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
    resetAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) {
      nextSlide();
    } else if (endX.current - startX.current > 50) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full h-[39.4vh] lg:h-screen overflow-hidden bg-black">
      {/* Full page loader */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
          <p className="text-white text-sm">Loading images...</p>
        </div>
      )}

      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`relative w-full h-full overflow-hidden transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Image Display */}
        <div
          ref={carouselRef}
          className='flex h-full whitespace-nowrap transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselImages.map((img, index) => (
            <div 
              key={`${img}-${index}`} 
              className={`w-full flex-shrink-0 relative flex items-center justify-center ${SHORT_HEIGHT_IMAGES.includes(img) ? 'bg-black' : ''}`}
            >
              <div className={`${SHORT_HEIGHT_IMAGES.includes(img) ? 'lg:h-[65%] h-[60%] w-full' : 'h-full w-full'}`}>
                <Image
                  src={img}
                  width={1920}
                  height={1080}
                  quality={100}
                  alt={`Carousel image ${index + 1}`}
                  className={`${SHORT_HEIGHT_IMAGES.includes(img) ? 'h-full w-full object-cover' : 'w-full h-full object-cover'}`}
                  priority={index === 0 || index === 1} // Prioritize first two images
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show when we have images and not loading */}
        {carouselImages.length > 0 && !isLoading && (
          <div className='absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full px-[32.2px] 3xl:px-7'>
            <button
              onClick={prevSlide}
              className='bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105 transition-transform'
              aria-label='Previous slide'
            >
              <TbCaretLeft className='size-3 xl:size-5' />
            </button>
            <button
              onClick={nextSlide}
              className='bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105 transition-transform'
              aria-label='Next slide'
            >
              <TbCaretRight className='size-3 xl:size-5' />
            </button>
          </div>
        )}

        {/* Indicator Dots - Only show when we have images and not loading */}
        {carouselImages.length > 0 && !isLoading && (
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5'>
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  resetAutoSlide();
                }}
                aria-label={index === currentIndex ? 'Current slide' : `Go to slide ${index + 1}`}
                className={`flex shrink-0 self-stretch my-auto h-1 rounded-sm transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-zinc-50' : 'w-2 bg-neutral-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Logo - Always visible */}
        <Link
          href='/'
          className='absolute top-5 left-5 3xl:top-6 3xl:left-5 flex space-x-0.5 z-50'
          aria-label='Go to homepage'
        >
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={84}
            height={23.9}
            quality={100}
            className='object-cover lg:h-10 lg:w-[140px]'
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export const Carousel: React.FC = () => {
  return (
    <Suspense fallback={
      <div className='w-full h-[39.4vh] lg:h-screen bg-black flex items-center justify-center'>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    }>
      <CarouselContent />
    </Suspense>
  );
};