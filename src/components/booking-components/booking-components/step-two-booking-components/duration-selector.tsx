import React from "react";
import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";

type DurationSelectorProps = {
  duration: number;
  onIncrease: () => void;
  onDecrease: () => void;
  hasBorder: boolean;
};

const DurationSelector= ({
  duration,
  onIncrease,
  onDecrease,
  hasBorder
}: DurationSelectorProps) => {
  return (
    <div className="flex gap-1 rounded-lg mt-3 w-full" role="group" aria-label="Duration selector">
      <button
        onClick={onDecrease}
        aria-label="Decrease duration"
        className={`flex ${hasBorder === true ? 'border-[0.4px] border-[#989898] py-2 px-3 3xl:py-3 3xl:px-4' : 'py-4 px-3 3xl:py-3 3xl:px-5 '} justify-center items-center w-16 rounded-l-lg bg-[#F5F5F7]`}
      >
        <FiMinus className="size-5 text-black stroke-[1.5px]"/>
      </button>
      <div 
        aria-label="Current duration"
        className={`flex-1 ${hasBorder === true ? 'border-[0.4px] border-[#989898] py-2 px-3 3xl:py-3 3xl:px-4' : 'py-4 px-3 3xl:py-3 3xl:px-5 '}  h-full justify-center text-center font-nunitoSans text-base 3xl:text-xl leading-[27.8px] font-semibold whitespace-nowrap bg-[#F5F5F7] text-[#333333]`}
      >
        {duration}
      </div>
      <button
        onClick={onIncrease}
        aria-label="Increase duration"
        className={`flex ${hasBorder === true ? 'border-[0.4px] border-[#989898] py-2 px-3 3xl:py-3 3xl:px-4' : '3xl:py-3 3xl:px-5 py-4 px-3'}  gap-10 justify-center items-center w-16 rounded-r-lg bg-[#F5F5F7]`}
      >
        <IoAddOutline className="size-5 text-black stroke-[1.5px]"/>
      </button>
    </div>
  );
};

export default DurationSelector;