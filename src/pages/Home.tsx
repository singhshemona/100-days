import { useState, useEffect, type ChangeEvent } from 'react';
import { Map } from '../components/Map';
import { TYPES_OF_THINKING } from '../data/position-data.ts';
import { MapLegend } from '../components/MapLegend.tsx';
import { NavArrowDown, NavArrowUp } from 'iconoir-react';
import { Link } from 'wouter';

export const Home = () => {
  const [typeOfThinking, setTypeOfThinking] = useState('think');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [zoomToDate, setZoomToDate] = useState<string | undefined>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const date = params.get('date');
    if (date) {
      setZoomToDate(date);
    }
  }, []);

  const handleTypeOfThinking = (e: ChangeEvent<HTMLSelectElement>) =>
    setTypeOfThinking(e.target.value);

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div>
      <Map typeOfThinking={typeOfThinking} zoomToDate={zoomToDate} />
      <div className="introduction">
        <header>
          <h1>
            {' '}
            How Design Makes Us
            <select
              name="type of thinking"
              value={typeOfThinking}
              onChange={handleTypeOfThinking}
            >
              {TYPES_OF_THINKING.map((typeOfThinking) => (
                <option key={typeOfThinking} value={typeOfThinking}>
                  {typeOfThinking.charAt(0).toUpperCase() +
                    typeOfThinking.slice(1)}
                </option>
              ))}
            </select>
          </h1>

          {!isCollapsed && (
            <p className="description">
              How might maps show beyond location? This is a way to think about
              spatial design. These places are designed to evoke certain
              feelings or thoughts, following the principles in{' '}
              <a
                target="_blank"
                href="https://www.goodreads.com/en/book/show/55660935-how-design-makes-us-think-pb"
              >
                How Design Makes Us Think: And Feel and Do Things
              </a>
              . You can <Link href="/images">view all images here</Link>.
            </p>
          )}
        </header>
        {!isCollapsed && <MapLegend />}
        <button onClick={toggleCollapse} aria-expanded={!isCollapsed}>
          {isCollapsed ? <NavArrowDown /> : <NavArrowUp />}
        </button>
      </div>
    </div>
  );
};
