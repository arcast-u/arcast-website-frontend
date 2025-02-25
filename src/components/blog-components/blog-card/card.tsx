import React from 'react'
import Image from 'next/image';
interface CardProps {
  image: string;
  title: string;
  description: string;
  button: string;
  date: string;
}

const Card = ({image, title, description, button, date}: CardProps) => {
  return (
    <div className='w-full'>
        <div className='relative rounded-[8px] overflow-hidden text-[#989898] hover:text-[#FCFCFC]'>
            <Image 
            src={image} 
            width={335}
            height={240}
            alt={title}
            loading='lazy'
            quality={100}
            className='image-hover-animation object-fit md:h-[350px] lg:h-[400px] 3xl:h-[500px]  w-full rounded-[8px]
            '/>
            {/* <div className='absolute rounded-[8px] text-[#989898] hover:text-[#FCFCFC] flex items-baseline top-0 bg-gradient-to-t z-10 from-[#000000b3] p-3 lg:p-5 via-[#00000000] to-[#00000000] w-full h-full'> */}
                <div className='absolute pb-3 px-3 lg:pb-5 z-10 lg:px-5 bottom-0 mt-auto w-full font-nunitoSans font-medium flex items-center justify-between '>
                    <button className=' border text-[11px] lg:text-sm lg:leading-[19.1px] leading-[15px] border-[#989898] hover:border-[#FCFCFC] py-1.5 px-2 lg:py-2 lg:px-3 rounded'>{button}</button>
                    <p className=' text-[10px] lg:text-sm lg:leading-[19.1px] leading-[13.64px]'>{date}</p>
                </div>
            {/* </div> */}
        </div>
        <div className='mt-2.5 lg:mt-4 font-nunitoSans font-medium'>
            <p className='text-base leading-[21.82px] lg:text-xl lg:leading-[27.28px] 3xl:text-[28px] 3xl:leading-[38.19px]'>{title}</p>
            <p className='mt-1 text-sm leading-[19.1px] lg:text-base lg:leading-[21.82px] 3xl:text-xl 3xl:leading-[27.28px] text-[#989898]'>{description}</p>
        </div>
    </div>
  )
}

export default Card