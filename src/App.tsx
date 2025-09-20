import { useState, type ChangeEvent } from 'react';
import { Map } from './components/Map';
import { TYPES_OF_THINKING } from './data/position-data.ts';
import { MapLegend } from './components/MapLegend.tsx';

export const App = () => {
  const [typeOfThinking, setTypeOfThinking] = useState('everything');

  const handleTypeOfThinking = (e: ChangeEvent<HTMLSelectElement>) =>
    setTypeOfThinking(e.target.value);

  return (
    <>
      <header>
        How Design Makes Us
        <select
          name="type of thinking"
          value={typeOfThinking}
          onChange={handleTypeOfThinking}
        >
          {TYPES_OF_THINKING.map((typeOfThinking) => (
            <option key={typeOfThinking} value={typeOfThinking}>
              {typeOfThinking.charAt(0).toUpperCase() + typeOfThinking.slice(1)}
            </option>
          ))}
        </select>
        <p className="description">
          How might maps show beyond location? This is a way to think about
          spatial design. These places are designed to evoke certain feelings or
          thoughts, following the principles in{' '}
          <a href="https://www.goodreads.com/en/book/show/55660935-how-design-makes-us-think-pb">
            How Design Makes Us Think: And Feel and Do Things
          </a>
          .
        </p>
      </header>
      <Map typeOfThinking={typeOfThinking} />
      <MapLegend />
    </>
  );
};
