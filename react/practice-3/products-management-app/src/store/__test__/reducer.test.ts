import { ProductTypes } from '@constants/types';
import { Product } from '@models/product';
import {
  reducer,
  INITIAL_STATES,
  getProductsRequest,
  getProductRequest,
  addProductRequest,
  editProductRequest,
  deleteProductRequest,
  filterProductsRequest,
  getProductsFailed,
  editProductFailed,
  addProductFailed,
  getProductFailed,
  searchProductsFailed,
  filterProductsFailed,
  deleteProductFailed,
  getProductsSuccess,
  getProductSuccess,
  addProductSuccess
} from '../';

describe('Reducer', () => {
  test('should run action GET_PRODUCTS_REQUEST', () => {
    const state = reducer(INITIAL_STATES, getProductsRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action GET_PRODUCT_REQUEST', () => {
    const state = reducer(INITIAL_STATES, getProductRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action ADD_PRODUCT_REQUEST', () => {
    const state = reducer(INITIAL_STATES, addProductRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action EDIT_PRODUCT_REQUEST', () => {
    const state = reducer(INITIAL_STATES, editProductRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action DELETE_PRODUCT_REQUEST', () => {
    const state = reducer(INITIAL_STATES, deleteProductRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action FILTER_PRODUCTS_REQUEST', () => {
    const state = reducer(INITIAL_STATES, filterProductsRequest());

    expect(state).toEqual(expect.objectContaining({ isLoading: true }));
  });

  test('should run action GET_PRODUCTS_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      getProductsFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action EDIT_PRODUCT_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      editProductFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action DELETE_PRODUCT_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      deleteProductFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action FILTER_PRODUCTS_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      filterProductsFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action SEARCH_PRODUCTS_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      searchProductsFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action GET_PRODUCT_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      getProductFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action ADD_PRODUCT_FAILED', () => {
    const state = reducer(
      INITIAL_STATES,
      addProductFailed({ errorMessage: 'Error test' })
    );

    expect(state).toEqual(
      expect.objectContaining({ errorMessage: 'Error test' })
    );
  });

  test('should run action GET_PRODUCTS_SUCCESS', () => {
    const mockProducts: Product[] = [
      {
        id: '1',
        imageUrl: '',
        name: 'Product test 1',
        price: 1000000,
        type: ProductTypes.Phone
      },
      {
        id: '2',
        imageUrl: '',
        name: 'Product test 2',
        price: 2000000,
        type: ProductTypes.Laptop
      },
      {
        id: '3',
        imageUrl: '',
        name: 'Product test 3',
        price: 3000000,
        type: ProductTypes.Tablet
      }
    ];

    const state = reducer(
      INITIAL_STATES,
      getProductsSuccess({ products: mockProducts })
    );

    expect(state).toEqual(expect.objectContaining({ products: mockProducts }));
  });

  test('should run action GET_PRODUCT_SUCCESS', () => {
    const mockProduct: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    };

    const state = reducer(
      INITIAL_STATES,
      getProductSuccess({ product: mockProduct })
    );

    expect(state).toEqual(
      expect.objectContaining({ currentProduct: mockProduct })
    );
  });

  test('should run action ADD_PRODUCT_SUCCESS', () => {
    const mockProduct: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    };

    const state = reducer(
      INITIAL_STATES,
      addProductSuccess({ successMessage: 'Error test', product: mockProduct })
    );

    expect(state).toEqual(
      expect.objectContaining({ successMessage: 'Error test' })
    );
  });

  test('should run action DELETE_PRODUCT_SUCCESS', () => {
    const mockProduct: Product = {
      id: '1',
      imageUrl: '',
      name: 'Product test 1',
      price: 1000000,
      type: ProductTypes.Phone
    };

    const state = reducer(
      INITIAL_STATES,
      addProductSuccess({ successMessage: 'Error test', product: mockProduct })
    );

    expect(state).toEqual(
      expect.objectContaining({ successMessage: 'Error test' })
    );
  });
});
