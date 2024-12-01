import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
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
} from 'lucide-react-native';

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

export function CategoryList() {
  const { t } = useTranslation();
  const { selectedCategory, setSelectedCategory } = useBusinessStore();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {(Object.keys(categoryIcons) as BusinessCategory[]).map((category) => {
        const Icon = categoryIcons[category];
        const isSelected = selectedCategory === category;

        return (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(isSelected ? null : category)}
            style={[
              styles.button,
              isSelected && styles.selectedButton,
            ]}
          >
            <Icon
              size={20}
              color={isSelected ? '#fff' : '#059669'}
            />
            <Text
              style={[
                styles.buttonText,
                isSelected && styles.selectedButtonText,
              ]}
            >
              {t(`categories.${category}`)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecfdf5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#059669',
  },
  buttonText: {
    marginLeft: 8,
    color: '#059669',
    fontWeight: '500',
  },
  selectedButtonText: {
    color: '#fff',
  },
});