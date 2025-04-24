'use client';

import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { PiInstagramLogo, PiTiktokLogo, PiLinkedinLogo } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='footer' className=' w-full mt-8 '>
      <div className='px-[21px] lg:px-16 3xl:px-[100px] mx-auto max-w-[1728px]'>
        <div className=' font-nunitoSans pt-5 3xl:pt-10 h-full flex flex-col border-t border-[#989898]'>
          <div className='flex-grow'>
            <div className='md:flex md:justify-between mb-32 text-[#989898]'>
              <div className='mb-6 md:mb-0'>
                <Link
                  href='/'
                  className='flex items-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src='/icons/logodarv.svg'
                    width={140}
                    height={39.9}
                    alt='Logo'
                    quality={100}
                    className='object-cover'
                  />
                </Link>
                <p className='text-sm leading-[19.1px] 3xl:text-base font-medium 3xl:leading-[21.82px] mt-1'>
                  Where Stories Come to Life.
                </p>
                <div className='text-[#333333] mt-8 3xl:mt-16'>
                  <div className='flex items-start gap-2 mb-2'>
                    <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#333333]' />
                    <p className='text-[13px] md:text-sm leading-[19.1px]'>
                      Dubai Media City, Loft Offices 2, Entrance C, Office 210
                    </p>
                  </div>

                  <a
                    href='https://maps.app.goo.gl/qNuFiZAdBqUnH3RE7?g_st=com.google.maps.preview.copy'
                    className='text-blue-500 underline hover:text-blue-400 font-normal text-sm leading-[19.1px] mb-6 block'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View location & direction
                  </a>

                  <div className='flex gap-4 mt-4'>
                    <Link
                      href='https://www.instagram.com/arcast.studio/'
                      className='bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <PiInstagramLogo className='text-black text-base 3xl:text-xl' />
                    </Link>
                    <Link
                      href='https://x.com/arcast_studio'
                      className='bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaXTwitter className='text-black text-base 3xl:text-xl' />
                    </Link>
                    <Link
                      href='https://www.tiktok.com/@arcast.studio'
                      className='bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <PiTiktokLogo className='text-black text-base 3xl:text-xl' />
                    </Link>
                    <Link
                      href='https://www.linkedin.com/company/arcast-studio/?viewAsMember=true'
                      className='bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <PiLinkedinLogo className='text-black text-base 3xl:text-xl' />
                    </Link>
                  </div>
                </div>
              </div>
              <div className=' flex flex-col md:flex-row md:gap-12 3xl:gap-16 gap-6'>
                <div className='text-base'>
                  <p className=' text-[#989898] mb-1'>Contact us</p>
                  <ul className='text-[#333333] text-sm 3xl:text-base space-y-1'>
                    <li className=''>
                      <Link
                        href='mailto:booking@arcastdubai.com'
                        className='underline-offset-2 text-blue-500 underline hover:text-blue-400'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        booking@arcastdubai.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='https://api.whatsapp.com/send?phone=971544287756&text=Hi%20I%20would%20love%20to%20get%20some%20information%20about%20the%20services%20I%20filled%20on%20the%20company.'
                        className='underline-offset-2 text-blue-500 underline hover:text-blue-400'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        +971 508249795
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='text-base w-fit'>
                  <p className=' mb-1 text-[#989898]'>Quick Links</p>
                  <ul className='text-[#333333] text-sm 3xl:text-base space-y-1'>
                    <li>
                      <Link
                        href='/'
                        className='hover:underline underline-offset-2 cursor-pointer'
                        // target="_blank"
                        rel='noopener noreferrer'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/bookings'
                        rel='noopener noreferrer'
                        // onClick={() => {
                        //   window.scrollTo({ top: 0, behavior: 'smooth' });

                        //   localStorage.setItem('openStudioDropdown', 'true');

                        //   const event = new CustomEvent('openStudioDropdown');
                        //   window.dispatchEvent(event);
                        // }}
                        className='hover:underline underline-offset-2 cursor-pointer'
                      >
                        Studios
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap lg:flex-nowrap items-center justify-between mb-6 text-[#333333] text-xs'>
            <span className=''>© 2025 ARcast Studio. All Rights Reserved.</span>
            <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
              <Link
                href='/data-deletion'
                className=''
                // target='_blank'
                rel='noopener noreferrer'
              >
                Data Deletion
              </Link>
              <Link
                href='/privacy-policy'
                className=''
                // target='_blank'
                rel='noopener noreferrer'
              >
                Privacy Policy
              </Link>
              <Link
                href='terms-of-service'
                className=''
                // target='_blank'
                rel='noopener noreferrer'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
