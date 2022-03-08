/* eslint-disable react/prop-types */
import React from 'react';
import { ToastProvider } from './toast';
import { AuthProvider } from './auth';
import {PaginationProvider} from './pagination'
import {LoadingProvider} from './spinner'

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>
          <PaginationProvider>
            <ToastProvider>{children}</ToastProvider>
          </PaginationProvider>
        </AuthProvider>
      </LoadingProvider>
    </>
  );
};

export default AppProvider;
