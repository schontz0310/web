import React from 'react';
import { Switch } from 'react-router-dom';

import Admin from '../pages/Admin';
import Companies from '../pages/Company';
import Devices from '../pages/Devices';
import Route from './Route';

const AuthRoutes: React.FC = () => {
  return (
    <>

      <Switch>
        <Route path="/admin" exact component={Admin} isPrivate />
        <Route path="/admin/companies" component={Companies} isPrivate />
        <Route path="/admin/devices" component={Devices} isPrivate />
      </Switch>

    </>
  );
};

export default AuthRoutes;
