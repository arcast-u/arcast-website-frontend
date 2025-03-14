import React from 'react';
import { TeamRow } from './teamRow';

export const ProductionPartners = () => {
  const teamMembers = [
    [
      {
        imageSrc: '/images/partner1.png',
        title: 'Executive Producer',
        description:
          'Oversees the entire production for a flawless experience.',
      },
      {
        imageSrc: '/images/partner2.png',
        title: 'Live Editor',
        description: 'Handles real-time edits for a polished final product.',
      },
    ],
    [
      {
        imageSrc: '/images/partner3.png',
        title: 'Audio Engineer',
        description: 'Ensures pristine sound quality and mixing.',
      },
      {
        imageSrc: '/images/partner4.png',
        title: 'Video Director',
        description: 'Manages camera angles, lighting, and visuals.',
      },
    ],
    [
      {
        imageSrc: '/images/partner5.png',
        title: 'Studio Technician',
        description: 'Sets up and maintains all equipment.',
      },
      {
        imageSrc: '/images/partner6.png',
        title: 'Production Assistant',
        description: 'Handles logistics and supports the team.',
      },
    ],
  ];

  return (
    <section
      className='flex overflow-hidden items-start py-10 3xl:pt-20 bg-zinc-50'
      aria-labelledby='production-partners-title'
    >
      <div className='max-w-[1728px] overflow-hidden mx-auto px-[21px] md:px-10 3xl:px-[100px]'>
        <div className='flex flex-wrap lg:flex-nowrap gap-10 w-full justify-between'>
          <header className='flex lg:w-[35%] flex-col text-[#333333] font-hankenGrotesk w-full'>
            <h2
              id='production-partners-title'
              className='text-[32px] leading-[41.7px] 3xl:text-5xl 3xl:leading-[62.54px] font-medium max-md:text-4xl'
            >
              Meet Your Production Partners
            </h2>
            <p className='mt-4 text-xl font-nunitoSans 3xl:text-[28px] leading-[27.28px] 3xl:leading-[38.19px] font-normal'>
              Our experienced team ensures your recording{' '}
              <span style={{ color: 'rgba(97,155,138,1)' }}>
                runs flawlessly
              </span>
              . Focus on your conversation, we&apos;ll handle the rest.
            </p>
          </header>
          <div className='grid gap-y-10 lg:gap-y-16 3xl:gap-y-24 w-full h-full lg:w-[50%]'>
            {teamMembers.map((members, index) => (
              <TeamRow key={index} members={members} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
