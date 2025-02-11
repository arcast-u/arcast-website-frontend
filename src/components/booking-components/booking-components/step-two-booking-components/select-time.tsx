'use client'
import React from 'react'
import TimeSlot from './time-slot';
import { TimeSlotListProps } from '@/lib/types';

type TimeSlotData ={
  timeSlots:TimeSlotListProps[] | null;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (time: string) => void;

}

function SelectTime({ timeSlots, selectedTimeSlot, setSelectedTimeSlot }: TimeSlotData) {

  
  return (
    <section className='mt-8 lg:mt-10 md:w-[90%] mx-auto lg:w-full 3xl:mt-12'>
        <h3 className="header-text">
            Select your preferred time
        </h3>
        <TimeSlot 
        times={timeSlots || []} 
        selectedTime={selectedTimeSlot}
        onTimeSelect={setSelectedTimeSlot}
        />
    </section>
  )
}

export default SelectTime