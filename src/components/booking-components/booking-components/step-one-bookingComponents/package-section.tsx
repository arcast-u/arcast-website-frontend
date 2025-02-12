import React from 'react';
import RecordingPackageSelection from './recording-packageList';
import { PackageProps } from '@/lib/types';

interface PackageListProps{
  packages:PackageProps[] | null,
  selectedPackageIndex:number,
  setSelectedPackageIndex:(count:number)=>void
}

function PackageSection({selectedPackageIndex,setSelectedPackageIndex, packages}: PackageListProps) {
  return (
    <div className=' mt-8 md:w-[90%] mx-auto lg:w-full lg:mt-10 pb-10'>
        <RecordingPackageSelection selectedPackageIndex={selectedPackageIndex} setSelectedPackageIndex={setSelectedPackageIndex} packages={packages}/>
    </div>
  )
}

export default PackageSection;