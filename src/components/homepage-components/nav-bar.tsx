'use client'
import React, {useState} from 'react';
import NavigationItem from './nav-item';
import { GoGlobe } from "react-icons/go";
import { TbCaretDown, TbCaretRight} from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import ChooseSetup from './studio-Dropdown';
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
  { label: 'Studios', path: '', hasDropdown: true },
  { label: 'Packages', path: '/packages' },
  { label: 'Memberships', path: '/membership' },
  { label: 'About Us', path: '/about-us'},
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Blog', path: '/blog'},
];

const NavigationBar= () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const bookSession = () => {router.push('/book-session');};
  return (
    <nav className="flex w-full justify-between items-center px-[21px] lg:px-10 lg:pt-4 lg:pb-5 3xl:px-[100px] 3xl:pt-6 py-2 3xl:pb-8 text-base font-medium " aria-label="Main Navigation">
      <div className={`${isOpen || isStudioOpen ? 'bg-[#FCFCFC] rounded-t-xl pt-3 lg:pr-6' : 'bg-transparent'} flex relative w-full mx-auto justify-between gap-6 items-center self-stretch my-auto max-md:max-w-full`}>
            {isOpen || isStudioOpen  ?
            <Image
            src="/icons/logodarv.svg"
            alt='logo'
            width={112}
            height={32}
            className="object-cover lg:w-[125px] ml-6 lg:h-9 3xl:w-[140px] 3xl:h-10"
            /> : <Image
            src="/icons/logo.svg"
            alt='logo'
            width={112}
            height={32}
            className="object-cover lg:w-[125px] lg:h-9 3xl:w-[140px] 3xl:h-10"
            />}
            <div className="flex items-center justify-between lg:justify-stretch self-stretch ">
            
                <ul className="lg:flex flex-1 hidden gap-6 3xl:gap-12 justify-center cursor-none items-start self-stretch my-auto text-gray-200 max-md:max-w-full list-none p-0 m-0">
                    {navigationItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className='cursor-none'>
                            <NavigationItem
                            path={item.path}
                            label={item.label}
                            hasDropdown={item.hasDropdown}
                            openStudio={() => setIsStudioOpen(!isStudioOpen)}
                            isStudioOpen={isStudioOpen}
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
                    <GoGlobe className={`${isOpen || isStudioOpen ? 'text-[#333333]' : 'text-[#FCFCFC]'} size-6 3xl:size-8 `}/>
                    <TbCaretDown className={`${isOpen || isStudioOpen ? 'text-[#333333]' : 'text-[#FCFCFC]'} size-5 stroke-[1.5px]`}/>
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-none hover:scale-105 3xl:ml-3 ml-2 lg:hidden items-center gap-1 self-stretch '>
                    <IoIosMenu className={`size-6 stroke-[1.5px] ${isOpen ? 'text-[#333333] mr-6' : 'text-[#FCFCFC]'}`}/>
                </button>
            </div>
          {isOpen && (
            <div className="absolute top-10 left-0 w-full bg-[#FCFCFC] shadow-lg rounded-b-xl p-6 flex flex-col gap-4">
            <ul className="flex flex-col font-nunitoSans  gap-4 text-2xl font-medium">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.path} 
                  className="flex gap-1 items-center py-2 text-[#333333] hover:bg-white"
                >
                  {item.label} 
                  {item.hasDropdown && <TbCaretRight className="w-4 h-4" />}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          )}
          {isStudioOpen && <ChooseSetup />}
        </div>
    </nav>
  );
};

export default NavigationBar;