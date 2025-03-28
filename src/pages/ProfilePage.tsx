import React from 'react';
import { Navigate } from 'react-router-dom';
import { User, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useReservations } from '../context/ReservationContext';
import ReservationCard from '../components/ReservationCard';

const ProfilePage: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { getUserReservations, cancelReservation } = useReservations();
  
  if (!isAuthenticated || !currentUser) {
    return <Navigate to="/login" />;
  }
  
  const userReservations = getUserReservations(currentUser.id);
  const activeReservations = userReservations.filter(r => r.status !== 'cancelled');
  const pastReservations = userReservations.filter(r => r.status === 'cancelled');
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center">
          <div className="bg-green-100 p-4 rounded-full">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
            <p className="text-gray-600">{currentUser.email}</p>
          </div>
          <button
            onClick={logout}
            className="ml-auto flex items-center text-red-600 hover:text-red-700"
          >
            <LogOut className="h-5 w-5 mr-1" />
            Cerrar sesión
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Calendar className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Mis Reservas</h2>
        </div>
        
        {activeReservations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeReservations.map(reservation => (
              <ReservationCard
                key={reservation.id}
                reservation={reservation}
                onCancel={cancelReservation}
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No tienes reservas activas</h3>
            <p className="text-gray-600 mb-4">
              ¡Reserva una cancha y comienza a jugar!
            </p>
            <a
              href="/fields"
              className="inline-block bg-green-600 text-white font-medium px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Buscar Canchas
            </a>
          </div>
        )}
      </div>
      
      {pastReservations.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Historial de Reservas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastReservations.map(reservation => (
              <ReservationCard
                key={reservation.id}
                reservation={reservation}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;