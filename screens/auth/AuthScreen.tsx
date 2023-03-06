/* eslint-disable global-require */
import { Image, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import FogortPasswordScreen from './FogortPasswordScreen';
import AccountVerificationScreen from './AccountVerificationScreen';
import ResetPasswordScreen from './ResetPasswordScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'ubuntuMedium',
    fontSize: 24,
    lineHeight: 36,
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  prompt: { marginBottom: 24 },
});

const AuthScreen = () => {
  const [authOption, setAuthOption] = useState('login');

  const handleAuthAction = (authAction: string) => {
    setAuthOption(authAction);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/onboardingLogo.png')}
        style={{ marginBottom: 30 }}
      />
      <Text style={styles.title}>{authOption}</Text>
      {authOption === 'login' && (
        <SignInScreen handleAuthAction={handleAuthAction} />
      )}
      {authOption === 'sign up' && (
        <SignUpScreen handleAuthAction={handleAuthAction} />
      )}
      {authOption === 'forgot password' && (
        <FogortPasswordScreen handleAuthAction={handleAuthAction} />
      )}
      {authOption === 'account verification' && <AccountVerificationScreen />}
      {authOption === 'reset password' && <ResetPasswordScreen />}
    </SafeAreaView>
  );
};

export default AuthScreen;
