import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// Log the initial state
console.log('Initial state: ', store.getState());
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
);

// Now, dispatch some actions

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

store.dispatch({ type: 'todos/todoToggled', payload: 0 });
store.dispatch({ type: 'todos/todoToggled', payload: 1 });

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
});

// Stop listening to state updates
unsubscribe();

// Dispatch one more action to see what happens

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });

const dispatchResult = store.dispatch({ type: 'some/action' });
console.log(dispatchResult);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
