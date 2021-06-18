/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';
import Header from '../components/Header/Header';
import SideBarAdmin from '../components/SideBarAdmin';
import SideBarApp from '../components/SideBarNew';

import { useAuth } from '../hook/auth';

interface RouteProps extends ReactRouterProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  }

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, master } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={({location}) => {
        if (master){
          if(isPrivate === !!master){
            console.log("Master")
            return (
              <>
                <Component />
                <SideBarAdmin />
                <Header />
              </>
            )
          }
            return(
              <Redirect
                to={{
                pathname: isPrivate ? '/' : '/admin',
                state: { from: location },
              }}
              />
            )
        }
        if (user){
          if(isPrivate === !!user){
            console.log("User")
            return (
              <>
                <Component />
                <SideBarApp />
                <Header />
              </>
            )
          }
            return(
              <Redirect
                to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
              />
            )
        }

        /// case isPrivate
        if (isPrivate){
          if(isPrivate === !!master || isPrivate === !!user){
            return <Component />
          }
          return(
            <Redirect
              to={{
              pathname: '/',
              state: { from: location },
            }}
            />
          )
        }
        return <Component />
        }}
    />
  );
};

export default Route;
