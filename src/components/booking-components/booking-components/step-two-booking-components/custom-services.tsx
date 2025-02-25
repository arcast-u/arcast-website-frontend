'use client'
import React, {useState} from 'react';
import ServiceOption from './service-option';


type Selector = {
    duration: number;
  setDuration: (value: number) => void
}

const services = [
    {
        id: 'Standard Edit (Short Form)',
        name: 'Standard Edit (Short Form)',
        price: '500 AED',
        description: 'Three scroll-stopping clips (each up to ~90s). Subtitles, branding elements, and on-screen text.',
        imgSrc: ['/images/Reel1.png', '/images/Reel2.png', '/images/Reel3.png'],
        imgAlt: 'Illustration of standard reels service'
      },
      {
        id: 'Custom Edit (Short Form)',
        name: 'Custom Edit (Short Form)',
        price: '1000 AED',
        description: 'Five scroll-stopping clips with advanced styling, perfect for multi-platform promotion.',
        imgSrc: ['/images/Reel4.png', '/images/Reel5.png', '/images/Reel6.png'],
        imgAlt: 'Illustration of signature reels service'
      },
      {
        id: 'Standard Edit (Long Form)',
        name: 'Standard Edit (Long Form)',
        price: '500 AED',
        description: 'Complete audio/video editing for 1 episode (up to 60 min raw). Includes logos, music integration, removing unwanted parts, color correction, and audio leveling.',
        imgSrc: ['/images/custom3.png'],
        imgAlt: 'Illustration of standard episode edit service'
      },
      {
        id: 'Custom Edit (Long Form)',
        name: 'Custom Edit (Long Form)',
        price: '1000 AED',
        description: 'Complete audio/video editing for 1 episode (up to 60 min raw). Includes logos, music integration, removing unwanted parts, color correction, and audio leveling.',
        imgSrc: ['/images/custom4.png'],
        imgAlt: 'Illustration of signature episode edit service'
      },
      {
        id: 'live-mix',
        name: 'Live Mix',
        price: '400 AED',
        description: 'Live-mixed episode with synced cameras and audio. Live cutting of your video with synced audio.',
        imgSrc: ['/images/custom5.png'],
        imgAlt: 'Illustration of live mix service'
      },
      {
        id: 'Subtitles (per session)',
        name: 'Subtitles (per session)',
        price: '400 AED',
        description: 'Adding subtitles/captions to your final video for accessibility and audience engagement.',
        imgSrc: ['/images/custom6.png'],
        imgAlt: 'Illustration of podcast trailer service'
      },
      {
        id: 'Teleprompter',
        name: 'Teleprompter',
        price: '50 AED',
        description: 'Use of a teleprompter in-studio for smooth delivery.',
        imgSrc: ['/images/custom7.png'],
        imgAlt: 'Illustration of podcast branding service'
      },
      {
        id: 'Multi-Cam Recording',
        name: 'Multi-Cam Recording',
        price: '200 AED',
        description: 'Upgrade from 3 cameras to 5 cameras total for maximum engagement.',
        imgSrc: ['/images/custom8.png'],
        imgAlt: 'Illustration of jingle service'
      },
     
];

const CustomServices = ({duration, setDuration}: Selector) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    
  return (
    <section className=" mt-8 lg:mt-10">
        <h2 className="header-text">
          à la carte services
        <span className="text-xl leading-[28.74px] 3xl:text-2xl italic 3xl:leading-[32.74px] text-[#989898]">(optional)</span>
        </h2>
        <div className="flex flex-col mt-3 3xl:mt-5">
        {services.map((service, index) => (
            <ServiceOption
            key={index}
            {...service}
            count={index}
            groupName="service-options" 
            selected={selectedIndex === index}
            onSelect={() => setSelectedIndex(index)}
            duration={duration} 
            setDuration={setDuration}
            />
        ))}
        </div>
    </section>
  )
}

export default CustomServices