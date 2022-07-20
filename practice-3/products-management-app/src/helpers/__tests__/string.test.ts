import { currencyFormat } from '..';

describe('Current format', () => {
  test('should format number greater than 3 characters', () => {
    expect(currencyFormat(20500)).toMatch('20 500');
  });

  test('should format number less than 3 characters', () => {
    expect(currencyFormat(50)).toMatch('50');
  });
});
