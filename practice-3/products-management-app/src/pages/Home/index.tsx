// Library
import React, { memo } from 'react';

// Layouts
import Main from '@layouts/Main';
import Layout from '@components/Layout';

const Home: React.FC = () => (
  <Layout>
    <Main />
  </Layout>
);

export default memo(Home);
