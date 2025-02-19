import React from 'react';
import Image from 'next/image';

function Equipment() {
  return (
    <div className='bg-[#f5f5f7] w-full px-[21px] py-10 3xl:py-20 lg:mt-24 3xl:mt-0 lg:px-10 3xl:px-[100px]'>
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
    {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-20 '>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-3 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Sony a7 Siii</p>
          </div>
        </div>
        <Image src="/images/image 36.png" alt="image" width={135.6} height={150} className='3xl:w-[226px] mt-5 3xl:h-[200px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-3 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-16 lg:left-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">MV7X (microphone)</p>
          </div>
        </div>
        <Image src="/images/image 37.png" alt="image" width={115.2} height={150} className='3xl:w-[192px] mt-10 3xl:h-[250px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-10 lg:ml-24 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-10 lg:left-12 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">NTH-100 Headphones</p>
          </div>
        </div>
        <Image src="/images/image 38.png" alt="image" width={150} height={150} className='3xl:w-[226px] mt-11 3xl:h-[250px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-14 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-4 lg:right-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Feelworld T7 (monitor)</p>
          </div>
        </div>
        <Image src="/images/image 40.png" alt="image" width={150} height={150} className='3xl:w-[274.52px] mt-11 3xl:h-[250px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-4 lg:left-9 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">200XS and Softbox </p>
          </div>
        </div>
        <Image src="/images/bulb-check.webp" alt="image" width={140.06} height={150} className='3xl:w-[233.43px] mt-8 3xl:h-[250px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute right-4 lg:left-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Teleprompter</p>
          </div>
        </div>
        <Image src="/images/teleprompter.webp" alt="image" width={126.6} height={150} className='3xl:w-[211px] mt-11 3xl:h-[250px]'/>
      </div>
      <div className="grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-3 lg:ml-14 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute left-4 lg:right-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Sony 16-35 mm Camera </p>
          </div>
        </div>
        <Image src="/images/image 39.png" alt="image" width={150} height={112.28} className='3xl:w-[334px] mt-10 3xl:h-[220px]'/>
      </div>
      <div className="grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-20 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute left-11 lg:left-14 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Focusrite audio interface</p>
          </div>
        </div>
        <Image src="/images/image 41.png" alt="image" width={150} height={63.44} className='3xl:w-[279px] mt-11 3xl:h-[118px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded">
            <div className="absolute left-4 lg:left-9 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Acoustic Panels</p>
          </div>
        </div>
        <Image src="/images/image 46.png" alt="image" width={140.06} height={150} className='3xl:w-[233.43px] mt-8 3xl:h-[250px]'/>
      </div>
      <div className=" grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-28 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute right-4 lg:left-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Shock Mounts</p>
          </div>
        </div>
        <Image src="/images/image 47.png" alt="image" width={126.6} height={150} className='3xl:w-[211px] mt-11 3xl:h-[250px]'/>
      </div>
      <div className="grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-3 lg:ml-14 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute left-4 lg:right-4 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Soft Light </p>
          </div>
        </div>
        <Image src="/images/image 42.png" alt="image" width={150} height={112.28} className='3xl:w-[334px] mt-10 3xl:h-[220px]'/>
      </div>
      <div className="grid justify-center relative">
        <div className='absolute'>
          <div className="relative inline-block ml-8 lg:ml-20 p-3 3xl:p-4 bg-white shadow-lg rounded-lg">
            <div className="absolute left-11 lg:left-14 bottom-0 w-3 h-3 3xl:w-4 3xl:h-4 bg-white rotate-45 transform translate-y-1/2 "></div>
            <p className="font-mulish text-[#333333] font-normal text-xs leading-4 lg:text-sm 3xl:text-base lg:leading-5">Background Light</p>
          </div>
        </div>
        <Image src="/images/image 49.png" alt="image" width={150} height={63.44} className='3xl:w-[279px] mt-11 3xl:h-[118px]'/>
      </div>
      
    </div> */}
    </div>
  )
}

export default Equipment;