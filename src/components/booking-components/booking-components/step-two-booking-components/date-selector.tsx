'use client'
import React from 'react'
import DatePicker from './date-picker';
import { AvailabilityItemProps } from '@/lib/types';

export type DateSelectorProps = {
  date?: Date;
  setDate: (date: Date) => void;
  dateData: AvailabilityItemProps[] | null;
  
}

function DateSelector({ date, setDate, dateData }: DateSelectorProps) {
  return (
    <section className="mt-8 md:w-[90%] mx-auto lg:w-full lg:mt-10 3xl:mt-12">
        <h2 className="header-text">
        select your prefered date
        </h2>
        <DatePicker date={date} setDate={setDate} dateData={dateData}/>
    </section>
  )
}

export default DateSelector