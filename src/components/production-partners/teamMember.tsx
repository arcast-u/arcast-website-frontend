import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  imageSrc: string;
  title: string;
  description: string;
  name: string;
  experience?: string;
}

export const TeamMember = ({
  name,
  experience,
  
  imageSrc,
  title,
  description,
}: TeamMemberProps) => {
  return (
    <div className='w-full flex flex-col'>
      <Image
        loading='lazy'
        src={imageSrc}
        alt={`${title} team member`}
        width={105}
        height={90}
        className='object-cover rounded-md shadow-xl shadow-black/20 w-[105px] h-[90px]'
      />
      <div className=' font-normal font-nunitoSans justify-center mt-4 xl:mt-3 w-full'>
        <h3 className='text-base 3xl:text-xl leading-[21.82px] text-[#333333]'>
          {name}
        </h3>
        <p className='mt-1 text-sm leading-[19.1px] 3xl:text-base font-medium text-[#989898]'>
          {title}
        </p>
         <p className='mb-1 text-sm leading-[19.1px] 3xl:text-base font-medium text-[#989898]'>
          {experience}
        </p>
        <p className='sans text-[#333333] font-normal text-base mt-1'>{description}</p>
      </div>
    </div>
  );
};
