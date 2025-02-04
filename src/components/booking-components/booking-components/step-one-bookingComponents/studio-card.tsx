import * as React from "react";

interface StudioCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  seats: string;
  isHighlighted: boolean;
}

const StudioCard = ({ title, seats, imgSrc, altText, isHighlighted }: StudioCardProps) => (
  <article 
  className={`flex flex-col shrink justify-center py-3 px-2 3xl:px-5 3xl:py-4 rounded-xl ${
    isHighlighted ? "border-[0.5px] border-[#5081FF] border-solid" : ""
  } basis-0 bg-[#F5F5F7] cursor-pointer transition-transform hover:scale-105`}
  tabIndex={0}
  role="button"
  aria-pressed={isHighlighted}
>
  <div className=" max-w-[228.5px] max-h-[208px] border">
    <img 
      loading="lazy" 
      src={imgSrc} 
      alt={altText} 
      className="object-cover flex-1 w-full rounded-lg aspect-[1.1]" 
    />
  </div>
  <div className="flex flex-col font-nunitoSans leading-[21.82px] font-base mt-3 w-full">
    <h3 className="font-semibold text-[#333333] ">{title}</h3>
    <p className="mt-1 font-normal text-[#989898]">{seats}</p>
  </div>
</article>
);

export default StudioCard;