export interface Field {
  id: string;
  name: string;
  location: string;
  size: string;
  pricePerHour: number;
  imageUrl: string;
  amenities: string[];
  rating: number;
  availableHours: string[];
}

export interface Reservation {
  id: string;
  fieldId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}