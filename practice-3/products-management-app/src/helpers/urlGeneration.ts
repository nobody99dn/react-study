import { URL_PRODUCTS } from '@constants/api';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

type filterType = {
  type?: ProductTypes;
  priceOrder?: FilterOrderOptions;
  searchInput?: string;
};

const urlGeneration = (filterOption: filterType) => {
  const { priceOrder, searchInput, type } = filterOption;

  let result: string = URL_PRODUCTS;
  switch (true) {
    case !!priceOrder && !!type:
      // TODO: return in case
      result += `?type=${type}&sortBy=price&order=${priceOrder}`;
      break;

    case !!type:
      result += `?type=${type}`;
      break;

    case !!priceOrder:
      result += `?sortBy=price&order=${priceOrder}`;
      break;

    case searchInput && searchInput !== '':
      result += `?search=${searchInput}`;
      break;

    default:
      break;
  }

  return result;
};

export { urlGeneration };
