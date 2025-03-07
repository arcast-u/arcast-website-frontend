import React from 'react';

export type PeopleCountProps = {
  counts: number[];
  selectedCount?: number;
  onCountSelect?: (count: number) => void;
};

const PeopleCount = ({
  counts,
  selectedCount,
  onCountSelect,
}: PeopleCountProps) => {
  return (
    <div
      role='radiogroup'
      aria-label='Number of people'
      className='flex gap-4 items-center self-start font-hankenGrotesk mt-3 3xl:mt-5 text-lg 3xl:text-xl font-medium whitespace-nowrap'
    >
      {counts.map((count) => (
        <button
          key={count}
          role='radio'
          aria-checked={count === selectedCount}
          onClick={() => onCountSelect?.(count)}
          className={`gap-10 self-stretch my-auto text-base leading-[21.82px] lg:leading-[27.28px] w-16 lg:text-xl py-2 3xl:py-4 px-5 3xl:w-20 flex item-center justify-center rounded-lg bg-[#F5F5F7] ${
            count === selectedCount
              ? 'border-[0.5px] border-[#989898] shadow-lg shadow-[#80808030] text-[#333333]'
              : 'text-[#989898]'
          }`}
        >
          {count}
        </button>
      ))}
    </div>
  );
};

export default PeopleCount;
