import * as React from "react";

export type ReservationSummaryProps = {
  packageName: string;
  price: string;
  onContinue: () => void;
};

const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  packageName,
  price,
  onContinue
}) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center self-center mt-6">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-12 min-w-[240px]">
        <div className="text-base text-neutral-400">
          {packageName}
        </div>
        <div className="mt-2 text-2xl font-semibold text-zinc-800">
          {price}
        </div>
      </div>
      <button
        onClick={onContinue}
        className="overflow-hidden flex-1 shrink gap-2.5 self-stretch px-6 py-4 my-auto text-base font-medium whitespace-nowrap bg-orange-400 rounded-lg min-w-[240px] shadow-[0px_4px_4px_rgba(0,10,31,0.2)] text-zinc-50 max-md:px-5"
      >
        Continue
      </button>
    </div>
  );
};

export default ReservationSummary;