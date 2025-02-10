"use client";

import React from 'react';
import Image from 'next/image';

interface EquipmentCardProps {
  imageSrc: string;
  description: string | React.ReactNode;
}

const EquipmentCard = ({ imageSrc, description }: EquipmentCardProps) => {
  return (
    <article className="flex-1 px-4 py-2.5 lg:px-6 lg:py-4 rounded-lg bg-zinc-100">
      <Image
        loading="lazy"
        src={imageSrc}
        height={24}
        width={24}
        alt=""
        className="object-contain w-6 aspect-square"
        aria-hidden="true"
      />
      <p className="mt-3 lg:mt-4 text-xs md:text-sm 3xl:text-base font-medium text-zinc-800">
        {description}
      </p>
    </article>
  );
};

export default EquipmentCard;