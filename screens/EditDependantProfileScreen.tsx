import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import ScreenHeader from '../components/ScreenHeader';
import Colors from '../Utils/Colors';
import Container from '../components/Layout/Container';
import TextInputField from '../components/UI/TextInputField';
import Button from '../components/UI/Button';

type Props = {
  dependant: {
    profile_image: string;
  };
};

const styles = StyleSheet.create({
  profilePic: {
    // marginBottom: 10,
    height: 97,
    width: 97,
    borderRadius: 194,
    alignSelf: 'center',
    backgroundColor: 'gray',
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

const EditDependantProfileScreen = () => {
  return (
    <Container>
      <KeyboardAvoidingView behavior="position" />
      <ScreenHeader heading="Edit My Profile" />
      <View style={{ position: 'relative', marginBottom: 10 }}>
        <Image
          resizeMode="contain"
          style={styles.profilePic}
          source={{ uri: 'dependant?.profile_image' }}
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
        <TextInputField
          config={{
            placeholder: 'First Name',
            // onChangeText: handleInputChange.bind(this, 'email'),
          }}
          styling={{ marginBottom: 24 }}
        />
        <TextInputField
          config={{
            placeholder: 'Last Name',
            // onChangeText: handleInputChange.bind(this, 'email'),
          }}
          styling={{ marginBottom: 24 }}
        />
        <TextInputField
          config={{
            placeholder: 'Category',
            // onChangeText: handleInputChange.bind(this, 'email'),
          }}
          styling={{ marginBottom: 24 }}
        />
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
              // navigation.goBack();
            }}
            variant="outlined"
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default EditDependantProfileScreen;
