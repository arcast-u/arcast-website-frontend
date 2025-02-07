import React from 'react';
import EquipmentSection from './recording-EquipmentList';
import RecordingPackageSelection from './recording-packageList';

interface PackageProps{
  selectedPackageIndex:number,
  setSelectedPackageIndex:(count:number)=>void
}

function PackageSection({selectedPackageIndex,setSelectedPackageIndex}: PackageProps) {
  return (
    <div className='3xl:mt-12 mt-8 lg:mt-10 pb-10'>
        <p className='header-text'>Select your recording package</p>
        <EquipmentSection />
        <RecordingPackageSelection selectedPackageIndex={selectedPackageIndex} setSelectedPackageIndex={setSelectedPackageIndex}/>
    </div>
  )
}

export default PackageSection;