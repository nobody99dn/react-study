// Library
import React from 'react';

// Styles
import './assets/styles/reset.css';
import './assets/styles/App.css';
import './assets/styles/reset.css';
import './assets/styles/variables.css';

// Layouts
import Header from '@layouts/Header';
import Main from '@layouts/Main';

// Component
import LoadingIndicator from '@components/LoadingIndicator';
import MessagePopUp from '@components/MessagePopUp/index';

// Store
import { useStore } from './store';
import { MessagePopUpVariants } from '@constants/types';

// import whyDidYouRender from '@welldone-software/why-did-you-render';

import.meta.env.BASE_URL;

function App() {
  // console.log(process.env.BASE_URL);


  const { globalState } = useStore();

  const { isLoading, errorMessage, successMessage } = globalState || {};

  return (
    <>
      <Header />
      <Main />

      {isLoading && <LoadingIndicator />}

      {
        errorMessage && <MessagePopUp
          text={errorMessage}
          messagePopUpVariant={MessagePopUpVariants.Failed}
        />
      }

      {
        successMessage && <MessagePopUp
          text={successMessage}
          messagePopUpVariant={MessagePopUpVariants.Success}
        />
      }
    </>
  );
}

App.whyDidYouRender = true;
export default App;
