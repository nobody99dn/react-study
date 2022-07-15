// Library
import { SWRConfig } from 'swr';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/reset.css';
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Components
import LoadingIndicator from '@components/LoadingIndicator';
import MessagePopUp from '@components/MessagePopUp/index';

// Store
import { useStore } from './store';

// Constant
import { MessagePopUpVariants } from '@constants/index';

const Home = lazy(() => import('@pages/Home'));
const DetailPage = lazy(() => import('@pages/DetailPage'));

function App() {
  const { globalState } = useStore();

  const { isLoading, errorMessage, successMessage } = globalState || {};

  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          provider: () => new Map()
        }}
      >
        <BrowserRouter>
          <Suspense fallback={<LoadingIndicator />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product-detail/:id' element={<DetailPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SWRConfig>

      {isLoading && <LoadingIndicator />}

      {errorMessage && (
        <MessagePopUp
          text={errorMessage}
          variant={MessagePopUpVariants.Failed}
        />
      )}

      {successMessage && (
        <MessagePopUp
          text={successMessage}
          variant={MessagePopUpVariants.Success}
        />
      )}
    </>
  );
}

App.whyDidYouRender = true;

export default App;
