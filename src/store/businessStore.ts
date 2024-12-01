import { create } from 'zustand';
import { Business, BusinessCategory } from '../types/business';

interface BusinessState {
  businesses: Business[];
  selectedCategory: BusinessCategory | null;
  searchQuery: string;
  radius: number;
  loading: boolean;
  error: string | null;
  setBusinesses: (businesses: Business[]) => void;
  setSelectedCategory: (category: BusinessCategory | null) => void;
  setSearchQuery: (query: string) => void;
  setRadius: (radius: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useBusinessStore = create<BusinessState>((set) => ({
  businesses: [],
  selectedCategory: null,
  searchQuery: '',
  radius: 5,
  loading: false,
  error: null,
  setBusinesses: (businesses) => set({ businesses }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setRadius: (radius) => set({ radius }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));