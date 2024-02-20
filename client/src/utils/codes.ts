import { Band } from '../types';

export const colorCodes: Band[] = [
  { name: 'Black', bgColor: 'bg-gray-500' },
  { name: 'Brown', bgColor: 'bg-stone-500' },
  { name: 'Red', bgColor: 'bg-red-500' },
  { name: 'Orange', bgColor: 'bg-orange-500' },
  { name: 'Yellow', bgColor: 'bg-yellow-300' },
  { name: 'Green', bgColor: 'bg-lime-500' },
  { name: 'Blue', bgColor: 'bg-blue-500' },
  { name: 'Violet', bgColor: 'bg-violet-500' },
  { name: 'Gray', bgColor: 'bg-gray-300' },
  { name: 'White', bgColor: 'bg-gray-200' },
  { name: 'Gold', bgColor: 'bg-amber-500' },
  { name: 'Silver', bgColor: 'bg-slate-300' },
];

export const firstBandCodes: Band[] = [...colorCodes.filter((band) => !['Black', 'Gold', 'Silver'].includes(band.name))];

export const secondBandCodes: Band[] = [...colorCodes.filter((band) => !['Gold', 'Silver'].includes(band.name))];

export const multiplierCodes: Band[] = [...colorCodes];

export const toleranceCodes: Band[] = [...colorCodes.filter((band) => !['Black', 'White'].includes(band.name))];
