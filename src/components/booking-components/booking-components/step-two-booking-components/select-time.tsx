'use client'
import React, {useState} from 'react'
import TimeSlot from './time-slot';

function SelectTime() {
    const timeSlots1 = ["10:00", "12:30", "14:20", "20:05", "18:00", "02:30", "01:20", "09:05"];
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("14:20");
  return (
    <section className='mt-8 lg:mt-10 md:w-[90%] mx-auto lg:w-full 3xl:mt-12'>
        <h3 className="header-text">
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