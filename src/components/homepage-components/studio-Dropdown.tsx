'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const setups = [
  {
    id: 1,
    name: 'Mobile Studio',
    image: '/images/studio1.webp',
    available: true,
  },
  { id: 2, name: 'Setup 1', image: '/images/studio2.jpg', available: false },
  // { id: 3, name: 'Setup 3', image: '/images/studio3.jpg', available: false },
  { id: 4, name: 'Setup 2', image: '/images/studio4.jpg', available: false },
  { id: 5, name: 'nil', available: true },
  // { id: 5, name: 'Setup 5', image: '/images/studio5.jpg', available: false },
  { id: 6, name: 'Setup 3', image: '/images/studio6.jpg', available: false },
  // { id: 7, name: 'Setup 7', image: '/images/studio7.jpg', available: false },
  { id: 8, name: 'Setup 4', image: '/images/studio8.jpg', available: false },
  // { id: 9, name: 'Setup 9', image: '/images/studio9.jpg', available: false },
];

const ChooseSetup = () => {
  const router = useRouter();
  const bookSession = () => router.push('/bookings');
  return (
    <section className='absolute h-[120vh] md:h-screen pb-20 shadow-xl shadow-[#858585] overflow-y-auto lg:h-auto bg-[#FCFCFC] rounded-b-xl md:top-12 top-14 lg:top-14 3xl:top-16 flex flex-wrap lg:flex-nowrap justify-between left-0 w-full px-10 py-16'>
      <h2 className='text-3xl w-full lg:w-[19%] 3xl:w-[30%] font-medium font-nunitoSans 3xl:text-5xl text-gray-900 mb-8'>
        Choose Your Setup
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 w-full lg:w-[60%] xl:w-[65%] gap-6'>
        {setups.map((setup) => (
          <div
            key={setup.id}
            className={`relative h-[250px] max-h-[308px] rounded-lg overflow-hidden ${
              setup.name === 'nil' ? 'hidden xl:block' : 'shadow-md'
            } `}
          >
            {setup.image && setup.name !== 'nil' && (
              <Image
                src={setup?.image}
                alt={setup.name}
                width={277.67}
                height={308}
                quality={100}
                className={`w-full h-full object-cover ${
                  !setup.available ? 'opacity-50' : ''
                }`}
              />
            )}
            {!setup.available && (
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40'>
                <p className='text-[#333333] text-xl font-semibold'>
                  Fully Booked
                </p>
              </div>
            )}
            {setup.available && setup.name !== 'nil' && (
              <div
                className={`absolute rounded-lg top-3 font-nunitoSans left-2 ${
                  setup.name === 'Mobile Studio'
                    ? 'bg-black text-[#fcfcfc]'
                    : 'bg-white text-[#333333]'
                } w-[90%] h-[52px] p-4  text-center flex items-center justify-between gap-3`}
              >
                <p className=' text-xs text-left text-nowrap font-medium'>
                  {setup.name}
                </p>
                <button
                  onClick={bookSession}
                  className='text-xs text-nowrap flex items-center justify-center hover:scale-105 w-[109px] h-[32px] text-[#989898] border border-[#bbbbbb] font-medium px-4 py-2 rounded-md transition-all'
                >
                  Book now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default ChooseSetup;
