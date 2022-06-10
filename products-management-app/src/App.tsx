import React from 'react';

// Styles
import './assets/styles/reset.css';
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Layouts
// Layouts
import Header from '@layouts/Header';
import Main from '@layouts/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
