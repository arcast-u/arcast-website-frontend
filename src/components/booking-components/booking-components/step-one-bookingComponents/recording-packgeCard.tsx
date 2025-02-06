interface PackageFeature {
    text: string;
  }
  
  interface RecordingPackageCardProps {
    title: string;
    price: string;
    pricePerHour: string;
    features: PackageFeature[];
    variant?: 'light' | 'dark';
  }
  
  export const RecordingPackageCard = ({
    title,
    price,
    pricePerHour,
    features,
    variant = 'light'
  }: RecordingPackageCardProps) => {
    const isDark = variant === 'dark';
    
    return (
      <section 
        className={`px-5 py-4 w-full rounded-xl min-h-[377px] shadow-[0px_202px_56px_rgba(84,84,84,0)] ${
          isDark ? 'bg-black' : 'bg-zinc-100'
        }`}
        aria-labelledby={`package-title-${title}`}
      >
        <div className="w-full">
          <h3 
            id={`package-title-${title}`}
            className={`w-full text-base ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}
          >
            {title}
          </h3>
          <div className="flex flex-col justify-center mt-3 max-w-full font-semibold w-[157px]">
            <p className="text-xs text-red-500">{price}</p>
            <p className={`text-2xl ${isDark ? 'text-zinc-50' : 'text-zinc-800'}`}>
              {pricePerHour}
            </p>
          </div>
        </div>
        <div className={`mt-9 w-full text-xs font-medium ${isDark ? 'text-stone-300' : 'text-zinc-600'}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 shrink gap-2.5 self-stretch px-4 py-2.5 ${
                index > 0 ? 'mt-3' : ''
              } max-w-full rounded-lg border border-solid ${
                isDark ? 'border-zinc-600' : 'border-neutral-400'
              } w-[295px]`}
              role="listitem"
            >
              {feature.text}
            </div>
          ))}
        </div>
      </section>
    );
  };