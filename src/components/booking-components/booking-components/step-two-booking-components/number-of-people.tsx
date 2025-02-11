'use client'
import React from 'react'
import PeopleCount from './people-count'

interface NumberOfPeopleProps {
  seats?: number;
  selectedPeopleCount?: number;
  setSelectedPeopleCount?: (count: number) => void;
}

function NumberOfPeople({seats = 1, selectedPeopleCount = 1, setSelectedPeopleCount}: NumberOfPeopleProps) {
    const peopleCounts = Array.from({ length: seats }, (_, i) => i + 1);
  return (
    <section className="flex font-nunitoSans flex-col md:w-[90%] mx-auto lg:w-full 3xl:mt-12 w-full mt-8 lg:mt-10">
        <h1 className="header-text">
        How many are recording?
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