'use client'
import React, { useState, useCallback, useEffect } from "react";
import TabList from "./navigation-tabList";
import StudioCardList from "./step-one-bookingComponents/studio-cardList";
import TotalCost from "./total-cost";
import NumberOfPeople from "./step-two-booking-components/number-of-people";
import DateSelector from "./step-two-booking-components/date-selector";
import SelectTime from './step-two-booking-components/select-time';
import SelectDuration from "./step-two-booking-components/select-duration";
// import CustomServices from "./step-two-booking-components/custom-services";
import BookingConfirmation from "./step-three-booking-components/bookingConfirmation";
import FormSection from "./step-three-booking-components/form-section";
import BookingSummary from "./step-three-booking-components/booking-summary";
import PackageSection from "./step-one-bookingComponents/package-section";
import { PackageProps, StudioProps, AvailabilityItemProps, TimeSlotListProps, BookingProps } from "@/lib/types";
import { toast } from "react-toastify";
import Image from "next/image";
import { DurationProvider } from "@/contex/durationContext";
import EquipmentSection from "./step-one-bookingComponents/recording-EquipmentList";




const StudioBooking= () => {
  const [isStorageLoaded, setIsStorageLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [studio, setStudio] = useState<StudioProps[] | null>(null);
  const [packages, setPackages] = useState<PackageProps[] | null>(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);
  const [selectedStudioIndex, setSelectedStudioIndex] = useState<number>(0);
  const [selectedPeopleCount, setSelectedPeopleCount] = useState<number>(1);
  const [date, setDate] = useState<Date | undefined>(new Date()); 
  const [dateData,setDateData] = useState<AvailabilityItemProps[] | null>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlotListProps[] | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:00");
  const [receipt, setReceipt] = useState<BookingProps | null>(null);
  const [duration, setDuration] = useState(1);
  const selectedPackage = packages?.[selectedPackageIndex] || null;
  const selectedStudio = studio?.[selectedStudioIndex] || null;
   const [checked, setChecked] = useState<boolean>(false);
   const [showWarning, setShowWarning] = useState<boolean>(false);
  const [form, setForm] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      countryCode: "+971",
      whatsappCountryCode: "+971",
      discountCode:"",
      recordingLocation: '',
    });

  const tabs = ["Step 1", "Step 2", "Step 3", "Step 4"];
  
 


  // get studios

  useEffect(() => {
    async function fetchStudios() {
        const apiUrl = `https://arcast-ai-backend.vercel.app/api/studios`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
              const errorMessage = {
                400: 'Bad Request - Please check your request parameters',
                401: 'Unauthorized - Please login to access this resource',
                403: 'Forbidden - You don\'t have permission to access this resource',
                404: 'Studios not found',
                500: 'Internal Server Error - Please try again later',
                502: 'Bad Gateway - Server is temporarily unavailable',
                503: 'Service Unavailable - Please try again later'
            }[response.status] || `Server Error (${response.status})`;
            
            toast.error(errorMessage);
            return;
            }

            const data = await response.json();
           
            setStudio(data);
            
        } catch (error: unknown) {
            
          if (error instanceof Error) { 
            toast.error(error.message);
          } else {
            toast.error("An unexpected error occurred");
          }
          return null;
        }
    }

    fetchStudios();
  }, []);
  
  
  useEffect(() => {
    if (studio && studio[selectedStudioIndex]) {
      setPackages(studio[selectedStudioIndex].packages || []);
      // setSelectedPackageIndex(0); 
    }
  }, [selectedStudioIndex, studio]);

  //  get studio availability
  useEffect(() => {
    if (!selectedStudio?.id || !date) return;

    const formattedDate = date.toISOString().split("T")[0]; 

    async function fetchDateTime(studioId: string) {
      const apiUrl = `https://arcast-ai-backend.vercel.app/api/studios/${studioId}/availability?date=${formattedDate}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorMessage = {
            400: 'Bad Request - Please check your request parameters',
            401: 'Unauthorized - Please login to access this resource',
            403: 'Forbidden - You don\'t have permission to access this resource',
            404: 'Studios not found',
            500: 'Internal Server Error - Please try again later',
            502: 'Bad Gateway - Server is temporarily unavailable',
            503: 'Service Unavailable - Please try again later'
        }[response.status] || `Server Error (${response.status})`;
        
        toast.error(errorMessage);
          return;
        }

        const data = await response.json();
        setDateData(data.availability);

        if (data.availability.length > 0) {
          const dayResponse = await fetch(`${apiUrl}&view=day`);
          if (!dayResponse.ok) {
            toast.error(`HTTP error! Status: ${dayResponse.status}`);
            return;
          }

          const dayData = await dayResponse.json();
          setTimeSlots(dayData.timeSlots);
          // console.log(dayData.timeSlots);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    }

    fetchDateTime(selectedStudio.id);
  }, [selectedStudio?.id, date]); 

 
  
 
  
  // submit form
  const bookStudio = async (): Promise<BookingProps | null> => {
    const url = `https://arcast-ai-backend.vercel.app/api/bookings`;
  
    const requestBody = {
      studioId: selectedStudio?.id,
      packageId: selectedPackage?.id,
      numberOfSeats: selectedPeopleCount,
      startTime: selectedTimeSlot,
      duration: duration,
      discountCode: form.discountCode,
      lead: {
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.countryCode + form.phoneNumber,
        whatsappNumber: form.whatsappCountryCode + form.whatsappNumber,
        recordingLocation: form.recordingLocation,
      }
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        const data = await response.json();
        setReceipt(data);
        toast.success('Booking successful');
        return data;
      } else {
        if (response.status === 500) {
          toast.error('An unexpected error occurred while processing your request');
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || 'An unexpected error occurred');
        }
        return null;
      }
  
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
      return null;
    }
  
  };
  
  const isStepOne = currentStep === 0;
  const isStepTwo = currentStep === 1;
  const isStepThree = currentStep === 2;
  const isStepFour = currentStep === 3;
  const isComplete = currentStep === 4;

  
  // Load saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bookingProgress');
      if (saved) {
        const savedState = JSON.parse(saved);
        setCurrentStep(savedState.currentStep ?? 0);
        setSelectedStudioIndex(savedState.selectedStudioIndex ?? 0);
        setSelectedPackageIndex(savedState.selectedPackageIndex ?? 0);
        setSelectedPeopleCount(savedState.selectedPeopleCount ?? 1);
        if (savedState.date) {
          setDate(new Date(savedState.date));
        }
        setSelectedTimeSlot(savedState.selectedTimeSlot ?? "10:00");
        setDuration(savedState.duration ?? 1);
        if (savedState.form) {
          setForm(savedState.form);
        }
      }
    } catch (error) {
      console.error('Error loading saved state:', error);
    } finally {
      setIsStorageLoaded(true);
    }
  }, []);

  // Save progress
  useEffect(() => {
    if (!isStorageLoaded) return; // Don't save until initial load is complete

    const progressState = {
      currentStep,
      selectedStudioIndex,
      selectedPackageIndex,
      selectedPeopleCount,
      date: date?.toISOString(),
      selectedTimeSlot,
      duration,
      form
    };
    
    try {
      localStorage.setItem('bookingProgress', JSON.stringify(progressState));
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }, [
    isStorageLoaded,
    currentStep,
    selectedStudioIndex,
    selectedPackageIndex,
    selectedPeopleCount,
    date,
    selectedTimeSlot,
    duration,
    form
  ]);

  // Clear progress on completion
  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem('bookingProgress');
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  }, []);

  // Modified handle continue
  const handleContinue = useCallback(async () => {
    if (isStepFour && !checked) {
      setShowWarning(true);
      return;
    }
  
   
    if (isStepFour && checked) {
      
      if (receipt !== null) {
        clearProgress();
        setCurrentStep((prev: number) => prev + 1);
      }
      return;
    }
    
    if (isComplete) {
      clearProgress();
      setCurrentStep(0);
    } else {
      setCurrentStep((prev: number) => prev + 1);
    }
  }, [checked, isStepFour, isComplete, clearProgress, receipt]);

  
  


  return (
    <DurationProvider>
    <main className="relative border mx-auto lg:mx-0">
      <div className="flex flex-col w-full lg:h-screen bg-[#FCFCFC]">
        <div className="flex-1 overflow-y-auto lg:pb-24">
          <div className=" relative mx-auto px-5 pt-11 3xl:px-8 3xl:pt-8">
            {isComplete ? "" : <TabList tabs={tabs} currentStep={currentStep} setActiveIndex={setCurrentStep}/>}
            {isStepOne && <div className="pb-10">
              <StudioCardList
              selectedStudioIndex={selectedStudioIndex} 
              setSelectedStudioIndex={setSelectedStudioIndex}
              studios={studio}
              />
              <div className=' mt-8 md:w-[90%] mx-auto lg:w-full lg:mt-10 '>
                <p className='header-text'>Included with every package</p>
                <EquipmentSection/>
              </div>
              
              <div className="w-full max-h-[250px] mt-4 rounded-[5px]">
                <Image src='/images/team.png' quality={100} width={400} height={194} alt='team members' className="object-cover w-full rounded-md max-h-[250px]"/>
              </div>
            </div>
          }
            {isStepTwo &&<div className="">
              <PackageSection
                selectedPackageIndex={selectedPackageIndex} 
                setSelectedPackageIndex={setSelectedPackageIndex} 
                packages={packages}/>
              
              </div>
            }
            {isStepThree &&
            <div className="pb-24">
              <NumberOfPeople seats={selectedStudio?.totalSeats}  
               selectedPeopleCount={selectedPeopleCount} 
               setSelectedPeopleCount={setSelectedPeopleCount}/>

              <SelectDuration hasBorder={false} hasHeader={true}
                duration={duration} setDuration={setDuration}
              />
              <DateSelector date={date} setDate={setDate} dateData={dateData}/>
              <SelectTime
               timeSlots={timeSlots}
               selectedTimeSlot={selectedTimeSlot}
               setSelectedTimeSlot={setSelectedTimeSlot}
              />
              {/* <CustomServices duration={duration} setDuration={setDuration}/> */}
            </div>
            }
            {
              isStepFour &&
              <div>
                <FormSection 
                form={form} 
                setForm={setForm} 
                book={bookStudio}
                checked={checked}
                setChecked={setChecked}
                selectedStudio={selectedStudio?.name}
                showWarning={showWarning}
                />
                <BookingSummary booking={receipt}/>
                
              </div>
            }{
              isComplete &&
              <div>
                <BookingConfirmation/>
              </div>
            }
          </div>
        </div> 
      </div>
      <div className="px-3 xl:pl-3 xl:pr-7 3xl:px-5 sticky bottom-[14px] lg:bottom-4 w-full">
      <TotalCost 
        studioName={isComplete ? "" : `${selectedStudio?.name}` }
        description={isStepOne || isComplete ? "" : `+ ${selectedPackage?.name}`} 
        total={isStepOne || isComplete  ? '' : selectedPackage?.price_per_hour}
        currency={isStepOne || isComplete  ? '' : selectedPackage?.currency}
        buttonText={'Continue'}
        onContinue={handleContinue}
      />
      </div>
    </main>
    </DurationProvider>
  );
};

export default StudioBooking;