import NavigationBar from '../homepage-components/nav-bar';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className='business-bg h-[100vh]'>
      <NavigationBar />
      <div className='max-w-[550px] md:max-w-[700px] lg:max-w-[1012px] flex flex-col mx-[21px] lg:w-[55%] lg:mx-10 mb-28 md:mb-10 3xl:mx-[100px] mt-auto h-[85%] justify-end'>
        <h2 className='text-[#FCFCFC] font-hankenGrotesk text-3xl md:text-4xl xl:text-[52px] xl:leading-[67px] font-medium'>
          Done-For-You Content That Makes You Look Good And attracts the kind of
          clients you actually want.
        </h2>
        <div
          onClick={() => router.push('/bookings')}
          className='flex w-fit 3xl:mt-8 mt-6 hover:scale-105 lg:flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#64391E] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px]'
        >
          <button className='flex-1 w-[160px] md:w-[250px] h-[54px] bg-[#FF8C42] px-3 py-2 3xl:px-4 3xl:py-3 rounded-lg text-base'>
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
