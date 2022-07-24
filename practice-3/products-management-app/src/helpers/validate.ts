// Constants
import { INIT_ERRORS, ProductTypes, ValidateError } from '@constants/types';

// Model
import { Product } from '@models/product';

export const validateProduct = ({ name, type, price, imageUrl }: Product) => {
  const errors: ValidateError = { ...INIT_ERRORS };

  if (!name) {
    errors.name = 'Username is required!';
  }
  if (!type) {
    errors.type = 'Type is required!';
  } else if (
    !Object.values(ProductTypes).includes(type as unknown as ProductTypes)
  ) {
    errors.type = `${type} is exists!`;
  }
  if (!price) {
    errors.price = 'Price is required!';
  }
  if (!imageUrl) {
    errors.imageUrl = 'Image is required!';
  }

  return errors;
};
