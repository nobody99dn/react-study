// Constants
import { ACTIONS } from '@constants/index';

// Model
import { Product } from '@models/product';
import {
  IAddProductFailed,
  IAddProductRequest,
  IAddProductSuccess,
  IClearCurrentProduct,
  IClearMessage,
  IDeleteProductFailed,
  IDeleteProductRequest,
  IDeleteProductSuccess,
  IEditProductFailed,
  IEditProductRequest,
  IEditProductSuccess,
  IFilterProductsFailed,
  IFilterProductsRequest,
  IFilterProductsSuccess,
  IGetProductFailed,
  IGetProductRequest,
  IGetProductsFailed,
  IGetProductsRequest,
  IGetProductsSuccess,
  IGetProductSuccess,
  ISearchProductsFailed,
  ISearchProductsRequest,
  ISearchProductsSuccess
} from './actionTypes';

//* GET PRODUCTS ACTION *\\
const getProductsRequest = (): IGetProductsRequest => ({
  type: ACTIONS.GET_PRODUCTS_REQUEST
});

const getProductsSuccess = (payload: {
  products: Product[];
}): IGetProductsSuccess => ({
  type: ACTIONS.GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsFailed = (payload: {
  errorMessage: string;
}): IGetProductsFailed => ({
  type: ACTIONS.GET_PRODUCTS_FAILED,
  payload
});

//* GET PRODUCT ACTION *\\
const getProductRequest = (): IGetProductRequest => ({
  type: ACTIONS.GET_PRODUCT_REQUEST
});

const getProductSuccess = (payload: {
  product: Product;
}): IGetProductSuccess => ({
  type: ACTIONS.GET_PRODUCT_SUCCESS,
  payload
});

const getProductFailed = (payload: {
  errorMessage: string;
}): IGetProductFailed => ({
  type: ACTIONS.GET_PRODUCT_FAILED,
  payload
});

//* ADD PRODUCT ACTION *\\
const addProductRequest = (): IAddProductRequest => ({
  type: ACTIONS.ADD_PRODUCT_REQUEST
});

const addProductSuccess = (payload: {
  product: Product;
  successMessage: string;
}): IAddProductSuccess => ({
  type: ACTIONS.ADD_PRODUCT_SUCCESS,
  payload
});

const addProductFailed = (payload: {
  errorMessage: string;
}): IAddProductFailed => ({
  type: ACTIONS.ADD_PRODUCT_FAILED,
  payload
});

//* DELETE PRODUCT ACTION *\\
const deleteProductRequest = (): IDeleteProductRequest => ({
  type: ACTIONS.DELETE_PRODUCT_REQUEST
});

const deleteProductSuccess = (payload: {
  productId: string;
  successMessage: string;
}): IDeleteProductSuccess => ({
  type: ACTIONS.DELETE_PRODUCT_SUCCESS,
  payload
});

const deleteProductFailed = (payload: {
  errorMessage: string;
}): IDeleteProductFailed => ({
  type: ACTIONS.DELETE_PRODUCT_FAILED,
  payload
});

//* EDIT PRODUCT ACTION *\\
const editProductRequest = (): IEditProductRequest => ({
  type: ACTIONS.EDIT_PRODUCT_REQUEST
});

const editProductSuccess = (payload: {
  product: Product;
  successMessage: string;
}): IEditProductSuccess => ({
  type: ACTIONS.EDIT_PRODUCT_SUCCESS,
  payload
});

const editProductFailed = (payload: {
  errorMessage: string;
}): IEditProductFailed => ({
  type: ACTIONS.EDIT_PRODUCT_FAILED,
  payload
});

//* FILTER PRODUCTS ACTION *\\
const filterProductsRequest = (): IFilterProductsRequest => ({
  type: ACTIONS.FILTER_PRODUCTS_REQUEST
});

const filterProductsSuccess = (payload: {
  filteredProducts: Product[];
}): IFilterProductsSuccess => ({
  type: ACTIONS.FILTER_PRODUCTS_SUCCESS,
  payload
});

const filterProductsFailed = (payload: {
  errorMessage: string;
}): IFilterProductsFailed => ({
  type: ACTIONS.FILTER_PRODUCTS_FAILED,
  payload
});

//* SEARCH PRODUCTS ACTION *\\
const searchProductsRequest = (): ISearchProductsRequest => ({
  type: ACTIONS.SEARCH_PRODUCTS_REQUEST
});

const searchProductsSuccess = (payload: {
  filteredProducts: Product[];
}): ISearchProductsSuccess => ({
  type: ACTIONS.SEARCH_PRODUCTS_SUCCESS,
  payload
});

const searchProductsFailed = (payload: {
  errorMessage: string;
}): ISearchProductsFailed => ({
  type: ACTIONS.SEARCH_PRODUCTS_FAILED,
  payload
});

//* CLEAR MESSAGE ACTION *\\
const clearMessages = (): IClearMessage => ({
  type: ACTIONS.CLEAR_MESSAGES
});

const clearCurrentProduct = (): IClearCurrentProduct => ({
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
