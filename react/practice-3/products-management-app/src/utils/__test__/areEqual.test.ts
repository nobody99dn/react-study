import { areEqual } from '@utils/areEqual';

test('should return true', () => {
  const mock1 = { test: 1 };
  const mock2 = { test: 1 };

  expect(areEqual(mock1, mock2)).toBeTruthy();
});
