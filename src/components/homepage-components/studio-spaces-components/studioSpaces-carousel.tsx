'use client';
import { useState, useEffect } from 'react';
import { useSpring, animated, config, SpringValue } from '@react-spring/web';
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

interface SlideData {
  id: number;
  title: string;
  buttonText: string;
  images: string[]; // Now handling multiple images per slide
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
    id: 1,
    title: "Setup 1",
    buttonText: "Book Your Session",
    images: ["/images/studio10.webp", "/images/studio1.webp", "/images/studio2.webp"]
  },
  {
    id: 2,
    title: "Setup 2",
    buttonText: "Book Your Session",
    images: ["/images/studio8.webp", "/images/studio3.webp", "/images/studio4.webp"]
  },
  {
    id: 3,
    title: "Setup 3",
    buttonText: "Book Your Session",
    images: ["/images/studio6.webp", "/images/studio5.webp", "/images/studio9.webp"]
  },
  {
    id: 4,
    title: "Setup 4",
    buttonText: "Book Your Session",
    images: ["/images/studio9.webp", "/images/studio7.webp", "/images/studio8.webp"]
  },
  {
    id: 5,
    title: "Setup 5",
    buttonText: "Book Your Session",
    images: ["/images/studio7.webp", "/images/studio10.webp", "/images/studio6.webp"]
  },
];

const StudioSpacesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(new Array(slides.length).fill(0)); // Track which image is displayed for each slide
  const [gapSize, setGapSize] = useState(280);

  // Update gap size on mount and window resize
  useEffect(() => {
    const updateGapSize = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setGapSize(75);
      } else if (width < 1024) { // tablet
        setGapSize(120);
      } else if (width < 1200) { // notebook
        setGapSize(150);
      } else if (width < 1700) { //small desktop
        setGapSize(180);
      } else { // desktop
        setGapSize(280);
      }
    };

    updateGapSize();
    window.addEventListener('resize', updateGapSize);
    return () => window.removeEventListener('resize', updateGapSize);
  }, []);

  const CalculateStyles = (index: number) => {
    const totalSlides = slides.length;
    const position = ((index - currentIndex) % totalSlides + totalSlides) % totalSlides;
  
    let adjustedPosition = position;
    if (position > totalSlides / 2) adjustedPosition = position - totalSlides;
  
    return useSpring({
      to: {
        transform: `translateX(calc(${adjustedPosition * 85}% + ${adjustedPosition * gapSize}px))`,
        opacity: adjustedPosition === 0 ? 1 : 0.9,
      },
      config: config.gentle,
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleImageChange = (direction: "next" | "prev") => {
    setImageIndex((prev) => {
      const newIndexArray = [...prev];
      const totalImages = slides[currentIndex].images.length;

      if (direction === "next") {
        newIndexArray[currentIndex] = (prev[currentIndex] + 1) % totalImages;
      } else {
        newIndexArray[currentIndex] = (prev[currentIndex] - 1 + totalImages) % totalImages;
      }

      return newIndexArray;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main Content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[90%]">
        {slides.map((slide, index) => (
          <AnimatedDiv
            key={slide.id}
            style={CalculateStyles(index)}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
              {/* Display Current Image */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.images[imageIndex[index]]}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              {/* Content and Controls */}
              {index === currentIndex && (
                <>
                  {/* Image Change Buttons */}
                  <button
                    onClick={() => handleImageChange("prev")}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded flex items-center justify-center transition-colors"
                  >
                    <TbCaretLeft className="size-3 xl:size-5 text-white" />
                  </button>

                  <button
                    onClick={() => handleImageChange("next")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded flex items-center justify-center transition-colors"
                  >
                    <TbCaretRight className="size-3 xl:size-5 text-white" />
                  </button>

                  {/* Button for Booking */}
                  <div className="absolute bottom-8 left-6 w-fit 3xl:px-6 3xl:py-4 py-3 px-[14px] bg-[#F5F5F7] font-nunitoSans rounded-lg">
                    <h3 className="text-sm 3xl:text-2xl font-medium text-[#333333] mb-2 3xl:mb-4">
                      {slide.title}
                    </h3>
                    <button className="px-4 py-2 3xl:py-3 bg-[#FF8C42] border border-[#FFC49D] text-[#FCFCFC] font-nunitoSans text-xs 3xl:text-base rounded-md shadow-md shadow-[#FAE2D2] transition-colors">
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
      <div className="absolute z-40 top-0 w-[90%] lg:w-auto lg:right-10 flex justify-between lg:justify-end gap-2">
        <button onClick={handlePrevious} className="p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm">
          <IoIosArrowBack className="size-4 text-gray-500" />
        </button>

        <button onClick={handleNext} className="p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm">
          <IoIosArrowForward className="size-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default StudioSpacesCarousel;
