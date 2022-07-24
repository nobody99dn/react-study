// Constants
import { ERROR_MESSAGES } from '@constants/messages';
import { INIT_ERRORS, ProductTypes, ValidateError } from '@constants/types';

// Model
import { Product } from '@models/product';

export const validateProduct = ({ name, type, price, imageUrl }: Product) => {
  const errors: ValidateError = { ...INIT_ERRORS };

  if (!name) {
    errors.name = ERROR_MESSAGES.PRODUCT_NAME_REQUIRED;
  }
  if (!type) {
    errors.type = ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED;
  } else if (
    !Object.values(ProductTypes).includes(type as unknown as ProductTypes)
  ) {
    errors.type = `${type} is exists!`;
  }
  if (!price) {
    errors.price = ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED;
  }
  if (!imageUrl) {
    errors.imageUrl = ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED;
  }

  return errors;
};
