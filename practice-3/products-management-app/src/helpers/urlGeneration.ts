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
      return (result += `?type=${type}&sortBy=price&order=${priceOrder}`);

    case !!type:
      return (result += `?type=${type}`);

    case !!priceOrder:
      return (result += `?sortBy=price&order=${priceOrder}`);

    case searchInput && searchInput !== '':
      return (result += `?search=${searchInput}`);

    default:
      return result;
  }
};

export { urlGeneration };
