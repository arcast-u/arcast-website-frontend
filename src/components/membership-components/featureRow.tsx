import { Check, Minus } from 'lucide-react';
interface FeatureRowProps {
    label: string;
    values: (string | boolean)[];
  }
  
  const FeatureRow = ({ label, values }: FeatureRowProps) => {
    return (
      <div className="flex items-center justify-between w-full">
        <div className="text-lg text-black">{label}</div>
        <div className="flex gap-5 justify-end flex-1">
          {values.map((value, index) => (
            <div key={index} className="w-[33%] text-xl text-center text-black">
              {typeof value === 'boolean' ? (
                value ? <Check /> : <Minus/>
              ) : (
                value
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeatureRow;
  