/* eslint-disable @next/next/no-img-element */
const HowItWorks = () => {
  return (
    <div className='w-full bg-[#F5F5F7] md:py-12 py-6 px-5'>
      <div className='max-w-[1300px] mx-auto'>
        <h3 className='text-[#333333] font-medium font-hankenGrotesk text-3xl mdLg:text-5xl text-center mb-12'>
          How It Works
        </h3>
        <img
          src={'/images/how-it-works.png'}
          alt='how-it-works'
          className='hidden md:block w-full h-full object-cover'
        />
        <img
          src={'/images/how-it-works-mobile.png'}
          alt='how-it-works'
          className='md:hidden w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default HowItWorks;
