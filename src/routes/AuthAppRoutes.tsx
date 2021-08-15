import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Route from './Route';


const AuthAppRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </>
  );
};

export default AuthAppRoutes;
