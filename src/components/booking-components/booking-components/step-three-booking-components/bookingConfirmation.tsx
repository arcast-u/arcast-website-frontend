'use client';
import Image from 'next/image';

const BookingConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <>
        {/* Ticket with Checkmark */}
        <div className="relative w-32 h-44 mb-8">
          <Image
            src="/images/complete.webp" // You'll need to create this SVG or use an image
            alt="Ticket background"
            width={128}
            height={128}
            className="w-full h-full"
          />
        </div>

        {/* Confirmation Text */}
        <h1 className="mb-4 text-2xl 3xl:text-[32px] font-hankenGrotesk font-medium text-[#333333] text-center">
          Your Booking is Confirmed!
        </h1>
        
        <p className="mb-8 font-nunitoSans font-normal text-lg 3xl:text-xl text-center text-[#333333] max-w-md">
          You will receive your confirmation and session updates within 3 minutes via WhatsApp or email.
        </p>

        {/* Contact Information */}
        <div className="text-center text-base 3xl:text-xl ">
          <p className="text-[#989898] mb-2">
            If you need assistance, contact us at
          </p>
          <a 
            href="mailto:hello@arcast.studio"
            className="text-blue-500 hover:text-blue-600 block mb-1"
          >
            hello@arcast.studio
          </a>
          <a 
            href="tel:+97165836573644"
            className="text-blue-500 hover:text-blue-600"
          >
            +971 6583657364
          </a>
        </div>
      </>
      
    </div>
  );
};

export default BookingConfirmation;