"use client";

import React, {useEffect, useState} from 'react';
import EquipmentCard from './recording-EquipmentCard';


const EquipmentSection = () => {
  const [is2XlScreen, setIs2XlScreen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIs2XlScreen(window.innerWidth >= 1600); // Tailwind md: 768px - 1023px
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <section 
      className="pt-[5px] mt-3 items-center text-sm font-medium text-[#333333] leading-[19.1px] grid grid-cols-1 gap-[10px] lg:gap-3"
      aria-label="Available Equipment"
    >
      <div className='grid grid-cols-2 gap-[10px] lg:gap-3  '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/image 41.png"
            description={<>Audio Interface/mixer</>}
            />
        </div>
        <div className="">
            <EquipmentCard
                imageSrc="/images/image 37.png"
                description={<>Shure SM7 Microphone</>}
            />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-[10px] lg:gap-3 '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/image 38.png"
            description={is2XlScreen ? "Headphones" :<>Head<br/>phones</>}
            />
        </div>
        <div className="">
            <EquipmentCard
            imageSrc="/images/acoustic.webp"
            description={is2XlScreen ? "Acoustic Panels" : <>Acoustic<br/>Panels</>}
            />
        </div>
        <div className="">
            <EquipmentCard
                imageSrc="/images/image 36.png"
                description={is2XlScreen ? "Sony cinema camera" : <>Sony cinema<br/> camera</>}
            />
        </div>
        
      </div>
      <div className='grid grid-cols-2 gap-[10px] lg:gap-3 '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/bulb-check.webp"
            description={<>Soft boxes & LED panels</>}
            />
        </div>
        <div className="h-full">
            <EquipmentCard
                imageSrc="/images/image 47.png"
                description={<>Tripods & Sliders</>}
            />
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;