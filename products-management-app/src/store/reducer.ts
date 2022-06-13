// Constants
import { ACTIONS } from './constants';

// Type
import { Product } from 'type/product';

export interface InitialState {
  products: Product[];
  filterBox: Product[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  products: [],
  filterBox: null,
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
        filterBox: null,
        loading: false
      };

    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        filterBox: null,
        loading: false
      };

    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product !== action.payload)
        ],
        filterBox: null,
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
        filterBox: null,
        loading: false
      };
    }

    case ACTIONS.FILTER_PRODUCTS:
      return {
        ...state,
        products: [...state.products],
        loading: false
      };

    case ACTIONS.SEARCH_PRODUCTS:
      return {
        ...state,
        filterBox: [
          ...state.products.filter((product: Product) =>
            product.name.includes(action.payload)
          )
        ],
        loading: false
      };

    default:
      return state;
  }
};

export { reducer, initialState };
