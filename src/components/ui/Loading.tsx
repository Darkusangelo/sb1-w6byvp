import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { theme } from '@/constants/theme';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});