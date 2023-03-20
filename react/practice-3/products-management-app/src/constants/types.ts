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

export type ValidateError = {
  name: string;
  type: string;
  price: string;
  imageUrl: string;
};

export const INIT_ERRORS: ValidateError = {
  name: '',
  price: '',
  type: '',
  imageUrl: ''
};
