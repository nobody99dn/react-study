// Library
import { useEffect } from 'react';
import useSWR from 'swr';
import { AxiosError } from 'axios';

// Constants
import {
  ProductTypes,
  FilterOrderOptions,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  URL_PRODUCTS
} from '@constants/index';

// Model
import { Product } from '@models/product';

// Store
import {
  useStore,
  addProductFailed,
  addProductSuccess,
  deleteProductFailed,
  deleteProductSuccess,
  editProductFailed,
  editProductSuccess,
  filterProductsSuccess,
  searchProductsSuccess,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  filterProductsRequest,
  editProductRequest,
  deleteProductRequest,
  addProductRequest
} from '@store/index';

// Helpers
import { get, post, remove, update } from '@helpers/clientRequests';
import { filterTypeAndPriceOrder, queryProducts } from '@helpers/queries';

/**
 * This hook help execute product data
 *
 * @returns Actions
 */
const useProducts = () => {
  const { data, error, isValidating, mutate } = useSWR<Product[]>(
    [URL_PRODUCTS],
    get
  );

  const { dispatch } = useStore();

  // Handle get all products when loaded
  useEffect(() => {
    !isValidating && getProducts();
  }, [isValidating]);

  /**
   * Get all products and save to local
   */
  const getProducts = async (): Promise<void> => {
    try {
      dispatch(getProductsRequest());

      // Execute data when loaded
      const products: Product[] = data || [];

      if (error instanceof AxiosError && error.response?.status === 404) {
        throw new Error(ERROR_MESSAGES.FILE_NOT_FOUND);
      }

      if (error instanceof AxiosError) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      if (!error && products) {
        dispatch(getProductsSuccess({ products }));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProductsFailed({ errorMessage: error.message }));
      }
    }
  };

  /**
   * Add new product
   *
   * @param product Product
   * @returns void
   */
  const createProduct = async (product: Product): Promise<void> => {
    try {
      dispatch(addProductRequest());

      const newProduct: Product = await post(URL_PRODUCTS, product);

      if (!newProduct) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      await mutate([...(data || []), newProduct], false);

      dispatch(
        addProductSuccess({
          product: newProduct,
          successMessage: SUCCESS_MESSAGES.ADD_PRODUCT_SUCCESS
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(addProductFailed({ errorMessage: error.message }));
      }
    }
  };

  /**
   * Edit a product
   *
   * @param product Product
   * @returns void
   */
  const editProduct = async (product: Product): Promise<void> => {
    try {
      dispatch(editProductRequest());

      const updatedProduct: Product = await update(
        `${URL_PRODUCTS}/${product.id}`,
        product
      );

      const updatedProductIndex: number =
        data?.findIndex(
          (product: Product) => product.id === updatedProduct.id
        ) || 0;

      if (!updatedProduct || !updatedProductIndex) {
        throw new Error(ERROR_MESSAGES.EDIT_PRODUCT_FAILED);
      }

      data?.splice(updatedProductIndex, 1, updatedProduct);

      await mutate([...(data || [])], false);

      dispatch(
        editProductSuccess({
          product: updatedProduct,
          successMessage: SUCCESS_MESSAGES.EDIT_PRODUCT_SUCCESS
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(editProductFailed({ errorMessage: error.message }));
        return;
      }
    }
  };

  /**
   * Delete product by id
   *
   * @param id string
   * @returns void
   */
  const deleteProduct = async (id: string): Promise<void> => {
    try {
      dispatch(deleteProductRequest());

      const deletedProduct: Product = await remove(`${URL_PRODUCTS}/${id}`);

      const updatedProducts: Product[] = [...(data || [])];

      const deletedProductIndex: number =
        updatedProducts?.findIndex(
          (product: Product) => product.id === deletedProduct.id
        ) || 0;

      if (!deletedProduct || !deletedProductIndex) {
        throw new Error(ERROR_MESSAGES.REMOVE_PRODUCT_FAILED);
      }

      updatedProducts?.splice(deletedProductIndex, 1);

      await mutate([...(updatedProducts || [])], false);

      dispatch(
        deleteProductSuccess({
          productId: deletedProduct.id,
          successMessage: SUCCESS_MESSAGES.REMOVE_PRODUCT_SUCCESS
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(deleteProductFailed({ errorMessage: error.message }));
        return;
      }
    }
  };

  /**
   * Search product by name
   *
   * @param input string
   */
  const searchingProducts = async (input: string) => {
    const filteredProducts: Product[] = await get(queryProducts(input));

    dispatch(searchProductsSuccess({ filteredProducts, input }));
  };

  /**
   * Filter products by type and price option
   *
   * @param currentFilterTypeParam ProductTypes
   * @param currentFilterPriceParam FilterOrderOptions
   */
  const filterProducts = async (
    currentFilterTypeParam: ProductTypes,
    currentFilterPriceParam: FilterOrderOptions
  ) => {
    dispatch(filterProductsRequest());

    const filteredProducts: Product[] = await get(
      filterTypeAndPriceOrder(currentFilterTypeParam, currentFilterPriceParam)
    );

    dispatch(
      filterProductsSuccess({
        currentFilterTypeParam,
        currentFilterPriceParam,
        filteredProducts
      })
    );
  };

  return {
    getProducts,
    deleteProduct,
    createProduct,
    editProduct,
    searchingProducts,
    filterProducts
  };
};

export default useProducts;
