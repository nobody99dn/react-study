// Constants
import { ACTIONS } from './constants';

// Type
import { Product } from 'type/product';

const getProductsRequest = () => ({
  type: ACTIONS.GET_PRODUCTS_REQUEST
});

const getProductsSuccess = (payload: Product[]) => ({
  type: ACTIONS.GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsFailed = (payload: string) => ({
  type: ACTIONS.GET_PRODUCTS_FAILED,
  payload
});

const addProductRequest = () => ({
  type: ACTIONS.ADD_PRODUCT_REQUEST
});

const addProductSuccess = (payload: { product: Product; message: string }) => ({
  type: ACTIONS.ADD_PRODUCT_SUCCESS,
  payload
});

const addProductFailed = (payload: string) => ({
  type: ACTIONS.ADD_PRODUCT_FAILED,
  payload
});

const deleteProductRequest = () => ({
  type: ACTIONS.DELETE_PRODUCT_REQUEST
});

const deleteProductSuccess = (payload: {
  productId: string;
  message: string;
}) => ({
  type: ACTIONS.DELETE_PRODUCT_SUCCESS,
  payload
});

const deleteProductFailed = (payload: string) => ({
  type: ACTIONS.DELETE_PRODUCT_FAILED,
  payload
});

const editProductRequest = () => ({
  type: ACTIONS.EDIT_PRODUCT_REQUEST
});

const editProductSuccess = (payload: {
  product: Product;
  message: string;
}) => ({
  type: ACTIONS.EDIT_PRODUCT_SUCCESS,
  payload
});

const editProductFailed = (payload: string) => ({
  type: ACTIONS.EDIT_PRODUCT_FAILED,
  payload
});

const filterProductsRequest = () => ({
  type: ACTIONS.FILTER_PRODUCTS_REQUEST
});

const filterProductsSuccess = (payload: any) => ({
  type: ACTIONS.FILTER_PRODUCTS_SUCCESS,
  payload
});

const searchProductsSuccess = (payload: any) => ({
  type: ACTIONS.SEARCH_PRODUCTS_SUCCESS,
  payload
});

const clearMessages = () => ({
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
