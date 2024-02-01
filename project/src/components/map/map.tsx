import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from './useMap';
import { CityType, OfferType } from '../../types/offer';
import { CityLocation } from '../../const';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_ACTIVE = 'img/pin-active.svg';

type MapProps = {
  city: CityType;
  items: OfferType[];
  activeItem: number | null;
  place?: 'cities'| 'property';
};

function MapComponent({city, items, activeItem, place = 'cities'}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const activeCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      items.forEach(({location, id}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(
          (id === activeItem)
            ? activeCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
        markers.push(marker);
      });
      const { latitude: lat, longitude: lng,} = CityLocation[city.name];
      map.setView({ lat, lng });
    }

    return () => {
      if (map) {
        markers.forEach((marker) =>
          map.removeLayer(marker)
        );
      }
    };
  }, [map, city, items, activeItem]);

  return <section className={`${place}__map map`} ref={mapRef} />;

}

export default MapComponent;
