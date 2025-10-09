import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import {
  MARKER_COLORS,
  POSITION_CENTER,
  POSITIONS_ALL,
} from '../data/position-data';

const TYPE_ICONS: Record<string, L.DivIcon> = {};

POSITIONS_ALL.forEach((pos) => {
  const type = pos.typeOfThinking;
  if (!TYPE_ICONS[type]) {
    TYPE_ICONS[type] = L.divIcon({
      className: `minimal-marker`,
      html: `<div style="background-color: ${MARKER_COLORS[type]};"></div>`,
    });
  }
});

type MapProps = {
  typeOfThinking: string;
};

export const Map = ({ typeOfThinking }: MapProps) => {
  const filteredPositions =
    typeOfThinking === 'think'
      ? POSITIONS_ALL
      : POSITIONS_ALL.filter((pos) => pos.typeOfThinking === typeOfThinking);

  return (
    <MapContainer
      center={POSITION_CENTER}
      zoom={13.9}
      style={{ height: '100vh' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />
      {filteredPositions.map((position, index) => (
        <Marker
          key={index}
          position={[position.lat, position.lng]}
          icon={TYPE_ICONS[position.typeOfThinking]}
        >
          <Popup className="minimal-popup">
            <img src={`/images/${position.date}.jpg`} />
            <p>{position.title}</p>
            <p className="typeOfThinking">
              {position.typeOfThinking.charAt(0).toUpperCase() +
                position.typeOfThinking.slice(1)}
            </p>
            <p>{position.why}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
