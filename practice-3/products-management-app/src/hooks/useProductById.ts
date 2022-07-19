// Library
import useSWR from 'swr';

// Constants
import { URL_PRODUCTS, ERROR_MESSAGES } from '@constants/index';

// Helper
import { get } from '@helpers/clientRequests';

// Model
import { Product } from '@models/product';

// Store
import {
  useStore,
  getProductRequest,
  getProductSuccess,
  getProductFailed
} from '@store/index';

/**
 * This hook handle product with id
 *
 * @param id string
 * @returns {getProduct, isValidating}
 */
const useProductById = (id: string) => {
  const { data, error, isValidating } = useSWR<Product>(
    [`${URL_PRODUCTS}/${id}`],
    get
  );

  const { dispatch } = useStore();

  /**
   * Get Product
   *
   * @returns Product
   */
  const getProduct = async (): Promise<void> => {
    try {
      dispatch(getProductRequest());

      if (error) {
        throw new Error(ERROR_MESSAGES.PRODUCT_NOT_FOUND);
      }

      if (data) {
        dispatch(getProductSuccess({ product: data }));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProductFailed({ errorMessage: error.message }));
      }
    }
  };

  return { getProduct, isValidating };
};

export default useProductById;
