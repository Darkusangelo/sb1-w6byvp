import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { useTranslation } from 'react-i18next';
import { Business } from '../../types/business';

interface BusinessMarkerProps {
  business: Business;
}

export function BusinessMarker({ business }: BusinessMarkerProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof business.name;

  return (
    <Marker
      coordinate={{
        latitude: business.location.latitude,
        longitude: business.location.longitude,
      }}
    >
      <Callout>
        <View style={styles.callout}>
          <Text style={styles.title}>{business.name[lang]}</Text>
          <Text style={styles.address}>{business.location.address[lang]}</Text>
          <Text style={styles.rating}>★ {business.rating.toFixed(1)}</Text>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  callout: {
    padding: 8,
    maxWidth: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#f59e0b',
  },
});