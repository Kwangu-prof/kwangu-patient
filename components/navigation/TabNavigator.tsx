/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import TransactionsIcon from '../icons/TransactionsIcon';
import RequestIcon from '../icons/RequestIcon';
import TransactionsScreen from '../../screens/TransactionsScreen';
import RequestsScreen from '../../screens/RequestsScreen';
import HomeIcon from '../icons/HomeIcon';
import Colors from '../../Utils/Colors';
import ProfileScreen from '../../screens/ProfileScreen';
import HomeStackNavigator from './HomeStackNavigator';
import AuthScreen from '../../screens/auth/AuthScreen';

const Tab = createBottomTabNavigator();

const isAuthenticated = true;

const TabNavigator = () => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isAuthenticated ? (
        <AuthScreen />
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: Colors.secondary,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              display: 'none',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarIcon: ({ color }) => <HomeIcon color={color} />,
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
            component={TransactionsScreen}
            options={{
              tabBarIcon: ({ color }) => <TransactionsIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-outline" color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default TabNavigator;
