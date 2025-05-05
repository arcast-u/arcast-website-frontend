import * as React from 'react';
import Image from 'next/image';

interface BookingComponentProps {
  selectedPackage?: string | undefined;
  selectedStudio?: string | undefined;
  studioLocation?: string | undefined;
  price?: string | undefined;
  date?: Date;
  duration: number;
  time?: string | undefined;
  currency?: string;
  seats?: number;
  location?: string;
  image?: string;
  customService?: Array<{
    name: string;
    price: string;
    quantity: number;
  }>;
}

const BookingSummary = ({
  selectedPackage,
  selectedStudio,
  studioLocation,
  price,
  date,
  duration,
  time,
  currency,
  seats,
  location,
  image,
  customService,
}: BookingComponentProps) => {
  const img = '/images/checkout.webp';
  const formatDate = (isoDate: Date) =>
    new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const formatTime = (isoDate: string) =>
    new Date(isoDate).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

  const addHours = (isoDate: string | undefined, hours: number): string => {
    try {
      // If no date provided or invalid date, use current date/time as default
      const date = isoDate ? new Date(isoDate) : new Date();

      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return new Date().toISOString();
      }

      date.setHours(date.getHours() + hours);
      return date.toISOString();
    } catch (error) {
      console.log(error);
      // Fallback to current date/time if any error occurs
      return new Date().toISOString();
    }
  };
  // const total = Number(price) * duration;
  const packageTotal = Number(price) * duration;
  const parsePrice = (priceString: string): number =>
    Number(priceString.replace(/[^0-9.-]+/g, ''));

  const customServiceTotal =
    customService && customService.length > 0
      ? customService.reduce(
          (sum, service) => sum + parsePrice(service.price) * service.quantity,
          0
        )
      : 0;

  const total = packageTotal + customServiceTotal;
  const actualDuration = duration;
  const displayDuration = duration === 3 ? duration + 1 : duration;
  const hasBonusHour = duration === 3;


  console.log('customService', customService);

  return (
    <div className='flex flex-col md:w-[90%] mx-auto lg:w-full pb-10 mt-10 w-full '>
      <>
        <div className='header-text'>Booking Summary</div>
        <div className='flex flex-col mt-3 w-full bg-[#F5F5F7] rounded-xl'>
          <div className='flex font-nunitoSans flex-col w-full '>
            <div className='flex flex-col justify-center py-5 3xl:py-7 rounded-xl'>
              <div className='flex flex-col px-6 3xl:px-8'>
                <div className='flex flex-wrap justify-between w-full'>
                  <Image
                    loading='lazy'
                    src={image?.trimEnd() || img.trimEnd()}
                    width={72}
                    height={64}
                    quality={100}
                    alt='Studio'
                    className='object-cover shrink-0 h-16 lg:h-auto my-auto lg:w-20 rounded-lg aspect-square'
                  />
                  <div className='flex flex-col flex-1 shrink justify-between basis-0 '>
                    <div className='text-right text-xs leading-[19.1px] lg:text-sm  lg:leading-5'>
                      {selectedStudio ?? 'Unknown Studio'}
                    </div>
                    <div className='flex gap-1 justify-center border-[0.4px] border-[#989898] items-center self-end px-3 py-2 3xl:px-4 3xl:py-2 3xl:mt-4 3xl:text-base 3xl:leading-[21.82px] text-xs leading-16.37 lg:text-sm lg:leading-[17.82px] rounded-lg text-[#989898]'>
                      <p className='self-stretch'>{seats ?? 0} seats</p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 3xl:mt-6 w-full min-h-[0.1px] bg-[#98989870]' />
                <div className=' mt-5 3xl:mt-6 w-full text-base leading-5 font-nunitoSans font-medium text-[#333333] '>
                  <div className='flex flex-wrap gap-3 items-center justify-between'>
                    <p>{selectedPackage ?? 'No Package Selected'}</p>
                    <p>
                      <span className='text-xs leading-[19.1px]'>
                        {actualDuration}hr(s) X{' '}
                      </span>
                      {price ?? '0'} {currency ?? 'AED'}
                    </p>
                  </div>
                  {hasBonusHour && (
                    <div className='flex flex-wrap gap-3 items-center justify-between mt-2'>
                      <p className='text-green-600 font-medium'>Bonus Hour</p>
                      <p className='text-green-600 font-medium'>+1 hour free</p>
                    </div>
                  )}
                  {/* <div className="flex flex-wrap gap-3 items-center justify-between">
                    <p>{selectedPackage ?? "No Package Selected"}</p>
                    <p><span className="text-xs leading-[19.1px]">{duration}hrs X </span>
                      {price ?? "0"} {currency ?? "AED"}
                    </p>
                </div> */}
                </div>

                {customService && customService.length > 0 && (
                  <>
                    <div className='mt-5 3xl:mt-6 w-full min-h-[0.1px] bg-[#98989870]' />
                    
                
                    {customService.map((service, index) => (
                      <div
                        key={index}
                        className='flex flex-wrap gap-3 items-center justify-between mt-3'
                      >
                        <p>
                          {service.name}{' '}
                          {service.name === 'Short Form Edit (Instagram/TikTok)' ? (
                            <>
                              {service.quantity > 1 ? `/ (${service.quantity * 3}  Videos)` : ''}
                              </>
                          ) : (
                            <>
                            {service.quantity > 1 ? `(x${service.quantity})` : ''}
                            </>
                          )}
                          
                        </p>
                        <p>
                          {parsePrice(service.price) * service.quantity}{' '}
                          {currency ?? 'AED'}
                        </p>
                      </div>
                    ))}
                  </>
                )}
                <div className='mt-5 3xl:mt-6 w-full min-h-[0.1px] bg-[#98989870]' />
                <div>
                  <p className='text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]'>
                    Location
                  </p>
                  <p className='text-base leading-5 3xl:mt-3 mt-2 font-nunitoSansfont-medium text-[#333333]'>
                    {location || studioLocation || 'No Location Available'}
                  </p>
                </div>
                <div className='flex flex-wrap justify-between items-center'>
                  <div>
                    <p className='text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]'>
                      Date
                    </p>
                    <p className='text-base leading-5  3xl:mt-3 mt-2 font-nunitoSans font-medium text-[#333333]'>
                      {date ? formatDate(date) : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className='text-[#989898] font-normal mt-4 3xl:mt-6 text-xs leading-[16.37px] lg:text-sm lg:leading-[17px] 3xl:text-base 3xl:leading-[21.82px]'>
                      Time
                    </p>
                    <p className='text-base leading-5  3xl:mt-3 mt-2 font-nunitoSans font-medium text-[#333333]'>
                      {time
                        ? `${formatTime(time)} - ${formatTime(
                            addHours(time, displayDuration)
                          )}`
                        : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              <div className=' flex items 3xl:mt-10 mt-8 center'>
                <div className=' w-6 h-10 rounded-r-full bg-[#FCFCFC]'></div>
                <div className='self-center flex-1 border-solid border-[3px] border-[#FCFCFC] min-h-[1px]' />
                <div className=' w-6 h-10 rounded-l-full bg-[#FCFCFC]'></div>
              </div>
              <div className='flex flex-col mt-8 3xl:mt-10 px-5 w-full text-base leading-5 font-nunitoSans font-medium text-[#333333]  '>
                <div className='flex flex-wrap items-center justify-between'>
                  <p className='text-[#989898]'>Total Services</p>
                  <p>
                    {total ?? '0'} {currency ?? 'AED'}
                  </p>
                </div>
                <div className='flex flex-wrap items-center mt-2 justify-between'>
                  <p className='text-[#989898]'>VAT (0%)</p>
                  <p>
                    {'0'} {currency ?? 'AED'}
                  </p>
                </div>
                <div className='flex flex-wrap items-center mt-2 justify-between'>
                  <p className='text-[#989898]'>Discount</p>
                  <p>
                    {'0'} {currency ?? 'AED'}
                  </p>
                </div>
                <div className='flex flex-wrap justify-between items-center 3xl:mt-6 mt-5 w-full text-[22px] leading-[27.28px]'>
                  <p className='self-stretch my-auto font-medium'>Total</p>
                  <p className='self-stretch my-auto font-semibold'>
                    {' '}
                    {total ?? '0'} {currency ?? 'AED'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BookingSummary;
