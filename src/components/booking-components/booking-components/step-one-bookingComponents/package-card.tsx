import * as React from "react";

interface PackageCardProps {
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  features: string[];
  isHighlighted: boolean;
}

const PackageCard = ({ title, description, oldPrice, newPrice, features, isHighlighted }: PackageCardProps) => (
  <article 
    className={` ${isHighlighted ? "border-[0.5px] border-[#5081FF] border-solid" : ""}
      flex flex-col justify-center px-5 py-4 3xl:px-6 3xl:py-5 w-full rounded-xl bg-[#F5F5F7]  mb-4 last:mb-0 cursor-pointer hover:scale-105 transition-colors`}
    tabIndex={0}
    role="button"
    aria-pressed={isHighlighted}
  >
    <div className="flex flex-col font-nunitoSans w-full max-md:max-w-full">
      <header className="flex flex-col font-normal justify-center w-full max-md:max-w-full">
        <h3 className="text-lg leading-5 3xl:text-xl 3xl:leading-[27.28px] text-[#333333] max-md:max-w-full">{title}</h3>
        <p className="mt-1 text-sm leading-5 3xl:text-base 3xl:leading-[21.28px] text-[#989898] max-md:max-w-full">{description}</p>
      </header>
      <div className="flex flex-col justify-center mt-3 3xl:mt-4 font-semibold">
        <del className="text-xs 3xl:text-sm leading-[19.1px] text-[#DA6969]">{oldPrice}</del>
        <h3 className="text-lg 3xl:text-xl leading-[27.28px] text-[#333333]">{newPrice}</h3>
      </div>
    </div>
    <hr className="mt-4 3xl:mt-6 w-full border-[0.5px] border-[#989898]" />
    <section className="flex flex-col mt-4 font-nunitoSans 3xl:mt-6 w-full text-base leading-[21.82px] font-medium text-[#989898]">
      <h4 className="max-md:max-w-full">What is included</h4>
      <ul className="list-disc pl-6">
        {features.map((feature, index) => (
          <li key={index} className="3xl:mt-2 mt-1.5 max-md:max-w-full">{feature}</li>
        ))}
      </ul>
    </section>
  </article>
);

export default PackageCard;