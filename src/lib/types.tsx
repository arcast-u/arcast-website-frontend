// types.ts
export interface PackagePerkProps {
    id: string;
    name: string;
    count: number | null;
    packageId: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface PackageProps {
    id: string;
    name: string;
    price_per_hour: string;
    currency: string;
    description: string;
    delivery_time: number;
    studioId: string;
    createdAt: string;
    updatedAt: string;
    packagePerks: PackagePerkProps[];
  }
  
  export interface StudioProps {
    id: string;
    name: string;
    location: string;
    imageUrl: string;
    totalSeats: number;
    openingTime: string;
    closingTime: string;
    createdAt: string;
    updatedAt: string;
    packages: PackageProps[];
    isFullyBooked: boolean;
    availableSlots: number;
    totalSlots: number;
  }

  export interface AvailabilityMetadataProps {
    isWeekend: boolean;
    bookings?: number;
  }
  
  export interface AvailabilityItemProps {
    date: string; // ISO format YYYY-MM-DD
    status: "past" | "available";
    availableSlots: number;
    totalSlots: number;
    metadata: AvailabilityMetadataProps;
  }
  
  export interface AvailabilityDataProps {
    studioId: string;
    month: string; // ISO format YYYY-MM-DD
    availability: AvailabilityItemProps[];
  }

  export interface TimeSlotListProps{
    available: boolean;
    end: string;
    start:string;

  }
  
  export interface TimeSlotDataProps{
    date: string;
    studioId: string;
    timeSlots: TimeSlotListProps[];

  }

  export interface Studio {
    id: string;
    name: string;
    location: string;
    imageUrl: string;
    totalSeats: number;
    openingTime: string; // Format: "HH:MM"
    closingTime: string; // Format: "HH:MM"
    createdAt: string;
    updatedAt: string;
}

export interface Package {
    id: string;
    name: string;
    price_per_hour: string;
    currency: string;
    description: string;
    delivery_time: number;
    studioId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Lead {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    recordingLocation: string;
    createdAt: string;
    updatedAt: string;
}

export interface BookingProps {
    id: string;
    startTime: string;  // ISO 8601 format "YYYY-MM-DDTHH:mm:ss.sssZ"
    endTime: string;    // ISO 8601 format
    numberOfSeats: number;
    totalCost: string;  // Assuming it's a string (e.g., "3800"), change to number if needed
    vatAmount: string;
    discountAmount: string;
    status: "PENDING" | "CONFIRMED" | "CANCELLED"; // Enum-like restriction
    studioId: string;
    packageId: string;
    leadId: string;
    discountCodeId: string | null;
    createdAt: string;
    updatedAt: string;
    studio: Studio;
    package: Package;
    lead: Lead;
    discountCode: string | null;
    notionEntryId: string;
}


export interface StoredBookingData {
  currentStep: number;
  selectedStudioIndex: number;
  selectedPackageIndex: number;
  selectedPeopleCount: number;
  selectedDate: string | null;
  selectedTimeSlot: string;
  duration: number;
  form: {
    fullName: string;
    email: string;
    phoneNumber: string;
    whatsappNumber: string;
    countryCode: string;
    whatsappCountryCode: string;
    discountCode: string;
    recordingLocation: string;
  };
}
