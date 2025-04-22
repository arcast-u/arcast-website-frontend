import React from 'react';
import SelectDuration from './select-duration';
import { useDuration } from '@/contex/durationContext';
import { AdditionalServiceType } from '@/lib/types';

export type ServiceOptionProps = {
  count: number;
  selected: boolean;
  onSelect: () => void;
  groupName: string;
  duration: number;
  setDuration: (value: number) => void;
  services: AdditionalServiceType;
};

const ServiceOption = ({
  count,
  selected,
  onSelect,
  groupName,
  services,
}: ServiceOptionProps) => {
  const { durations, setDuration } = useDuration();
  const duration = durations[services.title] || 1;

  return (
    <article
      role='button'
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className='flex flex-col justify-center px-5 3xl:px-6 py-4 3xl:py-5 shadow-xl shadow-[#80808050] mt-5w-full mb-5 rounded-xl bg-[#F5F5F7] '
      aria-pressed={selected}
    >
      <header className='flex flex-wrap justify-between font-nunitoSans items-center w-full text-lg leading-[26px] 3xl:text-xl 3xl:leading-[27.28px] text-[#333333]'>
        <div className='flex flex-col flex-1 shrink self-stretch my-auto basis-0'>
          <h3 className='font-normal'>{services.title}</h3>
          <div className='mt-0.5 3xl:mt-2 font-semibold'>{services.price}</div>
        </div>
        <input
          type='checkbox'
          name={`${groupName}-${count}`}
          aria-checked={selected}
          checked={selected}
          onChange={onSelect}
          className={`flex shrink-0 gap-2.5 self-stretch accent-[#333333] my-auto w-4 h-4 rounded-xl border border-solid`}
        />
      </header>
      {count < 2 && (
        <div className='w-full'>
          <SelectDuration
            hasBorder={true}
            duration={duration}
            setDuration={(value) => setDuration(services.title, value)}
            hasHeader={false}
          />
        </div>
      )}
      {/* <video muted autoPlay controls={false} poster={imgSrc}onMouseEnter={(e) => e.currentTarget.play()}
  onMouseLeave={(e) => e.currentTarget.pause()} src="/video/video.mp4" className="object-contain mt-4 w-full rounded-lg aspect-[1.86]" /> */}
      {/* {count === 0 ? (
        <div className='grid grid-cols-3 w-full gap-2 mt-4'>
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[0]}
            className='rounded-[7.46px] object-fit'
          />
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[1]}
            className='rounded-[7.46px] object-fit '
          />
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services.imageUrls[2]}
            className='rounded-[7.46px] object-fit'
          />
        </div>
      ) : count === 1 ? (
        <div className='grid grid-cols-3 w-full  gap-2 mt-4'>
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[0]}
            className='rounded-[7.46px] object-fit'
          />
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[1]}
            className='rounded-[7.46px] object-fit '
          />
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[2]}
            className='rounded-[7.46px] object-fit'
          />
        </div>
      ) : (
        <div className='w-full '>
          <video
            src='/video/video.mp4'
            preload='none'
            playsInline
            muted
            poster={services?.imageUrls[0] ?? '/images/custom3.png'}
            className='  w-full mt-4 object-fit rounded-lg '
          />
        </div>
      )} */}
      <div className='w-full '>
        <video
          src='/video/video.mp4'
          preload='none'
          playsInline
          muted
          poster={services?.imageUrls[0] ?? '/images/custom3.png'}
          className='  w-full h-[280px] mt-4 object-cover rounded-lg '
        />
      </div>
      <p className='mt-4 text-sm leading-[17.28px] 3xl:leading-[21.28px] font-nunitoSans 3xl:text-base font-medium text-[#989898]'>
        {services.description}
      </p>
    </article>
  );
};

export default ServiceOption;
