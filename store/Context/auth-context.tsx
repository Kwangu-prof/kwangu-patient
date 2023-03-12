import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useMemo, useState } from 'react';

interface AuthState {
  token: string;
  userDetails: {
    id: string;
    email: string;
    phone_number: string;
    firstname: string;
    lastname: string;
    id_number: string;
    place_of_birth: string;
    date_of_birth: string;
    gender: string;
    lattitude: number;
    longitude: number;
    country: string;
    iso_code: string;
    profile_image: string;
    fcm_token: string;
  };
}

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  userDetails: {
    id: '',
    email: '',
    phone_number: '',
    firstname: '',
    lastname: '',
    id_number: '',
    place_of_birth: '',
    date_of_birth: '',
    gender: '',
    lattitude: 0,
    longitude: 0,
    country: '',
    iso_code: '',
    profile_image: '',
    fcm_token: '',
  },
  logout: () => {},
  authenticate: (token: string, userProfile: object) => {},
});

const AuthContextProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const [authToken, setAuthToken] = useState('');
  const [authState, setAuthState] = useState<AuthState>();

  const authenticate = async (token: string, userProfile: any) => {
    setAuthState({
      token,
      userDetails: userProfile,
    });
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('userDetails', JSON.stringify(userProfile));
  };

  const handleLogout = () => {
    setAuthState({
      token: '',
      userDetails: {
        id: '',
        email: '',
        phone_number: '',
        firstname: '',
        lastname: '',
        id_number: '',
        place_of_birth: '',
        date_of_birth: '',
        gender: '',
        lattitude: 0,
        longitude: 0,
        country: '',
        iso_code: '',
        profile_image: '',
        fcm_token: '',
      },
    });
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('userDetails');
  };

  const value = useMemo(
    () => ({
      token: authState?.token,
      userDetails: authState?.userDetails,
      isAuthenticated: !!authState?.token,
      authenticate,
      logout: handleLogout,
    }),
    [authState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
