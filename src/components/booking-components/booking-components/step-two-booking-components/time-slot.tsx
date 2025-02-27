import * as React from "react";
import { TimeSlotListProps } from "@/lib/types";

export type TimeSlotProps = {
  times: TimeSlotListProps[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  duration: number;
};

const TimeSlot = ({ times, selectedTime, onTimeSelect, duration }: TimeSlotProps) => {

  const availableTimes = times.filter((time) => time.available);
  console.log(duration);
  // console.log(times)
  // console.log(availableTimes);
  const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format
    });
  };

  const addHours = (isoDate: string | undefined, hours: number): string => {
    try {
      // If no date provided or invalid date, use current date/time as default
      const date = isoDate ? new Date(isoDate) : new Date();
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return new Date().toISOString();
      }
      
      date.setHours(date.getHours() + hours);
      return date.toISOString();
    } catch (error) {
      console.log(error);
      // Fallback to current date/time if any error occurs
      return new Date().toISOString();
    }
  }
  
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
          <span className="hidden">{formatTime(addHours(time.start , duration))}</span>
        </button>
      ))}
    </div>
  );
};

export default TimeSlot;