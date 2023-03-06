/* eslint-disable global-require */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../components/Layout/Container';
import ScreenHeader from '../components/ScreenHeader';
import Colors from '../Utils/Colors';
import ProfileInfo from '../components/Layout/ProfileInfo';
import Button from '../components/UI/Button';

const styles = StyleSheet.create({
  mainInfoContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    marginBottom: 10,
  },
  profilePic: {
    marginBottom: 10,
    height: 97,
    width: 97,
    borderRadius: 194,
    alignSelf: 'center',
  },
  profileText: {
    fontFamily: 'ubuntu',
    textAlign: 'center',
  },
  name: {
    fontFamily: 'ubuntuMedium',
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
    marginTop: 20,
  },
});

function ProfileScreen() {
  return (
    <Container>
      <ScreenHeader heading="My Profile" />
      <View style={styles.mainInfoContainer}>
        <View style={styles.profileContainer}>
          <Image
            resizeMode="contain"
            style={styles.profilePic}
            source={require('../assets/nursing.png')}
          />
          <View>
            <Text style={[styles.profileText, styles.name]}>Natalia Doe</Text>
            <Text style={[styles.profileText, styles.email]}>
              nataliadoe@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <ProfileInfo infoTitle="National ID" infoText="12345678" />
        <ProfileInfo infoTitle="Date of Birth" infoText="12/12/1990" />
        <ProfileInfo infoTitle="Gender" infoText="Female" />
        <ProfileInfo infoTitle="Phone Number" infoText="+254123456789" />
        <ProfileInfo
          infoTitle="Location"
          infoText="U5887.001.10ABCDE-P3-C31-T2-L23"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Edit Profile"
          color={Colors.primary}
          onPress={() => {}}
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
