import * as React from "react";

interface TabItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ label, isActive, onClick }) => (
  <div 
    className={`flex-1 w-fit shrink gap-2.5 self-stretch px-4 text-center py-1.5 3xl:px-6 3xl:py-3 my-auto font-mulish rounded-2xl max-md:px-5 ${isActive ? "bg-white rounded-lg border-[1.5px] border-white border-solid bg-gradient-to-b from-[#F3F3F3] to-[#F3F3F300] shadow-[0px_3px_7px_rgba(57,57,57,0.1)] font-semibold text-[#333333]" : "bg-neutral-100 text-[#989898] font-medium"}`} 
    role="button" 
    onClick={onClick} 
    tabIndex={0}>
    {label}
  </div>
);

export default TabItem;