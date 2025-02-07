interface PackageFeature {
    text: string;
  }
  
  interface RecordingPackageCardProps {
    count: number
    title: string;
    price: string;
    originalPrice: string;
    features: PackageFeature[];
    variant?: 'light' | 'dark';
    selectedPackage: number;
    onSelect: (count: number) => void;
  }
 
  
  export const RecordingPackageCard = ({
    title,
    originalPrice,
    price,
    features,
    variant = 'light',
    count,
    selectedPackage,
    onSelect
  }: RecordingPackageCardProps) => {
    const isDark = variant === 'dark';
    
    return (
      <section 
        className={`px-5 py-4 cursor-none w-full rounded-xl lg:p-6 shadow-[0px_202px_56px_rgba(84,84,84,0)] ${
          count === selectedPackage ? "border-[0.5px] border-[#5081FF] border-solid" : ""
          } ${
          isDark ? 'bg-black' : 'bg-zinc-100'
        }`}
        aria-labelledby={`package-title-${title}`}
        onClick={() => onSelect(count)}
        tabIndex={0}
        role='button'
      >
        <div className="w-full">
          <h3 
            id={`package-title-${title}`}
            className={`w-full font-normal text-base lg:text-lg lg:leading-[25.82px] 3xl:text-xl leading-[21.82px] 3xl:leading-[27.28px] ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}
          >
            {title}
          </h3>
          <div className="flex flex-col justify-center mt-3 w-full font-semibold ">
            <del className="text-xs leading-[16.37px] text-red-500">{originalPrice}</del>
            <p className={`text-2xl leading-[32.74px] 3xl:leading-[43.65px] ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}>
              {price}
            </p>
          </div>
        </div>
        <div className={`mt-9 w-full text-xs leading-[16.37px] lg-leading-[21.82px] font-medium ${isDark ? 'text-stone-300' : 'text-zinc-600'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 shrink gap-2.5 self-stretch px-4 py-2.5 ${
                index > 0 ? 'mt-3' : ''
              } w-full rounded-lg border border-solid ${
                isDark ? 'border-zinc-600' : 'border-neutral-400'
              } `}
              role="listitem"
            >
              {feature.text}
            </div>
          ))}
        </div>
      </section>
    );
  };