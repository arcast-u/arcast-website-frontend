'use client';
import React from 'react';
import TimeSlot from './time-slot';
import { TimeSlotListProps } from '@/utils/types';

type TimeSlotData = {
  timeSlots: TimeSlotListProps[] | null;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (time: string) => void;
  duration: number;
};

function SelectTime({
  timeSlots,
  selectedTimeSlot,
  setSelectedTimeSlot,
  duration,
}: TimeSlotData) {
  return (
    <section className='mt-8 lg:mt-10 md:w-[90%] mx-auto lg:w-full'>
      <h3 className='header-text'>Select your preferred time</h3>
      <TimeSlot
        times={timeSlots || []}
        selectedTime={selectedTimeSlot}
        onTimeSelect={setSelectedTimeSlot}
        duration={duration}
      />
    </section>
  );
}

export default SelectTime;
