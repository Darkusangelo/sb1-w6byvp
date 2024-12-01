export type BusinessCategory =
  | 'restaurant'
  | 'cafe'
  | 'hotel'
  | 'lawyer'
  | 'university'
  | 'hospital'
  | 'pharmacy'
  | 'store'
  | 'other';

export interface Business {
  id: string;
  name: {
    ar: string;
    fr: string;
    en: string;
  };
  category: BusinessCategory;
  location: {
    latitude: number;
    longitude: number;
    address: {
      ar: string;
      fr: string;
      en: string;
    };
    wilaya: string;
    commune: string;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  workingHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  rating: number;
  reviews: Review[];
  promotions: Promotion[];
  photos: string[];
  verified: boolean;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  photos?: string[];
  createdAt: string;
}

export interface Promotion {
  id: string;
  title: {
    ar: string;
    fr: string;
    en: string;
  };
  description: {
    ar: string;
    fr: string;
    en: string;
  };
  startDate: string;
  endDate: string;
  discount?: number;
  image?: string;
}