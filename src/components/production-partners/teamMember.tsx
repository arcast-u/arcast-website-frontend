import React from 'react';

interface TeamMemberProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const TeamMember = ({ imageSrc, title, description }: TeamMemberProps) => {
  return (
    <article className="">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} team member`}
        className="object-contain max-w-full rounded-md aspect-[1.05] shadow-lg shadow-black/20 w-[105px]"
      />
      <div className=" font-normal font-nunitoSans justify-center mt-3 w-full">
        <h3 className="text-base 3xl:text-xl leading-[21.82px] text-[#333333]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-[19.1px] 3xl:text-base font-medium text-[#989898]">
          {description}
        </p>
      </div>
    </article>
  );
};