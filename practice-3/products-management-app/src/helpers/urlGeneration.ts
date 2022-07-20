import { URL_PRODUCTS } from '@constants/api';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

const urlFilterGenerate = (
  type: ProductTypes | null,
  priceOrder: FilterOrderOptions | null
): string =>
  `${URL_PRODUCTS}?${`type=${type}`}${priceOrder ? '&' : ''}${
    priceOrder ? `sortBy=price&order=${priceOrder}` : ''
  }`;

const urlSearchingGenerate = (input: string): string =>
  `${URL_PRODUCTS}?search=${input}`;

export { urlFilterGenerate, urlSearchingGenerate };
