// Library
import {
  ReactNode,
  useReducer,
  useContext,
  Reducer,
  Dispatch,
  createContext
} from 'react';
import { ActionProps } from './actions';

// Reducer
import { INITIAL_STATES, InitialState } from './reducer';

interface ContextProps {
  globalState: InitialState;
  dispatch: Dispatch<ActionProps>;
}

const Store: React.Context<ContextProps> = createContext<ContextProps>({
  globalState: INITIAL_STATES,
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
