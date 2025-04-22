"use client";
import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ProfessionalCard } from './professionals-card';

export interface CardData {
    name: string;
    description: string;
    src: string;
}

const profCards: CardData[] = [
    {
        name: 'Layla Hariri',
        src: '/images/prof-1.png',
        description: '12.3M Followers',
    },
    {
        name: 'Zayd Al Mazrouei',
        src: '/images/prof-2.png',
        description: '6.8M Followers',
    },
    {
        name: 'Noura Khalid',
        src: '/images/prof-3.png',
        description: '3.7M Followers',
    },
    {
        name: 'Sofia Maree',
        src: '/images/prof-4.png',
        description: '2.8M Followers',
    },
    {
        name: 'DJ Kareem',
        src: '/images/prof-5.png',
        description: '10M Followers',
    },
    {
        name: 'Tariq Blaze',
        src: '/images/prof-6.png',
        description: '1.1M Followers',
    },
];

function MicProfessionals() {
    const cardsPerView = 3;
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.ceil(profCards.length / cardsPerView) - 1;
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    // Mobile swipe handlers only
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left
            handleNext();
        } else if (touchStart - touchEnd < -50) {
            // Swipe right
            handlePrevious();
        }
    };

    return (
        <div className='bg-[#f5f5f7] w-full py-10 3xl:py-20 3xl:mt-0'>
            <div className='max-w-[1728px] h-full px-[21px] mx-auto md:px-10 3xl:px-[100px]'>
                <header className='flex relative gap-5 justify-between mx-auto mb-[51px] 3xl:mb-[121px] w-full text-[#333333]'>
                    <div className='flex flex-col font-hankenGrotesk'>
                        <h2 className='text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl'>
                            Who&apos;s Been on the Mic?
                        </h2>
                        <p className='mt-4 lg:w-[65%] 3xl:w-[75%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal'>
                            From founders to thought leaders — see how <span className='text-[#619B8A]'>ARcast studio brings every story to life</span>
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className='md:relative md:top-0 absolute top-32 flex md:block justify-between space-x-3 lg:w-auto lg:right-10 gap-2'>
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className={`p-1 md:p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            aria-label="Previous slide"
                        >
                            <IoIosArrowBack className='size- text-gray-500' />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentIndex === maxIndex}
                            className={`p-1 md:p-2 rounded-lg border-[1.5px] border-gray-500 shadow-sm ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
                            aria-label="Next slide"
                        >
                            <IoIosArrowForward className='size- text-gray-500' />
                        </button>
                    </div>
                </header>
            </div>
            {/* Mobile-only swipe area */}
            <div 
                className="lg:w-[100%] md:w-[800px] px-[21px] overflow-hidden relative"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Inner Slide Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(40 / cardsPerView) * currentIndex}%)`,
                        width: `${(profCards.length / cardsPerView) * 40}%`,
                    }}
                >
                    {profCards.map((data, index) => (
                        <div
                            key={index}
                            className="w-[calc(1000px/3)] flex-shrink-0 p-2"
                        >
                            <ProfessionalCard {...data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MicProfessionals;