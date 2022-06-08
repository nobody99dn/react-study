import React from 'react';

// Styles
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Layouts
import { Header } from './layouts/Header';

import Main from '@/layouts/Main';

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
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
