import { calculateResistance, calculateToleranceRange } from '../src/utils';

const bands = [
  {
    id: 0,
    name: 'Violet',
    code: 'VT',
    multiplier: 7,
    tolerance: 0.1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 0,
    name: 'Green',
    code: 'BN',
    multiplier: 5,
    tolerance: 0.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 0,
    name: 'Yellow',
    code: 'YL',
    multiplier: 4,
    tolerance: 0.02,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 0,
    name: 'Gold',
    code: 'GD',
    multiplier: -1,
    tolerance: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('Test utility module', () => {
  it('calculateResistance should calculate the resistance correctly', () => {
    // expected result, from the configuration above
    const result = 750_000;

    // assertion
    expect(calculateResistance(bands)).toEqual(result);
  });

  it('calculateResistance should calculate the different bands correctly', () => {
    // expected result, from the configuration above
    const result = 750_000;

    const differentBands = [
      ...bands.slice(0, 2),
      {
        id: 0,
        name: 'Red',
        code: 'RD',
        multiplier: 2,
        tolerance: 0.02,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // assertion
    expect(calculateResistance(differentBands)).not.toEqual(result);
    expect(calculateResistance(differentBands)).toEqual(7_500);
  });

  it('calculateToleranceRange should calculate the tolerance range correctly', () => {
    // expected result, from the configuration above
    const result = [712_500, 787_500];

    // assertion
    expect(calculateToleranceRange(750_000, 5)).toEqual(result);
  });

  it('calculateToleranceRange should calculate the different tolerance range correctly', () => {
    // expected result, from the configuration above
    const result = [675_000, 825_000];

    // assertion
    expect(calculateToleranceRange(750_000, 5)).toEqual([712_500, 787_500]);
    expect(calculateToleranceRange(750_000, 10)).toEqual(result);
  });
});
