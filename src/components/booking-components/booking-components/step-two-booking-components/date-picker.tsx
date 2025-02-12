'use client'
import React, {useState} from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { TbCaretDown, TbCaretUp } from "react-icons/tb";
import { DateSelectorProps } from "./date-selector";
import Image from "next/image";



const DatePicker = ({  date, setDate, dateData}: DateSelectorProps) => {
    const [tempDate, setTempDate] = useState<Date | undefined>(date);
    const [isOpen, setIsOpen] = useState(false);

  // Unavailable dates
  const disabledDates = dateData
  ? dateData
      .filter((item) => item.status === "past")
      .map((item) => {
        const [year, month, day] = item.date.split("-").map(Number);
        return new Date(year, month - 1, day); // Adjusting month by subtracting 1
      })
  : [];
  console.log(date)
  const handleDone = () => {
    if ( tempDate) {
      console.log('final' + tempDate)
      setDate(tempDate);
      setIsOpen(false);
    }
  };


  return (
    <div className="flex flex-col items-start gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button className={`flex items-center justify-between hover:bg-[#F5F5F7] mt-4 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7] ${isOpen ? "border-[0.5px] border-[#989898] shadow-lg shadow-[#80808030]" : ""}`}>
            <div className="flex items-center justify-between w-full ">
              <div className="flex gap-4 items-center">
                <Image src="/icons/calendar.svg" width={44} height={44} alt="Calendar" className="object-contain 3xl:size-[54px]" />
                <div className="flex flex-col font-nunitoSans">
                  <p className="3xl:text-base text-sm text-left font-normal text-[#989898]">Select a day</p>
                  <p className="mt-1 text-base leading-5 3xl:text-xl 3xl:leading-[27.28px] text-left font-semibold text-[#333333]">
                    {date ? format(date, "yyyy-MM-dd") : "Select a date"}
                  </p>
                </div>
              </div>
              {isOpen ?  <TbCaretDown className="size-5 text-[#333333] stroke-[1px]" /> : <TbCaretUp className="size-5 text-[#333333] stroke-[1px]" />}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[100%] shadow-xl bg-[#F5F5F7] z-20 p-2">
          <Calendar
            mode="single"
            selected={tempDate}
            onSelect={setTempDate}
            disabled={(date) => disabledDates.some((d) => d.toDateString() === date.toDateString())}
          />
          <div className="mt-1 mb-3 mr-3 flex justify-end">
            <Button  onClick={handleDone} className="bg-[#FF8C42] hover:bg-[#FF8C42] w-fit font-nunitoSans font-medium text-sm leadeing-[19px] whitespace-nowrap shadow-[0px_4px_4px_rgba(0,10,31,0.2)] border-[#FFC49D] text-[#FCFCFC] py-3 px-5 rounded-lg hover:scale-105">
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;

