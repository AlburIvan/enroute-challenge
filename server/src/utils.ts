import { Code } from '@prisma/client';

export function calculateResistance(bands: Code[]) {
  // Since it is a four-band resistor, the first 2 bands are our significant digits
  const significantDigits = bands[0].multiplier * 10 + bands[1].multiplier;

  // then we multiply it by the multiplier, which is the third band
  const value = significantDigits * Math.pow(10, bands[2].multiplier);

  // return the value as a number
  return value;
}

export function calculateToleranceRange(resistance: number, tolerance: number) {
  // Calculate the tolerance range
  const minResistance = resistance - resistance * (tolerance / 100);
  const maxResistance = resistance + resistance * (tolerance / 100);

  // Return the tolerance range as an array
  return [minResistance, maxResistance];
}
