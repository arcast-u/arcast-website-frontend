'use client'
import React from 'react';
import NavigationItem from './nav-item';
import { GoGlobe } from "react-icons/go";
import { TbCaretDown } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';



interface NavigationItemData {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

const navigationItems: NavigationItemData[] = [
  { label: 'Home', path: '/' },
  { label: 'Studios', path: '/studios', hasDropdown: true },
  { label: 'Packages', path: '/packages' },
  { label: 'Memberships', path: '/membership' },
  { label: 'About Us', path: '/about-us'},
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Blog', path: '/blog'},
];

const NavigationBar= () => {
  const router = useRouter();
  const bookSession = () => {router.push('/book-session');};
  return (
    <nav className="flex w-full justify-between items-center px-[21px] lg:px-10 lg:pt-4 lg:pb-5 3xl:px-[100px] 3xl:pt-6 py-2 3xl:pb-8 text-base font-medium " aria-label="Main Navigation">
      <div className="flex w-full mx-auto justify-between gap-6 items-center self-stretch my-auto max-md:max-w-full">
            <Image
            src="/icons/logo.svg"
            alt='logo'
            width={112}
            height={32}
            className="object-cover lg:w-[125px] lg:h-9 3xl:w-[140px] 3xl:h-10"
            />
            <div className="flex items-center justify-between lg:justify-stretch self-stretch ">
            
                <ul className="lg:flex flex-1 hidden gap-6 3xl:gap-12 justify-center cursor-none items-start self-stretch my-auto text-gray-200 max-md:max-w-full list-none p-0 m-0">
                    {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className='cursor-none'>
                            <NavigationItem
                            path={item.path}
                            label={item.label}
                            hasDropdown={item.hasDropdown}
                            />
                        </Link>
                    </li>
                    ))}
                </ul>
                <button onClick={bookSession}
                    className="overflow-hidden cursor-none hidden hover:scale-105 lg:flex ml-10 xl:ml-14 3xl:ml-16 border border-[#FFC49D] gap-2.5 self-stretch px-3 py-2 3xl:px-4 3xl:py-3 my-auto bg-[#FF8C42] rounded-lg shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium 3xl:leading-[21.82px] 3xl:text-base "
                    aria-label="Book Your Session"
                    >
                    Book Your Session
                </button>
                <button className='lg:ml-6 cursor-none hover:scale-105 flex items-center gap-1 self-stretch '>
                    <GoGlobe className='size-6 3xl:size-8 text-[#FCFCFC]'/>
                    <TbCaretDown className='size-5 stroke-[1.5px] text-[#FCFCFC]'/>
                </button>
                <button className='flex cursor-none hover:scale-105 3xl:ml-3 ml-2 lg:hidden items-center gap-1 self-stretch '>
                    <IoIosMenu className='size-6 stroke-[1.5px] text-[#FCFCFC]'/>
                </button>
            </div>
        
        </div>
    </nav>
  );
};

export default NavigationBar;