/* eslint-disable react/destructuring-assignment */
import { StyleSheet, ActivityIndicator } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import Redirect from '../../components/Typography/Redirect';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';
import { AuthContext } from '../../store/Context/auth-context';
import { getUserProfile, loginUser } from '../../Utils/requests/Auth';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'helveticaMedium',
    fontSize: 24,
    lineHeight: 36,
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  redirect: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
});

function SignInScreen(
  this: any,
  {
    handleAuthAction,
  }: // navigate,
  {
    handleAuthAction: (action: string) => void;
    // navigate: NativeStackScreenProps<RootStackParamList, 'HomeStack'>;
  }
) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    phone_number: '',
    iso_code: 'KE',
    password: '',
  });
  const phoneInput = useRef<PhoneInput>(null);
  const authContext = useContext(AuthContext);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePress = () => {
    handleAuthAction('forgot password');
  };

  const handleInputChange = (inputIdentifier: string, enteredText: string) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: enteredText };
    });
  };

  const handleLogin = async () => {
    setisLoading(true);

    try {
      const token = await loginUser(inputValues);
      const userProfile = await getUserProfile(token);

      authContext.authenticate(token, userProfile);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
    // authContext.authenticate(data);
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
        }}
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
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Button
            title="Login"
            color={Colors.primary}
            variant="solid"
            onPress={handleLogin}
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
            text="Don't have an account?"
            color={Colors.textInputGray}
          />

          <Button
            title="Sign Up"
            color={Colors.primary}
            variant="outlined"
            onPress={() => handleAuthAction('sign up')}
            fullWidth
          />
        </>
      )}
    </>
  );
}

export default SignInScreen;
