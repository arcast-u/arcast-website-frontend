'use client';
import { useState, useEffect } from 'react';
import { useSpring, animated, config, SpringValue } from '@react-spring/web';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
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

const Card = ({
  title,
  price,
  style,
  description,
  src,
  isMultiCamVisible,
  isVisible,
  onClick,
  inFocus,
}: CardProps) => (
  <AnimatedDiv
    style={style}
    onClick={onClick}
    className={`${inFocus
      ? 'h-[90%] w-[90%] top-4  left-4 3xl:top-9 3xl:left-7'
      : 'h-full w-full left-0 top-0'
      } absolute bg-transparent rounded-2xl  flex flex-col items-center text-center cursor-pointer`}
  >
    <Image
      src={src}
      alt={title}
      quality={100}
      width={520}
      height={680}
      loading='lazy'
      className={`w-full ${inFocus ? 'h-full' : 'h-[85%]'
        } relative shadow-lg object-cover object-center rounded-2xl`}
    />
    {/* Multi-Cam Recording Toggle */}
    {inFocus && (
      <div
        className={` p-3 3xl:p-4 absolute w-[88%] font-medium bottom-4 lg:bottom-7 font-nunitoSans rounded-2xl  cursor-pointer hover:shadow-lg transition ${isMultiCamVisible ? 'bg-white' : 'bg-transparent'
          }`}
        onClick={() => isVisible()}
      >
        <div
          className={`flex items-center  ${isMultiCamVisible
            ? 'text-[#333333] justify-between'
            : 'text-[#FCFCFC] gap-1'
            }`}
        >
          <h3
            className={`text-base 3xl:text-[28px] 3xl:leading-[38.19px] font-medium`}
          >
            {title}
          </h3>
          <ArrowUpRight className='w-5 h-5 ' />
        </div>
        <p className='text-[#FCFCFC] font-semibold mt-1 text-xl text-left'>
          {price}
        </p>
        {isMultiCamVisible && (
          <p className='text-[#333333] text-sm 3xl:text-2xl text-left mt-2'>
            {description}
          </p>
        )}
      </div>
    )}

    {!inFocus && (
      <div className='mt-3 font-nunitoSans  w-full text-left'>
        <p className='text-[#989898] font-medium text-base'>{title}</p>
        <p className='text-[#333333] font-semibold mt-1 text-2xl'>{price}</p>
      </div>
    )}
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
      if (width < 1200) {
        // mobile
        setGapSize(380);
      } else if (width < 1700) {
        //small desktop
        setGapSize(380);
      } else {
        // desktop
        setGapSize(500);
      }
    };

    updateGapSize();
    window.addEventListener('resize', updateGapSize);
    return () => window.removeEventListener('resize', updateGapSize);
  }, []);

  const cards: CardData[] = [
    {
      price: 'AED 500',
      title: 'Short Form Edit (Instagram / TikTok) ',
      src: '/images/Reel1.png',
      description:
        'High-quality, premium reels with advanced editing, motion graphics, and engaging cuts.',
    },
    {
      price: 'AED 960',
      title: 'Long Form Edit (Youtube)',
      src: '/images/Reel7.png',
      description:
        'Professional-grade editing with in-depth sound design, smooth transitions, and high production quality.',
    },
    {
      price: 'AED 200',
      title: 'Episode Trailer (Short form)',
      src: '/images/Reel4.png',
      description:
        'Quick, impactful trailer editing to capture attention and drive excitement with key highlights in a concise format.',
    },
    {
      price: 'AED 200',
      title: 'Episode Trailer (Long form)',
      src: '/images/Reelt.png',
      description:
        'Professional editing to create a captivating trailer that highlights key moments, engaging your audience with a polished, cinematic preview.',
    },
    {
      price: 'AED 440',
      title: 'Subtitles (per session)',
      src: '/images/Reels.png',
      description:
        'Accurate subtitles and captions to improve accessibility and engagement for video content.',
    },
    {
      price: 'AED 80',
      title: 'Teleprompter Support',
      src: '/images/3d4.png',
      description: 'On-screen script assistance for seamless delivery, perfect for structured interviews and presentations.',
    },
    {
      price: 'AED 500',
      title: 'Wardrobe Styling Consultation',
      src: '/images/Reel-wardrobe.png',
      description: 'Expert outfit guidance to enhance your on-camera presence and reflect your personal brand.',
    },
    // {
    //   price: 'AED 440',
    //   title: 'Subtitles (per session)',
    //   src: '/images/3d5.png',
    //   description:
    //     'Accurate subtitles and captions to improve accessibility and engagement for video content.',
    // },
    // {
    //   price: 'AED 200',
    //   title: 'Multi-Cam Recording',
    //   src: '/images/3d3.png',
    //   description:
    //     'Upgrade from 3 cameras to 5 cameras total for maximum engagement.',
    // },
    // {
    //   price: 'AED 2400',
    //   title: 'Podcast Trailer',
    //   src: '/images/3d1.png',
    //   description:
    //     "Craft a compelling intro video for your show's mission. Includes voiceover, music, tailored visuals, and a logo jingle for a lasting impression.",
    // },
    // {
    //   price: 'AED 6400',
    //   title: 'Podcast Branding',
    //   src: '/images/3d2.png',
    //   description:
    //     'Complete A/V branding: professionally designed logo, color scheme, typography, cover art, jingle, social media visuals, and brand book.',
    // },
  ];

  const CalculateStyles = (index: number) => {
    // Calculate the relative position considering the infinite loop
    const totalCards = cards.length;
    const position =
      (((index - currentIndex) % totalCards) + totalCards) % totalCards;

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
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className='relative w-full h-[600px] 3xl:h-[780px] flex items-center justify-center overflow-hidden'
    >
      {/* Carousel Container */}
      <div className='relative w-[400px] h-[500px] 3xl:w-[520px] flex rounded-2xl p-4 border-[0.8px] bg-transparent border-[#989898] 3xl:h-[680px] mb-8 lg:mb-0'>
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
      <div className='absolute bottom-4 w-[90%] lg:w-auto lg:right-10 flex justify-between lg:justify-end gap-2'>
        <button
          onClick={handlePrevious}
          className='p-1 md:p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm '
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

export default Carousel3D;
