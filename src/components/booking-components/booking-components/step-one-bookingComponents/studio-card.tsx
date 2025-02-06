import * as React from "react";

interface StudioCardProps {
  count: number;
  imgSrc: string;
  altText: string;
  title: string;
  seats: string;
  selectedStudio: number;
  setSelectedStudio: (count: number) => void;
}

const StudioCard = ({ title, seats, imgSrc, altText, selectedStudio, setSelectedStudio, count }: StudioCardProps) => (
  <div
  className={`flex flex-col relative shrink justify-center py-2.5 px-3 3xl:px-5 3xl:py-4 rounded-xl ${
    count === selectedStudio ? "border-[0.5px] border-[#5081FF] border-solid" : ""
  } basis-0 ${ count === 0 ? "bg-black" : "bg-[#F5F5F7]"} transition-transform hover:scale-105`}
  tabIndex={0}
  role="button"
  onClick={() => setSelectedStudio(count)}
>
  <div className=" w-full 3xl:h-[208px]">
    <img 
      loading="lazy" 
      src={imgSrc} 
      alt={altText} 
      className="object-cover flex-1 w-full rounded-lg aspect-[1.3]" 
    />
  </div>
  <div className="flex flex-col font-nunitoSans mt-3 w-full">
    <h3 className={`font-semibold text-sm leading-[19.1px] 3xl:leading-[21.82px] 3xl:text-base ${ count === 0 ? "text-[#FCFCFC]" : "text-[#333333]" }`}>{title}</h3>
    <p className="mt-1 text-xs leading-[16.37px] 3xl:leading-[21.82px] 3xl:text-base font-normal text-[#989898]">{seats}</p>
  </div>
  {
    count !== 0 && (
      <div className="absolute top-0 right-0 flex justify-center items-center w-full h-full bg-[#F5F5F7]/50 rounded-xl">
        <p className="text-[#333333] font-semibold text-sm leading-[19.1px] 3xl:leading-[27.28px] lg:text-base lg:leading-[25.82px] 3xl:text-xl">Fully Booked</p>
      </div>
    )
  }
</div>
);

export default StudioCard;