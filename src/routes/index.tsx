import React from 'react'

import FreeRoutes from "./FreeRoutes";
import AuthAppRoutes from "./AuthAppRoutes"
import { useAuth } from '../hook/auth';
import AuthMasterRoutes from './AuthMasterRoutes';


const Routes: React.FC = () => {

  return (
    <>
      <FreeRoutes />
      <AuthAppRoutes />
      <AuthMasterRoutes />
    </>
  );
};

export default Routes;
