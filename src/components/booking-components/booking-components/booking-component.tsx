'use client';
import React, { useState, useCallback, useEffect } from 'react';
import TabList from './navigation-tabList';
import StudioCardList from './step-one-bookingComponents/studio-cardList';
import TotalCost from './total-cost';
import NumberOfPeople from './step-two-booking-components/number-of-people';
import DateSelector from './step-two-booking-components/date-selector';
import SelectTime from './step-two-booking-components/select-time';
import SelectDuration from './step-two-booking-components/select-duration';
import FormSection from './step-three-booking-components/form-section';
import BookingSummary from './step-three-booking-components/booking-summary';
import PackageSection from './step-one-bookingComponents/package-section';
import {
  PackageProps,
  StudioProps,
  AvailabilityItemProps,
  TimeSlotListProps,
  BookingProps,
} from '@/lib/types';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { DurationProvider } from '@/contex/durationContext';
import EquipmentSection from './step-one-bookingComponents/recording-EquipmentList';
import { useRouter } from 'next/navigation';
import CustomServices from './step-two-booking-components/custom-services';
import axios from 'axios';
// import CustomServices from './step-two-booking-components/custom-services';

const initialFormState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  whatsappNumber: '',
  countryCode: '+971',
  whatsappCountryCode: '+971',
  discountCode: '',
  recordingLocation: '',
};

const StudioBooking = ({
  onStepChange,
}: {
  onStepChange?: (step: number) => void;
}) => {
  const [isStorageLoaded, setIsStorageLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [studio, setStudio] = useState<StudioProps[] | null>(null);
  const [packages, setPackages] = useState<PackageProps[] | null>(null);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);
  const [selectedStudioIndex, setSelectedStudioIndex] = useState<number>(0);
  const [selectedPeopleCount, setSelectedPeopleCount] = useState<number>(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateData, setDateData] = useState<AvailabilityItemProps[] | null>(
    null
  );
  const [selectedCustomServices, setSelectedCustomServices] = useState<
    Array<{
      name: string;
      price: string;
      quantity: number;
    }>
  >([]);


  const [timeSlots, setTimeSlots] = useState<TimeSlotListProps[] | null>(null);
  const nowISO = new Date().toISOString();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(nowISO);
  const [isBooking, setIsBooking] = useState(false);
  const [duration, setDuration] = useState(1);
  const selectedPackage = packages?.[selectedPackageIndex] || null;
  const selectedStudio = studio?.[selectedStudioIndex] || null;
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [form, setForm] = useState(initialFormState);
  const router = useRouter();
  const tabs = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  const handleServiceSelect = (services: { name: string; price: string; quantity: number }[]) => {
    setSelectedCustomServices(services);
  };

  const setCurrentStepWithNotify = (step: number) => {
    setCurrentStep(step);
    if (onStepChange) {
      onStepChange(step);
    }
  };
  useEffect(() => {
    async function fetchStudios() {
      const apiUrl = `https://arcast-ai-backend.vercel.app/api/studios`;

      try {
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          const errorMessage =
            {
              400: 'Bad Request - Please check your request parameters',
              401: 'Unauthorized - Please login to access this resource',
              403: "Forbidden - You don't have permission to access this resource",
              404: 'Studios not found',
              500: 'Internal Server Error - Please try again later',
              502: 'Bad Gateway - Server is temporarily unavailable',
              503: 'Service Unavailable - Please try again later',
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
          toast.error('An unexpected error occurred');
        }
        return null;
      } finally {
        setLoading(false);
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

    const formattedDate = date.toISOString().split('T')[0];

    async function fetchDateTime(studioId: string) {
      const apiUrl = `https://arcast-ai-backend.vercel.app/api/studios/${studioId}/availability?date=${formattedDate}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorMessage =
            {
              400: 'Bad Request - Please check your request parameters',
              401: 'Unauthorized - Please login to access this resource',
              403: "Forbidden - You don't have permission to access this resource",
              404: 'Studios not found',
              500: 'Internal Server Error - Please try again later',
              502: 'Bad Gateway - Server is temporarily unavailable',
              503: 'Service Unavailable - Please try again later',
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
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error('An unexpected error occurred');
        }
      }
    }

    fetchDateTime(selectedStudio.id);
  }, [selectedStudio?.id, date]);

  // submit form
  const bookStudio = async (): Promise<BookingProps | null> => {
    setIsBooking(true);
    setPaymentLoading(true);
    const url = `https://arcast-ai-backend.vercel.app/api/bookings`;

    const actualDuration = duration === 3 ? duration + 1 : duration;

    const requestBody = {
      studioId: selectedStudio?.id,
      packageId: selectedPackage?.id,
      numberOfSeats: selectedPeopleCount,
      startTime: selectedTimeSlot,
      duration: actualDuration,
      discountCode: form.discountCode,
      lead: {
        fullName: form.fullName,
        email: form.email,
        phoneNumber: form.countryCode + form.phoneNumber,
        whatsappNumber: form.whatsappCountryCode + form.whatsappNumber,
        recordingLocation: form.recordingLocation,
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const paymentlink = await createPaymentLink(data.id);

        if (paymentlink) {
          // Redirect to payment page if successful
          router.push(paymentlink.paymentLink);
          return data;
        }
        return null;
        // toast.success('Booking successful');
        return data;
      } else {
        if (response.status === 500) {
          toast.error('Internal Server Error - Please try again later');
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
        toast.error('An unexpected error occurred');
      }
      return null;
    } finally {
      setIsBooking(false);
      setPaymentLoading(false);
    }
  };

  const createPaymentLink = async (
    bookingId: string
  ): Promise<{ paymentLink: string } | null> => {
    const url = `https://arcast-ai-backend.vercel.app/api/bookings/${bookingId}/payment/link`;
    try {
      const res = await axios.post(url);
      if (res.status === 201) {
        router.push(res.data.paymentLink.url);
      }
      return null;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Payment link creation failed: ${error.message}`);
      } else {
        toast.error('Failed to create payment link');
      }
      router.push('/bookings/failed');
      return null;
    }
  };

  const isStepOne = currentStep === 0;
  const isStepTwo = currentStep === 1;
  const isStepThree = currentStep === 2;
  const isStepFour = currentStep === 3;

  // Load saved state
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bookingProgress');
      if (saved) {
        const savedState = JSON.parse(saved);
        setCurrentStepWithNotify(savedState.currentStep ?? 0);
        setSelectedStudioIndex(savedState.selectedStudioIndex ?? 0);
        setSelectedPackageIndex(savedState.selectedPackageIndex ?? 0);
        setSelectedPeopleCount(savedState.selectedPeopleCount ?? 1);
        if (savedState.date) {
          setDate(new Date(savedState.date));
        }
        setSelectedTimeSlot(savedState.selectedTimeSlot ?? '10:00');
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
  }, [onStepChange]);

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
      form,
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
    form,
  ]);

  // Clear progress on completion
  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem('bookingProgress');
      // Reset all state variables that are saved in localStorage
      setCurrentStep(0);
      setSelectedStudioIndex(0);
      setSelectedPackageIndex(0);
      setSelectedPeopleCount(1);
      setDate(new Date());
      setSelectedTimeSlot('10:00');
      setDuration(1);
      setForm(initialFormState); // Make sure you have an initial form state defined
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  }, []);

  const validateRequiredFields = () => {
    const requiredFields = {
      fullName: form.fullName,
      email: form.email,
      // phoneNumber: form.phoneNumber,
      whatsappNumber: form.whatsappNumber,
      countryCode: form.countryCode,
      whatsappCountryCode: form.whatsappCountryCode,
    };

    return Object.values(requiredFields).every((field) => field.trim() !== '');
  };

  // Modified handle continue
  const handleContinue = useCallback(async () => {
    if (isStepFour) {
      if (!validateRequiredFields()) {
        setShowWarning(true);
        return;
      }
      const bookingResult = await bookStudio();

      if (bookingResult) {
        clearProgress();
      }
      return;
    }

    setCurrentStepWithNotify(currentStep + 1);
  }, [
    isStepFour,
    validateRequiredFields,
    bookStudio,
    clearProgress,
    router,
    currentStep,
  ]);

  return (
    <DurationProvider>
      <main className='relative border mx-auto lg:mx-0'>
        <div className='flex flex-col w-full lg:h-screen bg-[#FCFCFC]'>
          <div className='flex-1 overflow-y-auto lg:pb-24'>
            <div className=' relative mx-auto px-5 pt-11 3xl:px-8 3xl:pt-8'>
              <TabList
                tabs={tabs}
                currentStep={currentStep}
                setActiveIndex={setCurrentStepWithNotify}
              />
              {isStepOne && (
                <div className='pb-10'>
                  <StudioCardList
                    selectedStudioIndex={selectedStudioIndex}
                    setSelectedStudioIndex={setSelectedStudioIndex}
                    studios={studio}
                    loading={loading}
                  />
                  <div className=' mt-8 md:w-[90%] mx-auto lg:w-full lg:mt-10 '>
                    <p className='header-text'>Included with every package</p>
                    <EquipmentSection />
                  </div>

                  <div className='w-full max-h-[250px] mt-4 rounded-[5px]'>
                    <Image
                      src='/images/team.png'
                      quality={100}
                      width={400}
                      height={194}
                      alt='team members'
                      className='object-cover w-full rounded-md max-h-[250px]'
                    />
                  </div>
                </div>
              )}
              {isStepTwo && (
                <div className=''>
                  <PackageSection
                    selectedPackageIndex={selectedPackageIndex}
                    setSelectedPackageIndex={setSelectedPackageIndex}
                    packages={packages}
                  />
                </div>
              )}
              {isStepThree && (
                <div className='pb-10'>
                  <NumberOfPeople
                    // seats={selectedStudio?.totalSeats}
                    seats={4}
                    selectedPeopleCount={selectedPeopleCount}
                    setSelectedPeopleCount={setSelectedPeopleCount}
                  />

                  <SelectDuration
                    hasBorder={false}
                    hasHeader={true}
                    duration={duration}
                    setDuration={setDuration}
                  />
                  <DateSelector
                    date={date}
                    setDate={setDate}
                    dateData={dateData}
                  />
                  <SelectTime
                    timeSlots={timeSlots}
                    duration={duration}
                    selectedTimeSlot={selectedTimeSlot}
                    setSelectedTimeSlot={setSelectedTimeSlot}
                  />
                  <CustomServices
                    duration={duration}
                    setDuration={setDuration}
                    onServiceSelect={handleServiceSelect}
                  />
                </div>
              )}
              {isStepFour && (
                <div className='mb-2'>
                  <FormSection
                    form={form}
                    setForm={setForm}
                    selectedStudio={selectedStudio?.name}
                    showWarning={showWarning}
                  />
                  <BookingSummary
                    selectedStudio={selectedStudio?.name}
                    selectedPackage={selectedPackage?.name}
                    price={selectedPackage?.price_per_hour}
                    currency={selectedPackage?.currency}
                    seats={selectedPeopleCount}
                    image={selectedStudio?.imageUrl}
                    date={date}
                    time={selectedTimeSlot}
                    duration={duration}
                    location={form.recordingLocation}
                    studioLocation={selectedStudio?.location}
                    customService={selectedCustomServices}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='px-3 xl:pl-3 xl:pr-7 3xl:px-5 sticky bottom-[14px] lg:bottom-4 w-full'>
          <TotalCost
            studioName={selectedStudio?.name}
            description={isStepOne ? '' : `+ ${selectedPackage?.name}`}
            total={isStepOne ? '' : `${selectedPackage?.price_per_hour}`}
            duration={isStepOne ? '' : duration}
            currency={isStepOne ? '' : selectedPackage?.currency}
            buttonText={isStepFour ? 'Book Now' : 'Continue'}
            step={currentStep}
            load={isBooking || paymentLoading}
            onContinue={handleContinue}
            customService={selectedCustomServices}
          />
        </div>
      </main>
    </DurationProvider>
  );
};

export default StudioBooking;
