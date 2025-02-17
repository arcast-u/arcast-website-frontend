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
import { useRouter } from "next/navigation";




const StudioBooking= () => {
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
   const router = useRouter();
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
                toast.error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
           
            setStudio(data);
            if (data.length > 0) {
              setPackages(data[0].packages || []); 
            }
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
      setSelectedPackageIndex(0); 
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
          toast.error(`HTTP error! Status: ${response.status}`);
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
        setReceipt(data)
        toast.success('Booking successful');
        return data;
        
      } else{
        toast.error(`HTTP error! Status: ${response.status}`);
        return null;
      }
  
      
    } catch (error) {
      console.error("Error booking studio:", error);
      toast.error('Error booking studio');
      return null; // Handle error gracefully
    }
  };
  
  const isStepOne = currentStep === 0;
  const isStepTwo = currentStep === 1;
  const isStepThree = currentStep === 2;
  const isStepFour = currentStep === 3;
  const isComplete = currentStep === 4;

  
  // step navigation
  // const handleContinue = useCallback(() => {
  //   if (isStepFour && !checked) {
  //     setShowWarning(true);
  //     return; // Prevent navigation if unchecked
  //   }
  //   // setShowWarning(false);
  //   if (currentStep < tabs.length - 1) {
  //     setCurrentStep(prev => prev + 1);
  //   }
  //   // if (currentStep === 4) {
  //   //   router.push('/');
  //   // }
  // }, [currentStep, tabs.length, checked, isStepFour]);
  const handleContinue = useCallback(() => {
    if (isStepFour && !checked) {
      setShowWarning(true);
      return;
    }
    
    setCurrentStep(prev => prev + 1);
    if(isComplete){
      router.push('/')
    }
  }, [checked, isStepFour]);

  
  


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
                <Image src='/images/team.webp' width={400} height={194} alt='team members' className="object-cover w-full rounded-md max-h-[250px]"/>
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
        description={!isStepOne || isComplete ? selectedPackage?.name : ''} 
        total={!isStepOne || isComplete  ? selectedPackage?.price_per_hour : ''}
        currency={!isStepOne || isComplete  ? selectedPackage?.currency : ''}
        buttonText={!isComplete  ? 'Continue' : 'Go to HomePage'}
        onContinue={handleContinue}
      />
      </div>
    </main>
    </DurationProvider>
  );
};

export default StudioBooking;