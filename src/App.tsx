/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';

import AppProvider from './hook/index';
import Routes from './routes';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
