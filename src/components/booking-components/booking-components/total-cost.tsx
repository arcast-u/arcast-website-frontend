import * as React from "react";


type TotalCostProps = {
  description?: string;
  total?: string;
  currency?: string;
  buttonText?: string;
  onContinue: () => void;
};

const TotalCost = ({ description, total, buttonText, currency, onContinue }: TotalCostProps) => (
  <footer className=" bg-zinc-50 shadow-lg md:w-[90%] mx-auto lg:w-full border border-[#989898] rounded-2xl border-opacity-50">
    <div className="flex justify-between items-center mx-auto px-4 py-3 lg::py-4 lg:px-6 font-nunitoSans 3xl:py-[23px] w-full 3xl:px-8">
      <div className="flex flex-col flex-1 justify-center self-stretch my-auto basis-12 ">
        <p className="3xl:text-sm text-xs font-normal text-[#989898] leading-[16.37px] lg:leading-4 3xl:leading-[19.1px]">{description}</p>
        <strong className="3xl:mt-1 mt-0.5 text-sm leading-[19.1px] lg:text-lg lg:leading-[24px] 3xl:text-xl font-semibold text-zinc-800 3xl:leading-[32.74px]">{total} {currency}</strong>
      </div>
      <button 
        onClick={onContinue}
        className="flex-1 cursor-none shrink w-fit px-4 py-2 3xl:px-5 3xl:py-[14px] text-xs leading-[19.1px] 3xl:text-sm 3xl:leading-[19.1px] font-medium text-center whitespace-nowrap bg-[#FF8C42] rounded-lg  shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-[#FCFCFC] border-[1px] border-[#FFC49D] hover:scale-105"
        aria-label="Continue to next step"
      >
        {buttonText}
      </button>
    </div>
  </footer>
);

export default TotalCost;