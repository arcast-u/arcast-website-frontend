'use client'
import React from "react";
import { usePathname } from "next/navigation";
import TabItem from "./navigation-tabItem";

type TabProps = {
  tabs: string[];
  currentStep: number;
  setActiveIndex: (index: number) => void; 
}

const TabList= ({tabs, currentStep, setActiveIndex}: TabProps) => {
  const pathname = usePathname();

  return (
    <div className={`flex mx-auto justify-between items-center self-center p-0.5  text-base font-medium leading-none rounded-lg bg-neutral-100 text-neutral-400  ${pathname === '/packages' ? "w-[40%]" : "max-w-full 3xl:max-w-[417px] md:max-w-[330px]"} `}>
      {tabs.map((tab, idx) => (
        <TabItem key={idx} label={tab} isActive={idx === currentStep} onClick={() => setActiveIndex(idx)} />
      ))}
    </div>
  );
};

export default TabList;