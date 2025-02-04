'use client'
import React, {useState} from 'react'
import TimeSlot from './time-slot';

function SelectTime() {
    const timeSlots1 = ["10:00", "12:30", "14:20", "20:05", "18:00", "02:30", "01:20", "09:05"];
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("14:20");
  return (
    <section className='mt-10 3xl:mt-12'>
        <h3 className="text-xl leading-7 3xl:text-2xl font-nunito font-medium 3xl:leading-[32.74px] text-[#333333]">
            Select your preferred time
        </h3>
        <TimeSlot 
        times={timeSlots1} 
        selectedTime={selectedTimeSlot}
        onTimeSelect={setSelectedTimeSlot}
        />
    </section>
  )
}

export default SelectTime