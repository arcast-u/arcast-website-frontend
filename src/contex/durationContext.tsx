import React, { createContext, useContext, useState } from "react";

// Define the type for context
type DurationContextType = {
  durations: Record<string, number>; // Stores durations for each service
  setDuration: (serviceName: string, value: number) => void;
};

// Create context with default value
const DurationContext = createContext<DurationContextType | undefined>(undefined);

// Create provider
export const DurationProvider = ({ children }: { children: React.ReactNode }) => {
  const [durations, setDurations] = useState<Record<string, number>>({});

  // Function to update duration
  const setDuration = (serviceName: string, value: number) => {
    setDurations((prev) => ({
      ...prev,
      [serviceName]: Math.max(1, value), // Ensure minimum value of 1
    }));
  };

  return (
    <DurationContext.Provider value={{ durations, setDuration }}>
      {children}
    </DurationContext.Provider>
  );
};

// Custom hook for using the context
export const useDuration = () => {
  const context = useContext(DurationContext);
  if (!context) {
    throw new Error("useDuration must be used within a DurationProvider");
  }
  return context;
};
