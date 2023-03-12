import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../../screens/EditProfileScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import AddDependantScreen from '../../screens/AddDependantScreen';
import EditDependantProfileScreen from '../../screens/EditDependantProfileScreen';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  AddNewDependantScreen: undefined;
  EditDependantProfileScreen: { dependantId: string };
};

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      <ProfileStack.Screen
        name="AddNewDependantScreen"
        component={AddDependantScreen}
      />
      <ProfileStack.Screen
        name="EditDependantProfileScreen"
        component={EditDependantProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
