// Constants
import { ACTIONS } from './constants';

// Type
import { Product } from 'type/product';
import { FilterOrderOptions } from '@constants/types';

export interface InitialState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string | null;
  filterBox: Product[] | null;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  errorMessage: null,
  filterBox: null
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
        isLoading: false,
        filterBox: null
      };

    case ACTIONS.GET_PRODUCTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        filterBox: null
      };

    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        isLoading: false,
        filterBox: null
      };

    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product !== action.payload)
        ],
        isLoading: false,
        filterBox: null
      };

    case ACTIONS.EDIT_PRODUCT: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      state.products[productIndex] = action.payload;

      return {
        ...state,
        products: state.products,
        isLoading: false,
        filterBox: null
      };
    }

    case ACTIONS.FILTER_PRODUCTS:
      const { currentFilterTypeParam, currentFilterPriceParam } =
        action.payload;

      const filteredProducts: Product[] = [
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

      return {
        ...state,
        products: [...state.products],
        isLoading: false,
        filterBox: filteredProducts
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
