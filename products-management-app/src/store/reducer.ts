// Constants
import { ACTIONS } from './constants';

// Type
import { Product } from 'type/product';

export interface InitialState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  errorMessage: null
};

const reducer = (state = initialState, action: any): {} => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };

    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false
      };

    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product !== action.payload)
        ],
        isLoading: false
      };

    case ACTIONS.EDIT_PRODUCT: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      state.products[productIndex] = action.payload;

      return {
        ...state,
        products: state.products,
        isLoading: false
      };
    }

    case ACTIONS.FILTER_PRODUCTS:
      return {
        ...state,
        products: [...state.products],
        isLoading: false
      };

    default:
      return state;
  }
};

export { reducer, initialState };
