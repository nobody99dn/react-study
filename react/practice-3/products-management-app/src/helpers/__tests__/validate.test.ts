import { validateProduct } from '..';
import { ERROR_MESSAGES } from '@constants/index';
import { Product } from '@models/product';

describe('Validate', () => {
  test('should return with errors', () => {
    const productMock: Product = {
      id: '',
      name: '',
      price: 0,
      type: '',
      imageUrl: ''
    };

    const errors = validateProduct(productMock);

    expect(errors).toEqual(
      expect.objectContaining({
        name: ERROR_MESSAGES.PRODUCT_NAME_REQUIRED,
        type: ERROR_MESSAGES.PRODUCT_TYPE_REQUIRED,
        price: ERROR_MESSAGES.PRODUCT_PRICE_REQUIRED,
        imageUrl: ERROR_MESSAGES.PRODUCT_IMAGE_REQUIRED
      })
    );
  });
});
