'use client'
import React, {useState} from 'react';
import DurationSelector from './duration-selector';

type Selector= {
  hasBorder: boolean
  hasHeader: boolean;
}
function SelectDuration({hasBorder, hasHeader}: Selector) {
     const [duration, setDuration] = useState(1);
  return (
    <section className={`${hasHeader === true ? '3xl:mt-12 mt-8 lg:mt-10' : ''} md:w-[90%] mx-auto lg:w-full`}>
        {hasHeader === true ? <h2 className="header-text">
          How many hours would you need
        </h2> : ''}
        <DurationSelector
        duration={duration}
        onIncrease={() => setDuration(prev => prev + 1)}
        onDecrease={() => setDuration(prev => Math.max(1, prev - 1))}
        hasBorder={hasBorder}
        />
    </section>
  )
}

export default SelectDuration