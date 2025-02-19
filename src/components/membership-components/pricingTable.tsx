import React from 'react';
import { Check, Minus } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  hours: string;
  discount: string;
  bookingAccess: string;
  standardReel: boolean;
  signatureReel: boolean;
  accountManager: boolean;
  addOns: boolean;
  newsletter: boolean;
}

const PricingTable = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Bronze',
      price: '8000 AED',
      hours: '4 hours',
      discount: '10%',
      bookingAccess: '7 days in advance',
      standardReel: false,
      signatureReel: false,
      accountManager: false,
      addOns: true,
      newsletter: true,
    },
    {
      name: 'Silver',
      price: '12,000 AED',
      hours: '8 hours',
      discount: '15%',
      bookingAccess: '14 days in advance',
      standardReel: true,
      signatureReel: false,
      accountManager: false,
      addOns: true,
      newsletter: true,
    },
    {
      name: 'Gold',
      price: '16,000 AED',
      hours: '12 hours',
      discount: '20%',
      bookingAccess: '30 days in advance',
      standardReel: false,
      signatureReel: true,
      accountManager: true,
      addOns: true,
      newsletter: true,
    },
  ];

  return (
    <div className="w-full mx-auto px-4 overflow-x-auto lg:overflow-x-hidden max-w-[1010px] mb-10 3xl:mb-20">
      <div className='flex justify-end'>
        <div className='w-fit p-2.5 rounded-tl-[8px] rounded-tr-[20px] bg-[#F5F5F7]'>
          <p className='font-nunitoSans text-xs leading-[16.37px] font-medium text-[#FF8C42]'>Most Popular</p>
        </div>
      </div>
      <table className="w-full border-collapse border-[0.8px] border-[#D7D7D7]">
        <thead>
          <tr>
            <th className="p-4 border-[0.8px] border-[#D7D7D7]"></th>
            {tiers.map((tier) => (
              <th key={tier.name} className="p-6 text-center font-nunitoSans font-normal border-[0.8px] border-[#D7D7D7] text-[#333333]">
                <h3 className=" text-sm leading-5 3xl:text-base 3xl:leading-[21.82px] text-[#989898] mb-2">{tier.name}</h3>
                <p className="3xl:text-2xl text-lg leading-7 font-medium 3xl:leading-[32.74px] mb-4">{tier.price}</p>
                <div  className=" mx-auto w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] ">
                  <button className="flex-1 bg-[#FF8C42] w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg">
                    Become a member
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" text-[#333333] font-nunitoSans font-normal text-base leading-6 3xl:text-lg 3xl:leading-[24.55px]">
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Hours of Recording</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]">
                {tier.hours}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Discounts on Additional Features</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]">
                {tier.discount}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Priority Booking Access</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]">
                {tier.bookingAccess}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">1 Standard Reel per month</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] text-center border-[0.8px] border-[#D7D7D7]">
                {tier.standardReel ? 
                <div className='bg-[#F5F5F7] mx-auto w-8 h-8 flex items-center rounded-[8px] justify-center'><Check className="mx-auto size-[11px]" /></div> : <div className='bg-[#F5F5F7] mx-auto w-8 h-8 rounded-[8px] flex items-center justify-center'><Minus className="mx-auto size-3" /></div>}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">1 Signature Reel per month</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]">
                {tier.signatureReel ? 
                <div className='bg-[#F5F5F7] mx-auto w-8 h-8 flex items-center rounded-[8px] justify-center'><Check className="mx-auto size-[11px]" /></div> : <div className='bg-[#F5F5F7] mx-auto w-8 h-8 rounded-[8px] flex items-center justify-center'><Minus className="mx-auto size-3" /></div>}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Dedicated Account Manager</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]">
                {tier.accountManager ? 
                <div className='bg-[#F5F5F7] mx-auto w-8 h-8 flex items-center rounded-[8px] justify-center'><Check className="mx-auto size-[11px]" /></div> : <div className='bg-[#F5F5F7] mx-auto w-8 h-8 rounded-[8px] flex items-center justify-center'><Minus className="mx-auto size-3" /></div>}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Access to Add-Ons</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] text-center border-[0.8px] border-[#D7D7D7]">
                {tier.addOns ? 
                <div className='bg-[#F5F5F7] mx-auto w-8 h-8 flex items-center rounded-[8px] justify-center'><Check className="mx-auto size-[11px]" /></div> : <div className='bg-[#F5F5F7] mx-auto w-8 h-8 rounded-[8px] flex items-center justify-center'><Minus className="mx-auto size-3" /></div>}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-[0.8px] text-center border-[#D7D7D7]">Member-exclusive newsletter & tips</td>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] text-center border-[0.8px] border-[#D7D7D7]">
                {tier.newsletter ? 
                <div className='bg-[#F5F5F7] mx-auto w-8 h-8 flex items-center rounded-[8px] justify-center'><Check className="mx-auto size-[11px]" /></div> : <div className='bg-[#F5F5F7] mx-auto w-8 h-8 rounded-[8px] flex items-center justify-center'><Minus className="mx-auto size-3" /></div>}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;