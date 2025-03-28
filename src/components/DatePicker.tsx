import React from 'react';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onSelectDate }) => {
  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
        <Calendar className="h-5 w-5 mr-2 text-green-600" />
        Selecciona una Fecha
      </h3>
      <div className="flex overflow-x-auto pb-2 space-x-2">
        {dates.map((date) => {
          const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
          const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
          
          return (
            <button
              key={date.toISOString()}
              className={`flex-shrink-0 p-3 rounded-lg border-2 transition-colors ${
                isSelected
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onSelectDate(date)}
            >
              <div className="text-center">
                <p className="text-sm font-medium text-gray-500 uppercase">
                  {format(date, 'EEE', { locale: es })}
                </p>
                <p className={`text-2xl font-bold ${isToday ? 'text-green-600' : 'text-gray-900'}`}>
                  {format(date, 'd')}
                </p>
                <p className="text-sm text-gray-500">
                  {format(date, 'MMM', { locale: es })}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;