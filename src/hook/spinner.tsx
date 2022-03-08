import React, { createContext, useCallback, useState, useContext } from 'react';
import MyLoader from '../components/LoadingOverlay';


interface LoadingContextData {
  loading: boolean;
  showLoading(): void;
  removeLoading(): void; 
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FC = ({ children }) => {

  const [spiner, setSpiner] = useState<boolean>(false);


  const showLoading = useCallback(() => {
    setSpiner(true)
  }, []);

  const removeLoading = useCallback(() => {
    setSpiner(false)
  }, []);

  return (
    <LoadingContext.Provider
      value={{loading: spiner, showLoading, removeLoading }}
    >
      {children}
      {spiner && (
        <MyLoader
          active={spiner}
        />
      )}
    </LoadingContext.Provider>
  );  
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within an AuthProvider');
  }
  return context;
}
