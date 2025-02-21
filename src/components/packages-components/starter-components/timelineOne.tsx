// import React from 'react';

// interface TimelineProps {
//   maxSteps?: number;
// }


// export const Timeline = ({ maxSteps = 3 }: TimelineProps) => {
//   return (
//     <nav className="flex flex-col items-center mt-2 text-base font-medium text-[#FCFCFC] font-mullish whitespace-nowrap md:order-2 order-1" aria-label="Pricing timeline">
//       <ol className="list-none p-0 m-0">
//         {[...Array(maxSteps)].map((_, index) => {
//           const num = index + 1;
//           const isLastStep = num === maxSteps;
//           return (
//             <li key={num} className={`mb-4 ${isLastStep ? 'h-0' : ''}`}>
//               <div 
//                 className={`px-2 w-6 border h-6 rounded-xl ${
//                   isLastStep ? 'hidden' : 'bg-[#333333]'
//                 } min-h-[24px] flex items-center justify-center`} 
//                 aria-label={`Step ${num}`}
//               >
//                 {!isLastStep && num}
//               </div>
//               {num < maxSteps && (
//                 <div className="mt-4 w-[0.8px] border border-solid border-[#B3B3B3] mx-auto h-[250px] md:min-h-[400px]" role="presentation" aria-hidden="true" />
//               )}
//             </li>
//           );
//         })}
//       </ol>
//       <div className="flex mt-4 w-2 h-2 rounded-xl bg-zinc-800 min-h-[8px]" aria-hidden="true" />
//     </nav>
//   );
// };

'use client'
import React, { useEffect, useRef, useState } from 'react';

interface TimelineProps {
  maxSteps: number;
}

export const Timeline = ({ maxSteps}: TimelineProps) => {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState<number[]>(new Array(maxSteps - 1).fill(0));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Create thresholds from 0 to 1
    };

    const observers = lineRefs.current.map((lineRef, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Calculate progress based on intersection ratio
          const newProgress = entry.intersectionRatio;
          setProgress(prev => {
            const updated = [...prev];
            updated[index] = newProgress;
            return updated;
          });
        });
      }, options);

      if (lineRef) {
        observer.observe(lineRef);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [maxSteps]);

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
                <div 
                  ref={(el) => {
                    if (lineRefs.current) {
                      lineRefs.current[index] = el;
                    }
                  }}
                  className="mt-4 w-[0.8px] border border-solid mx-auto h-[250px] md:min-h-[400px]" 
                  style={{
                    borderColor: `rgba(179, 179, 179, ${1 - progress[index]})`,
                    backgroundColor: `rgba(0, 0, 0, ${progress[index]})`
                  }}
                  role="presentation" 
                  aria-hidden="true" 
                />
              )}
            </li>
          );
        })}
      </ol>
      <div className="flex mt-4 w-2 h-2 rounded-xl bg-zinc-800 min-h-[8px]" aria-hidden="true" />
    </nav>
  );
};