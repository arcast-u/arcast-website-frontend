import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const TeamMember = ({
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
        height={100}
        className='object-cover rounded-md shadow-xl shadow-black/20 w-[105px] h-[100px]'
      />
      <div className=' font-normal font-nunitoSans justify-center mt-4 xl:mt-3 w-full'>
        <h3 className='text-base 3xl:text-xl leading-[21.82px] text-[#333333]'>
          {title}
        </h3>
        <p className='mt-1 text-sm leading-[19.1px] 3xl:text-base font-medium text-[#989898]'>
          {description}
        </p>
      </div>
    </div>
  );
};
