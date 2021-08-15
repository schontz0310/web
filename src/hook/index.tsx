/* eslint-disable react/prop-types */
import React from 'react';
import { ToastProvider } from './toast';
import { AuthProvider } from './auth';
import {PaginationProvider} from './pagination'

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <PaginationProvider>
          <ToastProvider>{children}</ToastProvider>
        </PaginationProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
