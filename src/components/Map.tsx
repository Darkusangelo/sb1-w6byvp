import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import { useBusinesses } from '../hooks/useBusinesses';

// Fix Leaflet default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
  const { t, i18n } = useTranslation();
  const { data: businesses } = useBusinesses();
  
  // Center of Algeria (Algiers)
  const position: [number, number] = [36.7538, 3.0588];

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="w-full h-[calc(100vh-4rem)]"
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {businesses?.map((business) => (
        <Marker
          key={business.id}
          position={[business.location.latitude, business.location.longitude]}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold">{business.name[i18n.language as keyof typeof business.name]}</h3>
              <p className="text-sm text-gray-600">{business.location.address[i18n.language as keyof typeof business.name]}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}