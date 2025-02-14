'use client';
import { useState, useEffect } from 'react';
import { useSpring, animated, config, SpringValue } from '@react-spring/web';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface AnimatedDivProps {
  style: {
    transform: SpringValue<string>;
    opacity: SpringValue<number>;
    zIndex: SpringValue<number>;
  };
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
}

const AnimatedDiv = animated.div as unknown as React.FC<AnimatedDivProps>;

interface CardProps {
  title: string;
  price: string;
  description: string;
  src: string;
  isMultiCamVisible: boolean;
  isVisible: () => void;
  inFocus: boolean;
  style: {
    transform: SpringValue<string>;
    opacity: SpringValue<number>;
    zIndex: SpringValue<number>;
  };
  onClick?: () => void;
}


const Card = ({ title, price, style, description, src, isMultiCamVisible, isVisible, onClick, inFocus }: CardProps) => (
  
  <AnimatedDiv 
    style={style}
    onClick={onClick}
    className={`${inFocus ? "h-[90%] w-[90%] top-4  left-4 3xl:top-9 3xl:left-7" : "h-full w-full left-0 top-0"} absolute bg-transparent rounded-2xl  flex flex-col items-center text-center cursor-pointer`}
  >
    <Image src={src} alt={title} width={100} height={100} className={`w-full ${inFocus ? 'h-full' : 'h-[85%]'} relative shadow-lg object-cover rounded-2xl`}/>
    {/* Multi-Cam Recording Toggle */}
    {inFocus && <div 
        className={` p-4 3xl:p-6 absolute w-[80%] font-medium bottom-7 font-nunitoSans rounded-2xl  cursor-pointer hover:shadow-lg transition ${isMultiCamVisible ? 'bg-white' : 'bg-transparent'}`}
        onClick={() => isVisible()}
      >
        <div className={`flex items-center  ${isMultiCamVisible ? 'text-[#333333] justify-between' : 'text-[#FCFCFC] gap-1'}`}>
          <h3 className={`text-base 3xl:text-[28px] 3xl:leading-[38.19px] font-medium`}>{title}</h3>
          <ArrowUpRight className="w-5 h-5 " />
        </div>
        {isMultiCamVisible && (
          <p className="text-[#333333] text-sm 3xl:text-2xl text-left mt-2">{description}</p>
        )}
      </div>}

      {!inFocus && <div className='mt-3 font-nunitoSans  w-full text-left'>
        <p className='text-[#989898] font-medium text-base'>{title}</p>
        <p className='text-[#333333] font-semibold mt-1 text-2xl'>{price}</p>
        </div>}
  </AnimatedDiv>
);

interface CardData {
  title: string;
  price: string;
  description: string;
  src: string;
  
}


const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMultiCamVisible, setMultiCamVisible] = useState(false);
  const [gapSize, setGapSize] = useState(500);
  
    // Update gap size on mount and window resize
  useEffect(() => {
    const updateGapSize = () => {
      const width = window.innerWidth;
      if (width < 1200) { // mobile
        setGapSize(300);
      } else if (width < 1700) { //small desktop
        setGapSize(320);
      } else { // desktop
        setGapSize(500);
      }
    };

    updateGapSize();
    window.addEventListener('resize', updateGapSize);
    return () => window.removeEventListener('resize', updateGapSize);
  }, []);
  
  
  const cards: CardData[] = [
    {
      price: "AED 50",
      title: "Teleprompter",
      src: "/images/3d1.webp",
      description: "Use of a teleprompter in-studio for smooth delivery."
    },
    {
      price: "AED 400",
      title:"Subtitles (per session)",
      src: "/images/3d2.webp",
      description: "Adding subtitles/captions to your final video for accessibility and audience engagement."
    },
    {
      price: "AED 200",
      title: "Multi-Cam Recording",
      src: "/images/3d3.webp",
      description: "Upgrade from 3 cameras to 5 cameras total for maximum engagement."
    },
    {
      price: "AED 2500",
      title: "Podcast Trailer",
      src: "/images/3d4.webp",
      description: "Craft a compelling intro video for your show's mission. Includes voiceover, music, tailored visuals, and a logo jingle for a lasting impression."
    },
    {
      price: "AED 7500",
      title: "Podcast Branding",
      src: "/images/3d5.webp",
      description: "Complete A/V branding: professionally designed logo, color scheme, typography, cover art, jingle, social media visuals, and brand book."
    }
  ];

  const CalculateStyles = (index: number) => {
    // Calculate the relative position considering the infinite loop
    const totalCards = cards.length;
    const position = ((index - currentIndex) % totalCards + totalCards) % totalCards;
    
    // Adjust position to be between -1 and 1 for proper animation
    let adjustedPosition = position;
    if (position > totalCards / 2) adjustedPosition = position - totalCards;
    
    const translateX = adjustedPosition * gapSize;
    const scale = adjustedPosition === 0 ? 1 : 0.8;
    const opacity = Math.abs(adjustedPosition) > 1 ? 0.3 : 1;
    const zIndex = adjustedPosition === 0 ? 3 : 1;

    return useSpring({
      to: {
        transform: `translateX(${translateX}px) scale(${scale})`,
        opacity,
        zIndex,
      },
      config: config.gentle,
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[500px] 3xl:h-[780px] flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-[300px] h-[400px] 3xl:w-[520px] flex rounded-2xl p-4 border-[0.8px] bg-transparent border-[#989898] 3xl:h-[680px] mb-8 lg:mb-0">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            style={CalculateStyles(index)}
            inFocus={index === currentIndex}
            // onClick={() => setCurrentIndex(index)}
            isVisible={() => setMultiCamVisible((prev) => !prev)}
            isMultiCamVisible={isMultiCamVisible}
            
          />
        ))}
      </div>

       {/* Navigation Buttons */}
      <div className="absolute bottom-4 w-[90%] lg:w-auto lg:right-10 flex justify-between lg:justify-end gap-2">
        <button 
          onClick={handlePrevious}
          className=" p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm "
        >
          <IoIosArrowBack className="size-4 text-gray-500" />
        </button>
        
        <button 
          onClick={handleNext}
          className=" p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm"
        >
          <IoIosArrowForward className="size-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Carousel3D;