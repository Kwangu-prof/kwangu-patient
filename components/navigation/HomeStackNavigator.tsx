import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import HomeScreen from '../../screens/HomeScreen';
import ServicesScreen from '../../screens/services/ServicesScreen';
import ServiceDetailScreen from '../../screens/services/ServiceDetailScreen';
import { RootStackParamList } from '../../App';

export type HomeStackParamList = {
  Home: NativeStackScreenProps<RootStackParamList, 'HomeStack'>;
  ServicesScreen: undefined;
  ServiceDetailsScreen: {
    serviceId: string;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ServicesScreen" component={ServicesScreen} />
      <HomeStack.Screen
        name="ServiceDetailsScreen"
        component={ServiceDetailScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
