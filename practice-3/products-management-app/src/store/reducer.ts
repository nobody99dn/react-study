// Constants
import { ACTIONS } from './constants';

// Model
import { Product } from '@models/product';

// Action
import { ActionProps } from './actions';

interface InitialState {
  products: Product[];
  currentProduct: Product | null;
  isLoading: boolean;
  errorMessage: string;
  successMessage: string;
}

const initialState: InitialState = {
  products: [],
  currentProduct: null,
  isLoading: false,
  errorMessage: '',
  successMessage: ''
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
        errorMessage: initialState.errorMessage
      };

    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload?.products as Product[],
        isLoading: initialState.isLoading
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: initialState.isLoading
      };

    case ACTIONS.GET_PRODUCT_REQUEST:
    case ACTIONS.ADD_PRODUCT_REQUEST:
    case ACTIONS.DELETE_PRODUCT_REQUEST:
    case ACTIONS.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: initialState.errorMessage,
        successMessage: initialState.successMessage
      };

    case ACTIONS.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: initialState.isLoading,
        currentProduct: action.payload?.product as Product
      };

    case ACTIONS.GET_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: initialState.isLoading,
        errorMessage: action.payload?.errorMessage as string
      };

    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload?.product as Product],
        isLoading: initialState.isLoading,
        successMessage: action.payload?.successMessage as string
      };

    case ACTIONS.ADD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: initialState.isLoading,
        errorMessage: action.payload?.errorMessage as string
      };

    case ACTIONS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== (action.payload?.productId as string)
          )
        ],
        isLoading: initialState.isLoading,
        successMessage: action.payload?.successMessage as string
      };

    case ACTIONS.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: initialState.isLoading
      };

    case ACTIONS.EDIT_PRODUCT_SUCCESS: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === (action.payload?.product as Product).id
      );

      state.products[productIndex] = action.payload?.product as Product;

      return {
        ...state,
        products: state.products,
        isLoading: initialState.isLoading,
        successMessage: action.payload?.successMessage as string
      };
    }

    case ACTIONS.EDIT_PRODUCT_FAILED: {
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: initialState.isLoading
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
        isLoading: initialState.isLoading,
        products:
          !!action.payload?.currentFilterTypeParam ||
          !!action.payload?.currentFilterPriceParam
            ? (action.payload?.filteredProducts as Product[])
            : state.products
      };
    }

    case ACTIONS.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: !!action.payload?.input
          ? (action.payload?.filteredProducts as Product[])
          : state.products
      };

    case ACTIONS.CLEAR_MESSAGES: {
      return {
        ...state,
        errorMessage: initialState.errorMessage,
        successMessage: initialState.successMessage
      };
    }

    case ACTIONS.CLEAR_CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: initialState.currentProduct
      };
    }

    default:
      return state;
  }
};

export { reducer, initialState, InitialState };
