import { URL_PRODUCTS } from '@constants/api';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

// TODO: check naming: generate URL
const filterTypeAndPriceOrder = (
  type: ProductTypes,
  priceOrder: FilterOrderOptions
) =>
  `${URL_PRODUCTS}?${`type=${type}`}${priceOrder ? '&' : ''}${
    priceOrder ? `sortBy=price&order=${priceOrder}` : ''
  }`;

// TODO: check naming: generate URL
const queryProducts = (input: string) => `${URL_PRODUCTS}?search=${input}`;

export { filterTypeAndPriceOrder, queryProducts };
