import React, { useEffect, useRef } from 'react';
import SelectDuration from './select-duration';
import { useDuration } from '@/contex/durationContext';
import { AdditionalServiceType } from '@/utils/types';

export type ServiceOptionProps = {
  count: number;
  selected: boolean;
  onSelect: (
    index: number,
    action: 'toggle' | 'increment' | 'decrement'
  ) => void;
  groupName: string;
  duration: number;
  setDuration: (value: number) => void;
  services: AdditionalServiceType;
  keyIndex: number;
};

const ServiceOption = ({
  keyIndex,
  selected,
  onSelect,
  groupName,
  services,
}: ServiceOptionProps) => {
  const { durations, setDuration } = useDuration();
  const duration = durations[services.title] || 1;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Setup initial video refs array
  useEffect(() => {
    // Initialize the array with the correct length
    videoRefs.current = Array(services?.imageUrls?.length || 0).fill(null);
  }, [services?.imageUrls?.length]);
  
  // Check if service is the Short Form Edit type (for multi-video layout)
  const isShortFormEdit = services?.type === 'STANDARD_EDIT_SHORT_FORM';
  
  // Setup autoplay and loop for videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Find the index of the video in our refs array
          const index = videoRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              // Start playing when video comes into view
              videoRefs.current[index]?.play().catch(err => {
                // Handle autoplay errors silently - browsers may block autoplay
                console.log("Autoplay prevented:", err);
              });
            } else {
              // Pause when out of view
              videoRefs.current[index]?.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    
    // Observe all video elements
    videoRefs.current.forEach(videoRef => {
      if (videoRef) {
        observer.observe(videoRef);
      }
    });
    
    // Cleanup
    return () => {
      videoRefs.current.forEach(videoRef => {
        if (videoRef) {
          observer.unobserve(videoRef);
        }
      });
    };
  }, [services?.imageUrls]);

  // Helper function to determine if a URL is media (video or gif)
  const isMediaFile = (url: string): { isVideo: boolean, isGif: boolean } => {
    const isVideo = url?.toLowerCase()?.endsWith('.mp4');
    const isGif = url?.toLowerCase()?.endsWith('.gif');
    return { isVideo, isGif };
  };

  return (
    <article
      role='button'
      tabIndex={0}
      onClick={() => onSelect(keyIndex, 'toggle')}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(keyIndex, 'toggle')}
      className='flex flex-col justify-center px-5 3xl:px-6 py-4 3xl:py-5 shadow-xl shadow-[#80808050] mt-5 w-full mb-5 rounded-xl bg-[#F5F5F7]'
    >
      <header className='flex flex-wrap justify-between font-nunitoSans items-center w-full text-lg leading-[26px] 3xl:text-xl 3xl:leading-[27.28px] text-[#333333]'>
        <div className='flex flex-col flex-1 shrink self-stretch my-auto basis-0'>
          <h3 className='font-normal'>{services.title}</h3>
          <div className='mt-0.5 3xl:mt-2 font-semibold'>{services.price}</div>
        </div>
        <input
          type='checkbox'
          name={`${groupName}`}
          aria-checked={selected}
          checked={selected}
          onChange={() => onSelect(keyIndex, 'toggle')}
          className='flex shrink-0 gap-2.5 self-stretch accent-[#333333] my-auto w-4 h-4 rounded-xl border border-solid'
        />
      </header>
      
      {isShortFormEdit && (
        <div className='w-full'>
          <SelectDuration
            keyIndex={keyIndex}
            hasBorder={true}
            duration={duration}
            setDuration={(value) => setDuration(services.title, value)}
            hasHeader={false}
            services={services}
            onSelect={onSelect}
            disabled={!selected}
          />
        </div>
      )}

      {/* Media content section */}
      <div className={`w-full mt-4 ${isShortFormEdit ? 'grid grid-cols-3 gap-2' : ''}`}>
        {services?.imageUrls?.map((url, index) => {
          // Skip rendering if this is not the first item and not Short Form Edit
          if (index > 0 && !isShortFormEdit) return null;
          
          const { isVideo, isGif } = isMediaFile(url);
          
          return (
            <div 
              key={`${services.id}-media-${index}`} 
              className={`relative rounded-lg overflow-hidden ${isShortFormEdit ? '' : 'w-full'}`}
            >
              {isVideo && (
                <video
               // @ts-expect-error - TS doesn't recognize the ref type correctly
                  ref={el => videoRefs.current[index] = el}
                  src={url}
                  preload="auto"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              {isGif && (
                // For GIFs, we use an img tag since they animate automatically
                <img
                  src={url}
                  alt={`${services.title} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              {!isVideo && !isGif && (
                // Regular images
                <img
                  src={url}
                  alt={`${services.title} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          );
        })}
      </div>
      
      <p className='mt-4 text-sm leading-[17.28px] 3xl:leading-[21.28px] font-nunitoSans 3xl:text-base font-medium text-[#989898]'>
        {services.description}
      </p>
    </article>
  );
};

export default ServiceOption;