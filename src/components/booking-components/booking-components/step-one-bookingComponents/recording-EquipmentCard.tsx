"use client";

import React from 'react';

interface EquipmentCardProps {
  imageSrc: string;
  description: string;
}

const EquipmentCard = ({ imageSrc, description }: EquipmentCardProps) => {
  return (
    <article className="flex-1 px-4 py-2.5 rounded-lg bg-zinc-100">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain w-6 aspect-square"
        aria-hidden="true"
      />
      <p className="mt-3 text-sm font-medium text-zinc-800">
        {description}
      </p>
    </article>
  );
};

export default EquipmentCard;