// why did you rerender
import './wydr';

// Libraries
import React from 'react';
import ReactDOM from "react-dom";

// Store
import { StoreProvider, initialState, reducer } from './store';

// App
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
