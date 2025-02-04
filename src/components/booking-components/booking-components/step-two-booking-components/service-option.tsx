import * as React from "react";

export type ServiceOptionProps = {
  name: string;
  price: string;
  description: string;
  imgSrc: string;
  selected: boolean;
  imgAlt: string;
  onSelect: () => void;
};

const ServiceOption: React.FC<ServiceOptionProps> = ({
  name,
  price,
  description,
  imgSrc,
  selected,
  imgAlt,
  onSelect
}) => {
  return (
    <article 
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className="flex flex-col justify-center px-6 py-5 mt-5w-full mb-5 rounded-xl bg-neutral-100 max-md:px-5"
      aria-pressed={selected}
    >
      <header className="flex flex-wrap justify-between items-center w-full text-xl text-zinc-800">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
          <h3 className="max-md:max-w-full">{name}</h3>
          <div className="mt-2 font-semibold">{price}</div>
        </div>
        <div 
          role="checkbox"
          aria-checked={selected}
          className={`flex shrink-0 gap-2.5 self-stretch my-auto w-4 h-4 rounded-xl border border-solid ${
            selected ? 'border-zinc-800' : 'border-neutral-400 border-opacity-50'
          }`} 
        />
      </header>
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="object-contain mt-4 w-full rounded-lg aspect-[1.86]" />
      <p className="mt-4 text-base font-medium text-neutral-400">{description}</p>
    </article>
  );
};

export default ServiceOption;