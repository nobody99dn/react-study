import { applyMiddleware, Middleware } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { RootState } from '../app/store';
import rootReducer from './reducer';

const alwaysReturnHelloMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (storeAPI) => (next) => (action) => {
  const originalResult = next(action);
  // Ignore the original result, return something else
  return 'Hello!';
};

const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;
