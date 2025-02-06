import { RecordingPackageCard } from './recording-packgeCard';


const basicFeatures = [
  { text: 'Organized raw video files' },
  { text: 'Multicam recording files' },
  { text: 'High-quality audio files' },
  { text: 'Basic file organization' },
  { text: 'Same-day delivery' }
];

const proFeatures = [
  { text: 'Complete episode edit' },
  { text: 'Filler word removal' },
  { text: 'Audio clarity enhancement' },
  { text: 'Background noise reduction' },
  { text: 'Multi-guest audio sync' },
  { text: '3 revision rounds' },
  { text: 'Intro/outro integration' },
  { text: 'Custom graphics' },
  { text: 'Delivered within 3 days' }
];

export const RecordingPackageSelection = () => {
  return (
    <main className="mx-auto w-full mt-10 max-w-[480px]">
      <h1 className="text-2xl font-medium text-zinc-800">
        Select your recording package
      </h1>
      <div className="flex flex-col gap-5 justify-center mt-4 w-full">
        <RecordingPackageCard
          title="Recording + Professional Edit"
          price="990 AED"
          pricePerHour="950 AED/hour"
          features={basicFeatures}
          variant="light"
        />
        <RecordingPackageCard
          title="Recording + Professional Edit"
          price="990 AED"
          pricePerHour="950 AED/hour"
          features={proFeatures}
          variant="dark"
        />
      </div>
    </main>
  );
};

export default RecordingPackageSelection;