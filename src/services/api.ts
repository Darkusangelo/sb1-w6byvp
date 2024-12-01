import { Business, BusinessCategory } from '../types/business';

const API_BASE_URL = 'https://api.dzayergo.com'; // Replace with actual API URL

export async function fetchBusinesses(params: {
  category?: BusinessCategory;
  query?: string;
  radius?: number;
  lat?: number;
  lng?: number;
}): Promise<Business[]> {
  // This is a mock implementation
  // Replace with actual API call when backend is ready
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: {
            ar: 'مطعم الجزائر',
            fr: 'Restaurant Alger',
            en: 'Algiers Restaurant'
          },
          category: 'restaurant',
          location: {
            latitude: 36.7538,
            longitude: 3.0588,
            address: {
              ar: 'شارع العربي بن مهيدي، الجزائر',
              fr: 'Rue Larbi Ben M\'hidi, Alger',
              en: 'Larbi Ben M\'hidi Street, Algiers'
            },
            wilaya: 'Alger',
            commune: 'Alger Centre'
          },
          contact: {
            phone: '+213 21 00 00 00',
            email: 'contact@example.com'
          },
          workingHours: {
            monday: { open: '08:00', close: '23:00' },
            tuesday: { open: '08:00', close: '23:00' },
            wednesday: { open: '08:00', close: '23:00' },
            thursday: { open: '08:00', close: '23:00' },
            friday: { open: '14:00', close: '23:00' },
            saturday: { open: '08:00', close: '23:00' },
            sunday: { open: '08:00', close: '23:00' }
          },
          rating: 4.5,
          reviews: [],
          promotions: [],
          photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5'],
          verified: true,
          ownerId: 'owner1',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]);
    }, 1000);
  });
}