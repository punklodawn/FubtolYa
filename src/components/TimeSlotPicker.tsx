import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  availableHours: string[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableHours,
  selectedTime,
  onSelectTime
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
        <Clock className="h-5 w-5 mr-2 text-green-600" />
        Horarios Disponibles
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {availableHours.map((hour) => (
          <button
            key={hour}
            className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              selectedTime === hour
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => onSelectTime(hour)}
          >
            {hour}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;