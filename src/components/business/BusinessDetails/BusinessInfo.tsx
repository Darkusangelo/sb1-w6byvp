import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MapPin, Phone, Globe, Clock } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Business } from '@/types/business';
import { theme } from '@/constants/theme';

interface BusinessInfoProps {
  business: Business;
}

export function BusinessInfo({ business }: BusinessInfoProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof business.name;

  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <MapPin size={20} color={theme.colors.gray} />
        <Text style={styles.infoText}>{business.location.address[lang]}</Text>
      </View>

      <View style={styles.infoRow}>
        <Phone size={20} color={theme.colors.gray} />
        <Text style={styles.infoText}>{business.contact.phone}</Text>
      </View>

      {business.contact.website && (
        <View style={styles.infoRow}>
          <Globe size={20} color={theme.colors.gray} />
          <Text style={styles.infoText}>{business.contact.website}</Text>
        </View>
      )}

      <View style={styles.workingHours}>
        <View style={styles.infoRow}>
          <Clock size={20} color={theme.colors.gray} />
          <Text style={styles.infoText}>Working Hours</Text>
        </View>
        {Object.entries(business.workingHours).map(([day, hours]) => (
          <View key={day} style={styles.hoursRow}>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.hours}>{`${hours.open} - ${hours.close}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  infoText: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.gray,
    flex: 1,
  },
  workingHours: {
    marginTop: theme.spacing.md,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: theme.spacing.xl,
    marginBottom: theme.spacing.xs,
  },
  day: {
    color: theme.colors.gray,
    textTransform: 'capitalize',
  },
  hours: {
    color: theme.colors.gray,
  },
});