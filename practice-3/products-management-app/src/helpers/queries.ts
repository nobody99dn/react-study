import { URL_PRODUCTS } from '@constants/api';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

const filterTypeAndPriceOrder = (
  type: ProductTypes,
  priceOrder: FilterOrderOptions
) =>
  `${URL_PRODUCTS}?${`type=${type}`}${priceOrder ? '&' : ''}${
    priceOrder ? `sortBy=price&order=${priceOrder}` : ''
  }`;

const queryProducts = (input: string) => `${URL_PRODUCTS}?search=${input}`;

export { filterTypeAndPriceOrder, queryProducts };
