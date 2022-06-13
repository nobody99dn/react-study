// Constants
import { ACTIONS } from './constants';

const error = (payload: any) => ({
  type: ACTIONS.ERROR,
  payload
});

const getProductsRequest = () => ({
  type: ACTIONS.GET_PRODUCTS_REQUEST
});

const getProductsSuccess = (payload: any) => ({
  type: ACTIONS.GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsFailed = (payload: any) => ({
  type: ACTIONS.GET_PRODUCTS_FAILED,
  payload
});

const addProduct = (payload: any) => ({
  type: ACTIONS.ADD_PRODUCT,
  payload
});

const deleteProduct = (payload: any) => ({
  type: ACTIONS.DELETE_PRODUCT,
  payload
});

const editProduct = (payload: any) => ({
  type: ACTIONS.EDIT_PRODUCT,
  payload
});

const filterProducts = (payload: any) => ({
  type: ACTIONS.ADD_PRODUCT,
  payload
});

export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailed,
  addProduct,
  deleteProduct,
  editProduct,
  filterProducts,
  error
};
