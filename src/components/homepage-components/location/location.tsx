import React from "react";
import { Mail, Phone } from "lucide-react";
import { TbBuildings, TbClockHour4 } from "react-icons/tb";
import Image from "next/image";

const DubaiStudioLocation = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-[21px] lg:px-10 3xl:px-[100px] py-10  lg:py-20 w-full text-[#333333] min-h-screen">
      <h2 className="text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium font-hankenGrotesk">Find Our Studio in Dubai</h2>
      
      <div className="grid grid-cols-1 font-nunitoSans lg:grid-cols-3 gap-6 mt-6 max-w-6xl w-full">
        {/* Location Details */}
        <div className="">
            <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md w-full" >
            <h3 className="text-2xl leading-8 font-medium text-[#333333]">Loft Offices 2</h3>
            <p className="text-[#989898] font-medium text-base leading-6 mt-1">Dubai Media City, Loft Offices 2, Entrance C, Office 210</p>
            <div className="mt-4 flex items-center space-x-2 text-orange-500">
                <TbBuildings className="stroke-[1.2px] size-[16.92] 3xl:size-[19.33px] 3xl:stroke-[1.5px]" />
                <span className="font-medium text-xl leading-[27px] 3xl:text-2xl 3xl:leading-8 text-[#333333]">Nearby</span>
            </div>
            <p className="text-[#989898] font-medium text-base leading-6 3xl:text-xl 3xl:leading-7 3xl:mt-3 mt-1">OSN, Avani+ Palm View Dubai Hotel & Suites</p>
            <Image
                src="/images/image.webp" 
                alt="Studio Interior"
                width={100}
                height={188}
                className="w-full mt-6 rounded-lg object-cover h-[188px]"
            />
          </div>
          {/* Opening Hours */}
          <div className="bg-[#F5F5F7] md:hidden p-6 3xl:py-10 3xl:px-[60px] mt-6 rounded-xl shadow-md text-center">
                <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333]">Opening hours</h3>
                <div className="grid grid-cols-2 text-[#989898] mt-7 gap-4">
                    <div>
                        <TbClockHour4 className="size-6 3xl:size-10 text-[#FF8C42] mx-auto"/>
                        <p className="text-sm leading-[19.1px] mt-2">Mon-Fri</p>
                        <p className="text-xl leading-7 font-semibold">9 AM - 10 PM</p>
                    </div>
                    <div>
                        <TbClockHour4 className="size-6 3xl:size-10 text-[#FF8C42] mx-auto"/>
                        <p className="text-sm leading-[19.1px] mt-2">Sat-Sun</p>
                        <p className="text-xl leading-7 font-semibold">8 AM - 12 PM</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4 3xl:mt-6 mt-4 max-w-3xl w-full">
                <div className="bg-[#F5F5F7] text-[#989898] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md text-center">
                    <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333]">Opening hours</h3>
                    <TbClockHour4 className="size-6 3xl:size-10 mt-[18px] text-[#FF8C42] mx-auto"/>
                    <p className="3xl:text-xl 3xl:leading-7 text-sm leading-[19.1px] mt-2">Mon-Fri</p>
                    <p className="text-xl leading-7 3xl:text-2xl 3xl:leading-8 font-semibold">9 AM - 10 PM</p>
                </div>
                <div className="bg-[#F5F5F7] text-[#989898] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md text-center">
                    <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333]">Opening hours</h3>
                    <TbClockHour4 className="size-6 3xl:size-10 mt-[18px] text-[#FF8C42] mx-auto"/>
                    <p className="3xl:text-xl 3xl:leading-7 text-sm leading-[19.1px] mt-2">Sat-Sun</p>
                    <p className="text-xl leading-7 3xl:text-2xl 3xl:leading-8 font-semibold">8 AM - 12 PM</p>
                </div>
            </div>
        </div>

        {/* Map Location */}
        <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] relative rounded-xl shadow-md flex flex-col items-center">
          <Image width={100} height={100} src="/images/location.webp" alt="Google Maps Location" className="w-full h-full rounded-r-[30px] rounded-l-[50px] lg:h-[580px] 3xl:h-[745.73px]" />
          <div className="absolute bottom-0 bg-gradient-to-t w-full flex flex-col h-[45%] items-center text-center justify-center from-[#F5F5F7] via-[#F5F5F7] to-transparent ">
            <p className="text-lg 3xl:text-[40px] font-semibold text-[#333333] mt-12">Studio location</p>
            <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-xs leading-4 3xl:text-xl 3xl:leading-7 font-medium underline mt-1"
            >
                View location & direction ↗
            </a>
          </div>
        </div>

        {/* Contact & Transport */}
        <div>
        <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] rounded-xl shadow-md">
          <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333] text-center">Contact</h3>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="flex flex-col items-center space-x-2 bg-[#FCFCFC] px-5 py-4 rounded-lg">
              <Mail className="size-[14px] 3xl:size-[19.33px] text-orange-500" />
              <span className="text-[#333333] text-sm font-normal leading-[19.1px] mt-4 3xl:mt-[22px]">hello@arcast.studio</span>
            </div>
            <div className="flex flex-col items-center space-x-2 bg-[#FCFCFC] px-5 py-4 rounded-lg">
              <Phone className="size-[14px] 3xl:size-[19.33px]  text-orange-500" />
              <span className="text-[#333333] text-sm font-normal leading-[19.1px] mt-4 3xl:mt-[22px]">+9716583657364</span>
            </div>
          </div>
          </div>
          <div className="bg-[#F5F5F7] p-6 3xl:py-10 3xl:px-[60px] mt-6 rounded-xl shadow-md">
            <h3 className="text-lg 3xl:text-[40px] font-medium text-[#333333] text-center ">Parking & Transport</h3>
            <div className="mt-4 3xl:mt-10 text-sm leading-5 3xl:text-xl 3xl:leading-7 left-7 space-y-3 text-[#333333]">
                <p className="bg-[#FCFCFC] py-[14px] px-4 rounded-lg"><span className="text-[#989898]">Paid parking:</span> Media City parking</p>
                <p className="bg-[#FCFCFC] py-[14px] px-4 rounded-lg"><span className="text-[#989898]">Closest Metro:</span> Dubai Internet City Station</p>
                <p className="bg-[#FCFCFC] py-[14px] px-4 rounded-lg"><span className="text-[#989898]">Closest Tram:</span> The Palm Jumeirah</p>
                <p className="bg-[#FCFCFC] py-[14px] px-4 rounded-lg"><span className="text-[#989898]">Closest Bus:</span> Infotech Dubai Internet City 2</p>
            </div>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default DubaiStudioLocation;
