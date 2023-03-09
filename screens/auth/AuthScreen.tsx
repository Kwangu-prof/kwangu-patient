/* eslint-disable global-require */
import { Image, StyleSheet, Text, View } from 'react-native';
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
    // paddingVertical: 10,
  },
  title: {
    fontFamily: 'helveticaMedium',
    fontSize: 24,
    lineHeight: 36,
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  prompt: { marginBottom: 10 },
});

const AuthScreen = () => {
  const [authOption, setAuthOption] = useState('login');

  const handleAuthAction = (authAction: string) => {
    setAuthOption(authAction);
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        source={require('../../assets/onboardingLogo.png')}
        style={{ marginBottom: 5, width: 276, height: 42 }}
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
    </View>
  );
};

export default AuthScreen;
