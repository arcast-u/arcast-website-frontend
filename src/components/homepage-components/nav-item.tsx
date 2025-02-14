'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { TbCaretDown } from "react-icons/tb";


interface NavigationItemProps {
  label: string;
  path: string;
  hasDropdown?: boolean;
  isStudioOpen?: boolean;
  openStudio: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, path, hasDropdown, openStudio, isStudioOpen }) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    
  return (
    <div className='flex flex-col whitespace-nowrap'>
      <div className={`w-full ${hasDropdown ? '' : 'self-stretch'}`}>
        <button 
        className={`flex justify-center cursor-none ${isStudioOpen === true ? "text-[#333333]" : "text-[#FCFCFC]"} font-normal font-nunitoSans text-sm 3xl:text-base leading-[21.82px] items-center`}>
            <span className=" my-auto">{label}</span>
            {hasDropdown && (
            <TbCaretDown onClick={openStudio} className="size-5 stroke-[1px]"/>
            )}
            </button>
        {(isActive || (isStudioOpen && hasDropdown)) && (
            <div className={`w-full border border-solid ${isStudioOpen && hasDropdown ? "bg-[#333333] border-[#333333]" : "bg-[#FCFCFC] border-[#FCFCFC]"} min-h-[1.5px]`} aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default NavigationItem;