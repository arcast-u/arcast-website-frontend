'use client';
import React from 'react';
import StudioCard from './studio-card';
import { StudioProps } from '@/lib/types';

interface StudioListProps {
  selectedStudioIndex: number;
  studios: StudioProps[] | null;
  setSelectedStudioIndex: (count: number) => void;
  loading: boolean;
}
const StudioCardList = ({
  studios,
  selectedStudioIndex,
  setSelectedStudioIndex,
  loading,
}: StudioListProps) => {
  const sortedStudios = studios?.sort((a, b) => {
    // Always put Mobile Studio Service first
    if (a.name === 'Mobile Setup Service') return -1;
    if (b.name === 'Mobile Setup Service') return 1;

    // Extract numbers from setup names
    const aNumber = a.name.match(/\d+/);
    const bNumber = b.name.match(/\d+/);

    if (!aNumber || !bNumber) return 0;
    return parseInt(aNumber[0]) - parseInt(bNumber[0]);
  });

  return (
    <section className='mt-8 lg:mt-10 md:w-[90%] mx-auto lg:w-full '>
      <h2 className='header-text'>Pick your perfect setup</h2>
      <div className='mt-3 3xl:mt-5 grid grid-cols-2 gap-4'>
        {loading || sortedStudios?.length === 0
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className=' bg-[#F5F5F7] animate-pulse rounded-xl w-[100%] h-[234px] xl:w-[236px] xl:h-[234px] '
              />
            ))
          : sortedStudios?.map((studio, index) => (
              <StudioCard
                key={studio.id}
                count={index}
                selectedStudio={selectedStudioIndex}
                setSelectedStudio={setSelectedStudioIndex}
                {...studio}
              />
            ))}
      </div>
    </section>
  );
};

export default StudioCardList;
