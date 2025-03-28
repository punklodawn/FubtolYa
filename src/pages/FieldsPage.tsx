import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { fields } from '../data/fields';
import FieldCard from '../components/FieldCard';
import { Field } from '../types';

const FieldsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(200);

  const filteredFields = fields.filter(field => {
    const matchesSearch = field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         field.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = selectedSize ? field.size === selectedSize : true;
    const matchesPrice = field.pricePerHour <= priceRange;
    
    return matchesSearch && matchesSize && matchesPrice;
  });

  const handleSizeFilter = (size: string) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Canchas Disponibles</h1>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre o ubicación..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 mr-2">Filtros:</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedSize === '5 vs 5' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleSizeFilter('5 vs 5')}
          >
            5 vs 5
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedSize === '7 vs 7' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleSizeFilter('7 vs 7')}
          >
            7 vs 7
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedSize === '11 vs 11' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleSizeFilter('11 vs 11')}
          >
            11 vs 11
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio máximo: ${priceRange}
          </label>
          <input
            type="range"
            min="50"
            max="200"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </div>
      
      {/* Results */}
      {filteredFields.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFields.map(field => (
            <FieldCard key={field.id} field={field} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No se encontraron canchas</h3>
          <p className="text-gray-600">
            Intenta con otros filtros o términos de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default FieldsPage;