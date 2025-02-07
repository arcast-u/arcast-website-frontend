'use client'
import { RecordingPackageCard } from './recording-packgeCard';

interface props{
  selectedPackageIndex: number;
  setSelectedPackageIndex: (count: number) => void
}

const packages = [
  {
    title: "Recording (Video + Audio)",
    originalPrice: "990 AED",
    price: "950 AED/hour",
    features: [
      { text: 'Organized raw video files' },
      { text: 'Multicam recording files' },
      { text: 'High-quality audio files' },
      { text: 'Basic file organization' },
      { text: 'Same-day delivery' }
    ]
  },
  {
    title: "Recording + Professional Edit",
    originalPrice: "990 AED",
    price: "950 AED/hour",
    features: [
      { text: 'Complete episode edit' },
      { text: 'Filler word removal' },
      { text: 'Audio clarity enhancement' },
      { text: 'Background noise reduction' },
      { text: 'Multi-guest audio sync' },
      { text: '3 revision rounds' },
      { text: 'Intro/outro integration' },
      { text: 'Custom graphics' },
      { text: 'Delivered within 3 days' }
    ]
  },
]

export const RecordingPackageSelection = ({selectedPackageIndex, setSelectedPackageIndex}: props) => {

  return (
    <main className="mx-auto w-full mt-10 ">
      <h1 className="text-2xl font-medium text-zinc-800">
        Select your recording package
      </h1>
      <div className="flex flex-col gap-5 justify-center mt-4 w-full">
      {packages.map((packageItem, index) => (
        <div key={index}>
        <RecordingPackageCard {...packageItem} {...packageItem} count={index} selectedPackage={selectedPackageIndex} onSelect={setSelectedPackageIndex} variant={index === 0 ? "light" : "dark"}  />
        </div>
      ))}
        
      </div>
    </main>
  );
};

export default RecordingPackageSelection;