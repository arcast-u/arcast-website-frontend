import * as React from "react";
import SelectDuration from "./select-duration";

export type ServiceOptionProps = {
  name: string;
  price: string;
  description: string;
  imgSrc: string;
  selected: boolean;
  imgAlt: string;
  onSelect: () => void;
  groupName: string;
};

const ServiceOption: React.FC<ServiceOptionProps> = ({
  name,
  price,
  description,
  imgSrc,
  selected,
  imgAlt,
  onSelect,
  groupName
}) => {
  return (
    <article 
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className="flex flex-col justify-center px-6 py-5 mt-5w-full mb-5 rounded-xl bg-[#F5F5F7] max-md:px-5"
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
          className={`flex shrink-0 gap-2.5 self-stretch my-auto w-4 h-4 rounded-xl border border-solid ${
            selected ? 'border-[#333333] fill-[#333333]' : 'border-neutral-400 border-opacity-50'
          }`} 
        />
      </header>
      {selected && <SelectDuration hasBorder={true} hasHeader={false}/>}
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="object-contain mt-4 w-full rounded-lg aspect-[1.86]" />
      <p className="mt-4 text-sm leading-[17.28px] 3xl:leading-[21.28px] font-nunitoSans 3xl:text-base font-medium text-[#989898]">{description}</p>
    </article>
  );
};

export default ServiceOption;