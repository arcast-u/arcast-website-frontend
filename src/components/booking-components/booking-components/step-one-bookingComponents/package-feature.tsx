import * as React from 'react';

interface PricingFeature {
    text: string;
  }

interface PricingFeatureProps {
  feature: PricingFeature;
  variant: 'light' | 'orange' | 'dark';
}

export const PricingFeature = ({ feature, variant }: PricingFeatureProps) => {
  const borderColorClass = {
    light: 'border-[#989898]',
    orange: 'border-[#FFE6D7]',
    dark: 'border-[#989898]'
  }[variant];

  return (
    <div className={`flex-1 shrink gap-2.5 self-stretch 3xl:px-4 3xl:py-2.5 py-2 px-3 rounded-lg border-[0.5px] border-solid ${borderColorClass}`}>
      {feature.text}
    </div>
  );
}