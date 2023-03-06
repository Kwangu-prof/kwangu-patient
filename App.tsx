import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { useCallback, useEffect, useState } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './screens/OnboardingScreen';
import 'react-native-gesture-handler';
import TabNavigator from './components/navigation/TabNavigator';

export type RootStackParamList = {
  HomeScreen: undefined;
  Onboarding: undefined;
  ServicesScreen: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [firstTimeLaunch, setFirstTimeLaunch] = useState<boolean>(true);

  useEffect(() => {
    const getAppData = async () => {
      const firstLaunch = await AsyncStorage.getItem('firstTimeLaunch');
      if (!firstLaunch) {
        setFirstTimeLaunch(true);
        AsyncStorage.setItem('firstTimeLaunch', 'true');
      } else {
        setFirstTimeLaunch(false);
      }
    };
    getAppData();
  }, [firstTimeLaunch]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          ubuntu: Ubuntu_400Regular,
          ubuntuMedium: Ubuntu_500Medium,
          ubuntuBold: Ubuntu_700Bold,
        });
        await AsyncStorage.getItem('firstLaunch');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer theme={MyTheme} onReady={onLayoutRootView}>
      {!firstTimeLaunch ? (
        <>
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="dark" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="HomeScreen" component={TabNavigator} />
          </Stack.Navigator>
        </>
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
}
