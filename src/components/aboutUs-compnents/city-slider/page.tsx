'use client'
import React, { useState, useEffect } from 'react'
import { useSpring, animated, SpringValue } from '@react-spring/web'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'

interface City {
  id: number
  name: string
  image: string
  title: string
}

// Add this type for the animated div
type AnimatedDivProps = {
    style: {
        transform: SpringValue<string>;
      };
      className: string;
      children: React.ReactNode;
}

const cities: City[] = [
  {
    id: 1,
    name: 'New York',
    image: '/images/city1.png',
    title: 'ARcast New York'
  },
  {
    id: 2,
    name: 'Singapore',
    image: '/images/city2.png',
    title: 'ARcast Singapore'
  },
  {
    id: 3,
    name: 'London',
    image: '/images/city3.png',
    title: 'ARcast London'
  },
  {
    id: 4,
    name: 'Paris',
    image: '/images/city4.png',
    title: 'ARcast Paris'
  },
  {
    id: 5,
    name: 'Rome',
    image: '/images/city5.png',
    title: 'ARcast Rome'
  }
]

const CitySlider = () => {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [gapSize, setGapSize] = useState<number>(5);
  const minSwipeDistance = 50;

    // Update gap size on mount and window resize
    useEffect(() => {
      const updateGapSize = () => {
        const width = window.innerWidth;
        if (width < 640) { // mobile
          setGapSize(100);
        } else if (width < 1024) { // tablet
          setGapSize(30);
        } else if (width < 1200) { // notebook
          setGapSize(15);
        } else if (width < 1700) { // desktop
          setGapSize(10);
        } else {
          setGapSize(15)
        }
      };
  
      updateGapSize();
      window.addEventListener('resize', updateGapSize);
      return () => window.removeEventListener('resize', updateGapSize);
    }, []);

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
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };


  // Use styles object instead of destructuring
  const styles = useSpring({
    transform: `translateX(-${index * gapSize}%)`,
    config: { tension: 280, friction: 60 }
  })

  const nextSlide = () => {
    if (index < cities.length - 1) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }
    const AnimatedDiv = animated.div as unknown as React.FC<AnimatedDivProps>;
  return (
    <div className=" w-full 3xl:h-screen px-[21px] lg:px-10 3xl:px-[100px] py-14 3xl:py-20">
      <div className='h-full relative max-w-[1728px] overflow-hidden mx-auto'>
        <div className="">
          <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium font-hankenGrotesk text-[#FCFCFC] mb-4">
            The Future of <span className="text-orange-500">ARcast</span>
          </h1>
          <p className="mt-4 lg:w-[50%] 3xl:w-[45%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans text-[#FCFCFC] 3xl:leading-[38.19px] font-normal mb-8">
            We&apos;re not just building studios - we&apos;re creating the future of
            professional content creation, one space at a time.
          </p>
        </div>

        <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd} className=" mt-20 3xl:mt-48">
          {/* Use the animated.div with styles object */}
          <AnimatedDiv 
            style={styles}
            className="flex gap-8 3xl:gap-48"
          >
            {cities.map((city) => (
              <div
                key={city.id}
                className="flex-shrink-0 w-[300px] h-[450px] relative group perspective-1000"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={city.image}
                    alt={city.name}
                    width={300}
                    height={380}
                    quality={100}
                    className="rounded-lg 3xl:w-[386px] shadow-xl"
                    priority
                  />
                  <div className="absolute w-full flex justify-center  bottom-0 left-4">
                    <h3 className={`${city.id === 1 ? ' -rotate-[0.2rad]' :
                      city.id ===  2 || city.id === 5 ? ' -rotate-[0.1rad]'
                      : city.id === 4 ? 'rotate-[0.07rad] mt-4' : 'rotate-[0.06rad]' } text-white text-xl text-center font-semibold`}>
                      <span className="text-orange-500">ARcast</span> {city.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedDiv>

          {/* Navigation Buttons */}
                

          
        </div>
        <div className="absolute bottom-0 w-full lg:w-auto lg:right-10 flex justify-between lg:justify-end gap-2">
          <button 
          disabled={index === 0}
            onClick={prevSlide}
            className={`${index === 0 ? "border-gray-700":"border-gray-500"} p-1 md:p-2 rounded-lg border-[1.5px]  shadow-sm `}
          >
            <IoIosArrowBack className="size-4 text-gray-500" />
          </button>
          
          <button 
          disabled={index === cities.length - 1}
            onClick={nextSlide}
            className={`${index === cities.length - 1 ? "border-gray-700":"border-gray-500"} p-1 md:p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm`}
          >
            <IoIosArrowForward className="size-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CitySlider