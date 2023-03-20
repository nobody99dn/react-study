import { ACTIONS } from '@constants/index';
import { Product } from '@models/product';

export interface IGetProductsRequest {
  readonly type: ACTIONS.GET_PRODUCTS_REQUEST;
}

export interface IGetProductsSuccess {
  readonly type: ACTIONS.GET_PRODUCTS_SUCCESS;
  readonly payload: {
    products: Product[];
  };
}

export interface IGetProductsFailed {
  readonly type: ACTIONS.GET_PRODUCTS_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IGetProductRequest {
  readonly type: ACTIONS.GET_PRODUCT_REQUEST;
}

export interface IGetProductSuccess {
  readonly type: ACTIONS.GET_PRODUCT_SUCCESS;
  readonly payload: {
    product: Product;
  };
}

export interface IGetProductFailed {
  readonly type: ACTIONS.GET_PRODUCT_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IAddProductRequest {
  readonly type: ACTIONS.ADD_PRODUCT_REQUEST;
}
export interface IAddProductSuccess {
  readonly type: ACTIONS.ADD_PRODUCT_SUCCESS;
  readonly payload: {
    product: Product;
    successMessage: string;
  };
}

export interface IAddProductFailed {
  readonly type: ACTIONS.ADD_PRODUCT_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IDeleteProductRequest {
  readonly type: ACTIONS.DELETE_PRODUCT_REQUEST;
}

export interface IDeleteProductSuccess {
  readonly type: ACTIONS.DELETE_PRODUCT_SUCCESS;
  readonly payload: {
    productId: string;
    successMessage: string;
  };
}

export interface IDeleteProductFailed {
  readonly type: ACTIONS.DELETE_PRODUCT_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IEditProductRequest {
  readonly type: ACTIONS.EDIT_PRODUCT_REQUEST;
}
export interface IEditProductSuccess {
  readonly type: ACTIONS.EDIT_PRODUCT_SUCCESS;
  readonly payload: {
    product: Product;
    successMessage: string;
  };
}

export interface IEditProductFailed {
  readonly type: ACTIONS.EDIT_PRODUCT_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IFilterProductsRequest {
  readonly type: ACTIONS.FILTER_PRODUCTS_REQUEST;
}

export interface IFilterProductsSuccess {
  readonly type: ACTIONS.FILTER_PRODUCTS_SUCCESS;
  readonly payload: {
    filteredProducts: Product[];
  };
}

export interface IFilterProductsFailed {
  readonly type: ACTIONS.FILTER_PRODUCTS_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface ISearchProductsRequest {
  readonly type: ACTIONS.SEARCH_PRODUCTS_REQUEST;
}

export interface ISearchProductsSuccess {
  readonly type: ACTIONS.SEARCH_PRODUCTS_SUCCESS;
  readonly payload: {
    filteredProducts: Product[];
  };
}
export interface ISearchProductsFailed {
  readonly type: ACTIONS.SEARCH_PRODUCTS_FAILED;
  readonly payload: {
    errorMessage: string;
  };
}

export interface IClearMessage {
  readonly type: ACTIONS.CLEAR_MESSAGES;
}

export interface IClearCurrentProduct {
  readonly type: ACTIONS.CLEAR_CURRENT_PRODUCT;
}

export type ActionProps =
  | IGetProductsRequest
  | IGetProductsSuccess
  | IGetProductsFailed
  | IGetProductRequest
  | IGetProductSuccess
  | IGetProductFailed
  | IAddProductRequest
  | IAddProductSuccess
  | IAddProductFailed
  | IDeleteProductRequest
  | IDeleteProductSuccess
  | IDeleteProductFailed
  | IEditProductRequest
  | IEditProductSuccess
  | IEditProductFailed
  | IFilterProductsRequest
  | IFilterProductsSuccess
  | IFilterProductsFailed
  | ISearchProductsRequest
  | ISearchProductsSuccess
  | ISearchProductsFailed
  | IClearMessage
  | IClearCurrentProduct;
