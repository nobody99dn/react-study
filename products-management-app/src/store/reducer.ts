// Constants
import { ACTIONS } from './constants';

// Model
import { Product } from '@models/product';
import { ActionProps } from './actions';
import { FilterOrderOptions, ProductTypes } from '@constants/index';

export interface InitialState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
  filterBox: Product[];
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  errorMessage: '',
  successMessage: '',
  filterBox: []
};

/**
 * Reducer: execute with global states
 *
 * @param state InitialState
 * @param action ActionProps
 * @returns InitialState
 */
const reducer = (state = initialState, action: ActionProps): InitialState => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };

    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload?.products as Product[],
        isLoading: false,
        errorMessage: '',
        filterBox: []
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: false,
        filterBox: []
      };

    case ACTIONS.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload?.product as Product],
        isLoading: false,
        successMessage: action.payload?.successMessage as string,
        filterBox: []
      };

    case ACTIONS.ADD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload?.errorMessage as string
      };

    case ACTIONS.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== (action.payload?.productId as string)
          )
        ],
        isLoading: false,
        successMessage: action.payload?.successMessage as string
      };

    case ACTIONS.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: false
      };

    case ACTIONS.EDIT_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ACTIONS.EDIT_PRODUCT_SUCCESS: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === (action.payload?.product as Product).id
      );

      state.products[productIndex] = action.payload?.product as Product;

      return {
        ...state,
        products: state.products,
        isLoading: false,
        successMessage: action.payload?.successMessage as string
      };
    }

    case ACTIONS.EDIT_PRODUCT_FAILED: {
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: false
      };
    }

    case ACTIONS.FILTER_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.FILTER_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        filterBox:
          !!action.payload?.currentFilterTypeParam ||
          !!action.payload?.currentFilterPriceParam
            ? (action.payload?.filteredProducts as Product[])
            : []
      };
    }

    case ACTIONS.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        filterBox: !!action.payload?.input
          ? (action.payload?.filteredProducts as Product[])
          : []
      };

    case ACTIONS.CLEAR_MESSAGES: {
      return {
        ...state,
        errorMessage: '',
        successMessage: ''
      };
    }

    default:
      return state;
  }
};

export { reducer, initialState };
