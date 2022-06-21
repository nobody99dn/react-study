// Constants
import { ACTIONS } from './constants';
import { FilterOrderOptions } from '@constants/types';

// Type
import { Product } from '@models/product';
import { ActionProps } from './actions';

export interface InitialState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  filterBox: Product[] | null;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  errorMessage: null,
  successMessage: null,
  filterBox: null
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
        errorMessage: null
      };

    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        errorMessage: null,
        filterBox: null
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        filterBox: null
      };

    case ACTIONS.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload.product],
        isLoading: false,
        successMessage: action.payload.message,
        filterBox: null
      };

    case ACTIONS.ADD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
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
            (product) => product.id !== action.payload.productId
          )
        ],
        isLoading: false,
        successMessage: action.payload.message
      };

    case ACTIONS.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
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
        (product) => product.id === action.payload.product.id
      );

      state.products[productIndex] = action.payload.product;

      return {
        ...state,
        products: state.products,
        isLoading: false,
        successMessage: action.payload.message
      };
    }

    case ACTIONS.EDIT_PRODUCT_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    }

    case ACTIONS.FILTER_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.FILTER_PRODUCTS_SUCCESS: {
      const { currentFilterTypeParam, currentFilterPriceParam } =
        action.payload;

      let filteredProducts: Product[] | null = null;

      if (currentFilterPriceParam || currentFilterTypeParam) {
        filteredProducts = [
          ...state.products.filter((product: Product) =>
            product.type.includes(currentFilterTypeParam)
          )
        ];

        if (currentFilterPriceParam === FilterOrderOptions.Asc) {
          filteredProducts.sort(
            (firstProduct: Product, secondProduct: Product) =>
              firstProduct.price - secondProduct.price
          );
        } else if (currentFilterPriceParam === FilterOrderOptions.Desc) {
          filteredProducts.sort(
            (firstProduct: Product, secondProduct: Product) =>
              secondProduct.price - firstProduct.price
          );
        }
      }

      return {
        ...state,
        products: [...state.products],
        isLoading: false,
        filterBox: filteredProducts
      };
    }

    case ACTIONS.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        filterBox: !action.payload.input ? null : action.payload.productsFound
      };

    case ACTIONS.CLEAR_MESSAGES: {
      return {
        ...state,
        errorMessage: null,
        successMessage: null
      };
    }

    default:
      return state;
  }
};

export { reducer, initialState };
