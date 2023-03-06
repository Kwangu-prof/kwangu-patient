import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import Redirect from '../../components/Typography/Redirect';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';

const styles = StyleSheet.create({
  redirect: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
});

function SignUpScreen({
  handleAuthAction,
}: {
  handleAuthAction: (action: string) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePress = () => {
    handleAuthAction('forgot password');
  };

  return (
    <>
      <TextInputField
        config={{ placeholder: 'Email/Phone Number' }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        iconFunction={handleShowPassword}
        icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
        config={{
          placeholder: 'Password',
          secureTextEntry: !showPassword,
        }}
        styling={{ marginBottom: 24 }}
      />
      <Button
        title="Sign Up"
        color={Colors.primary}
        variant="solid"
        onPress={() => {}}
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
  );
}

export default SignUpScreen;
