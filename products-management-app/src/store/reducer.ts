// Constants
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FILTER_PRODUCTS
} from './constants';

export interface InitialState {
  // TODO: It will update to be Product[]
  products: any[];
}

const initialState: InitialState = {
  products: []
};

const reducer = (state = initialState, action: any): {} => {
  switch (action.type) {
    case ADD_PRODUCT:
      // console.log(state, action);
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product !== action.payload)
        ]
      };

    case EDIT_PRODUCT: {
      const productIndex: number = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      state.products[productIndex] = action.payload;

      return {
        ...state,
        products: state.products
      };
    }

    case FILTER_PRODUCTS:
      return {
        ...state,
        products: [...state.products]
      };

    default:
      return state;
  }
};

export { reducer, initialState };
