import React from 'react';

const BasicPricingTable = () => {
  const tiers = [
    {
      name: 'Monthly',
      price: 'AED 1,584',
      hours: '4 hours',
      discount: '10%',
      DiscountsOnAdditionalFeatures: '10%',
      bookingAccess: '7 days in advance',
    },
    {
      name: 'Quarterly',
      price: 'AED 4,224',
      hours: '12 hours',
      discount: '20%',
      DiscountsOnAdditionalFeatures: '10%',
      bookingAccess: '14 days in advance',
    },
    {
      name: 'Yearly',
      price: 'AED 31,680',
      hours: '48 hours',
      discount: '25%',
      DiscountsOnAdditionalFeatures: '10%',
      bookingAccess: '30 days in advance',
    },
  ];

  return (
    <div className='w-full mx-auto px-4 overflow-x-auto lg:overflow-x-hidden max-w-[1010px] mb-10 3xl:mb-20'>
      <div className='min-w-fit'>
        <div className='flex justify-end w-full'>
          <div className='w-fit p-2.5 self-end rounded-tl-[8px] rounded-tr-[20px] bg-[#F5F5F7]'>
            <p className='font-nunitoSans text-xs leading-[16.37px] font-medium text-[#FF8C42]'>
              Most Popular
            </p>
          </div>
        </div>
        <table className='w-full border-collapse border-[0.8px] border-[#D7D7D7]'>
          <thead>
            <tr>
              <th className='p-4 border-[0.8px] border-[#D7D7D7]'></th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className='p-6 text-center font-nunitoSans font-normal border-[0.8px] border-[#D7D7D7] text-[#333333]'
                >
                  <h3 className=' text-sm leading-5 3xl:text-base 3xl:leading-[21.82px] text-[#989898] mb-2'>
                    {tier.name}
                  </h3>
                  <p className='3xl:text-2xl text-lg leading-7 font-medium 3xl:leading-[32.74px] mb-4'>
                    {tier.price}
                  </p>
                  <div className=' mx-auto w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '>
                    <button className='flex-1 bg-[#FF8C42] whitespace-nowrap w-fit px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg'>
                      Become a member
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=' whitespace-nowrap text-[#333333] font-nunitoSans font-normal text-base leading-6 3xl:text-lg 3xl:leading-[24.55px]'>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Hours of Recording
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.hours}
                </td>
              ))}
            </tr>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Total Discount
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.discount}
                </td>
              ))}
            </tr>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Discounts on Additional Features
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.DiscountsOnAdditionalFeatures}
                </td>
              ))}
            </tr>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Priority Booking Access
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.bookingAccess}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicPricingTable;
