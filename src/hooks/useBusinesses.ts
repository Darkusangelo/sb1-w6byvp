import { useQuery } from '@tanstack/react-query';
import { fetchBusinesses } from '../services/api';
import { useBusinessStore } from '../store/businessStore';

export function useBusinesses() {
  const { selectedCategory, searchQuery, radius } = useBusinessStore();
  
  return useQuery({
    queryKey: ['businesses', selectedCategory, searchQuery, radius],
    queryFn: () => fetchBusinesses({
      category: selectedCategory || undefined,
      query: searchQuery,
      radius: radius
    })
  });
}