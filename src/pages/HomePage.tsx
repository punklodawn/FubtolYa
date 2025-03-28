import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import { fields } from '../data/fields';
import FieldCard from '../components/FieldCard';

const HomePage: React.FC = () => {
  // Featured fields (first 3)
  const featuredFields = fields.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-green-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" 
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserva tu cancha de fútbol en segundos</h1>
            <p className="text-xl mb-8">Encuentra y reserva las mejores canchas de fútbol cerca de ti. Juega cuando quieras, donde quieras.</p>
            <Link 
              to="/fields" 
              className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Buscar Canchas
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Cómo Funciona?</h2>
            <p className="mt-4 text-lg text-gray-600">Reservar una cancha nunca fue tan fácil</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 text-green-700 rounded-full p-4 inline-flex mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Busca</h3>
              <p className="text-gray-600">Encuentra canchas disponibles en tu zona y filtra por tus preferencias.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-700 rounded-full p-4 inline-flex mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Selecciona</h3>
              <p className="text-gray-600">Elige la fecha y hora que mejor se adapte a tu horario.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-700 rounded-full p-4 inline-flex mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reserva</h3>
              <p className="text-gray-600">Completa tu reserva en pocos clics y realiza el pago de forma segura.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-700 rounded-full p-4 inline-flex mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">¡Juega!</h3>
              <p className="text-gray-600">Recibe la confirmación y disfruta de tu partido con amigos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Fields Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Canchas Destacadas</h2>
            <Link to="/fields" className="text-green-600 hover:text-green-700 font-medium">
              Ver todas →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFields.map(field => (
              <FieldCard key={field.id} field={field} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para jugar?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Encuentra la cancha perfecta para tu próximo partido y reserva en minutos.
          </p>
          <Link 
            to="/fields" 
            className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Reservar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;