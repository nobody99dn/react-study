import { ProductTypes } from '@constants/types';
import { filterTypeAndPriceOrder, queryProducts } from '..';
import { FilterOrderOptions } from '@constants/types';

describe('Query testing', () => {
  test('should return correctly', () => {
    expect(
      filterTypeAndPriceOrder(ProductTypes.Laptop, '' as FilterOrderOptions)
    ).toMatch('?type=Laptop');

    expect(
      filterTypeAndPriceOrder('' as ProductTypes, FilterOrderOptions.Desc)
    ).toMatch('sortBy=price&order=desc');

    expect(
      filterTypeAndPriceOrder(ProductTypes.Phone, FilterOrderOptions.Desc)
    ).toMatch('?type=Phone&sortBy=price&order=desc');
  });
});
