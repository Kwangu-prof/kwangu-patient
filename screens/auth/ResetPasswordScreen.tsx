import React, { useState } from 'react';

import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import Redirect from '../../components/Typography/Redirect';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';
import Banner from '../../components/Layout/Banner';

function ResetPasswordScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Banner text="New password should contain at least 1 letter, 1 number and 1 special character. It should be a minimum of 8 characters." />
      <TextInputField
        iconFunction={handleShowPassword}
        icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
        config={{
          placeholder: 'New Password',
          secureTextEntry: !showPassword,
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        iconFunction={handleShowConfirmPassword}
        icon={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
        config={{
          placeholder: 'Confirm New Password',
          secureTextEntry: !showConfirmPassword,
        }}
        styling={{ marginBottom: 24 }}
      />
      <Button
        title="Reset Password"
        color={Colors.primary}
        variant="solid"
        onPress={() => {}}
        fullWidth
        styling={{ marginBottom: 24 }}
      />
    </>
  );
}

export default ResetPasswordScreen;
