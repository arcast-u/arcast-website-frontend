import React from 'react';
import Image from 'next/image';

function Equipment() {
  return (
    <div className='bg-[#f5f5f7] w-full px-[21px] py-10 3xl:py-20 lg:mt-24 3xl:mt-0 lg:px-10 3xl:px-[100px]'>
      <div className='max-w-[1728px] h-full mx-auto'>
        <header className="flex gap-5 justify-between mx-auto mb-[51px] 3xl:mb-[121px] w-full text-[#333333]">
          <div className="flex flex-col font-hankenGrotesk">
            <h1 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl">
                Professional-Grade, State of the Art Gear
            </h1>
            <p className="mt-4 lg:w-[65%] 3xl:w-[75%] text-xl 3xl:text-[28px] leading-[27.28px] font-nunitoSans 3xl:leading-[38.19px] font-normal">
            We invested in the best gear in the industry, so you can focus on what matters most - your content.
            </p>
          </div>
        </header>
        <div className='md:h-screen'>
        <Image quality={100} src="/images/equipments.png" alt='all equipment' width={1555.03} height={1132} className='h-full hidden lg:block w-full' />
        <Image quality={100} src="/images/equipmentmd.png" alt='all equipment' width={1124.07} height={1525} className='h-full hidden md:block lg:hidden w-full' />
        <Image quality={100} src="/images/equipmentsmobile.png" alt='all equipment' width={327} height={1420} className='h-full md:hidden w-full' />
        </div>
      </div>
    </div>
  )
}

export default Equipment;