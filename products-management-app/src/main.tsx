import React from 'react';
import ReactDOM from "react-dom";

// Store
import { StoreProvider, initialState, reducer } from './store';

import App from './App';

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <StoreProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StoreProvider>
//   </React.StrictMode>
// );


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
