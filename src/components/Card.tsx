import type { Position } from '../types';

type CardProps = {
  position: Position;
};

export const Card = ({ position }: CardProps) => {
  return (
    <div>
      <img src={`/images/${position.date}.avif`} alt={position.title} loading="lazy" />
      <p className="position-title">{position.title}</p>
      <p className="position-date">
        {position.date},{' '}
        {position.typeOfThinking.charAt(0).toUpperCase() +
          position.typeOfThinking.slice(1)}
      </p>
      <p>{position.why}</p>
    </div>
  );
};
