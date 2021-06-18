import React from 'react'

import FreeRoutes from "./FreeRoutes";
import AuthAppRoutes from "./AuthAppRoutes"
import { useAuth } from '../hook/auth';
import Header from '../components/Header/Header';
import SideBarApp from '../components/SideBarApp';
import SideBarAdmin from '../components/SideBarAdmin';
import AuthMasterRoutes from './AuthMasterRoutes';


const Routes: React.FC = () => {

  const {master, user} = useAuth()

  return (
    <>
      <FreeRoutes />
      <AuthAppRoutes />
      <AuthMasterRoutes />
    </>
  );
};

export default Routes;
