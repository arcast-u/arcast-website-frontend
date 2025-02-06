import * as React from "react";

export type TimeSlotProps = {
  times: string[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
};

const TimeSlot = ({ times, selectedTime, onTimeSelect }: TimeSlotProps) => {
  return (
    <div role="radiogroup" aria-label="Available time slots" className="grid grid-cols-4 gap-4 items-center mt-4  3xl:mt-5 w-full text-lg leading-7 font-nunitoSans 3xl:leading-[27.28px] 3xl:text-xl whitespace-nowrap text-[#333333]">
      {times.map((time,index) => (
        <button
          key={index}
          role="radio"
          aria-checked={time === selectedTime}
          onClick={() => onTimeSelect(time)}
          className={`flex 3xl:px-6 3xl:py-5 lg:px-4 lg:py-3 p-3 my-auto rounded-xl bg-neutral-100 ${
            time === selectedTime ? "border border-blue-500" : ""
          }`}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlot;