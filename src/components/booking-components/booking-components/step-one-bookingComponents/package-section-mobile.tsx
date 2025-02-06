import React from 'react';
import EquipmentSection from './recording-EquipmentList';
import RecordingPackageSelection from './recording-packageList';

function PackageSectionMobile() {
  return (
    <div className='3xl:mt-12 mt-8 lg:mt-10 pb-10 md:hidden'>
        <p className='header-text'>Select your recording package</p>
        <EquipmentSection />
        <RecordingPackageSelection/>
    </div>
  )
}

export default PackageSectionMobile