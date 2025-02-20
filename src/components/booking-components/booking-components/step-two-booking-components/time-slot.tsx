import * as React from "react";
import { TimeSlotListProps } from "@/lib/types";

export type TimeSlotProps = {
  times: TimeSlotListProps[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
};

const TimeSlot = ({ times, selectedTime, onTimeSelect }: TimeSlotProps) => {

  const availableTimes = times.filter((time) => time.available);
  // console.log(times)
  // console.log(availableTimes);
  const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format
    });
  };
  
  return (
    <div role="radiogroup" aria-label="Available time slots" className="grid grid-cols-4 gap-4 items-center mt-3  3xl:mt-5 w-full text-lg leading-7 font-nunitoSans 3xl:leading-[27.28px] 3xl:text-xl whitespace-nowrap text-[#333333]">
      {availableTimes.map((time) => (
        <button
          key={time.start}
          role="radio"
          aria-checked={time.start === selectedTime}
          onClick={() => onTimeSelect(time.start)}
          aria-label={`Select time ${formatTime(time.start)}`}
          className={`flex 3xl:px-6 3xl:py-5 lg:px-4 lg:py-2 justify-center p-3 my-auto cursor-none rounded-xl bg-neutral-100 ${
            time.start === selectedTime ? "border border-[#989898] shadow-lg shadow-[#80808030]" : ""
          }`}
        >
          {formatTime(time.start)}
        </button>
      ))}
    </div>
  );
};

export default TimeSlot;