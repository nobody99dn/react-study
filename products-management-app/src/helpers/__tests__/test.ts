import { currencyFormat } from '../';

test('should format 20000 to 20 000', () => {
  expect(currencyFormat(20000)).toMatch('20 000');
});
