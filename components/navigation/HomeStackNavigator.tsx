import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import ServicesScreen from '../../screens/services/ServicesScreen';
import ServiceDetailScreen from '../../screens/services/ServiceDetailScreen';
import RootHomeStackParamList from '../../types/navigationTypes';

const HomeStack = createNativeStackNavigator<RootHomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ServicesScreen" component={ServicesScreen} />
      <HomeStack.Screen
        name="ServiceDetailsScreen"
        component={ServiceDetailScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
