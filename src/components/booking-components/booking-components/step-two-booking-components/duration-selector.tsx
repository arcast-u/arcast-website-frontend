import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

export type DurationSelectorProps = {
  duration: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const DurationSelector= ({
  duration,
  onIncrease,
  onDecrease
}: DurationSelectorProps) => {
  return (
    <div className="flex gap-1 rounded-lg mt-3 w-full" role="group" aria-label="Duration selector">
      <button
        onClick={onDecrease}
        aria-label="Decrease duration"
        className="flex justify-center items-center px-5 py-4 w-16 rounded-l-lg bg-[#F5F5F7]"
      >
        <FaMinus className="size-6 text-black stroke-[1.5px]"/>
      </button>
      <div 
        aria-label="Current duration"
        className="flex-1  py-3 px-5 h-full justify-center text-center font-nunitoSans text-base 3xl:text-xl leading-[27.8px] font-semibold whitespace-nowrap bg-[#F5F5F7] text-[#333333]"
      >
        {duration}
      </div>
      <button
        onClick={onIncrease}
        aria-label="Increase duration"
        className="flex gap-10 justify-center items-center px-5 py-4 w-16 rounded-r-lg bg-[#F5F5F7]"
      >
        <IoMdAdd className="size-6 text-black stroke-[1.5px]"/>
      </button>
    </div>
  );
};

export default DurationSelector;