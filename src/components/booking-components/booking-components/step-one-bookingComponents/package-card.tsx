import * as React from 'react';
import { PricingFeature } from './package-feature';

interface PricingFeature {
  text: string;
}
interface PricingCardProps {
  count: number;
  title: string;
  originalPrice: string;
  price: string;
  features: PricingFeature[];
  variant: 'light' | 'orange' | 'dark';
  selectedPackage: number;
  onSelect: (count: number) => void;
}

export const PackageCard = ({ title, originalPrice, price, features, variant, selectedPackage, onSelect, count }: PricingCardProps) => {
  const bgColorClass = {
    light: 'bg-[#EAEAEA]',
    orange: 'bg-[#FF8C42]',
    dark: 'bg-black'
  }[variant];

  const titleColorClass = {
    light: 'text-[#333333]',
    orange: 'text-[#F5F5F7]',
    dark: 'text-[#FCFCFC]'
  }[variant];

  const priceColorClass = {
    light: 'text-[#333333]',
    orange: 'text-[#F5F5F7]',
    dark: 'text-zinc-50'
  }[variant];

  const featuresColorClass = {
    light: 'text-[#585858]',
    orange: 'text-orange-100',
    dark: 'text-[#FCFCFC]'
  }[variant];

  const dividerColorClass = {
    light: 'bg-[#989898]',
    orange: 'bg-[#FFE6D7]',
    dark: 'bg-[#989898]'
  }[variant];

  return (
    <div tabIndex={0}
    role="button" className={`flex flex-col ${
    count === selectedPackage ? "border-[0.5px] border-[#5081FF] border-solid" : ""
    } justify-center font-nunitoSans 3xl:p-6 w-full ${bgColorClass} rounded-xl p-5`}
    onClick={() => onSelect(count)}>
      <div className="flex flex-wrap gap-6 items-start w-full ">
        <p className={`flex-1 shrink font-normal text-lg 3xl:text-xl leading-[27.28px] ${titleColorClass}`}>
          {title}
        </p>
        <div className="flex flex-col justify-center font-semibold">
          <del className="3xl:text-sm text-xs leading-[15.1px] 3xl:leading-[19.1px] text-[#FF4242]">{originalPrice}</del>
          <p className={`mt-1 text-lg leading-6 3xl:text-xl 3xl:leading-[27.28px] ${priceColorClass}`}>{price}</p>
        </div>
      </div>
      <div className={`3xl:mt-4 mt-3 w-full min-h-[0.5px] ${dividerColorClass}`} />
      <div className={`flex flex-col flex-1 justify-between 3xl:mt-4 mt-3 w-full font-medium ${featuresColorClass} `}>
        <div className="flex flex-wrap gap-3 items-start w-full text-sm leading-[16.46px] 3xl:text-base 3xl:leading-[20.46px]">
          {features.slice(0, 2).map((feature, index) => (
            <PricingFeature key={index} feature={feature} variant={variant} />
          ))}
        </div>
        <div className="flex flex-col mt-12 3xl:mt-[52px] w-full text-sm leading-[16.82px] 3xl:text-base 3xl:leading-[21.82px]">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="mt-3 first:mt-0">
              <PricingFeature feature={feature} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}