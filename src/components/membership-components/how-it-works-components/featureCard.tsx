"use client";

import * as React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <article
      className={`overflow-hidden flex-1 shrink px-10 py-9 rounded-xl basis-0 bg-[#FCFCFC] min-w-60 shadow-[27px_140px_40px_rgba(204,204,204,0)] max-md:px-5 max-md:max-w-full ${className}`}
      role="region"
      aria-labelledby={`title-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {imageUrl && (
        <Image
          loading="lazy"
          src={imageUrl}
          alt=""
            width={36}
            height={36}
            quality={100}
          className="object-contain  size-6  3xl:h-36px 3xl:w-[36px] aspect-square"
          aria-hidden="true"
        />
      )}
      <div className={`${imageUrl ? "3xl:mt-48 mt-20" : ""}`}>
        <h3
          className="text-xl leading-6 3xl:text-[28px] 3xl:leading-[36.48px] font-medium font-hankenGrotesk text-[#333333]"
          id={`title-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-5 3xl:text-base font-mulish font-normal tracking-normal 3xl:leading-[22px] text-[#989898]">
          {description}
        </p>
      </div>
    </article>
  );
};
