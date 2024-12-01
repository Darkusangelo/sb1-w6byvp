import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Coffee, UtensilsCrossed, Building2, GraduationCap, Store, Stethoscope, Pill, Scale } from 'lucide-react-native';
import { useBusinessStore } from '@/store/businessStore';
import { BusinessCategory } from '@/types/business';
import { CategoryItem } from './CategoryItem';
import { theme } from '@/constants/theme';

const categoryIcons = {
  cafe: Coffee,
  restaurant: UtensilsCrossed,
  hotel: Building2,
  university: GraduationCap,
  store: Store,
  hospital: Stethoscope,
  pharmacy: Pill,
  lawyer: Scale,
} as const;

export function CategoryList() {
  const { t } = useTranslation();
  const { selectedCategory, setSelectedCategory } = useBusinessStore();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {(Object.keys(categoryIcons) as BusinessCategory[]).map((category) => (
        <CategoryItem
          key={category}
          category={category}
          icon={categoryIcons[category]}
          isSelected={selectedCategory === category}
          onPress={() => setSelectedCategory(selectedCategory === category ? null : category)}
          label={t(`categories.${category}`)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
});