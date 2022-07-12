// Library
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/reset.css';
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Component
import LoadingIndicator from '@components/LoadingIndicator';
import MessagePopUp from '@components/MessagePopUp/index';

// Store
import { useStore } from './store';
import { MessagePopUpVariants } from '@constants/index';

const Home = lazy(() => import('@pages/Home'));
const DetailPage = lazy(() => import('@pages/DetailPage'));

function App() {
  const { globalState } = useStore();

  const { isLoading, errorMessage, successMessage } = globalState || {};

  return (
    <>
      <Router>
        <Suspense fallback={<LoadingIndicator />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-detail/:id' element={<DetailPage />} />
          </Routes>
        </Suspense>
      </Router>

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
