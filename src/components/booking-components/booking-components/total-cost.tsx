import * as React from "react";


type TotalCostProps = {
  description?: string;
  total?: string;
  buttonText?: string;
  onContinue: () => void;
};

const TotalCost = ({ description, total, buttonText, onContinue }: TotalCostProps) => (
  <footer className=" bg-zinc-50 shadow-lg md:w-[90%] mx-auto lg:w-full border border-[#989898] rounded-2xl border-opacity-50">
    <div className="flex justify-between items-center mx-auto px-4 py-3 lg::py-4 lg:px-6 font-nunitoSans 3xl:py-[23px] w-full 3xl:px-8">
      <div className="flex flex-col flex-1 justify-center self-stretch my-auto basis-12 ">
        <p className="3xl:text-base lg:text-sm text-xs font-normal text-[#989898] leading-[16.37px] lg:leading-4 3xl:leading-[21.28px]">{description}</p>
        <strong className="lg:mt-2 mt-1 text-base leading-[21.82px] lg:text-xl lg:leading-[28px] 3xl:text-2xl font-semibold text-zinc-800 3xl:leading-[32.74px]">{total}</strong>
      </div>
      <button 
        onClick={onContinue}
        className="flex-1 cursor-none shrink w-fit px-5 py-3 3xl:px-6 3xl:py-4 text-sm leading-[19.1px] 3xl:text-base 3xl:leading-[21.82px] font-medium text-center whitespace-nowrap bg-[#FF8C42] rounded-lg  shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-[#FCFCFC] border-[1px] border-[#FFC49D] hover:scale-105"
        aria-label="Continue to next step"
      >
        {buttonText}
      </button>
    </div>
  </footer>
);

export default TotalCost;