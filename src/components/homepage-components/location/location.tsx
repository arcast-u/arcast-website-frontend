'use client'
import React, {useState} from "react";
import { Mail, Phone } from "lucide-react";
import { TbBuildings, TbClockHour4, TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


const DubaiStudioLocation = () => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const images= [
    "/images/image.png",
    "/images/image2.png",
  ]
  const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;
  
    const onTouchStart = (e: React.TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };
  
    const onTouchMove = (e: React.TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
  
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return;
      
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;
  
      if (isLeftSwipe) {
        handleImageChange("next");
      } else if (isRightSwipe) {
        handleImageChange("prev");
      }
    };
  

  const handleImageChange = (direction: "next" | "prev") => {
    setImageIndex((prevIndex) => {
      const totalImages = images.length;
      if (direction === "next") {
        return (prevIndex + 1) % totalImages;
      } else {
        return (prevIndex - 1 + totalImages) % totalImages;
      }
    });
  };
  
  return (
    <div className="flex flex-col items-center mx-auto px-[21px] lg:px-10 3xl:px-[100px] py-10  lg:py-20 w-full text-[#333333] min-h-screen ipadPro:h-auto">
      <h2 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium font-hankenGrotesk">Find Our Studio in Dubai</h2>
      
      <div className="grid grid-cols-1 font-nunitoSans md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {/* Location Details */}
        <div className=" flex flex-col gap-6 h-full">
            <div className="bg-[#F5F5F7] flex-grow p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md w-full" >
            <h3 className="text-2xl leading-8 font-medium text-[#333333]">Loft Offices 2</h3>
            <p className="text-[#989898] font-medium text-base leading-6 mt-1">Dubai Media City, Loft Offices 2, Entrance C, Office 210</p>
            <div className="mt-4 flex items-center space-x-2 text-orange-500">
                <TbBuildings className="stroke-[1.2px] size-[16.92] 3xl:size-[19.33px] 3xl:stroke-[1.5px]" />
                <span className="font-medium text-xl leading-[27px] 3xl:text-2xl 3xl:leading-8 text-[#333333]">Nearby</span>
            </div>
            <p className="text-[#989898] font-medium text-base leading-6 3xl:text-xl 3xl:leading-7 3xl:mt-3 mt-1">OSN, Avani+ Palm View Dubai Hotel & Suites</p>
            <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd} className="w-full relative flex-grow mt-6 p-0">
              <Image
                  src={images[imageIndex]} 
                  alt="Studio Interior"
                  width={373}
                  height={188}
                  quality={100}
                  className="w-full h-full rounded-lg object-fit "
              />
              <div className="absolute top-1/2 -translate-y-1/2 flex px-5 w-full justify-between">
                <TbCaretLeft onClick={() => handleImageChange("prev")} className="size-4 text-white" />
                <TbCaretRight onClick={() => handleImageChange("next")} className="size-4 text-white" />
              </div>
            </div>
          </div>
          {/* Opening Hours */}
          <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md text-center">
                <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333]">Opening hours</h3>
                <div className="grid grid-cols-2 text-[#989898] mt-7 gap-4">
                    <div>
                        <TbClockHour4 className="size-6 3xl:size-10 text-[#FF8C42] mx-auto"/>
                        <p className="text-sm 3xl:text-xl 3xl:leading-7 leading-[19.1px] mt-2">Mon-Fri</p>
                        <p className="text-xl leading-7 3xl:text-2xl 3xl:leading-8 font-semibold">9 AM - 9 PM</p>
                    </div>
                    <div>
                        <TbClockHour4 className="size-6 3xl:size-10 text-[#FF8C42] mx-auto"/>
                        <p className="text-sm 3xl:text-xl 3xl:leading-7 leading-[19.1px] mt-2">Sat-Sun</p>
                        <p className="text-xl leading-7 3xl:text-2xl 3xl:leading-8 font-semibold">9 AM - 9 PM</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Map Location */}
        <div className="bg-[#F5F5F7] h-full p-6 3xl:py-10 3xl:px-[60px] relative rounded-xl shadow-md flex flex-col border items-center">
          <div className=" w-full md:w-auto h-full">
          <Image quality={100} width={100} height={100} src="/images/location.png" loading="lazy" alt="Google Maps Location" className="w-full rounded-tl-[43px] h-full " />
          </div>
          <div className="absolute bottom-0 bg-gradient-to-t w-full flex flex-col h-[45%] text-center justify-center from-[#F5F5F7] via-[#F5F5F7] to-transparent ">
            <p className="text-lg 3xl:text-[40px] font-semibold text-[#333333] mt-36">Studio location</p>
            <a
                href="https://maps.app.goo.gl/U8VGBxLVvZ9sdpH67?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex gap-1 justify-center text-xs leading-4 3xl:text-xl 3xl:leading-7 font-medium underline mt-1 md:mt-3 "
            >
                View location & direction <span className="text-[#FF8C42] "><MdArrowOutward className="size-4" /></span>
            </a>
          </div>
        </div>

        {/* Contact & Transport */}
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md">
            <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333] text-center">Contact</h3>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Link href="mailto:Booking@arcast.studio" className="flex flex-col items-center space-x-2 bg-[#FCFCFC] px-5 py-4 rounded-lg">
                <Mail className="size-[14px] 3xl:size-[19.33px] text-orange-500" />
                <span className="text-[#333333] text-sm font-normal leading-[19.1px] mt-4 3xl:mt-[22px]">Booking@arcast.studio</span>
              </Link>
              <Link href="tel:+971544287756" className="flex flex-col items-center space-x-2 bg-[#FCFCFC] px-5 py-4 rounded-lg">
                <Phone className="size-[14px] 3xl:size-[19.33px]  text-orange-500" />
                <span className="text-[#333333] text-sm font-normal leading-[19.1px] mt-4 3xl:mt-[22px]">+971544287756</span>
              </Link>
            </div>
          </div>
          {/* parking */}
          <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] rounded-xl flex-grow shadow-md">
            <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333] text-center ">Parking & Transport</h3>
            <div className="mt-4 3xl:mt-10 text-sm leading-5 3xl:text-xl 3xl:leading-7 left-7 space-y-3 text-[#333333]">
                <p className="bg-[#FCFCFC] py-[14px] lg:py-6 px-4 rounded-lg"><span className="text-[#989898]">Paid parking:</span> Media City parking</p>
                <p className="bg-[#FCFCFC] py-[14px] lg:py-6 px-4 rounded-lg"><span className="text-[#989898]">Closest Metro:</span> Dubai Internet City Station</p>
                <p className="bg-[#FCFCFC] py-[14px] lg:py-6 px-4 rounded-lg"><span className="text-[#989898]">Closest Tram:</span> The Palm Jumeirah</p>
                <p className="bg-[#FCFCFC] py-[14px] lg:py-6 px-4 rounded-lg"><span className="text-[#989898]">Closest Bus:</span> Infotech Dubai Internet City 2</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DubaiStudioLocation;
