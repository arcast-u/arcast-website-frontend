import React from 'react';

export const Timeline = () => {
  return (
    <nav className="flex flex-col items-center mt-2 text-base font-medium text-black whitespace-nowrap md:order-2 order-1" aria-label="Pricing timeline">
      <ol className="list-none p-0 m-0">
        {[1, 2, 3].map((num) => (
          <li key={num} className="mb-4">
            <div className="px-2 w-6 border h-6 rounded-xl bg-zinc-800 min-h-[24px] flex items-center justify-center" aria-label={`Step ${num}`}>
              {num}
            </div>
            {num < 4 && <div className="mt-4 w-[0.8px] border border-solid border-[#B3B3B3] mx-auto min-h-[400px]" role="presentation" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="flex mt-4 w-2 h-2 rounded-xl bg-zinc-800 min-h-[8px]" aria-hidden="true" />
    </nav>
  );
};