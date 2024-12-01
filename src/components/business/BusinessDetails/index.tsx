import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Business } from '@/types/business';
import { BusinessInfo } from './BusinessInfo';
import { BusinessPromotions } from './BusinessPromotions';
import { theme } from '@/constants/theme';

interface BusinessDetailsProps {
  business: Business;
}

export function BusinessDetails({ business }: BusinessDetailsProps) {
  return (
    <ScrollView style={styles.container}>
      <BusinessInfo business={business} />
      <BusinessPromotions promotions={business.promotions} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});