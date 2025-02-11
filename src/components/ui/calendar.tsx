"use client"

import * as React from "react"
import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-start pt-1 relative items-center",
        caption_label: "font-semibold text-base leading-5 3xl:text-xl 3xl:leading-[28.28px] font-nunitoSans",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute right-6 border-none",
        nav_button_next: "absolute right-1 border-none",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-[42px] md:w-[86px] lg:w-[42px] xl:w-[49px] text-center font-nunitoSans text-sm leading-4 3xl:text-base 3xl:leading-[21.82px] font-medium",
        row: "flex w-full mt-2",
        cell: "p-[3px] lg:px-[3px] xl:px-[7px] md:px-[25px] font-nunitoSans font-500 text-lg leading-7 3xl:text-2xl 3xl:leading-[32.74px] rounded-lg transition-colors relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-200"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#333333] shadow-xl text-[#F5F5F7] font-nunitoSans text-primary-foreground hover:bg-gray-200 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: " text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <TbCaretLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <TbCaretRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
