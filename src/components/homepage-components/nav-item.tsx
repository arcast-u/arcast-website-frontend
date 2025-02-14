'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { TbCaretDown } from "react-icons/tb";


interface NavigationItemProps {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, path, hasDropdown }) => {
    const pathname = usePathname();
    const isActive = pathname === path;

    
  return (
    <div className='flex flex-col whitespace-nowrap'>
      <div className={`w-full ${hasDropdown ? '' : 'self-stretch'}`}>
        <button className="flex justify-center cursor-none text-#FCFCFC font-normal font-nunitoSans text-sm 3xl:text-base leading-[21.82px] items-center">
            <span className=" my-auto">{label}</span>
            {hasDropdown && (
            <TbCaretDown className="size-5 stroke-[1px]"/>
            )}
            </button>
        {isActive && (
            <div className="w-full border border-solid border-[#FCFCFC] min-h-[1px]" aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default NavigationItem;