/* eslint-disable react/destructuring-assignment */
import { StyleSheet, ActivityIndicator } from 'react-native';
import React, { useContext, useRef, useState } from 'react';

import PhoneInput, { isValidNumber } from 'react-native-phone-number-input';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import Redirect from '../../components/Typography/Redirect';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';
import { AuthContext } from '../../store/Context/auth-context';
import RootHomeStackParamList from '../../types/navigationTypes';
import {
  createUser,
  getUserProfile,
  loginUser,
} from '../../Utils/requests/Auth';
import { ScreenNavigationProp } from '../../Utils/types';

const styles = StyleSheet.create({
  redirect: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
});

function SignUpScreen(
  this: any,
  {
    handleAuthAction,
  }: {
    handleAuthAction: (action: string) => void;
  }
) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    phone_number: '',
    iso_code: 'KE',
    password: '',
    email: '',
    country: 'Kenya',
  });
  const phoneInput = useRef<PhoneInput>(null);
  const authContext = useContext(AuthContext);
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleInputChange = (inputIdentifier: any, enteredText: any) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: enteredText };
    });
  };

  const handleRegister = async () => {
    console.log('inputValues', inputValues);
    setisLoading(true);

    try {
      await createUser(inputValues);
      const token = await loginUser(inputValues);
      const userProfile = await getUserProfile(token);

      authContext.authenticate(token, userProfile);
      setisLoading(false);
      navigate('Profile', {
        screen: 'EditProfileScreen',
      });
    } catch (error) {
      console.log('error', error);
      setisLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePress = () => {
    handleAuthAction('forgot password');
  };

  return (
    <>
      <PhoneInput
        containerStyle={{
          width: '100%',
          borderRadius: 24,
          borderColor: Colors.textInputGray,
          borderWidth: 1,
          marginVertical: 24,
        }}
        textContainerStyle={{
          width: '100%',
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        }}
        ref={phoneInput}
        defaultCode="KE"
        // eslint-disable-next-line react/jsx-no-bind
        onChangeText={handleInputChange.bind(this, 'phone_number')}
        onChangeCountry={(event) => {
          handleInputChange('iso_code', event.cca2);
          handleInputChange('country', event.name);
        }}
      />
      <TextInputField
        config={{
          placeholder: 'Email',
          onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        iconFunction={handleShowPassword}
        icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
        config={{
          placeholder: 'Password',
          secureTextEntry: !showPassword,
          onChangeText: handleInputChange.bind(this, 'password'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        iconFunction={handleShowPassword}
        icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
        config={{
          placeholder: 'Confirm Password',
          secureTextEntry: !showPassword,
          onChangeText: handleInputChange.bind(this, 'confimPassword'),
        }}
        styling={{ marginBottom: 24 }}
      />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Button
            title="Sign Up"
            color={Colors.primary}
            variant="solid"
            onPress={handleRegister}
            fullWidth
            styling={{ marginBottom: 24 }}
          />
          <Redirect
            text="Forgot password ?"
            noIcon
            onPress={handlePress}
            styling={styles.redirect}
          />
          <TextWithDivider
            text="Already have an account?"
            color={Colors.textInputGray}
          />

          <Button
            title="Login"
            color={Colors.primary}
            variant="outlined"
            onPress={() => {
              handleAuthAction('login');
            }}
            fullWidth
          />
        </>
      )}
    </>
  );
}

export default SignUpScreen;
