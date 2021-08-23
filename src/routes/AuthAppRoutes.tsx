import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Operator from '../pages/Operator';
import Vehicle from '../pages/Vehicle';
import Route from './Route';


const AuthAppRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/operators" component={Operator} isPrivate />
        <Route path="/vehicles" component={Vehicle} isPrivate />
      </Switch>
    </>
  );
};

export default AuthAppRoutes;
