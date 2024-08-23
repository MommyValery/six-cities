import leaflet, { Map } from 'leaflet';
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { CityType } from '../../types/offer';


export function useMap(mapRef:MutableRefObject<HTMLElement | null>, city: CityType): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const result: Map = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom,
      });
      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(result);
      setMap(result);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
}
