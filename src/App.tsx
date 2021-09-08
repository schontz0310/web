import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'

import GlobalStyles from './styles/global';

import AppProvider from './hook/index';
import Routes from './routes';

const queryClient = new QueryClient()

function App() {
  console.log({ REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT })
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <BrowserRouter>
            <GlobalStyles />
            <Routes />
          </BrowserRouter>
        </AppProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
