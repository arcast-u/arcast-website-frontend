'use client'
import React from 'react';
import DurationSelector from './duration-selector';

type Selector= {
  hasBorder: boolean
  hasHeader: boolean;
  duration: number;
  setDuration: (value: number) => void
}
function SelectDuration({hasBorder, hasHeader, duration, setDuration}: Selector) {
     
  return (
    <section className={`${hasHeader === true ? '3xl:mt-12 mt-8 lg:mt-10' : ''} md:w-[90%] mx-auto lg:w-full`}>
        {hasHeader === true ? <h2 className="header-text">
          How many hours would you need
        </h2> : ''}
        <DurationSelector
        duration={duration}
        onIncrease={() => setDuration(duration + 1)}
        onDecrease={() => setDuration(Math.max(1, duration - 1))}
        hasBorder={hasBorder}
        />
    </section>
  )
}

export default SelectDuration