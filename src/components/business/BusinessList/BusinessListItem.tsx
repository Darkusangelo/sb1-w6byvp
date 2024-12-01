import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Star, MapPin, Phone } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { Business } from '@/types/business';
import { theme } from '@/constants/theme';
import { Card } from '@/components/ui/Card';

interface BusinessListItemProps {
  business: Business;
  onPress?: () => void;
}

export function BusinessListItem({ business, onPress }: BusinessListItemProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof business.name;

  return (
    <Card onPress={onPress}>
      {business.photos[0] && (
        <Image
          source={{ uri: business.photos[0] }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{business.name[lang]}</Text>
        
        <View style={styles.ratingContainer}>
          <Star size={16} color={theme.colors.primary} />
          <Text style={styles.rating}>{business.rating.toFixed(1)}</Text>
        </View>

        <View style={styles.infoContainer}>
          <MapPin size={16} color={theme.colors.gray} />
          <Text style={styles.info}>{business.location.address[lang]}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Phone size={16} color={theme.colors.gray} />
          <Text style={styles.info}>{business.contact.phone}</Text>
        </View>

        {business.promotions.length > 0 && (
          <View style={styles.promotion}>
            <Text style={styles.promotionText}>
              {business.promotions[0].title[lang]}
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: theme.borderRadius.md,
    borderTopRightRadius: theme.borderRadius.md,
  },
  content: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
    color: theme.colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  rating: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.primary,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  info: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.gray,
  },
  promotion: {
    backgroundColor: '#fef2f2',
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.sm,
    marginTop: theme.spacing.sm,
  },
  promotionText: {
    color: theme.colors.error,
  },
});