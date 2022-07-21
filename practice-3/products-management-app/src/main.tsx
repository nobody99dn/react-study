// why did you rerender
import './wydr';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Store
import { StoreProvider, INITIAL_STATES, reducer } from './store';

// App
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={INITIAL_STATES} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
