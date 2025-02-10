import React from 'react';
import { TeamMember } from './teamMember';

interface TeamRowProps {
  members: Array<{
    imageSrc: string;
    title: string;
    description: string;
  }>;
}

export const TeamRow = ({ members }: TeamRowProps) => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-10 lg:gap-y-16 3xl:gap-x-20 3xl:gap-y-24">
      {members.map((member, index) => (
        <div key={index} className={``}>
          <TeamMember {...member} />
        </div>
      ))}
    </div>
  );
};