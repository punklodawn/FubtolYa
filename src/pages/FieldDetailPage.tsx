import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, DollarSign, Shield, Users, Calendar, ChevronLeft } from 'lucide-react';
import { fields } from '../data/fields';
import { useAuth } from '../context/AuthContext';
import { useReservations } from '../context/ReservationContext';
import DatePicker from '../components/DatePicker';
import TimeSlotPicker from '../components/TimeSlotPicker';
import { format } from 'date-fns';

const FieldDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useAuth();
  const { addReservation } = useReservations();
  
  const field = fields.find(f => f.id === id);
  
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(1);
  
  if (!field) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancha no encontrada</h2>
        <button 
          onClick={() => navigate('/fields')}
          className="inline-flex items-center text-green-600 hover:text-green-700"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Volver a canchas
        </button>
      </div>
    );
  }

  const handleReservation = () => {
    if (!isAuthenticated || !currentUser) {
      navigate('/login');
      return;
    }
    
    if (!selectedTime) {
      alert('Por favor selecciona un horario');
      return;
    }
    
    // Calculate end time
    const [startHour, startMinute] = selectedTime.split(':').map(Number);
    const endHour = startHour + duration;
    const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
    
    // Calculate total price
    const totalPrice = field.pricePerHour * duration;
    
    // Create reservation
    addReservation({
      fieldId: field.id,
      userId: currentUser.id,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime: selectedTime,
      endTime,
      totalPrice,
      status: 'pending'
    });
    
    navigate('/profile');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={() => navigate('/fields')}
        className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Volver a canchas
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-80">
          <img 
            src={field.imageUrl} 
            alt={field.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{field.name}</h1>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{field.location}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
              <span className="font-medium">{field.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalles de la Cancha</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-green-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Tamaño</h3>
                    <p className="text-gray-600">{field.size}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-green-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Precio</h3>
                    <p className="text-gray-600">${field.pricePerHour}/hora</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-green-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Horarios</h3>
                    <p className="text-gray-600">
                      {field.availableHours[0]} - {field.availableHours[field.availableHours.length - 1]}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Servicios</h3>
                    <p className="text-gray-600">{field.amenities.join(', ')}</p>
                  </div>
                </div>
              </div>
              
              <DatePicker 
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
              
              <TimeSlotPicker 
                availableHours={field.availableHours}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
              />
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  Duración
                </h3>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((hours) => (
                    <button
                      key={hours}
                      className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        duration === hours
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => setDuration(hours)}
                    >
                      {hours} {hours === 1 ? 'hora' : 'horas'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resumen de Reserva</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cancha:</span>
                    <span className="font-medium">{field.name}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha:</span>
                    <span className="font-medium">
                      {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '-'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hora:</span>
                    <span className="font-medium">
                      {selectedTime ? selectedTime : '-'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duración:</span>
                    <span className="font-medium">{duration} {duration === 1 ? 'hora' : 'horas'}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>${field.pricePerHour * duration}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleReservation}
                  disabled={!selectedTime}
                  className={`w-full py-3 rounded-lg font-bold text-white ${
                    selectedTime
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isAuthenticated ? 'Confirmar Reserva' : 'Ingresar para Reservar'}
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Al confirmar aceptas nuestros términos y condiciones de reserva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetailPage;