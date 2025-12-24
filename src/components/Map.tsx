import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import {
  MARKER_COLORS,
  POSITION_CENTER,
  POSITIONS_ALL,
} from '../data/position-data';
import { MapController } from './MapController';
import { Card } from './Card';

type MapProps = {
  typeOfThinking: string;
  zoomToDate?: string;
};

export const Map = ({ typeOfThinking, zoomToDate }: MapProps) => {
  const filteredPositions =
    typeOfThinking === 'think'
      ? POSITIONS_ALL
      : POSITIONS_ALL.filter((pos) => pos.typeOfThinking === typeOfThinking);

  return (
    <MapContainer center={POSITION_CENTER} zoom={13.6}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      <MapController zoomToDate={zoomToDate} />
      {filteredPositions.map((position, index) => (
        <Marker
          key={index}
          position={[position.lat, position.lng]}
          icon={L.divIcon({
            className: `minimal-marker ${
              position.topFive ? 'topFive' : ''
            }`.trim(),
            html: `<div style="background-color: ${
              MARKER_COLORS[position.typeOfThinking]
            };"></div>`,
            iconAnchor: [20, 20],
          })}
        >
          <Popup className="minimal-popup">
            <Card position={position} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
