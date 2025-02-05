import * as React from "react";


type TotalCostProps = {
  description?: string;
  total?: string;
  onContinue: () => void;
};

const TotalCost = ({ description, total, onContinue }: TotalCostProps) => (
  <footer className=" bg-zinc-50 shadow-lg border border-[#989898] rounded-2xl border-opacity-50">
    <div className="flex justify-between items-center mx-auto py-4 px-6 font-nunitoSans 3xl:py-[23px] w-full 3xl:px-8">
      <div className="flex flex-col flex-1 justify-center self-stretch my-auto basis-12 ">
        <p className="3xl:text-base text-sm font-normal text-[#989898] leading-4 3xl:leading-[21.28px]">{description}</p>
        <strong className="mt-2 text-xl leading-[28px] 3xl:text-2xl font-semibold text-zinc-800 3xl:leading-[32.74px]">{total}</strong>
      </div>
      <button 
        onClick={onContinue}
        className="flex-1 shrink w-fit px-4 py-1.5 3xl:px-6 3xl:py-4 text-sm 3xl:text-base font-medium text-center whitespace-nowrap bg-[#FF8C42] rounded-lg  shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-[#FCFCFC] border-[1px] border-[#FFC49D] hover:scale-105"
        aria-label="Continue to next step"
      >
        Continue
      </button>
    </div>
  </footer>
);

export default TotalCost;