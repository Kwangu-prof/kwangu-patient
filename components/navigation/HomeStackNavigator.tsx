import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import ServicesScreen from '../../screens/services/ServicesScreen';

export type RootHomeStackParamList = {
  HomeScreen: undefined;
  ServicesScreen: undefined;
};

const HomeStack = createNativeStackNavigator<RootHomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ServicesScreen" component={ServicesScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
