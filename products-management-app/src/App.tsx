import React from 'react';

import './assets/styles/reset.css';
import './assets/styles/App.css';

// Store
import { useStore, addBooking } from './store';


function App() {
  const { globalState, dispatch } = useStore();

  React.useEffect(() => {
    console.log("it called");
    dispatch(addBooking({ id: 123, name: 'book' }));
  }, []);

  console.log("globalState", globalState);

  return (
    <p>
      Product Management Application
    </p>
  );
}

export default App;
