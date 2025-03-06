'use client';
import { RecordingPackageCard } from './recording-packgeCard';
import { PackageProps } from '../../../../lib/types';

interface props {
  selectedPackageIndex: number;
  setSelectedPackageIndex: (count: number) => void;
  packages: PackageProps[] | null;
}

export const RecordingPackageSelection = ({
  selectedPackageIndex,
  setSelectedPackageIndex,
  packages,
}: props) => {
  const sortedPackages = packages?.sort((a, b) => {
    if (a.name === 'Recording + Professional Edit') return -1;
    if (b.name === 'Recording + Professional Edit') return 1;
    return 0;
  });

  return (
    <main className='mx-auto w-full mt-10 '>
      <h2 className='header-text text-zinc-800'>
        Select your recording package
      </h2>
      <div className='flex flex-col gap-5 justify-center mt-3 w-full'>
        {sortedPackages?.map((packageItem, index) => (
          <div key={packageItem.id}>
            <RecordingPackageCard
              features={packageItem.packagePerks || []}
              {...packageItem}
              count={index}
              selectedPackage={selectedPackageIndex}
              onSelect={setSelectedPackageIndex}
              variant={index === 0 ? 'dark' : 'light'}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default RecordingPackageSelection;
