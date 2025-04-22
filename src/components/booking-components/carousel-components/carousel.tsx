'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { TbCaretLeft, TbCaretRight } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';

const CarouselContent = () => {
  // Use state to store the value from localStorage
  const [setup, setSetup] = useState<string | null>(null);

  // Retrieve setup from localStorage only on the client side
  useEffect(() => {
    const storedSetup = localStorage.getItem('selectedStudio');
    setSetup(storedSetup);
  }, []);

  // Define a dynamic images array based on the setup parameter
  let carouselImages: string[] = [];
  if (setup === '0') {
    carouselImages = [
      '/images/setup2-1.webp',
      '/images/setup2-2.webp',
      '/images/setup2-3.webp',
    ];
  } else if (setup === '1') {
    carouselImages = [
      '/images/setup3-1.webp',
      '/images/setup3-2.webp',
      '/images/setup3-3.webp',
      '/images/setup3-4.webp',
    ];
  } else if (setup === '2') {
    carouselImages = [
      '/images/setup6-1.webp',
      '/images/setup6-2.webp',
      '/images/setup6-3.webp',
      '/images/setup6-4.webp',
    ];
  } else if (setup === '3') {
    carouselImages = [
      '/images/setup8-1.webp',
      '/images/setup8-2.webp',
      '/images/setup8-3.webp',
    ];
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
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
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className='relative w-full h-[39.4vh] lg:h-screen overflow-hidden'
    >
      {/* Image Display */}
      <div
        className='flex h-full whitespace-nowrap transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((img, index) => (
          <div key={index} className='w-full flex-shrink-0 relative'>
            <Image
              src={img}
              width={1920}
              height={1080}
              quality={100}
              alt={`Carousel image ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full px-[32.2px] 3xl:px-7'>
        <button
          onClick={prevSlide}
          className='bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105'
        >
          <TbCaretLeft className='size-3 xl:size-5' />
        </button>
        <button
          onClick={nextSlide}
          className='bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105'
        >
          <TbCaretRight className='size-3 xl:size-5' />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5'>
        {carouselImages.map((_, index) => (
          <div
            role='button'
            key={index}
            tabIndex={index}
            aria-label={
              index === currentIndex ? 'Current slide' : 'Go to slide'
            }
            className={`flex shrink-0 self-stretch my-auto h-1 rounded-sm ${
              index === currentIndex ? 'w-6 bg-zinc-50' : 'w-2 bg-neutral-400'
            }`}
          />
        ))}
      </div>

      {/* Logo */}
      <Link
        href='/'
        className='absolute top-5 left-5 3xl:top-6 3xl:left-5 flex space-x-0.5'
      >
        <Image
          src='/icons/logo.svg'
          alt='logo'
          width={84}
          height={23.9}
          quality={100}
          className='object-cover lg:h-10 lg:w-[140px]'
        />
      </Link>
    </div>
  );
};

export const Carousel: React.FC = () => {
  return (
    <Suspense
      fallback={<div className='w-full h-[39.4vh] lg:h-screen bg-gray-200' />}
    >
      <CarouselContent />
    </Suspense>
  );
};
