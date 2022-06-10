// Constants
import Product from '@/models/product';
import { ACTIONS } from './constants';

export interface InitialState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  products: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action: any): {} => {
  switch (action.type) {
    case ACTIONS.CALL_API:
      return {
        ...state,
        loading: true
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      };

    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product !== action.payload)
        ],
        loading: false
      };

    case ACTIONS.EDIT_PRODUCT: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      state.products[productIndex] = action.payload;

      return {
        ...state,
        products: state.products,
        loading: false
      };
    }

    case ACTIONS.FILTER_PRODUCTS:
      return {
        ...state,
        products: [...state.products],
        loading: false
      };

    default:
      return state;
  }
};

export { reducer, initialState };
