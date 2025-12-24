import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { POSITIONS_ALL } from '../data/position-data';

export const MapController = ({ zoomToDate }: { zoomToDate?: string }) => {
  const map = useMap();

  useEffect(() => {
    if (zoomToDate) {
      const position = POSITIONS_ALL.find((pos) => pos.date === zoomToDate);
      if (position) {
        map.setView([position.lat, position.lng], 20, {
          animate: true,
          duration: 1,
        });
      }
    }
  }, [zoomToDate, map]);

  return null;
};
