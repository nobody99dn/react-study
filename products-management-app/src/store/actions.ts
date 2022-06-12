// Constants
import { ACTIONS } from './constants';

const callApi = () => ({
  type: ACTIONS.CALL_API
});

const error = (payload: any) => ({
  type: ACTIONS.ERROR,
  payload
});

const getProducts = (payload: any) => ({
  type: ACTIONS.GET_PRODUCTS,
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
  type: ACTIONS.FILTER_PRODUCTS,
  payload
});

const searchProducts = (payload: any) => ({
  type: ACTIONS.SEARCH_PRODUCTS,
  payload
});

export {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  filterProducts,
  searchProducts,
  callApi,
  error
};
