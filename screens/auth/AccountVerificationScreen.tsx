import React from 'react';
import Button from '../../components/UI/Button';
import Colors from '../../Utils/Colors';
import TextInputField from '../../components/UI/TextInputField';
import TextWithDivider from '../../components/Typography/TextWithDivider';
import Banner from '../../components/Layout/Banner';

function AccountVerificationScreen() {
  return (
    <>
      <Banner text="Please enter the code received in your email or text message." />
      <TextInputField
        config={{ placeholder: 'Code' }}
        styling={{ marginBottom: 24 }}
      />
      <Button
        title="Verify Account"
        color={Colors.primary}
        variant="solid"
        onPress={() => {}}
        fullWidth
        styling={{ marginBottom: 24 }}
      />
      <TextWithDivider
        text="Didn't receive code?"
        color={Colors.textInputGray}
      />

      <Button
        title="Resend Code"
        color={Colors.primary}
        variant="outlined"
        onPress={() => {}}
        fullWidth
      />
    </>
  );
}

export default AccountVerificationScreen;
