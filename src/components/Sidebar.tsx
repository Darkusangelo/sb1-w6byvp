import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { useBusinessStore } from '../store/businessStore';
import CategoryFilter from './business/CategoryFilter';
import BusinessList from './business/BusinessList';

export default function Sidebar() {
  const { t } = useTranslation();
  const { searchQuery, setSearchQuery, radius, setRadius } = useBusinessStore();

  return (
    <aside className="w-80 bg-white h-[calc(100vh-4rem)] shadow-lg flex flex-col">
      <div className="p-4 space-y-4 flex-shrink-0">
        <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-lg">
          <Search className="text-emerald-600 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('common.search')}
            className="bg-transparent outline-none flex-1 placeholder:text-emerald-600/50"
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-lg">{t('common.category')}</h2>
          <CategoryFilter />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-lg">{t('common.distance')}</h2>
          <div className="space-y-2">
            <input
              type="range"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full accent-emerald-600"
              min="0"
              max="50"
              step="1"
            />
            <div className="text-sm text-gray-600 text-center">
              {radius} km
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <BusinessList />
      </div>
    </aside>
  );
}