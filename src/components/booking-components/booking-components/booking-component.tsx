'use client'
import React, { useState, useCallback } from "react";
import TabList from "./navigation-tabList";
import StudioCardList from "./step-one-bookingComponents/studio-cardList";
import TotalCost from "./total-cost";
import NumberOfPeople from "./step-two-booking-components/number-of-people";
import DateSelector from "./step-two-booking-components/date-selector";
import SelectTime from "./step-two-booking-components/select-time";
import SelectDuration from "./step-two-booking-components/select-duration";
// import CustomServices from "./step-two-booking-components/custom-services";
import FormSection from "./step-three-booking-components/form-section";
import BookingSummary from "./step-three-booking-components/booking-summary";
import PackageSection from "./step-one-bookingComponents/package-section";

const packages = [
  {
    title: "Recording (Video + Audio)",
    originalPrice: "990 AED",
    price: "950 AED/hour",
    features: [
      { text: 'Organized raw video files' },
      { text: 'Multicam recording files' },
      { text: 'High-quality audio files' },
      { text: 'Basic file organization' },
      { text: 'Same-day delivery' }
    ]
  },
  {
    title: "Recording + Professional Edit",
    originalPrice: "990 AED",
    price: "950 AED/hour",
    features: [
      { text: 'Complete episode edit' },
      { text: 'Filler word removal' },
      { text: 'Audio clarity enhancement' },
      { text: 'Background noise reduction' },
      { text: 'Multi-guest audio sync' },
      { text: '3 revision rounds' },
      { text: 'Intro/outro integration' },
      { text: 'Custom graphics' },
      { text: 'Delivered within 3 days' }
    ]
  },
]

const StudioBooking= () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  const selectedPackage = packages[selectedPackageIndex];

  const tabs = ["Step 1", "Step 2", "Step 3"];

  const handleContinue = useCallback(() => {
    if (currentStep < tabs.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, tabs.length]);

  const isStepOne = currentStep === 0;
  const isStepTwo = currentStep === 1;
  const isStepThree = currentStep === 2;

  return (
    <main className="relative border mx-auto lg:mx-0">
      <div className="flex flex-col w-full lg:h-screen bg-[#FCFCFC]">
        <div className="flex-1 overflow-y-auto lg:pb-24">
          <div className=" relative mx-auto px-6 pt-11 3xl:px-8 3xl:pt-8">
            <TabList tabs={tabs} currentStep={currentStep} setActiveIndex={setCurrentStep}/>
            {isStepOne && <div className="">
              <StudioCardList/>
              <PackageSection
                selectedPackageIndex={selectedPackageIndex} 
                setSelectedPackageIndex={setSelectedPackageIndex} />
            </div>}
            {isStepTwo &&<div className="pb-48">
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
      <div className="px-3 xl:pl-3 xl:pr-7 3xl:px-5 sticky bottom-[14px] lg:bottom-4 w-full">
      <TotalCost 
        description={isStepOne || isStepTwo ? selectedPackage.title : ''} 
        total={isStepOne || isStepTwo ? selectedPackage.price : ''}
        buttonText={isStepOne || isStepTwo ? 'Continue' : 'Continue'}
        onContinue={handleContinue}
      />
      </div>
    </main>
  );
};

export default StudioBooking;