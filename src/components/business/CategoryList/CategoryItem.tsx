import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import { BusinessCategory } from '@/types/business';

interface CategoryItemProps {
  category: BusinessCategory;
  icon: LucideIcon;
  isSelected: boolean;
  onPress: () => void;
  label: string;
}

export function CategoryItem({ category, icon: Icon, isSelected, onPress, label }: CategoryItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isSelected && styles.selectedContainer,
      ]}
    >
      <Icon
        size={20}
        color={isSelected ? theme.colors.white : theme.colors.primary}
      />
      <Text
        style={[
          styles.label,
          isSelected && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.sm,
  },
  selectedContainer: {
    backgroundColor: theme.colors.primary,
  },
  label: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.primary,
    fontWeight: '500',
  },
  selectedLabel: {
    color: theme.colors.white,
  },
});