import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiInstagramLogo, PiTiktokLogo, PiLinkedinLogo } from "react-icons/pi";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='footer' className='px-[21px] lg:px-16 3xl:mt-72 3xl:px-[100px]  '>
      <div className='mx-auto font-nunitoSans pt-5 3xl:pt-10 h-full flex flex-col border-t border-[#989898]'>
        <div className='flex-grow'>
          <div className='md:flex md:justify-between mb-32 text-[#989898]'>
            <div className='mb-6 md:mb-0'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/icons/logodarv.svg'
                  width={140}
                  height={39.9}
                  alt='Logo'
                  quality={100}
                  className='object-cover'
                />
              </Link>
              <p className='text-sm leading-[19.1px] 3xl:text-base font-medium 3xl:leading-[21.82px] mt-1'>Where Stories Come to Life.</p>
              <div className="text-[#333333] mt-8 3xl:mt-16">
                {/* Location Section */}
                <div className="flex items-start gap-2 mb-2">
                    <HiOutlineLocationMarker className='3xl:size-6 size-4 stroke-[1.5px] text-[#333333]'/>
                    <p className="text-[13px] md:text-sm leading-[19.1px]">Dubai Media City, Loft Offices 2, Entrance C, Office 210</p>
                </div>
                
                {/* Location Link */}
                <Link 
                    href="https://maps.app.goo.gl/U8VGBxLVvZ9sdpH67?g_st=com.google.maps.preview.copy" 
                    className="text-blue-500 underline hover:text-blue-400 font-normal text-sm leading-[19.1px] mb-6 block"
                >
                    View location & direction
                </Link>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-4">
                    <Link href="https://www.instagram.com/arcast.studio/" className="bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80">
                    <PiInstagramLogo className="text-black text-base 3xl:text-xl" />
                    </Link>
                    <Link href="https://x.com/arcast_studio" className="bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80">
                    <FaXTwitter className="text-black text-base 3xl:text-xl" />
                    </Link>
                    <Link href="https://www.tiktok.com/@arcast.studio" className="bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80">
                    <PiTiktokLogo className="text-black text-base 3xl:text-xl" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/arcast-studio/?viewAsMember=true" className="bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80">
                    <PiLinkedinLogo className="text-black text-base 3xl:text-xl" />
                    </Link>
                    <Link href="#" className="bg-[#F5F5F7] flex items-center justify-center p-2 rounded-lg lg:size-8 hover:opacity-80">
                    <CiYoutube className="text-black text-base 3xl:text-xl" />
                    </Link>
                </div>
                </div>
            </div>
            <div className=' lg:w-[60%] grid md:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 '>
            <div className='text-base'>
                <p className=' text-[#989898] mb-1'>Contact us</p>
                <ul className='text-[#333333] text-sm 3xl:text-base space-y-1'>
                  <li className=''>
                    <Link
                      href='mailto:hello@arcastdubai.com'
                      className='hover:underline underline-offset-2'
                    >
                      hello@arcastdubai.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://api.whatsapp.com/send?phone=6583657364&text=Hi%20I%20would%20love%20to%20get%20some%20information%20about%20the%20services%20I%20filled%20on%20the%20company.'
                      className='hover:underline underline-offset-2'
                    >
                      +971 6583657364
                    </Link>
                  </li>
                </ul>
              </div> 

              <div className='text-base'>
                <p className=' mb-1 text-[#989898]'>Quick Links</p>
                <ul className='text-[#333333] text-sm 3xl:text-base space-y-1'>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline underline-offset-2'
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/studios'
                      className='hover:underline underline-offset-2'
                    >
                      Studios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blogs'
                      className='hover:underline underline-offset-2'
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/faqs'
                      className='hover:underline underline-offset-2'
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className='text-base'>
                <p className=' text-[#989898] mb-1'>Studio</p>
                <ul className=' space-y-1 text-sm 3xl:text-base text-[#333333]'>
                  <li className=''>
                    <Link
                      href=''
                      className='hover:underline'
                    >
                     Mobile Studio service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline'
                    >
                      Setup 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline'
                    >
                      Setup 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline'
                    >
                      Setup 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline'
                    >
                      Setup 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/'
                      className='hover:underline'
                    >
                      Setup 5
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
            
            <a href='#' className=''>
              Privacy Policy
            </a>
            <a href='#' className=''>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;