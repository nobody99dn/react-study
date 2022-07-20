// Action constant
import { ACTIONS } from '@constants/index';

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

const INITIAL_STATES: InitialState = {
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
const reducer = (state = INITIAL_STATES, action: ActionProps): InitialState => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: INITIAL_STATES.errorMessage
      };

    case ACTIONS.SEARCH_PRODUCTS_REQUEST:
      return {
        ...state
      };

    case ACTIONS.GET_PRODUCT_REQUEST:
    case ACTIONS.ADD_PRODUCT_REQUEST:
    case ACTIONS.EDIT_PRODUCT_REQUEST:
    case ACTIONS.DELETE_PRODUCT_REQUEST:
    case ACTIONS.FILTER_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
    case ACTIONS.EDIT_PRODUCT_FAILED:
    case ACTIONS.DELETE_PRODUCT_FAILED:
    case ACTIONS.FILTER_PRODUCTS_FAILED:
    case ACTIONS.SEARCH_PRODUCTS_FAILED:
    case ACTIONS.GET_PRODUCT_FAILED:
    case ACTIONS.ADD_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage as string,
        isLoading: INITIAL_STATES.isLoading
      };

    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload?.products as Product[],
        isLoading: INITIAL_STATES.isLoading
      };

    case ACTIONS.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: INITIAL_STATES.isLoading,
        currentProduct: action.payload?.product as Product
      };

    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload?.product as Product],
        isLoading: INITIAL_STATES.isLoading,
        successMessage: action.payload?.successMessage as string
      };

    case ACTIONS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== (action.payload?.productId as string)
          )
        ],
        isLoading: INITIAL_STATES.isLoading,
        successMessage: action.payload?.successMessage as string
      };

    case ACTIONS.EDIT_PRODUCT_SUCCESS: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === (action.payload?.product as Product).id
      );

      state.products[productIndex] = action.payload?.product as Product;

      return {
        ...state,
        products: state.products,
        isLoading: INITIAL_STATES.isLoading,
        successMessage: action.payload?.successMessage as string
      };
    }

    case ACTIONS.FILTER_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: INITIAL_STATES.isLoading,
        products: action.payload?.filteredProducts as Product[]
      };
    }

    case ACTIONS.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: INITIAL_STATES.isLoading,
        products: action.payload?.filteredProducts as Product[]
      };

    case ACTIONS.CLEAR_MESSAGES: {
      return {
        ...state,
        errorMessage: INITIAL_STATES.errorMessage,
        successMessage: INITIAL_STATES.successMessage
      };
    }

    case ACTIONS.CLEAR_CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: INITIAL_STATES.currentProduct
      };
    }

    default:
      return state;
  }
};

export { reducer, INITIAL_STATES, InitialState };
