import Image from 'next/image';
import React from 'react';

export interface PricingItemProps {
  imageSrc: string;
  title: string;
  price: string;
  className?: string;
}

export const PricingItem = ({ imageSrc, title, price, className = '', isLeftSide = false }: PricingItemProps & { isLeftSide?: boolean }) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className={`flex ${isLeftSide ? 'flex-row' : 'flex-row-reverse'} items-start gap-6 max-md:flex-col-reverse max-md:items-end`}>
          <Image
            loading="lazy"
            width={287}
            height={260}
            src={imageSrc}
            alt={title || "Pricing item image"}
            className="object-contain rounded-xl 3xl:w-[453px] 3xl:h-[360px] aspect-[1.26] max-md:max-w-full"
          />
          {title && price && (
            <div className="flex flex-col mt-0 max-md:mb-4">
              <h2 className="3xl:text-2xl text-[#333333] font-hankenGrotesk font-normal text-base leading-5">{title}</h2>
              <p className="3xl:mt-2 mt-1 text-[#989898] 3xl:text-2xl font-nunitoSans text-lg leading-[19.1px] font-medium">{price}</p>
            </div>
          )}
        </div>
      </div>
    );
  };