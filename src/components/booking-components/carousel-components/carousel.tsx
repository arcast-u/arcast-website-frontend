'use client'
import React, {useState, useEffect} from "react";
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import Image from "next/image";

const images = [
  "/images/studio1.webp",
  "/images/studio2.webp",
  "/images/studio3.webp",
  "/images/studio4.webp",
  "/images/studio5.webp",
  "/images/studio6.webp",
  
];


export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[39.4vh] border-green-950 lg:w-[64.3vw] lg:h-screen overflow-hidden">
      {/* Image Display */}
      {/* <div className="w-full"> */}
        <Image
          src={images[currentIndex]}
          layout="fill"
          alt="Carousel Slide"
          className="w-full h-full object-cover "
        />
      {/* </div> */}
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full px-[32.2px] 3xl:px-7 ">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className=" bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105"
        >
          <TbCaretLeft className="size-3 xl:size-5"/>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className=" bg-opacity-50 text-white p-1 xl:p-3 rounded-md hover:scale-105"
        >
          <TbCaretRight className="size-3 xl:size-5"  />
        </button>
        </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
        {images.map((_, index) => (
          <div
          role="button"
          key={index}
          tabIndex={index}
          aria-label={index === currentIndex ? "Current slide" : "Go to slide"}
          className={`flex shrink-0 self-stretch my-auto h-1 rounded-sm ${
            index === currentIndex ? "w-6 bg-zinc-50" : "w-2 bg-neutral-400"
          }`}
          />
          
        ))}
      </div>
    </div>
  );

};

