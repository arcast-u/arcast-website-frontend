'use client'
import React, {useState} from 'react'
import PeopleCount from './people-count'

function NumberOfPeople() {
    const [selectedPeopleCount, setSelectedPeopleCount] = useState(3);
    const peopleCounts = [1, 2, 3, 4];
  return (
    <section className="flex font-nunitoSans flex-col 3xl:mt-12 w-full mt-10">
        <h1 className="text-[28px] leading-8 3xl:text-[32px] font-nunitoSans font-medium 3xl:leading-[43.65px] text-[#333333]">
        How many people would be in the studio
        </h1>
        <PeopleCount 
        counts={peopleCounts} 
        selectedCount={selectedPeopleCount}
        onCountSelect={setSelectedPeopleCount}
        />
    </section>
  )
}

export default NumberOfPeople