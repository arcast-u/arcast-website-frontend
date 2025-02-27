import * as React from "react";
import { TimeSlotListProps } from "@/lib/types";

export type TimeSlotProps = {
  times: TimeSlotListProps[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  duration: number;
};

const TimeSlot = ({ times, selectedTime, onTimeSelect, duration }: TimeSlotProps) => {
  const [noConsecutiveTimeMessage, setNoConsecutiveTimeMessage] = React.useState<string>("");

  const availableTimes = times.filter((time) => time.available);

  const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format
    });
  };

  const addHours = (isoDate: string | undefined, hours: number): string => {
    try {
      // If no date provided or invalid date, use current date/time as default
      const date = isoDate ? new Date(isoDate) : new Date();
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return new Date().toISOString();
      }
      
      date.setHours(date.getHours() + hours);
      return date.toISOString();
    } catch (error) {
      console.log(error);
      // Fallback to current date/time if any error occurs
      return new Date().toISOString();
    }
  }

  // Function to check if there are consecutive time slots available for the duration
  const checkConsecutiveTimeSlots = React.useCallback(() => {
    if (!selectedTime || duration <= 0) return;

    // Sort available times chronologically
    const sortedTimes = [...availableTimes].sort((a, b) => 
      new Date(a.start).getTime() - new Date(b.start).getTime()
    );

    // Find the selected time slot index
    const selectedIndex = sortedTimes.findIndex(time => time.start === selectedTime);
    if (selectedIndex === -1) return;

    // Get the end time of the appointment with the given duration
    const endTime = new Date(addHours(selectedTime, duration));
    
    // Check if we have enough consecutive slots
    let consecutiveSlots = 1; // Start with 1 for the selected slot
    let currentEndTime = new Date(sortedTimes[selectedIndex].end);
    
    // Loop through subsequent time slots to check continuity
    for (let i = selectedIndex + 1; i < sortedTimes.length; i++) {
      const currentSlotStart = new Date(sortedTimes[i].start);
      
      // If there's a gap between the current end time and the next slot start time
      if (currentEndTime.getTime() !== currentSlotStart.getTime()) {
        break;
      }
      
      consecutiveSlots++;
      currentEndTime = new Date(sortedTimes[i].end);
      
      // If we've reached our target duration
      if (currentEndTime >= endTime) {
        break;
      }
    }
    
    // Calculate how many slots we need for the duration
    const slotDuration = new Date(sortedTimes[selectedIndex].end).getTime() - 
                        new Date(sortedTimes[selectedIndex].start).getTime();
    const slotsNeeded = Math.ceil((duration * 60 * 60 * 1000) / slotDuration);
    
    // Set message if not enough consecutive slots
    if (consecutiveSlots < slotsNeeded) {
      setNoConsecutiveTimeMessage(
        `${duration} consecutive hours not available, Please select another time.`
      );
    } else {
      setNoConsecutiveTimeMessage("");
    }
  }, [selectedTime, duration, availableTimes]);

  // Run the check whenever selectedTime or duration changes
  React.useEffect(() => {
    checkConsecutiveTimeSlots();
  }, [selectedTime, duration, checkConsecutiveTimeSlots]);

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    onTimeSelect(time);
  };

  return (
    <div className="w-full">
      <div 
        role="radiogroup" 
        aria-label="Available time slots" 
        className="grid grid-cols-4 gap-4 items-center mt-3 3xl:mt-5 w-full text-lg leading-7 font-nunitoSans 3xl:leading-[27.28px] 3xl:text-xl whitespace-nowrap text-[#333333]"
      >
        {availableTimes.map((time) => (
          <button
            key={time.start}
            role="radio"
            aria-checked={time.start === selectedTime}
            onClick={() => handleTimeSelect(time.start)}
            aria-label={`Select time ${formatTime(time.start)}`}
            className={`flex 3xl:px-6 3xl:py-5 lg:px-4 lg:py-2 justify-center p-3 my-auto cursor-pointer rounded-xl bg-neutral-100 ${
              time.start === selectedTime ? "border border-[#989898] shadow-lg shadow-[#80808030]" : ""
            }`}
          >
            {formatTime(time.start)}
          </button>
        ))}
      </div>
      
      {noConsecutiveTimeMessage && (
       
        <p className="text-[#FF4242] text-sm leading-[19.1px] font-nunitoSans mt-2">
        {noConsecutiveTimeMessage}
      </p>
      )}
    </div>
  );
};

export default TimeSlot;