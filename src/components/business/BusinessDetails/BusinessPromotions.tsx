import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Promotion } from '@/types/business';
import { theme } from '@/constants/theme';
import { Card } from '@/components/ui/Card';

interface BusinessPromotionsProps {
  promotions: Promotion[];
}

export function BusinessPromotions({ promotions }: BusinessPromotionsProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof promotions[0].title;

  if (!promotions.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Promotions</Text>
      <FlatList
        data={promotions}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card style={styles.promotionCard}>
            <Text style={styles.promotionTitle}>{item.title[lang]}</Text>
            <Text style={styles.promotionDescription}>{item.description[lang]}</Text>
            {item.discount && (
              <View style={styles.discountContainer}>
                <Text style={styles.discount}>{item.discount}% OFF</Text>
              </View>
            )}
          </Card>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    color: theme.colors.black,
  },
  listContent: {
    paddingHorizontal: theme.spacing.md,
  },
  promotionCard: {
    width: 280,
    marginRight: theme.spacing.md,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
    color: theme.colors.black,
  },
  promotionDescription: {
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: theme.spacing.sm,
  },
  discountContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    alignSelf: 'flex-start',
  },
  discount: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});