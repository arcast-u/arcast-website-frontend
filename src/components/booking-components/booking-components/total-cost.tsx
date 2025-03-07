import * as React from 'react';

type TotalCostProps = {
  studioName?: string;
  description?: string;
  total?: string;
  currency?: string;
  buttonText?: string;
  duration: number | string;
  step: number;
  onContinue: () => void;
  load: boolean;
  customService?: {
    name: string;
    price: string;
  } | null;
};

const TotalCost = ({
  studioName,
  description,
  total,
  buttonText,
  load,
  currency,
  step,
  duration,
  onContinue,
  customService,
}: TotalCostProps) => {
  return (
    <div className=' bg-zinc-50 shadow-lg md:w-[90%] mx-auto lg:w-full border border-[#989898] rounded-2xl border-opacity-50'>
      <div className='flex justify-between items-center mx-auto px-4 py-3 lg:px-6 font-nunitoSans 3xl:py-4 w-full 3xl:px-8'>
        <div className='flex flex-col flex-1 justify-center self-stretch my-auto basis-12 '>
          <p className='3xl:text-sm text-xs font-normal text-[#989898] leading-[16.37px] lg:leading-4 3xl:leading-[19.1px]'>
            {studioName} {description}{' '}
            {customService && (
              <span className='block'>{`+ ${customService.name}`}</span>
            )}
          </p>
          <strong className='3xl:mt-1 mt-0.5 text-sm leading-[19.1px] lg:text-lg lg:leading-[24px] 3xl:text-xl font-semibold text-[#333333] 3xl:leading-[32.74px]'>
            {step !== 0 && (
              <>
                <span className='text-xs 3xl:text-sm'>{duration}hr(s) X </span>
              </>
            )}
            {total} {currency}{' '}
            {customService && (
              <span className=''>{`+ ${customService.price}`}</span>
            )}
          </strong>
        </div>
        <div className='flex-1 w-fit hover:scale-105 flex rounded-lg bg-gradient-to-b from-[#FFC49D] ring-2 ring-[#FAE2D2] to-[#FF8C42] text-[#FCFCFC] text-sm leading-[17.82px] font-nunitoSans text-medium font-normal 3xl:leading-[21.82px] 3xl:text-base p-[0.4px] '>
          <button
            onClick={onContinue}
            disabled={load ? true : false}
            className='flex-1 bg-[#FF8C42] w-fit px-4 py-2 3xl:px-5 3xl:py-[14px] text-xs leading-[19.1px] 3xl:text-sm 3xl:leading-[19.1px] font-medium text-center whitespace-nowrap rounded-lg'
            aria-label='Continue to next step'
          >
            {load ? (
              <span className='animate-pulse'>Booking...</span>
            ) : (
              <>{buttonText}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
