// Constants
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from './constants';

const addProduct = (payload: any) => ({
  type: ADD_PRODUCT,
  payload
});

const deleteProduct = (payload: any) => ({
  type: DELETE_PRODUCT,
  payload
});

const editProduct = (payload: any) => ({
  type: EDIT_PRODUCT,
  payload
});

const filterProducts = (payload: any) => ({
  type: ADD_PRODUCT,
  payload
});

export { addProduct, deleteProduct, editProduct, filterProducts };
