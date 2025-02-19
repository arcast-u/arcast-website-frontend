interface PricingCardProps {
    name: string;
    price: string;
  }
  
  const PricingCard = ({ name, price }: PricingCardProps) => {
    return (
      <article className="flex flex-col w-full max-md:mt-10">
        <div className="flex flex-col justify-center self-center max-w-full w-[136px]">
          <h3 className="text-base text-center text-black">
            {name}
          </h3>
          <p className="mt-2 text-2xl font-medium text-black">
            {price}
          </p>
        </div>
        <button
          className="overflow-hidden gap-2.5 self-stretch px-5 py-3 mt-7 text-sm font-medium text-black bg-orange-400 rounded-lg shadow-[0px_4px_4px_rgba(0,10,31,0.2)]"
          aria-label={`Become a ${name} member`}
        >
          Become a member
        </button>
      </article>
    );
  };
  
  export default PricingCard;
  