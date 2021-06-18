import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './hook/index';
import Routes from './routes';

function App() {


  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
