import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import Companies from '../pages/Company';
import Route from './Route';

const AuthRoutes: React.FC = () => {
  return (
    <>

      <Switch>
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/admin" exact component={Admin} isPrivate />
        <Route path="/admin/companies" component={Companies} isPrivate />
      </Switch>

    </>
  );
};

export default AuthRoutes;
