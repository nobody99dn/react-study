import React from 'react';

// Styles
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Layouts
import { Header } from './layouts/Header';

import Main from '@/layouts/Main';

// Store
import { useStore, addProduct, deleteProduct, editProduct } from './store';

function App() {
  const { globalState, dispatch } = useStore();

  const p1 = { id: 123, name: 'iPhone 13' };
  const p2 = { id: 456, name: 'iPhone 13' };
  const p3 = { id: 789, name: 'iPhone 13' };
  React.useEffect(() => {
    console.log("it called");
    dispatch(addProduct(p1));
    dispatch(addProduct(p2));
    dispatch(addProduct(p3));

    dispatch(deleteProduct(p2));

    dispatch(editProduct({ id: 123, name: 'iPhone X' }));
  }, []);

  console.log('globalState', globalState);


  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
