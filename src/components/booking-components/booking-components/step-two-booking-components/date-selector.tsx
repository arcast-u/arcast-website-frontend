
import React from 'react'
import DatePicker from './date-picker';

function DateSelector() {
  return (
    <section className="mt-10 3xl:mt-12">
        <h2 className="text-[28px] leading-8 3xl:text-[32px] font-nunitoSans font-medium 3xl:leading-[43.65px] text-[#333333]">
        Choose your date and time
        </h2>
        <DatePicker 
        />
    </section>
  )
}

export default DateSelector