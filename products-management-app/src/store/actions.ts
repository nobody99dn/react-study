// Constants
import { ACTIONS } from './constants';

// Type
import { Product } from '@models/product';
import { FilterOrderOptions, ProductTypes } from '@constants/types';

export interface ActionProps {
  type: string;
  payload?: {
    products?: Product[];
    successMessage?: string;
    errorMessage?: string;
    product?: Product;
    productId?: string;
    currentFilterTypeParam?: ProductTypes;
    currentFilterPriceParam?: FilterOrderOptions;
    filteredProducts?: Product[];
    input?: string;
  };
}

const getProductsRequest = (): ActionProps => ({
  type: ACTIONS.GET_PRODUCTS_REQUEST
});

const getProductsSuccess = (payload: { products: Product[] }): ActionProps => ({
  type: ACTIONS.GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsFailed = (payload: { errorMessage: string }): ActionProps => ({
  type: ACTIONS.GET_PRODUCTS_FAILED,
  payload
});

const addProductRequest = (): ActionProps => ({
  type: ACTIONS.ADD_PRODUCT_REQUEST
});

const addProductSuccess = (payload: {
  product: Product;
  successMessage: string;
}): ActionProps => ({
  type: ACTIONS.ADD_PRODUCT_SUCCESS,
  payload
});

const addProductFailed = (payload: { errorMessage: string }): ActionProps => ({
  type: ACTIONS.ADD_PRODUCT_FAILED,
  payload
});

const deleteProductRequest = (): ActionProps => ({
  type: ACTIONS.DELETE_PRODUCT_REQUEST
});

const deleteProductSuccess = (payload: {
  productId: string;
  successMessage: string;
}): ActionProps => ({
  type: ACTIONS.DELETE_PRODUCT_SUCCESS,
  payload
});

const deleteProductFailed = (payload: {
  errorMessage: string;
}): ActionProps => ({
  type: ACTIONS.DELETE_PRODUCT_FAILED,
  payload
});

const editProductRequest = (): ActionProps => ({
  type: ACTIONS.EDIT_PRODUCT_REQUEST
});

const editProductSuccess = (payload: {
  product: Product;
  successMessage: string;
}): ActionProps => ({
  type: ACTIONS.EDIT_PRODUCT_SUCCESS,
  payload
});

const editProductFailed = (payload: { errorMessage: string }): ActionProps => ({
  type: ACTIONS.EDIT_PRODUCT_FAILED,
  payload
});

const filterProductsRequest = (): ActionProps => ({
  type: ACTIONS.FILTER_PRODUCTS_REQUEST
});

const filterProductsSuccess = (payload: {
  filteredProducts: Product[];
  currentFilterTypeParam: ProductTypes;
  currentFilterPriceParam: FilterOrderOptions;
}): ActionProps => ({
  type: ACTIONS.FILTER_PRODUCTS_SUCCESS,
  payload
});

const searchProductsSuccess = (payload: {
  filterProducts: Product[];
  input: string;
}): ActionProps => ({
  type: ACTIONS.SEARCH_PRODUCTS_SUCCESS,
  payload
});

const clearMessages = (): ActionProps => ({
  type: ACTIONS.CLEAR_MESSAGES
});

export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  addProductRequest,
  addProductSuccess,
  addProductFailed,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailed,
  editProductRequest,
  editProductSuccess,
  editProductFailed,
  filterProductsRequest,
  filterProductsSuccess,
  searchProductsSuccess,
  clearMessages
};
