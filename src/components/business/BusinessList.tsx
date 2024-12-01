import { useTranslation } from 'react-i18next';
import { useBusinesses } from '../../hooks/useBusinesses';
import BusinessCard from './BusinessCard';

export default function BusinessList() {
  const { t } = useTranslation();
  const { data: businesses, isLoading, error } = useBusinesses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4">
        {error.message}
      </div>
    );
  }

  if (!businesses?.length) {
    return (
      <div className="text-gray-500 p-4 text-center">
        {t('common.noResults')}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}