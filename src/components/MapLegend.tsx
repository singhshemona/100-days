import { MARKER_COLORS } from '../data/position-data';

export const MapLegend = () => {
  return (
    <div className="map-legend">
      {Object.entries(MARKER_COLORS).map(([type, color]) => (
        <div className="legend-item" key={type}>
          <div className="legend-color" style={{ backgroundColor: color }} />
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};
