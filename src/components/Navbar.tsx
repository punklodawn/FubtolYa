import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield as SoccerField, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <SoccerField className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">FútbolYa</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Inicio
              </Link>
              <Link to="/fields" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Canchas
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Nosotros
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 flex items-center">
                  <User className="h-5 w-5 mr-1" />
                  Mi Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Salir
                </button>
              </>
            ) : (
              <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium bg-white text-green-700 hover:bg-gray-100">
                Ingresar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;