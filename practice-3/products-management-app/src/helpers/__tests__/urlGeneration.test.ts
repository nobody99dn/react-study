// Queries
import { urlGeneration } from '..';

// Constants
import { ProductTypes } from '@constants/types';
import { FilterOrderOptions } from '@constants/types';

describe('Query testing', () => {
  test('should return correctly', () => {
    expect(
      urlGeneration({
        type: ProductTypes.Phone,
        priceOrder: FilterOrderOptions.Desc
      })
    ).toMatch('?type=Phone&sortBy=price&order=desc');
  });

  test('should return correct if ProductType empty', () => {
    expect(urlGeneration({ priceOrder: FilterOrderOptions.Desc })).toMatch(
      'sortBy=price&order=desc'
    );
  });

  test('should return correct if FilterOrderOptions empty', () => {
    expect(urlGeneration({ type: ProductTypes.Laptop })).toMatch(
      '?type=Laptop'
    );
  });

  test('should return correct with input value', () => {
    expect(urlGeneration({ searchInput: 'input' })).toMatch('?search=input');
  });
});
