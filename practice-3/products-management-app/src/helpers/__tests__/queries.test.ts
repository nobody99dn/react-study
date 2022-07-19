// Queries
import { filterTypeAndPriceOrder, queryProducts } from '..';

// Constants
import { ProductTypes } from '@constants/types';
import { FilterOrderOptions } from '@constants/types';

describe('Query testing', () => {
  test('should return correctly', () => {
    expect(
      filterTypeAndPriceOrder(ProductTypes.Phone, FilterOrderOptions.Desc)
    ).toMatch('?type=Phone&sortBy=price&order=desc');
  });

  test('should return correct if ProductType empty', () => {
    expect(
      filterTypeAndPriceOrder('' as ProductTypes, FilterOrderOptions.Desc)
    ).toMatch('sortBy=price&order=desc');
  });

  test('should return correct if FilterOrderOptions empty', () => {
    expect(
      filterTypeAndPriceOrder(ProductTypes.Laptop, '' as FilterOrderOptions)
    ).toMatch('?type=Laptop');
  });

  test('should return correct queryProducts', () => {
    expect(queryProducts('input')).toMatch('?search=input');
  });
});
