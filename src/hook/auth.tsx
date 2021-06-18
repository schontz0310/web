/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface Master {
  admin_users_id: string;
  admin_users_email: string;
  admin_users_name: string;
}

interface SigInCredentials {
  company_type: string;
  company_type_value: string;
  email: string;
  password: string;
}
interface SigInMasterCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface MasterAuthState {
  token: string;
  master: Master;
}

interface AuthContextData {
  user: User;
  master: Master;
  signIn(credentials: SigInCredentials): Promise<void>;
  masterSignIn(credentials: SigInMasterCredentials): Promise<void>;
  signOut(): void;
  masterSignOut(): void;
  updateUser(user: User): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AGS:token');
    const user = localStorage.getItem('@AGS:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const [masterData, setMasterData] = useState<MasterAuthState>(() => {
    const token = localStorage.getItem('@AGS:mtoken');
    const master = localStorage.getItem('@AGS:muser');

    if (token && master) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, master: JSON.parse(master) };
    }

    return {} as MasterAuthState;
  });

  const signIn = useCallback(async ({
    email,
    password,
    company_type,
    company_type_value }: SigInCredentials) => {

    const response = await api.post('/sessions', {
      email,
      password,
      company_type,
      company_type_value
    });
    const { token, user } = response.data;

    localStorage.setItem('@AGS:token', token);
    localStorage.setItem('@AGS:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const masterSignIn = useCallback(async ({ email, password }: SigInMasterCredentials) => {
    const response = await api.post('/sessions/master', {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@AGS:mtoken', token);
    localStorage.setItem('@AGS:muser', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setMasterData({ token, master: user});
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AGS:token');
    localStorage.removeItem('@AGS:user');

    setData({} as AuthState);
  }, []);

  const masterSignOut = useCallback(() => {
    localStorage.removeItem('@AGS:mtoken');
    localStorage.removeItem('@AGS:muser');

    setMasterData({} as MasterAuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@AGS:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, master: masterData.master, signIn, signOut, updateUser, masterSignIn, masterSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
