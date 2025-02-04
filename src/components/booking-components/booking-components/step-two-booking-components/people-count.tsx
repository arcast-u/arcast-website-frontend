import React from "react";

export type PeopleCountProps = {
  counts: number[];
  selectedCount: number;
  onCountSelect: (count: number) => void;
};

const PeopleCount= ({ counts, selectedCount, onCountSelect }: PeopleCountProps) => {
  return (
    <div role="radiogroup" aria-label="Number of people" className="flex gap-4 items-center self-start font-nunitoSans mt-5 3xl:mt-6  text-lg 3xl:text-xl font-semibold whitespace-nowrap">
      {counts.map((count) => (
        <button
          key={count}
          role="radio"
          aria-checked={count === selectedCount}
          onClick={() => onCountSelect(count)}
          className={`gap-10 self-stretch my-auto leading-[27.28px] py-3 px-4 w-16 3xl:py-4 3xl:px-5 3xl:w-20 flex item-center justify-center rounded-lg bg-[#F5F5F7] ${
            count === selectedCount ? "border-[0.5px] border-[#5081FF] text-[#333333]" : "text-[#989898]"
          }`}
        >
          {count}
        </button>
      ))}
    </div>
  );
};

export default PeopleCount;