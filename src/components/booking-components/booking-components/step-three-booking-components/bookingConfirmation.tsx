'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const BookingConfirmation = () => {
  const router = useRouter();
  const onClose = () => router.push('/bookings');
  return (
    <div className="flex flex-col h-full px-4">
      <div className="w-full mt-5 ">
        <button 
          onClick={onClose}
          className=" ml-4 inline-block w-fit font-nunitoSans font-normal text-xs 3xl:text-base 3xl:leading-[21.82px] leading-[16.37px] 3xl:py-3 3xl:px-8 3xl:border mb-8 3xl:mb-10 px-6 py-2 text-[#333333] rounded-lg border-[0.8px] border-[#989898] hover:scale-105"
        >
          Back
        </button>
      </div>
      <div className='flex flex-col h-full items-center justify-center'>
      
        
        {/* Ticket with Checkmark */}
        <div className="relative w-32 h-44 mb-8">
          <Image
            src="/images/complete.webp" // You'll need to create this SVG or use an image
            alt="Ticket background"
            width={128}
            height={128}
            quality={100}
            className="w-full h-full"
          />
        </div>

        {/* Confirmation Text */}
        <h1 className="mb-4 text-2xl 3xl:text-[32px] font-hankenGrotesk font-medium text-[#333333] text-center">
          Your Booking is Confirmed!
        </h1>
        
        <p className="mb-8 font-nunitoSans font-normal text-lg 3xl:text-xl text-center text-[#333333] max-w-md">
          You will receive an update on whatsapp or email.
        </p>

        {/* Contact Information */}
        <div className="text-center text-base 3xl:text-xl ">
          <p className="text-[#989898] mb-2">
            If you need assistance, contact us at
          </p>
          <a 
            href="mailto:booking@arcast.studio"
            className="text-blue-500 hover:text-blue-600 block mb-1"
          >
            booking@arcast.studio
          </a>
          <a 
            href="tel:+971544287756"
            className="text-blue-500 hover:text-blue-600"
          >
            +971 544287756
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default BookingConfirmation;