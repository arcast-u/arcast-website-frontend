import React, { useEffect } from 'react';
import Image from 'next/image';

interface StudioCardProps {
  count: number;
  name: string;
  totalSeats: number;
  location: string;
  isFullyBooked: boolean;
  imageUrl: string;
  selectedStudio: number;
  setSelectedStudio: (count: number) => void;
}
const img = '/images/studio1.webp';

const StudioCard = ({
  imageUrl,
  name,
  location,
  totalSeats,
  isFullyBooked,
  selectedStudio,
  setSelectedStudio,
  count,
}: StudioCardProps) => {
  // Add check for Mobile Studio Service
  const isMobileStudio = name === 'Mobile Setup Service';
  const bgColor = isMobileStudio ? 'bg-black' : 'bg-[#F5F5F7]';
  const textColor = isMobileStudio ? 'text-[#FCFCFC]' : 'text-[#333333]';

  // const handleStudioSelect = () => {
  //   if (!isFullyBooked && isMobileStudio) {
  //     setSelectedStudio(count);
  //   }
  // };
  const handleStudioSelect = () => {
    if (!isFullyBooked) {
      // Toggle selection: if already selected, clear it, otherwise select this studio
      setSelectedStudio(count === selectedStudio ? -1 : count);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedStudio', selectedStudio.toString());
  }, [selectedStudio]);
  return (
    <div
      className={`flex flex-col relative shrink  justify-center py-2.5 px-3 3xl:px-5 3xl:py-4 rounded-xl 
        basis-0 ${bgColor} transition-transform  ${
        !isFullyBooked ? 'hover:scale-105' : ''
      }`}
      tabIndex={0}
      role='button'
      onClick={handleStudioSelect}
    >
      <div className='w-full 3xl:h-[208px] 4xl:h-[308px]'>
        <Image
          loading='lazy'
          src={imageUrl.trimEnd() || img.trimEnd()}
          width={137.5}
          height={110}
          quality={100}
          alt='studio card'
          className='object-cover flex-1 w-full 3xl:h-[208px] 4xl:h-[308px] rounded-lg aspect-[1.3]  '
        />
      </div>
      <div className='flex justify-between font-nunitoSans mt-3 w-full'>
        <div className='flex-col flex'>
          <h3
            className={`font-semibold text-sm leading-[19.1px] 3xl:leading-[21.82px] 3xl:text-base ${textColor}`}
          >
            {name}
          </h3>
          <p className='mt-1 text-xs leading-[16.37px] 3xl:leading-[21.82px] 3xl:text-base font-normal text-[#989898]'>
            {location || totalSeats}
          </p>
        </div>
        <input
          type='radio'
          name='studioSelection'
          value={name}
          checked={count === selectedStudio}
          onChange={handleStudioSelect}
          className='self-start mt-1 focus:outline-none accent-[#FF8C42]'
        />
      </div>
      {isFullyBooked && (
        <div className='absolute top-0 cursor-not-allowed right-0 flex justify-center pt-14 3xl:pt-28 4xl:pt-44 md:pt-32 lg:pt-16 w-full h-full bg-[#F5F5F7]/50 rounded-xl'>
          <p className='text-[#333333] font-semibold text-sm leading-[19.1px] 3xl:leading-[27.28px] lg:text-base lg:leading-[25.82px] 3xl:text-xl'>
            Fully Booked
          </p>
        </div>
      )}
    </div>
  );
};

export default StudioCard;
