import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Reservation } from '../types';
import { reservations as initialReservations } from '../data/reservations';

interface ReservationContextType {
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id'>) => void;
  cancelReservation: (id: string) => void;
  getUserReservations: (userId: string) => Reservation[];
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);

  const addReservation = (newReservation: Omit<Reservation, 'id'>) => {
    const reservation: Reservation = {
      ...newReservation,
      id: Date.now().toString(),
    };
    setReservations([...reservations, reservation]);
  };

  const cancelReservation = (id: string) => {
    setReservations(
      reservations.map(reservation =>
        reservation.id === id
          ? { ...reservation, status: 'cancelled' as const }
          : reservation
      )
    );
  };

  const getUserReservations = (userId: string) => {
    return reservations.filter(reservation => reservation.userId === userId);
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, cancelReservation, getUserReservations }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservations = (): ReservationContextType => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservations must be used within a ReservationProvider');
  }
  return context;
};