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
      className={`overflow-hidden flex-1 shrink px-10 py-9 rounded-xl basis-0 bg-zinc-50 min-w-60 shadow-[27px_140px_40px_rgba(204,204,204,0)] max-md:px-5 max-md:max-w-full ${className}`}
      role="region"
      aria-labelledby={`title-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {imageUrl && (
        <Image
          loading="lazy"
          src={imageUrl}
          alt=""
            width={48}
            height={48}
          className="object-contain w-12 aspect-square"
          aria-hidden="true"
        />
      )}
      <div className={`${imageUrl ? "mt-48 max-md:mt-10" : ""}`}>
        <h3
          className="text-3xl text-black"
          id={`title-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </h3>
        <p className="mt-3 text-base tracking-normal leading-6 text-black">
          {description}
        </p>
      </div>
    </article>
  );
};
