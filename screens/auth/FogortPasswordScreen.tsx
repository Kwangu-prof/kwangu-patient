import React, { useState } from 'react';
import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';
import Banner from '../../components/Layout/Banner';

function FogortPasswordScreen({
  handleAuthAction,
}: {
  handleAuthAction: (action: string) => void;
}) {
  const [formState, setFormState] = useState({});

  const handleInputChange = (enteredText: any) => {
    // setFormState((prevState) => {
    //   return { ...prevState };
    // });
  };

  return (
    <>
      <Banner text="Please enter the email address or the phone number registered with Kwangu Health." />
      <TextInputField
        config={{
          placeholder: 'Email/Phone Number',
          onChangeText: handleInputChange,
        }}
        styling={{ marginBottom: 24 }}
      />
      <Button
        title="Request Password Reset"
        color={Colors.primary}
        variant="solid"
        onPress={() => {
          handleAuthAction('reset password');
        }}
        fullWidth
        styling={{ marginBottom: 24 }}
      />
      <TextWithDivider
        text="I remembered my password"
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

export default FogortPasswordScreen;
