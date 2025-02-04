'use client'
import React, {useState} from 'react';
import DurationSelector from './duration-selector';


function SelectDuration() {
     const [duration, setDuration] = useState(1);
  return (
    <section className="3xl:mt-12 mt-10">
        <h2 className="text-xl leading-7 3xl:text-2xl font-nunito font-medium 3xl:leading-[32.74px] text-[#333333]">
        How many hours would you need
        </h2>
        <DurationSelector
        duration={duration}
        onIncrease={() => setDuration(prev => prev + 1)}
        onDecrease={() => setDuration(prev => Math.max(1, prev - 1))}
        />
    </section>
  )
}

export default SelectDuration