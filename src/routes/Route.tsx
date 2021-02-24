/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouterProps,
  Redirect,
} from 'react-router-dom';

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

  console.log(!!user, '---', !!master, '---', isPrivate )



  const resultado = (!!user === !!master && isPrivate)
  console.log(resultado)
  return (
    <ReactRoute
      {...rest}
      render={({location}) => {
        if (master){
          console.log('--masetr')
          if(isPrivate === !!master){
            return <Component />
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
          console.log('user exist')
          return <Component />
        }

        /// case isPrivate
        if (isPrivate){
          console.log('private exist')
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
        console.log('last')
        return <Component />
        }}
    />
  );
};

export default Route;

/*
render={({ location }) => {
        return isPrivate === !!master ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/admin',
              state: { from: location },
            }}
          />
        );
      }}
*/
