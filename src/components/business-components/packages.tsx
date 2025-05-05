import { FaCheck } from 'react-icons/fa6';

const Packages = () => {
  const tiers = [
    {
      name: 'Starter Package',
      price: 'AED 3,500',
      videos: '2 videos',
      reels: '15 reels',
    },
    {
      name: 'Growth Package',
      price: 'AED 7,000',
      videos: '4 videos',
      reels: '30 reels',
    },
    {
      name: 'Premium Package',
      price: 'AED 12,000',
      videos: '8 videos',
      reels: '45 reels',
    },
  ];
  return (
    <div className='bg-[#FCFCFC] md:py-12 py-6 px-5 overflow-x-auto lg:overflow-x-hidden'>
      <div className='max-w-[1024px] mx-auto flex flex-col md:items-center'>
        <h3 className='text-[#333333] font-medium font-hankenGrotesk text-3xl mdLg:text-5xl'>
          Packages
        </h3>
        <p className='text-[#333333] font-normal font-hankenGrotesk text-lg sm:text-xl mt-4 md:text-center'>
          Here&apos;s exactly what you get with each package – no fluff, just
          results-driven deliverables designed to grow your brand.
        </p>

        <table className='w-full border-collapse border-[0.8px] border-[#D7D7D7] mt-12'>
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
                      <a href='https://api.whatsapp.com/send?phone=971508249795&text=Hi%20I%20would%20love%20to%20get%20some%20information%20about%20Arcast%20packages'>
                        Select Package
                      </a>
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=' whitespace-nowrap text-[#333333] font-nunitoSans font-normal text-base leading-6 3xl:text-lg 3xl:leading-[24.55px]'>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Long form videos
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.videos}
                </td>
              ))}
            </tr>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Social media reels
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7]'
                >
                  {tier.reels}
                </td>
              ))}
            </tr>
            <tr>
              <td className='p-4 border-[0.8px] text-center border-[#D7D7D7]'>
                Audio on spotify
              </td>
              {tiers.map((tier) => (
                <td
                  key={tier.name}
                  className='p-4 text-center text-base leading-6 3xl:text-xl 3xl:leading-[27.8px] border-[0.8px] border-[#D7D7D7] '
                >
                  <div className='bg-[#F5F5F7] rounded-[8px] w-8 h-8 flex items-center justify-center p-1 mx-auto'>
                    <FaCheck size={18} className='text-[#333333]' />
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Packages;
