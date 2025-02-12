'use client'
import { RecordingPackageCard } from './recording-packgeCard';
import { PackageProps } from '../../../../lib/types';

interface props{
  selectedPackageIndex: number;
  setSelectedPackageIndex: (count: number) => void;
  packages: PackageProps[] | null;
}



export const RecordingPackageSelection = ({selectedPackageIndex, setSelectedPackageIndex, packages}: props) => {

  return (
    <main className="mx-auto w-full mt-10 ">
      <h1 className="text-2xl font-medium text-zinc-800">
        Select your recording package
      </h1>
      <div className="flex flex-col gap-5 justify-center mt-4 w-full">
      {packages?.map((packageItem, index) => (
        <div key={packageItem.id}>
        <RecordingPackageCard 
          features={packageItem.packagePerks || []} 
          {...packageItem}
          count={index}
          selectedPackage={selectedPackageIndex}
          onSelect={setSelectedPackageIndex} variant={index === 0 ? "dark" : "light"}  />
        </div>
      ))}
        
      </div>
    </main>
  );
};

export default RecordingPackageSelection;