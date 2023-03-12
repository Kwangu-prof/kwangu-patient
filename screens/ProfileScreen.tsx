/* eslint-disable global-require */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from '../components/Layout/Container';
import ScreenHeader from '../components/ScreenHeader';
import Colors from '../Utils/Colors';
import ProfileInfo from '../components/Layout/ProfileInfo';
import Button from '../components/UI/Button';
import { AuthContext } from '../store/Context/auth-context';

const styles = StyleSheet.create({
  mainInfoContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    // marginBottom: 10,
  },
  profilePic: {
    // marginBottom: 10,
    height: 97,
    width: 97,
    borderRadius: 194,
    alignSelf: 'center',
  },
  profileText: {
    fontFamily: 'helvetica',
    textAlign: 'center',
  },
  name: {
    fontFamily: 'helveticaMedium',
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 4,
  },
  email: {
    color: Colors.secondary,
    lineHeight: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

function ProfileScreen() {
  const { userDetails } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <ScreenHeader heading="My Profile" />
      <View style={styles.mainInfoContainer}>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="contain"
            style={styles.profilePic}
            source={{ uri: userDetails.profile_image }}
          />
          <View>
            <Text style={[styles.profileText, styles.name]}>
              {`${userDetails.firstname} ${userDetails.lastname}`}{' '}
            </Text>
            <Text style={[styles.profileText, styles.email]}>
              {userDetails.email}
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <ProfileInfo infoTitle="National ID" infoText={userDetails.id_number} />
        <ProfileInfo
          infoTitle="Date of Birth"
          infoText={userDetails.date_of_birth}
        />
        <ProfileInfo infoTitle="Gender" infoText={userDetails.gender} />
        <ProfileInfo
          infoTitle="Phone Number"
          infoText={userDetails.phone_number}
        />
        <ProfileInfo
          infoTitle="Location"
          infoText={`${userDetails.lattitude}, ${userDetails.longitude}`}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Edit Profile"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate('EditProfileScreen');
          }}
          variant="solid"
        />
        <Button
          title="change password"
          color={Colors.darkRed}
          onPress={() => {}}
          variant="outlined"
        />
      </View>
    </Container>
  );
}

export default ProfileScreen;
