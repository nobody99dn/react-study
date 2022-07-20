// Constants
import { ACTIONS } from '@constants/index';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

// Model
import { Product } from '@models/product';

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

//* GET PRODUCTS ACTION *\\
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

//* GET PRODUCT ACTION *\\
const getProductRequest = (): ActionProps => ({
  type: ACTIONS.GET_PRODUCT_REQUEST
});

const getProductSuccess = (payload: { product: Product }): ActionProps => ({
  type: ACTIONS.GET_PRODUCT_SUCCESS,
  payload
});

const getProductFailed = (payload: { errorMessage: string }): ActionProps => ({
  type: ACTIONS.GET_PRODUCT_FAILED,
  payload
});

//* ADD PRODUCT ACTION *\\
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

//* DELETE PRODUCT ACTION *\\
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

//* EDIT PRODUCT ACTION *\\
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

//* FILTER PRODUCTS ACTION *\\
const filterProductsRequest = (): ActionProps => ({
  type: ACTIONS.FILTER_PRODUCTS_REQUEST
});

const filterProductsSuccess = (payload: {
  filteredProducts: Product[];
}): ActionProps => ({
  type: ACTIONS.FILTER_PRODUCTS_SUCCESS,
  payload
});

const filterProductsFailed = (payload: {
  errorMessage: string;
}): ActionProps => ({
  type: ACTIONS.FILTER_PRODUCTS_FAILED,
  payload
});

//* SEARCH PRODUCTS ACTION *\\
const searchProductsRequest = (): ActionProps => ({
  type: ACTIONS.SEARCH_PRODUCTS_REQUEST
});

const searchProductsSuccess = (payload: {
  filteredProducts: Product[];
}): ActionProps => ({
  type: ACTIONS.SEARCH_PRODUCTS_SUCCESS,
  payload
});

const searchProductsFailed = (payload: {
  errorMessage: string;
}): ActionProps => ({
  type: ACTIONS.SEARCH_PRODUCTS_FAILED,
  payload
});

//* CLEAR MESSAGE ACTION *\\
const clearMessages = (): ActionProps => ({
  type: ACTIONS.CLEAR_MESSAGES
});

const clearCurrentProduct = (): ActionProps => ({
  type: ACTIONS.CLEAR_CURRENT_PRODUCT
});
export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  getProductRequest,
  getProductSuccess,
  getProductFailed,
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
  filterProductsFailed,
  searchProductsRequest,
  searchProductsSuccess,
  searchProductsFailed,
  clearMessages,
  clearCurrentProduct
};
