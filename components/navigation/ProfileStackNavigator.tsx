import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import RootHomeStackParamList from '../../types/navigationTypes';
import EditProfileScreen from '../../screens/EditProfileScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const ProfileStack = createNativeStackNavigator<RootHomeStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
