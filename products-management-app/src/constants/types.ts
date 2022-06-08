export enum ButtonVariants {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum FwType {
  Bold = 700,
  Normal = 400,
  Light = 300
}

export enum TextFieldVariants {
  Standard = 'standard',
  Outline = 'outline',
  Error = 'error'
}

export enum Currencies {
  Dollar = '$',
  Euro = '€',
  VND = '₫'
}

export enum FormVariants {
  Create = 'Create',
  Edit = 'Edit'
}

export enum ImageVariants {
  Default = 'default',
  Logo = 'logo',
  Icon = 'icon'
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
  Asc = 'Ascending',
  Desc = 'Descending'
}

export const ORDER_OPTIONS = [FilterOrderOptions.Asc, FilterOrderOptions.Desc];
