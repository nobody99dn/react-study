// Library
import React, {
  ReactNode,
  useReducer,
  useContext,
  Reducer,
  Dispatch
} from 'react';
import { ActionProps } from './actions';

// Reducer
import { initialState, InitialState } from './reducer';

interface ContextProps {
  globalState: InitialState;
  dispatch: Dispatch<ActionProps>;
}

const Store: React.Context<ContextProps> = React.createContext<ContextProps>({
  globalState: initialState,
  dispatch: () => {}
});
Store.displayName = 'Store';

const useStore = () => useContext(Store);

interface StoreProviderProps {
  children: ReactNode;
  reducer: Reducer<InitialState, ActionProps>;
  initialState: InitialState;
}

const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  initialState,
  reducer
}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export { useStore, StoreProvider };
