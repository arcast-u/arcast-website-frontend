import React from 'react';
import { TeamMember } from './teamMember';

interface TeamRowProps {
  members: Array<{
    imageSrc: string;
    title: string;
    description: string;
    name: string;
    experience?: string;
  }>;
}

export const TeamRow = ({ members }: TeamRowProps) => {
  return (
    <div className="w-full mx-auto lg:mx-0 grid grid-cols-2 grid-row gap-6 gap-y-10 lg:gap-x-10 lg:gap-y-16 3xl:gap-x-20 3xl:gap-y-24">
      {members.map((member, index) => (
        <div key={index} className={``}>
          <TeamMember {...member} />
        </div>
      ))}
    </div>
  );
};