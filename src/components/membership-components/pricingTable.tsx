"use client";
import PricingCard from './pricingCard';
import FeatureRow from './featureRow';
import { PricingTier } from '../../lib/types';

const tiers: PricingTier[] = [
  {
    name: "Bronze",
    price: "8000 AED",
    features: {
      hours: "4 hours",
      discount: "10%",
      priority: "7 days in advance",
      standardReel: true,
      signatureReel: false,
      accountManager: false,
      addOns: true,
      newsletter: true
    }
  },
  {
    name: "Silver",
    price: "12,000 AED",
    features: {
      hours: "8 hours",
      discount: "15%",
      priority: "14 days in advance",
      standardReel: true,
      signatureReel: false,
      accountManager: false,
      addOns: true,
      newsletter: true
    }
  },
  {
    name: "Gold",
    price: "16,000 AED",
    features: {
      hours: "12 hours",
      discount: "20%",
      priority: "30 days in advance",
      standardReel: true,
      signatureReel: true,
      accountManager: true,
      addOns: true,
      newsletter: true
    }
  }
];

/*************  ✨ Codeium Command ⭐  *************/
/**
 * MembershipPricing component
 *
 * This component renders a table of pricing tiers, along with their
 * corresponding features and benefits.
 *
 * The component is responsive and adapts to different screen sizes.
 *
 * @returns {JSX.Element} - The rendered component
 */
/******  48e283ec-8d97-47cd-a53f-644643fba0bf  *******/
const PricingTable = () => {
  return (
    <section className="flex flex-col rounded-none" aria-labelledby="pricing-title">
      <header className="flex flex-col w-full text-xs font-medium text-black max-md:max-w-full">
        <div className="gap-2.5 self-end p-2.5 rounded-lg bg-neutral-100">
          Most Popular
        </div>
        <div className="w-full border border-solid border-zinc-300 min-h-px max-md:max-w-full" />
      </header>

      <div className="flex z-10 flex-col self-end mt-6 mr-6 max-w-full w-[596px] max-md:mr-2.5">
        <div className="self-start max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {tiers.map((tier, index) => (
              <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                <PricingCard name={tier.name} price={tier.price} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <FeatureRow
            label="Hours of Recording"
            values={tiers.map(t => t.features.hours)}
          />
          <FeatureRow
            label="Discounts on Additional Features"
            values={tiers.map(t => t.features.discount)}
          />
          <FeatureRow
            label="Priority Booking Access"
            values={tiers.map(t => t.features.priority)}
          />
          <FeatureRow
            label="1 Standard Reel per month"
            values={tiers.map(t => t.features.standardReel)}
          />
          <FeatureRow
            label="1 Signature Reel per month"
            values={tiers.map(t => t.features.signatureReel)}
          />
          <FeatureRow
            label="Dedicated Account Manager"
            values={tiers.map(t => t.features.accountManager)}
          />
          <FeatureRow
            label="Access to Add-Ons"
            values={tiers.map(t => t.features.addOns)}
          />
          <FeatureRow
            label="Member-exclusive newsletter & tips"
            values={tiers.map(t => t.features.newsletter)}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
