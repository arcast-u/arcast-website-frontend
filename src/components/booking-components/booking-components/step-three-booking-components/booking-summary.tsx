import * as React from "react";
import { TbCaretDown } from "react-icons/tb";
import Image from 'next/image';

const BookingSummary = () => {
  return (
    <div className="flex flex-col pb-10 3xl:pb-12 3xl:mt-12 mt-10 w-full ">
      <div className="header-text">
        Booking Summary
      </div>
      <div className="flex flex-col mt-4 lg:mt-6 w-full bg-[#F5F5F7] rounded-xl">
        <div className="flex font-nunitoSans flex-col w-full ">
         
          <div className="flex flex-col justify-center py-5 3xl:py-7 rounded-xl">
            <div className="flex flex-col px-6 3xl:px-8">
              <div className="flex flex-wrap justify-between w-full">
                <Image
                  loading="lazy"
                  src="/images/checkout.webp"
                  width={72}
                  height={64}
                  alt="Studio"
                  className="object-contain shrink-0 h-16 lg:h-auto my-auto lg:w-20 rounded-lg aspect-square"
                />
                <div className="flex flex-col flex-1 shrink justify-between basis-0 ">
                  <div className="text-right text-sm leading-[19.1px] lg:text-lg lg:leading-[26px] 3xl:text-xl 3xl:leading-[27.8px]">Studio 1</div>
                  <div className="flex gap-1 justify-center border-[0.4px] border-[#989898] items-center self-end px-3 py-2 3xl:px-4 3xl:py-2 3xl:mt-4 3xl:text-base 3xl:leading-[21.82px] text-xs leading-16.37 lg:text-sm lg:leading-[17.82px] rounded-lg text-[#989898]">
                    <p className="self-stretch">4 seats</p>
                    <TbCaretDown className="w-5 stroke-[1px]"/>
                  </div>
                </div>
              </div>
              <div className="mt-4 3xl:mt-6 w-full min-h-[0.5px] bg-[#989898]" />
              <div className=" mt-4 3xl:mt-6 w-full text-base leading-[21.82px] lg:text-lg lg:leading-[25px] font-nunitoSans 3xl:text-xl 3xl:leading-[27.26px] font-medium text-[#333333] ">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                    <p>Recording + Professional Edit</p>
                    <p>950 AED</p>
                </div>
                
              </div>
              <div className="mt-4 3xl:mt-6 w-full min-h-[0.5px] bg-[#989898]" />
              <div>
                <p className="text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]">
                    Location 
                </p>
                <p className="text-xs leading-[19.1px] lg:text-lg lg:leading-[25px] 3xl:mt-3 mt-2 font-nunitoSans 3xl:text-xl 3xl:leading-[27.26px] font-medium text-[#333333]">
                  Palm Jumeirah
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div>
                    <p className="text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]">
                        Date  
                    </p>
                    <p className="text-xs leading-[19.1px] lg:text-lg lg:leading-[25px] 3xl:mt-3 mt-2 font-nunitoSans 3xl:text-xl 3xl:leading-[27.26px] font-medium text-[#333333]">
                        25-01-2025
                    </p>
                </div>
                <div>
                    <p className="text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]">
                        Time  
                    </p>
                    <p className="text-xs leading-[19.1px] lg:text-lg lg:leading-[25px] 3xl:mt-3 mt-2 font-nunitoSans 3xl:text-xl 3xl:leading-[27.26px] font-medium text-[#333333]">
                        14:20 - 15:20
                    </p>
                </div>
              </div>
              
            </div>
            <div className=" flex items 3xl:mt-10 mt-8 center">  
                <div className=" w-6 h-10 rounded-r-full bg-[#FCFCFC]"></div>          
                <div className="self-center flex-1 border-solid border-[3px] border-[#FCFCFC] min-h-[1px]" />
                <div className=" w-6 h-10 rounded-l-full bg-[#FCFCFC]"></div> 
            </div>
            <div className="flex flex-col mt-8 3xl:mt-10 px-5 w-full text-sm leading-[19.1px] lg:text-lg lg:leading-[25px] font-nunitoSans 3xl:text-xl 3xl:leading-[27.26px] font-medium text-[#333333]  ">
                <div className="flex flex-wrap items-center justify-between">
                    <p>VAT (0%)</p>
                    <p>3270 AED</p>
                </div>
                <div className="flex flex-wrap items-center mt-2 justify-between">
                    <p>Discount</p>
                    <p>0 AED</p>
                </div>
                <div className="flex flex-wrap justify-between items-center 3xl:mt-6 mt-5 w-full 3xl:text-[32px] lg:text-[28px] 3xl:leading-[43.64px] lg:leading-9 text-xl leading-[27.28px]">
                  <p className="self-stretch my-auto font-medium">Total</p>
                  <p className="self-stretch my-auto font-semibold">3270 AED</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;