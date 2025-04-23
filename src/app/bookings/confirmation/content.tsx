'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingConfirmation from '@/components/booking-components/booking-components/step-three-booking-components/bookingConfirmation';

const BookingConfirmationContent = () => {
  const searchParams = useSearchParams();
  // const [bookingData, setBookingData] = useState<Record<string, string>>({});

  useEffect(() => {
    // Extract all query parameters into an object
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
  }, [searchParams]);

  return <BookingConfirmation />;
};

export default BookingConfirmationContent;
