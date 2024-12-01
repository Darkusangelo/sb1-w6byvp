import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useBusinesses } from '@/hooks/useBusinesses';
import { BusinessListItem } from './BusinessListItem';
import { BusinessListEmpty } from './BusinessListEmpty';
import { Loading } from '@/components/ui/Loading';
import { theme } from '@/constants/theme';

export function BusinessList() {
  const { data: businesses, isLoading } = useBusinesses();

  if (isLoading) {
    return <Loading />;
  }

  if (!businesses?.length) {
    return <BusinessListEmpty />;
  }

  return (
    <FlatList
      data={businesses}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <BusinessListItem business={item} />
        </View>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  itemContainer: {
    marginBottom: theme.spacing.md,
  },
});