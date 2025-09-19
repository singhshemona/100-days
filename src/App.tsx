import { useState, type ChangeEvent } from 'react';
import { Map } from './components/Map';
import { TYPES_OF_THINKING } from './data/position-data.ts';

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
      </header>
      <Map typeOfThinking={typeOfThinking} />
    </>
  );
};
