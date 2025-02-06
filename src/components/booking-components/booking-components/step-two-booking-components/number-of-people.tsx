'use client'
import React, {useState} from 'react'
import PeopleCount from './people-count'

function NumberOfPeople() {
    const [selectedPeopleCount, setSelectedPeopleCount] = useState(3);
    const peopleCounts = [1, 2, 3, 4];
  return (
    <section className="flex font-nunitoSans flex-col 3xl:mt-12 w-full mt-8 lg:mt-10">
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