/* eslint-disable react/no-unstable-nested-components */

import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TransactionsIcon from '../icons/TransactionsIcon';
import RequestIcon from '../icons/RequestIcon';
import TransactionsScreen from '../../screens/TransactionsScreen';
import RequestsScreen from '../../screens/RequestsScreen';
import HomeIcon from '../icons/HomeIcon';
import Colors from '../../Utils/Colors';
import HomeStackNavigator, { HomeStackParamList } from './HomeStackNavigator';
import AuthScreen from '../../screens/auth/AuthScreen';
import { AuthContext } from '../../store/Context/auth-context';
import ProfileStackNavigator, {
  ProfileStackParamList,
} from './ProfileStackNavigator';

export type TabNavigatorParamList = {
  Auth: undefined;
  HomeScreen: NativeStackScreenProps<HomeStackParamList>;
  'My Requests': undefined;
  Transactions: {
    billType: string;
  };
  Profile: NativeStackScreenProps<ProfileStackParamList>;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

// const isAuthenticated =;
const TabNavigator = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return (
    <Tab.Navigator
      // initialRouteName={fromRegister === 'true' ? 'Profile' : 'Home'}
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          display: 'none',
        },
        tabBarStyle: {
          // paddingVertical,
          height: Platform.OS === 'android' ? 60 : 80,
          // height: 60,
        },
        tabBarItemStyle: {
          marginVertical: Platform.OS === 'android' ? 10 : 0,
        },
      }}
    >
      {!isAuthenticated ? (
        <Tab.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            // tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
      ) : (
        // <AuthScreen />
        <>
          <Tab.Screen
            name="HomeScreen"
            component={HomeStackNavigator}
            options={{
              tabBarIcon: ({ color }) => <HomeIcon color={color} />,
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="My Requests"
            component={RequestsScreen}
            options={{
              tabBarIcon: ({ color }) => <RequestIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Transactions"
            initialParams={{ billType: 'transactions' }}
            component={TransactionsScreen}
            options={{
              tabBarIcon: ({ color }) => <TransactionsIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-outline" color={color} size={24} />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default TabNavigator;
