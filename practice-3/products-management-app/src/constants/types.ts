export enum Currencies {
  Dollar = '$',
  Euro = '€',
  VND = '₫'
}

export enum ProductTypes {
  Phone = 'Phone',
  Tablet = 'Tablet',
  Laptop = 'Laptop'
}

export const PRODUCT_TYPE_LIST: ProductTypes[] = [
  ProductTypes.Phone,
  ProductTypes.Tablet,
  ProductTypes.Laptop
];

export enum FilterOrderOptions {
  Asc = 'asc',
  Desc = 'desc'
}

export const ORDER_OPTIONS = [FilterOrderOptions.Asc, FilterOrderOptions.Desc];

export const localKey = 'localStates';
