import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import ErrorPage from '../pages/Error';
import Companies from '../pages/Company';
// import ForgotPassword from '../pages/ForgotPassword';
// import ResetPassword from '../pages/ResetPassword';
// import Profile from '../pages/Profile';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/signup" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/admin" exact component={Admin} isPrivate />
      <Route path="/admin/companies" component={Companies} isPrivate />

    </Switch>
  );
};

export default Routes;
