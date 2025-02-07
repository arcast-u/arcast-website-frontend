
import React from "react";
import TabItem from "./navigation-tabItem";

type TabProps = {
  tabs: string[];
  currentStep: number;
  setActiveIndex: (index: number) => void; 
}

const TabList= ({tabs, currentStep, setActiveIndex}: TabProps) => {

  return (
    <div className="flex mx-auto justify-between items-center self-center p-0.5 max-w-full text-base font-medium leading-none rounded-lg bg-neutral-100 text-neutral-400 mdLg:max-w-[330px] 3xl:max-w-[417px]">
      {tabs.map((tab, idx) => (
        <TabItem key={idx} label={tab} isActive={idx === currentStep} onClick={() => setActiveIndex(idx)} />
      ))}
    </div>
  );
};

export default TabList;