import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react-native';
import { useBusinessStore } from '../../store/businessStore';

export function SearchBar() {
  const { t } = useTranslation();
  const { searchQuery, setSearchQuery } = useBusinessStore();

  return (
    <View style={styles.container}>
      <Search size={20} color="#059669" />
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t('common.search')}
        placeholderTextColor="#059669"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecfdf5',
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: '#059669',
  },
});