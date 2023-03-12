/* eslint-disable @typescript-eslint/ban-types */
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PhoneInput, { isValidNumber } from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { AuthContext } from '../store/Context/auth-context';
import Container from '../components/Layout/Container';
import ScreenHeader from '../components/ScreenHeader';
import Colors from '../Utils/Colors';
import InputToggle from '../components/UI/InputToggle';
import TextInputField from '../components/UI/TextInputField';
import RadioButtons from '../components/UI/RadioButtons';
import Button from '../components/UI/Button';
import AccordionItem from '../components/Layout/AccordionItem';
import { ProfileStackParamList } from '../components/navigation/ProfileStackNavigator';
import DependantItem from '../components/DependantItem';

type Props = {};

const styles = StyleSheet.create({
  profilePic: {
    // marginBottom: 10,
    height: 97,
    width: 97,
    borderRadius: 194,
    alignSelf: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: '35%',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 50,
  },
});

const dependendants = [
  { id: 1, firstName: 'Pinky', lastName: 'Blue', category: 'Adult' },
  { id: 2, firstName: 'Yuri', lastName: 'Gargarin', category: 'Child' },
  { id: 3, firstName: 'Neil', lastName: 'Armstrong', category: 'Aged' },
];

const EditProfileScreen = (props: Props) => {
  const { userDetails } = useContext(AuthContext);
  const phoneInput = useRef<PhoneInput>(null);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<ProfileStackParamList, 'EditProfileScreen'>
    >();

  const personalInfo = (
    <>
      <TextInputField
        config={{
          defaultValue: userDetails.firstname || '',
          placeholder: 'First Name',
          // onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        config={{
          defaultValue: userDetails.lastname || '',
          placeholder: 'Last Name',
          // onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        config={{
          defaultValue: userDetails.date_of_birth || '',
          placeholder: 'Date of Birth',
          // onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <TextInputField
        config={{
          defaultValue: userDetails.id_number || '',
          placeholder: 'National ID/ Passport',
          // onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
      <RadioButtons data={[{ value: 'Male' }, { value: 'Female' }]} />
    </>
  );

  const contactInfo = (
    <>
      <PhoneInput
        containerStyle={{
          width: '100%',
          borderRadius: 24,
          borderColor: Colors.textInputGray,
          borderWidth: 1,
          marginBottom: 24,
        }}
        textContainerStyle={{
          width: '100%',
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
        }}
        ref={phoneInput}
        defaultCode="KE"
        defaultValue={userDetails.phone_number}
        // eslint-disable-next-line react/jsx-no-bind
        // onChangeText={handleInputChange.bind(this, 'phone_number')}
        // onChangeCountry={(event) => {
        //   handleInputChange('iso_code', event.cca2);
        //   handleInputChange('country', event.name);
        // }}
      />
      <TextInputField
        config={{
          defaultValue: userDetails.email || '',
          placeholder: 'Email Address',
          // onChangeText: handleInputChange.bind(this, 'email'),
        }}
        styling={{ marginBottom: 24 }}
      />
    </>
  );

  return (
    <Container>
      <KeyboardAvoidingView behavior="position">
        <ScreenHeader heading="Edit My Profile" />
        <View style={{ position: 'relative', marginBottom: 10 }}>
          <Image
            resizeMode="contain"
            style={styles.profilePic}
            source={{ uri: userDetails.profile_image }}
          />
          <View style={styles.icon}>
            <MaterialIcons name="photo-camera" size={14} color="white" />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          snapToEnd
          style={{ marginBottom: 20 }}
        >
          <AccordionItem title="Personal Information">
            {personalInfo}
          </AccordionItem>
          <AccordionItem title="Contact Information">
            {contactInfo}
          </AccordionItem>
          <AccordionItem title="Dependant Information">
            <>
              <Button
                title="Add new dependant"
                fullWidth
                variant="solid"
                color={Colors.secondary}
                onPress={() => {
                  navigation.navigate('AddNewDependantScreen');
                }}
              />
              {/* <ScrollView> */}
              {dependendants.map((dependant) => (
                <DependantItem key={dependant.id} dependant={dependant} />
              ))}
              {/* </ScrollView> */}
            </>
          </AccordionItem>
          <View style={styles.buttonsContainer}>
            <Button
              title="Save Changes"
              color={Colors.primary}
              onPress={() => {
                // navigation.navigate('EditProfileScreen');
              }}
              variant="solid"
            />
            <Button
              title="Cancel"
              color={Colors.gray}
              onPress={() => {
                navigation.goBack();
              }}
              variant="outlined"
            />
          </View>
          <View style={{ height: 450 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default EditProfileScreen;
