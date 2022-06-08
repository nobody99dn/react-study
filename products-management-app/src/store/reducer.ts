// Constants
import { ADD_BOOKING } from './constants';

export interface InitialState {
  bookings: [];
}

const initialState: InitialState = {
  bookings: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      console.log('state.bookings', state.bookings);

      return {
        ...state,
        bookings: [...state.bookings, action.payload]
      };
    default:
      return state;
  }
};

export { reducer, initialState };
