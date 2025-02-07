'use client'
import React, {useState} from "react";
import { TbCaretDown, TbCaretLeft, TbCaretRight, TbCaretUp } from "react-icons/tb";
import { format } from "date-fns";
import Image from "next/image";



const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2025, 0, 25));
    const [tempDate, setTempDate] = useState<Date | null>(new Date(2025, 0, 25));
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(2025);
  
    const unavailableDates = [5, 10, 15, 20, 25]; // Example unavailable dates
  
    const handleDateClick = (date: Date) => {
      if (!unavailableDates.includes(date.getDate())) {
        setTempDate(date);
      }
    };
  
    const handleDoneClick = () => {
      setSelectedDate(tempDate);
      setShowCalendar(false);
    };
  
    const handlePrevMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };
  
    const handleNextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };
  
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = new Array(firstDay).fill(null);
  
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7 || day === daysInMonth) {
        weeks.push(week);
        week = [];
      }
    }
  
  
  return (
    <div className="w-full relative">
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className={`flex items-center jusify-between px-4 py-3 mt-4 3xl:px-6 3xl:py-5 3xl:mt-5 w-full rounded-xl bg-[#F5F5F7] ${showCalendar === true ? "border-[0.5px] border-[#5081FF]" : ""}`}
        aria-label="Select date"
      >
        <div className="flex items-center justify-between w-full  ">
          <div className="flex gap-4 items-center ">
            <Image src="/icons/calendar.svg" 
            width={44} height={44} 
            alt="Calendar" 
            className="object-contain 3xl:size-[54px]" />
            <div className="flex flex-col font-nunitoSans">
              <p className="3xl:text-base text-sm text-left font-normal text-[#989898]">Select a day</p>
              <p className="mt-1 text-base leading-5 3xl:text-xl 3xl:leading-[27.28px] text-left font-semibold text-[#333333]">
                {selectedDate && format(selectedDate, "dd-MM-yyyy")}
              </p>
            </div>
          </div>
          {showCalendar === false ? <TbCaretDown className="size-5 text-[#333333] stroke-[1px]"/>
          : <TbCaretUp className="size-5 text-[#333333] stroke-[1px]"/>
          }
        </div>
        
      </button>
      {showCalendar && (
        <div className="bg-[#F5F5F7] w-full absolute shadow-2xl px-6 py-[22px] rounded-lg mt-2">
          <div className="flex justify-between items-center text-gray-700">
            <span className="font-semibold text-base leading-5 3xl:text-xl 3xl:leading-[28.28px] font-nunitoSans">{format(new Date(currentYear, currentMonth), "MMMM yyyy")}</span>
            <div className="flex space-x-2">
              <TbCaretLeft className="stroke-[1px]" onClick={handlePrevMonth} />
              <TbCaretRight className="stroke-[1px]" onClick={handleNextMonth} />
            </div>
          </div>
          <div className="grid grid-cols-7 text-gray-500 text-sm mt-6">
            {"Mon Tue Wed Thu Fri Sat Sun".split(" ").map((d) => (
              <div key={d} className="text-center font-nunitoSans text-sm leading-4 3xl:text-base 3xl:leading-[21.82px] font-medium">{d}</div>
            ))}
          </div>
          {weeks.map((week, i) => (
            <div key={i} className="grid grid-cols-7 text-center mt-1">
              {week.map((day, idx) => (
                <div
                  key={idx}
                  className={`py-1.5 px-2 font-nunitoSans font-500 text-lg leading-7 3xl:text-2xl 3xl:leading-[32.74px] rounded-lg transition ${
                    unavailableDates.includes(day || 0) ? "text-[#989898] cursor-none" :
                    day === tempDate?.getDate() ? "bg-[#333333] shadow-xl text-[#F5F5F7]" : "hover:bg-gray-200"
                  }`}
                  onClick={() => day && !unavailableDates.includes(day) && handleDateClick(new Date(currentYear, currentMonth, day))}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-end">          
            <button
              className=" self-end bg-[#FF8C42] w-fit font-nunitoSans font-medium text-sm leadeing-[19px] whitespace-nowrap shadow-[0px_4px_4px_rgba(0,10,31,0.2)] border-[#FFC49D] text-[#FCFCFC] py-3 px-5 mt-6 rounded-lg hover:scale-105"
              onClick={handleDoneClick}
            >
              Done
            </button>
          </div>

        </div>
      )}
    </div> 
  );
};

export default DatePicker;