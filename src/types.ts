import type { TYPES_OF_THINKING } from './data/position-data';

export type TypeOfThinking = (typeof TYPES_OF_THINKING)[number];

export type Position = {
  date: string;
  lat: number;
  lng: number;
  title: string;
  typeOfThinking: TypeOfThinking;
  why: string;
  topFive?: boolean;
};
