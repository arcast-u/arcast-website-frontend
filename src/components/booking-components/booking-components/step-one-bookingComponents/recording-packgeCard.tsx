import React from "react";
import { PackagePerkProps } from "@/lib/types";

  
  interface RecordingPackageCardProps {
    count: number
    name: string;
    price_per_hour: string;
    // originalPrice: string;
    currency: string;
    features: PackagePerkProps[] | null;
    variant?: 'light' | 'dark';
    selectedPackage: number;
    onSelect: (count: number) => void;
  }
 
  
  export const RecordingPackageCard = ({
    name,
    price_per_hour,
    currency,
    features,
    variant = 'light',
    count,
    selectedPackage,
    onSelect
  }: RecordingPackageCardProps) => {
    const isDark = variant === 'dark';
    
    
    return (
      <section 
        className={`px-5 py-4 cursor-none w-full rounded-xl lg:p-6 shadow-xl shadow-[#80808050] ${
          count === selectedPackage ? `border-[0.5px] ${isDark ? "border-white" :"border-[#989898]"}  border-solid` : ""
          } ${
          isDark ? 'bg-black' : 'bg-[#f5f5f7]'
        }`}
        aria-labelledby={`package-title-${name}`}
        onClick={() => onSelect(count)}
        tabIndex={0}
        role='button'
      >
        <div className="w-full">
          <h3 
            id={`package-title-${name}`}
            className={`w-full font-normal text-base lg:text-lg lg:leading-[25.82px] 3xl:text-xl leading-[21.82px] 3xl:leading-[27.28px] ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}
          >
            {name}
          </h3>
          <div className="flex flex-col justify-center mt-3 w-full font-semibold ">
            <del className="text-xs leading-[16.37px] text-red-500">990 {currency}</del>
            <p className={`text-2xl leading-[32.74px] font-medium font-hankenGrotesk 3xl:leading-[43.65px] ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}>
              {price_per_hour} {currency}<span className="text-sm">/hour</span>
            </p>
          </div>
        </div>
        <div className={`max-h-0 my-5 3xl:my-7 ${isDark ?  "bg-[#42424370] border border-[#42424370]" : "bg-[#BBBBBB70] border border-[#BBBBBB70]"}`}/> 
        <div className={` w-full text-xs leading-[16.37px] font-nunitoSans 3xl:text-base lg:leading-[21.82px] font-medium ${isDark ? 'text-stone-300' : 'text-zinc-600'}`}>
          {features?.map((feature, index) => (
            <div key={feature.id}>
              <div
                className={`flex-1 shrink gap-2.5 self-stretch px-4 py-2.5 ${
                  index > 0 || index !== 2 ? 'mt-3' : ''
                } w-full rounded-lg border border-solid ${
                  isDark ? 'border-zinc-600' : 'border-neutral-400'
                }`}
                role="listitem"
              >
                {feature.name}
              </div>
              {index === 1 && isDark && (
                <div className="mt-4 3xl:mt-8 -mb-2 text-xs leading-[16.37px] 3xl:text-base lg:leading-[21.82px] font-nunitoSans font-normal text-[#989898]">
                  Post production
                </div>
              )}
            </div>
          ))}
        </div>
        {count === 0 && <p className="text-[#FF8C42] text-center font-light font-nunitoSans pt-4 text-xs 3xl:text-sm leading-[19.1px]">For a single episode with up to 60 minutes of raw material.</p>}
      </section>
    );
  };