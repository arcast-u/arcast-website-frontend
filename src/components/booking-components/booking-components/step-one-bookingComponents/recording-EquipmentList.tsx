"use client";

import React, {useEffect, useState } from 'react';
import EquipmentCard from './recording-EquipmentCard';


const EquipmentSection = () => {
  const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 768 && window.innerWidth < 1024); // Tailwind md: 768px - 1023px
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <section 
      className="pt-[5px] mt-4 items-center text-sm font-medium text-[#333333] leading-[19.1px] grid grid-cols-1 gap-3 3xl:gap-4"
      aria-label="Available Equipment"
    >
      <div className='flex gap-3 3xl:gap-4 '>
        <div className="w-[38vw] lg:w-[40vw]">
            <EquipmentCard
            imageSrc="/images/video-camera.webp"
            description="3x Sony cinema cameras"
            />
        </div>
        <div className="w-[62vw] lg:w-[60vw]">
            <EquipmentCard
                imageSrc="/images/microphone1.webp"
                description={isMdScreen ? "2x Shure microphone" : <>2x Shure<br/>microphone</>}
            />
        </div>
      </div>
      <div className='flex gap-3 '>
        <div className="w-[62vw] lg:w-[60vw]">
            <EquipmentCard
            imageSrc="/images/vga-cable.webp"
            description="Necessary stands and cables"
            />
        </div>
        <div className="w-[38vw] lg:w-[40vw]">
            <EquipmentCard
                imageSrc="/images/bulb-check.webp"
                description="Complete lighting setup"
            />
        </div>
      </div>
      <div className='flex gap-3 '>
        <div className="w-[38vw] lg:w-[40vw]">
            <EquipmentCard
            imageSrc="/images/operator.webp"
            description="Recording operator"
            />
        </div>
        <div className="w-[62vw] lg:w-[60vw] h-full">
            <EquipmentCard
                imageSrc="/images/settings.webp"
                description={isMdScreen ? "Full technical setup" : <>Full technical <br/>setup</>}
            />
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;