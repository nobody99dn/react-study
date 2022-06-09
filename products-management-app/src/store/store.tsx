// Libraries
import React, { ReactNode, useReducer } from 'react';

// Reducer
import { InitialState } from './reducer';

interface ContextProps {
  globalState: any;
  dispatch: ({ type }: { type: string; }) => void;
}

const Store = React.createContext({} as ContextProps);
Store.displayName = 'Store';

const useStore = () => React.useContext(Store);

interface StoreProviderProps {
  children: ReactNode;
  reducer: any;
  initialState: InitialState;
}

const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  reducer,
  initialState
}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export { useStore, StoreProvider };
