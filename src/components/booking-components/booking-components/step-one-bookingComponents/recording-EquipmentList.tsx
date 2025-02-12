"use client";

import React from 'react';
import EquipmentCard from './recording-EquipmentCard';


const EquipmentSection = () => {
  // const [isMdScreen, setIsMdScreen] = useState(false);
  // const [isXlScreen, setIsXlScreen] = useState(false);


  //   useEffect(() => {
  //       const handleResize = () => {
  //           setIsMdScreen(window.innerWidth >= 768 && window.innerWidth < 1024); // Tailwind md: 768px - 1023px
  //           setIsXlScreen(window.innerWidth >= 1300); // Tailwind md: 768px - 1023px
  //       };

  //       handleResize();
  //       window.addEventListener("resize", handleResize);
  //       return () => window.removeEventListener("resize", handleResize);
  //   }, []);
  return (
    <section 
      className="pt-[5px] mt-4 items-center text-sm font-medium text-[#333333] leading-[19.1px] grid grid-cols-1 gap-3 3xl:gap-4"
      aria-label="Available Equipment"
    >
      <div className='grid grid-cols-2 gap-3 3xl:gap-4 '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/mixer.webp"
            description={<>Audio Interface/mixer</>}
            />
        </div>
        <div className="">
            <EquipmentCard
                imageSrc="/images/microphone1.webp"
                description={<>Shure SM7 Microphone</>}
            />
        </div>
      </div>
      <div className='grid grid-cols-2 3xl:grid-cols-3 gap-3 '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/headphone.webp"
            description={<>Headphones</>}
            />
        </div>
        <div className="">
            <EquipmentCard
            imageSrc="/images/acoustic.webp"
            description={<>Acoustic Panels</>}
            />
        </div>
        <div className="">
            <EquipmentCard
                imageSrc="/images/video-camera.webp"
                description={<>Sony cinema camera</>}
            />
        </div>
        <div className='3xl:col-span-3 grid grid-cols-1 3xl:grid-cols-2 gap-3 '>
        <div className="">
            <EquipmentCard
            imageSrc="/images/bulb-check.webp"
            description={<>Soft boxes & LED panels</>}
            />
        </div>
        <div className="h-full">
            <EquipmentCard
                imageSrc="/images/tripod.webp"
                description={<>Tripods & Sliders</>}
            />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default EquipmentSection;