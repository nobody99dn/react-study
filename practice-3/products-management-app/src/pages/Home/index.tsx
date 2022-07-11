// Library
import React, { memo } from 'react';

// Layouts
import Header from '@layouts/Header';
import Main from '@layouts/Main';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default memo(Home);
