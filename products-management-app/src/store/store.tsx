import React from 'react';
import { ReactNode } from 'react';

import { InitialState } from './reducer';


const Store = React.createContext();
Store.displayName = 'Store';

const useStore = () => React.useContext(Store);

interface Props {
  children: ReactNode;
  reducer: any;
  initialState: InitialState;
}

const StoreProvider = ({ children, reducer, initialState }: Props) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export { useStore, StoreProvider };
