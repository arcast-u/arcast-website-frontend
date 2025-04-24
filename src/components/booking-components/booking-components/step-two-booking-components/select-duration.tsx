'use client'
import React, { useEffect } from 'react';
import DurationSelector from './duration-selector';
import { AdditionalServiceType } from '@/lib/types';

type Selector = {
  hasBorder: boolean
  hasHeader: boolean;
  duration: number;
  setDuration: (value: number) => void;
  keyIndex?: number;
  onSelect?: (index: number, action: "toggle" | "increment" | "decrement") => void;
  services?: AdditionalServiceType;
}
function SelectDuration({ keyIndex, onSelect, hasBorder, hasHeader, duration, setDuration, services }: Selector) {
  useEffect(() => {
    if (services?.type === "STANDARD_EDIT_SHORT_FORM") {
      setDuration(3)
    } else {
      setDuration(1)
    }
  }, [])

  return (
    <section className={`${hasHeader === true ? ' mt-8 lg:mt-10 md:w-[90%]' : 'md:w-full'}  mx-auto lg:w-full`}>
      {hasHeader === true ? <h2 className="header-text">
        How many hours would you need
      </h2> : ''}
      <DurationSelector
        duration={duration}
        onIncrease={services?.type === "STANDARD_EDIT_SHORT_FORM" ? () => {
          setDuration(Math.min(12, duration + 3));
          onSelect?.(keyIndex!, "increment");
        } : () => {
          setDuration(Math.min(10, duration + 1));
        }}
        onDecrease={services?.type === "STANDARD_EDIT_SHORT_FORM" ? () => {
          setDuration(Math.max(3, duration - 3));
          onSelect?.(keyIndex!, "decrement");
        } : () => setDuration(Math.max(1, duration - 1))}
        hasBorder={hasBorder}
      />
    </section>
  )
}

export default SelectDuration