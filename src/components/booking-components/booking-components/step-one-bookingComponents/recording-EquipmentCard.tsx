"use client";

import React from 'react';
import Image from 'next/image';

interface EquipmentCardProps {
  imageSrc: string;
  description: string | React.ReactNode;
}

const EquipmentCard = ({ imageSrc, description }: EquipmentCardProps) => {
  return (
    <article className="flex-1 pl-[14px] py-2.5 lg:pl-[18px] lg:py-[14px] rounded-lg bg-zinc-100">
      <Image
        loading="lazy"
        src={imageSrc}
        height={24}
        width={24}
        alt=""
        className={`object-contain h-8 ${imageSrc === "/images/image 41.png" ? " w-20" : "w-6"} aspect-square`}
        aria-hidden="true"
      />
      <p className="mt-3 lg:mt-4 text-xs md:text-sm 3xl:text-base font-medium text-[#989898]">
        {description}
      </p>
    </article>
  );
};

export default EquipmentCard;