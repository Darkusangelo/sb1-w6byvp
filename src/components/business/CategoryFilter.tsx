import { useTranslation } from 'react-i18next';
import { useBusinessStore } from '../../store/businessStore';
import { BusinessCategory } from '../../types/business';
import { 
  Coffee, 
  UtensilsCrossed, 
  Building2, 
  GraduationCap,
  Store,
  Stethoscope,
  Pill,
  Scale
} from 'lucide-react';

const categoryIcons = {
  cafe: Coffee,
  restaurant: UtensilsCrossed,
  hotel: Building2,
  university: GraduationCap,
  store: Store,
  hospital: Stethoscope,
  pharmacy: Pill,
  lawyer: Scale
};

export default function CategoryFilter() {
  const { t } = useTranslation();
  const { selectedCategory, setSelectedCategory } = useBusinessStore();

  return (
    <div className="grid grid-cols-2 gap-2">
      {(Object.keys(categoryIcons) as BusinessCategory[]).map((category) => {
        const Icon = categoryIcons[category];
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
            }`}
          >
            <Icon size={20} />
            <span>{t(`categories.${category}`)}</span>
          </button>
        );
      })}
    </div>
  );
}