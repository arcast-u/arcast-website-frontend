'use client'
import React, { useState, useCallback } from "react";
import TabList from "./navigation-tabList";
import StudioCardList from "./step-one-bookingComponents/studio-cardList";
import PackageCardList from "./step-one-bookingComponents/package-cardList";
import TotalCost from "./total-cost";
import NumberOfPeople from "./step-two-booking-components/number-of-people";
import DateSelector from "./step-two-booking-components/date-selector";
import SelectTime from "./step-two-booking-components/select-time";
import SelectDuration from "./step-two-booking-components/select-duration";
// import CustomServices from "./step-two-booking-components/custom-services";
import FormSection from "./step-three-booking-components/form-section";
import BookingSummary from "./step-three-booking-components/booking-summary";
import PackageSectionMobile from "./step-one-bookingComponents/package-section-mobile";


const StudioBooking= () => {
  const [currentStep, setCurrentStep] = useState(0);

  const tabs = ["Step 1", "Step 2", "Step 3"];

  const handleContinue = useCallback(() => {
    if (currentStep < tabs.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const isStepOne = currentStep === 0;
  const isStepTwo = currentStep === 1;
  const isStepThree = currentStep === 2;

  return (
    <main className="relative">
      <div className="flex flex-col w-full lg:h-screen lg:w-[35.7vw] bg-[#FCFCFC]">
        <div className="flex-1 overflow-y-auto lg:pb-24">
          <div className=" relative mx-auto px-6 pt-11 3xl:px-8 3xl:pt-8">
            <TabList tabs={tabs} currentStep={currentStep} setActiveIndex={setCurrentStep}/>
            {isStepOne && <div>
              <StudioCardList/>
              <PackageCardList/>
              <PackageSectionMobile/>
            </div>}
            {isStepTwo &&<div className="pb-44">
              <NumberOfPeople/>
              <SelectDuration hasBorder={false} hasHeader={true}/>
              <DateSelector/>
              <SelectTime/>
              {/* <CustomServices/> */}
              </div>
            }
            {isStepThree &&
            <div>
              <FormSection/>
              <BookingSummary/>
            </div>
            }
            
          </div>
        </div> 
      </div>
      <div className="px-3 xl:pl-3 xl:pr-7 3xl:px-5 sticky bottom-4 w-full">
      <TotalCost 
        description={isStepOne || isStepTwo ? "Studio + Recording package" : ''} 
        total={isStepOne || isStepTwo ? "950 AED" : ''}
        onContinue={handleContinue}
      />
      </div>
    </main>
  );
};

export default StudioBooking;