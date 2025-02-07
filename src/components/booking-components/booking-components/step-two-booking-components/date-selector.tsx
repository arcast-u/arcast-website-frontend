'use client'
import React from 'react'
import DatePicker from './date-picker';

function DateSelector() {
  return (
    <section className="mt-8 lg:mt-10 3xl:mt-12">
        <h2 className="header-text">
        select your prefered date
        </h2>
        <DatePicker 
        />
    </section>
  )
}

export default DateSelector