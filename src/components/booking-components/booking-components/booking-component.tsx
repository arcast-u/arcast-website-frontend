'use client'
import React, { useState, useCallback } from "react";
import TabList from "./navigation-tabList";
import StudioCardList from "./step-one-bookingComponents/studio-cardList";
import PackageCardList from "./step-one-bookingComponents/packge-cardList";
import TotalCost from "./total-cost";
import NumberOfPeople from "./step-two-booking-components/number-of-people";
import DateSelector from "./step-two-booking-components/date-selector";
import SelectTime from "./step-two-booking-components/select-time";
import SelectDuration from "./step-two-booking-components/select-duration";
import CustomServices from "./step-two-booking-components/custom-services";


const StudioBooking= () => {
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [isStepThree, setIsStepThree] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const tabs = ["Step 1", "Step 2", "Step 3"];

  const handleContinue = useCallback(() => {
    if (currentStep < tabs.length) {
      setCurrentStep(prev => prev + 1);
    }
    setIsStepOne(false);
    setIsStepTwo(true)
  }, []);

  return (
    <main className="flex flex-col relative h-screen w-[35.7vw] bg-zinc-50">
      <div className="flex-1 overflow-y-auto pb-24">
        <div className=" relative mx-auto px-6 pt-6 3xl:px-8 3xl:pt-8">
          <TabList tabs={tabs} currentStep={currentStep} setActiveIndex={setCurrentStep}/>
          {isStepOne && <div>
            <StudioCardList/>
            <PackageCardList/>
          </div>}
          {isStepTwo &&<div>
            <NumberOfPeople/>
            <DateSelector/>
            <SelectTime/>
            <SelectDuration/>
            <CustomServices/>
            </div>
          }
          {isStepThree &&<div></div>}
          <TotalCost 
            description="Studio + Recording package" 
            total="950 AED"
            onContinue={handleContinue}
          />
        </div>
      </div> 
    </main>
  );
};

export default StudioBooking;