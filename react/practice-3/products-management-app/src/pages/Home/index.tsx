// Library
import React, { lazy, memo, Suspense } from 'react';

// Components
import { LoadingIndicator } from '@components/index';
const Layout = lazy(() => import('@components/Layout'));

// Layouts
const Main = lazy(() => import('@layouts/Main'));

const Home: React.FC = () => (
  <Suspense fallback={<LoadingIndicator />}>
    <Layout>
      <Main />
    </Layout>
  </Suspense>
);

export default memo(Home);
