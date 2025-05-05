'use client';
import React, { useState, useEffect } from 'react';
import NavigationItem from './nav-item';
import { TbCaretRight } from 'react-icons/tb';
import { IoIosMenu } from 'react-icons/io';
import ChooseSetup from './studio-Dropdown';
import ContactOverlay from '../contact-components/contact-overlay';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from '../language-translate/page';

interface NavigationItemData {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [show, setShow] = useState(false);

  const navigationItems: NavigationItemData[] = [
    { label: 'Home', path: '/' },
    { label: 'Studios', path: '', hasDropdown: true },
    // { label: 'Bundles', path: '/bundles' },
    // { label: 'Memberships', path: '/memberships' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '' },
    { label: 'Blog', path: '/blog' },
    { label: 'For Business', path: '/business' },
  ];

  useEffect(() => {
    // Listen for the custom event from the footer
    const handleStudioDropdownEvent = () => {
      setIsStudioOpen(true);
    };

    window.addEventListener('openStudioDropdown', handleStudioDropdownEvent);
    // Check if we should open the studio dropdown on component mount
    const shouldOpenStudio =
      localStorage.getItem('openStudioDropdown') === 'true';
    if (shouldOpenStudio) {
      setIsStudioOpen(true);
      localStorage.removeItem('openStudioDropdown');
    }

    return () => {
      window.removeEventListener(
        'openStudioDropdown',
        handleStudioDropdownEvent
      );
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const footerElement = document.querySelector('footer');
      const footerTop = footerElement?.getBoundingClientRect().top ?? 0;

      // Show header when scrolled past screen height and not at footer
      if (scrollY > windowHeight && footerTop > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bookSession = () => {
    router.push('/bookings');
  };
  const handleDropdown = () => {
    setIsOpen(!isOpen);
    if (isStudioOpen) {
      setIsStudioOpen(!isStudioOpen);
    } else if (isContactOpen) {
      setIsContactOpen(!isContactOpen);
    }
  };

  return (
    <>
      <header
        className={`fixed bottom-[2vh] -translate-x-1/2 left-1/2 w-[90%] shadow-[#858585] 
          bg-[#FCFCFC] rounded-[16px] lg:w-[35vw] backdrop-blur-md z-50 justify-between 
          items-center p-[21px] 3xl:p-r text-base font-medium shadow-2xl transition-transform 
          duration-300 ${
            show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
      >
        <div className=' mx-auto flex justify-between items-center'>
          <Link href='/'>
            <Image
              src='/icons/logodarv.svg'
              alt='logo'
              width={112}
              height={32}
              quality={100}
              className='object-cover lg:w-[125px] lg:h-9 3xl:w-[140px] 3xl:h-10'
            />
          </Link>
          <div
            onClick={bookSession}
            className='flex1-1 w-fit  hover:scale-105 rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '
          >
            <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
              Book Your Session
            </button>
          </div>
        </div>
      </header>

      <nav
        className='flex w-full justify-between items-center px-[21px] md:px-10 lg:pt-4 lg:pb-5 3xl:px-[100px] 3xl:pt-6 py-2 3xl:pb-8 text-base font-medium '
        aria-label='Main Navigation'
      >
        <div
          className={`${
            isOpen || isStudioOpen
              ? 'bg-[#FCFCFC] rounded-t-xl pt-3 pb-2 shadow-sm px-6'
              : 'bg-transparent'
          } flex relative w-full mx-auto justify-between gap-6 items-center self-stretch my-auto max-md:max-w-full`}
        >
          {isOpen ||
          isStudioOpen ||
          (pathname !== '/' &&
            pathname !== '/about-us' &&
            pathname !== '/business') ? (
            <Link href='/'>
              <Image
                src='/icons/logodarv.svg'
                alt='logo'
                width={112}
                height={32}
                quality={100}
                className={`object-cover lg:w-[125px] lg:h-9 3xl:w-[140px] 3xl:h-10`}
              />
            </Link>
          ) : (
            <Link href='/'>
              <Image
                src='/icons/logo.svg'
                alt='logo'
                width={112}
                height={32}
                quality={100}
                className='object-cover lg:w-[125px] lg:h-9 3xl:w-[140px] 3xl:h-10'
              />
            </Link>
          )}
          <div className='flex items-center justify-between lg:justify-stretch self-stretch '>
            <ul className='lg:flex flex-1 hidden gap-6 3xl:gap-12 justify-center items-start self-stretch my-auto text-gray-200 max-md:max-w-full list-none p-0 m-0'>
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className=''>
                    <NavigationItem
                      path={item.path}
                      label={item.label}
                      hasDropdown={item.hasDropdown}
                      openStudio={() => setIsStudioOpen(!isStudioOpen)}
                      isStudioOpen={isStudioOpen}
                      openContact={() => setIsContactOpen(!isContactOpen)}
                      isContactOpen={isContactOpen}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div
              onClick={bookSession}
              className={`w-fit ml-4 xl:ml-14 3xl:ml-16 hidden 
                  hover:scale-105 lg:flex rounded-lg bg-gradient-to-b 
                  from-[#FFC49D] ring-2 ${
                    pathname === '/' ||
                    pathname === '/about-us' ||
                    pathname === '/business'
                      ? 'ring-[#64391E]'
                      : 'ring-[#FFEDE1]'
                  } to-[#FF8C42] 
                  text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans 
                  text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px]`}
            >
              <button className='flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
                Book Your Session
              </button>
            </div>

            <LanguageSelector
              isOpen={isOpen}
              isStudioOpen={isStudioOpen}
              pathname={pathname}
            />
            <button
              onClick={handleDropdown}
              className='flex hover:scale-105 3xl:ml-3 ml-2 lg:hidden items-center gap-1 self-stretch '
            >
              <IoIosMenu
                className={`size-6 stroke-[1.5px] ${
                  isOpen ||
                  isStudioOpen ||
                  (pathname !== '/' &&
                    pathname !== '/about-us' &&
                    pathname !== '/business')
                    ? 'text-[#333333]'
                    : 'text-[#FCFCFC]'
                }`}
              />
            </button>
          </div>
          {isOpen && (
            <div className='absolute top-10 left-0 w-full bg-[#FCFCFC] shadow-lg rounded-b-xl p-6 flex flex-col gap-4'>
              <ul className='flex flex-col font-nunitoSans  gap-4 text-2xl font-medium'>
                {navigationItems.map((item, index) => (
                  <li
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'Studios') {
                        setIsStudioOpen(!isStudioOpen);
                      } else if (item.label === 'Contact Us') {
                        setIsContactOpen(!isContactOpen);
                      } else if (item.path) {
                        router.push(item.path);
                      }
                    }}
                    key={index}
                  >
                    <Link
                      href={item.path || '#'}
                      className='flex gap-1 items-center py-2 text-[#333333] hover:bg-white'
                    >
                      {item.label}
                      {item.hasDropdown && <TbCaretRight className='w-4 h-4' />}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                onClick={bookSession}
                className='flex w-fit mt-4 hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans font-medium 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '
              >
                <button className='flex-1 bg-[#FF8C42] w-fit px-5 py-4 rounded-lg'>
                  Book Your Session
                </button>
              </div>
            </div>
          )}
          {isStudioOpen && <ChooseSetup />}
          <ContactOverlay
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
