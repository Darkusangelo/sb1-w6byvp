import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Star, MapPin, Phone } from 'lucide-react-native';
import { Business } from '../../types/business';

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof business.name;

  return (
    <TouchableOpacity style={styles.container}>
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
          <Star size={16} color="#f59e0b" />
          <Text style={styles.rating}>{business.rating.toFixed(1)}</Text>
        </View>

        <View style={styles.infoContainer}>
          <MapPin size={16} color="#4b5563" />
          <Text style={styles.info}>{business.location.address[lang]}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Phone size={16} color="#4b5563" />
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    marginLeft: 4,
    color: '#f59e0b',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  info: {
    marginLeft: 8,
    color: '#4b5563',
  },
  promotion: {
    backgroundColor: '#fef2f2',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  promotionText: {
    color: '#dc2626',
  },
});