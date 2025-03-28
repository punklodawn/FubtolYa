import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock } from 'lucide-react';
import { Field } from '../types';

interface FieldCardProps {
  field: Field;
}

const FieldCard: React.FC<FieldCardProps> = ({ field }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={field.imageUrl} 
        alt={field.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{field.name}</h3>
          <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span>{field.rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{field.location}</span>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {field.size}
          </span>
          {field.amenities.slice(0, 2).map((amenity, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {amenity}
            </span>
          ))}
          {field.amenities.length > 2 && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              +{field.amenities.length - 2}
            </span>
          )}
        </div>
        <div className="flex items-center mt-3 text-gray-700">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{field.availableHours.length} horarios disponibles</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-green-700 font-bold">
            ${field.pricePerHour} <span className="text-sm font-normal text-gray-600">/hora</span>
          </div>
          <Link 
            to={`/fields/${field.id}`}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FieldCard;