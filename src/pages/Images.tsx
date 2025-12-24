import { Link, useLocation } from 'wouter';
import { POSITIONS_ALL } from '../data/position-data';
import { Card } from '../components/Card';

export const Images = () => {
  const [, setLocation] = useLocation();

  const handleCardClick = (date: string) => {
    setLocation(`/?date=${date}`);
  };

  return (
    <div className="images-page">
      <div className="images-header">
        <h1>All Images</h1>
        <Link href="/">Back to Home</Link>
      </div>
      <div className="images-grid">
        {POSITIONS_ALL.map((position, index) => (
          <div
            key={index}
            className="image-card"
            onClick={() => handleCardClick(position.date)}
          >
            <Card position={position} />
          </div>
        ))}
      </div>
    </div>
  );
};
