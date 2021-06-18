import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/Signup';
import ErrorPage from '../pages/Error';

import Route from './Route';

const FreeRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
};

export default FreeRoutes;
