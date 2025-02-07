import * as React from "react";
import SelectDuration from "./select-duration";

export type ServiceOptionProps = {
  name: string;
  price: string;
  description: string;
  imgSrc: string;
  selected: boolean;
  onSelect: () => void;
  groupName: string;
};

const ServiceOption: React.FC<ServiceOptionProps> = ({
  name,
  price,
  description,
  imgSrc,
  selected,
  onSelect,
  groupName
}) => {
  return (
    <article 
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className="flex flex-col cursor-none justify-center px-5 3xl:px-6 py-4 3xl:py-5 mt-5w-full mb-5 rounded-xl bg-[#F5F5F7] "
      aria-pressed={selected}
    >
      <header className="flex flex-wrap justify-between font-nunitoSans items-center w-full text-lg leading-[26px] 3xl:text-xl 3xl:leading-[27.28px] text-[#333333]">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <h3 className="font-normal">{name}</h3>
          <div className="mt-0.5 3xl:mt-2 font-semibold">{price}</div>
        </div>
        <input 
          type="radio"
          name={groupName}
          aria-checked={selected}
          checked={selected}
          onChange={onSelect}
          className={`flex shrink-0 gap-2.5 self-stretch accent-[#333333] my-auto w-4 h-4 rounded-xl border border-solid`} 
        />
      </header>
      {selected && <SelectDuration hasBorder={true} hasHeader={false}/>}
      <video muted autoPlay controls={false} poster={imgSrc} src="/video/video.mp4" className="object-contain mt-4 w-full rounded-lg aspect-[1.86]" />
      <p className="mt-4 text-sm leading-[17.28px] 3xl:leading-[21.28px] font-nunitoSans 3xl:text-base font-medium text-[#989898]">{description}</p>
    </article>
  );
};

export default ServiceOption;