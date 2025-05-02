/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

interface CardProps {
  image: string;
  title: string;
  description: string;
  button: string;
  date: string;
}

const Card = ({ image, title, description, button, date }: CardProps) => {
  const slug = slugify(title);
  return (
    <Link href={`/blog/${slug}`} className='w-full'>
      <div className='relative rounded-[8px] overflow-hidden text-[#989898] hover:text-[#FCFCFC] md:h-[350px] lg:h-[400px] 3xl:h-[500px]  w-full h-[300px]'>
        <img
          src={image || ''}
          alt={title || ' blog'}
          loading='lazy'
          className='image-hover-animation md:h-[350px] lg:h-[400px] 3xl:h-[500px]  w-full h-[300px] rounded-[8px] object-cover object-center'
        />

        <div className='absolute pb-3 px-3 lg:pb-5 z-10 lg:px-5 bottom-0 mt-auto w-full font-nunitoSans font-medium flex items-center justify-between '>
          <div className=' border text-[11px] lg:text-sm lg:leading-[19.1px] leading-[15px] border-[#989898] hover:border-[#FCFCFC] py-1.5 px-2 lg:py-2 lg:px-3 rounded'>
            {button}
          </div>
          <p className=' text-[10px] lg:text-sm lg:leading-[19.1px] leading-[13.64px]'>
            {date}
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className='mt-2.5 lg:mt-4 font-nunitoSans font-medium'>
        <p className='text-base leading-[21.82px] lg:text-xl lg:leading-[27.28px] 3xl:text-[28px] 3xl:leading-[38.19px]'>
          {title}
        </p>
        <p className='mt-1 text-sm leading-[19.1px] lg:text-base lg:leading-[21.82px] 3xl:text-xl 3xl:leading-[27.28px] text-[#989898]'>
          {description ? description : ''}
        </p>
      </div>
    </Link>
  );
};

export default Card;
