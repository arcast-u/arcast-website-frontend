import React from 'react';

interface TimelineProps {
  maxSteps?: number;
}

// ... existing code ...
export const Timeline = ({ maxSteps = 3 }: TimelineProps) => {
  return (
    <nav className="flex flex-col items-center mt-2 text-base font-medium text-[#FCFCFC] font-mullish whitespace-nowrap md:order-2 order-1" aria-label="Pricing timeline">
      <ol className="list-none p-0 m-0">
        {[...Array(maxSteps)].map((_, index) => {
          const num = index + 1;
          const isLastStep = num === maxSteps;
          return (
            <li key={num} className={`mb-4 ${isLastStep ? 'h-0' : ''}`}>
              <div 
                className={`px-2 w-6 border h-6 rounded-xl ${
                  isLastStep ? 'hidden' : 'bg-[#333333]'
                } min-h-[24px] flex items-center justify-center`} 
                aria-label={`Step ${num}`}
              >
                {!isLastStep && num}
              </div>
              {num < maxSteps && (
                <div className="mt-4 w-[0.8px] border border-solid border-[#B3B3B3] mx-auto min-h-[400px]" role="presentation" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
      <div className="flex mt-4 w-2 h-2 rounded-xl bg-zinc-800 min-h-[8px]" aria-hidden="true" />
    </nav>
  );
};