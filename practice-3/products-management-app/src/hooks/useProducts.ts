// Library
import useSWR from 'swr';

// Constants
import {
  ProductTypes,
  FilterOrderOptions,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
} from '@constants/index';

// Model
import { Product } from '@models/product';

// Service
import {
  addNewProduct,
  filterProductsByTypeAndPrice,
  getAllProduct,
  getProduct,
  removeProduct,
  searchProducts,
  updateProduct
} from '@services/product.service';

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
  getProductRequest,
  getProductSuccess,
  getProductFailed,
  editProductRequest,
  addProductRequest,
  deleteProductRequest
} from '@store/index';
import { URL_PRODUCTS } from '@constants/api';
import { get } from '@helpers/clientRequests';
import { useEffect } from 'react';

/**
 * This hook help execute product data
 *
 * @returns Actions
 */
const useProducts = () => {
  const { dispatch } = useStore();

  const { data, error } = useSWR<Product[]>(URL_PRODUCTS, get);

  useEffect(() => {
    getProducts();
  }, [data]);

  /**
   * Get all products and save to local
   */
  const getProducts = async (): Promise<void> => {
    try {
      dispatch(getProductsRequest());
      console.log('data', data);

      const products: Product[] = data || [];

      if (!products.length) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

      dispatch(getProductsSuccess({ products }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProductsFailed({ errorMessage: error.message }));
      }
    }
  };

  /**
   * Get Product by Id
   *
   * @param id string
   * @returns Product
   */
  const getProductById = async (id: string): Promise<void> => {
    try {
      dispatch(getProductRequest());

      const product: Product = await getProduct(id);

      dispatch(getProductSuccess({ product }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getProductFailed({ errorMessage: error.message }));
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
      const newProduct: Product = await addNewProduct(product);

      if (!newProduct) {
        throw new Error(ERROR_MESSAGES.ADD_PRODUCT_FAILED);
      }

      dispatch(
        addProductSuccess({
          product: newProduct,
          successMessage: SUCCESS_MESSAGES.ADD_PRODUCT_SUCCESS
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(addProductFailed({ errorMessage: error.message }));
        return;
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
      const updatedProduct: Product = await updateProduct(product);
      if (!updatedProduct) {
        throw new Error(ERROR_MESSAGES.EDIT_PRODUCT_FAILED);
      }

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
      const deletedProduct: Product = await removeProduct(id);

      if (!deletedProduct) {
        throw new Error(ERROR_MESSAGES.SERVER_RESPONSE_ERROR);
      }

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
    const filteredProducts: Product[] = await searchProducts(input);

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

    const filteredProducts: Product[] = await filterProductsByTypeAndPrice(
      currentFilterTypeParam,
      currentFilterPriceParam
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
    getProductById,
    deleteProduct,
    createProduct,
    editProduct,
    searchingProducts,
    filterProducts,
    data
  };
};

export default useProducts;
