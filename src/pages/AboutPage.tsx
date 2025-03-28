import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos la plataforma líder en reservas de canchas de fútbol, conectando jugadores con los mejores espacios deportivos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600 mb-6">
            En FútbolYa, nuestra misión es hacer que el deporte sea accesible para todos. Creemos que jugar fútbol no debería ser complicado, por eso hemos creado una plataforma que simplifica el proceso de encontrar y reservar canchas.
          </p>
          <p className="text-gray-600">
            Trabajamos con los mejores complejos deportivos para ofrecerte una experiencia de reserva sin complicaciones, permitiéndote concentrarte en lo que realmente importa: disfrutar del juego.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="Equipo de fútbol" 
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="bg-green-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Comunidad</h3>
            <p className="text-gray-600">
              Unimos a más de 50,000 jugadores con más de 500 canchas en todo el país.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Calidad</h3>
            <p className="text-gray-600">
              Seleccionamos cuidadosamente cada cancha para garantizar la mejor experiencia.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Facilidad</h3>
            <p className="text-gray-600">
              Reserva en menos de 2 minutos, sin llamadas ni mensajes innecesarios.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cobertura</h3>
            <p className="text-gray-600">
              Presentes en más de 20 ciudades, siempre cerca de donde estés.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
              alt="CEO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-900">Martín Rodríguez</h3>
            <p className="text-gray-600">CEO & Fundador</p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
              alt="COO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-900">Laura Gómez</h3>
            <p className="text-gray-600">Directora de Operaciones</p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
              alt="CTO" 
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-900">Carlos Méndez</h3>
            <p className="text-gray-600">Director de Tecnología</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes un complejo deportivo?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Únete a nuestra red de canchas y aumenta tus reservas. Ofrecemos herramientas de gestión y una amplia base de usuarios.
        </p>
        <a
          href="#"
          className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Registra tu Cancha
        </a>
      </div>
    </div>
  );
};

export default AboutPage;