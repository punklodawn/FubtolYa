import { Reservation } from '../types';

export const reservations: Reservation[] = [
  {
    id: '1',
    fieldId: '1',
    userId: '1',
    date: '2025-06-15',
    startTime: '18:00',
    endTime: '19:00',
    totalPrice: 120,
    status: 'confirmed'
  },
  {
    id: '2',
    fieldId: '3',
    userId: '1',
    date: '2025-06-20',
    startTime: '20:00',
    endTime: '21:00',
    totalPrice: 60,
    status: 'pending'
  }
];