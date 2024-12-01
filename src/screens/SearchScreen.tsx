import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SearchBar } from '../components/search/SearchBar';
import { CategoryList } from '../components/business/CategoryList';
import { BusinessCard } from '../components/business/BusinessCard';
import { useBusinesses } from '../hooks/useBusinesses';

export function SearchScreen() {
  const { data: businesses, isLoading } = useBusinesses();

  return (
    <View style={styles.container}>
      <SearchBar />
      <CategoryList />
      <FlatList
        data={businesses}
        renderItem={({ item }) => <BusinessCard business={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  listContent: {
    padding: 16,
  },
});