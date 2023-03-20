import { AnyAction } from '@reduxjs/toolkit';

export interface Filter {
  status: 'All' | 'Active' | 'Completed';
  colors: string[];
}

const initialState: Filter = {
  status: 'All',
  colors: []
};

export default function filtersReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload
      };
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
