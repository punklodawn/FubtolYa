import React from 'react';
import { Calendar, Clock, DollarSign, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Reservation } from '../types';
import { fields } from '../data/fields';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ReservationCardProps {
  reservation: Reservation;
  onCancel?: (id: string) => void;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ reservation, onCancel }) => {
  const field = fields.find(f => f.id === reservation.fieldId);

  if (!field) return null;

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  const statusIcons = {
    pending: <AlertCircle className="h-5 w-5 mr-1" />,
    confirmed: <CheckCircle className="h-5 w-5 mr-1" />,
    cancelled: <XCircle className="h-5 w-5 mr-1" />
  };

  const formattedDate = format(new Date(reservation.date), "EEEE d 'de' MMMM, yyyy", { locale: es });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">{field.name}</h3>
          <div className={`flex items-center px-3 py-1 rounded-full ${statusColors[reservation.status]}`}>
            {statusIcons[reservation.status]}
            <span className="text-sm capitalize">
              {reservation.status === 'pending' ? 'Pendiente' : 
               reservation.status === 'confirmed' ? 'Confirmada' : 'Cancelada'}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2 text-gray-700">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="capitalize">{formattedDate}</span>
        </div>
        <div className="flex items-center mb-2 text-gray-700">
          <Clock className="h-5 w-5 mr-2" />
          <span>{reservation.startTime} - {reservation.endTime}</span>
        </div>
        <div className="flex items-center mb-4 text-gray-700">
          <DollarSign className="h-5 w-5 mr-2" />
          <span>Total: ${reservation.totalPrice}</span>
        </div>
        
        {reservation.status !== 'cancelled' && onCancel && (
          <button
            onClick={() => onCancel(reservation.id)}
            className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Cancelar Reserva
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;