/* eslint-disable global-require */
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenuProvider } from 'react-native-popup-menu';
import OnboardingScreen from './screens/OnboardingScreen';
import 'react-native-gesture-handler';
import TabNavigator from './components/navigation/TabNavigator';
import AuthContextProvider, { AuthContext } from './store/Context/auth-context';
import { HomeStackParamList } from './components/navigation/HomeStackNavigator';

export type RootStackParamList = {
  HomeStack: NativeStackScreenProps<HomeStackParamList>;
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const queryClient = new QueryClient();

const Root = () => {
  const { authenticate } = useContext(AuthContext);
  const [appIsReady, setAppIsReady] = useState(false);
  const [firstTimeLaunch, setFirstTimeLaunch] = useState<boolean>(true);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const [fontsLoaded] = Font.useFonts({
    helvetica: require('./assets/fonts/helvetica-light.otf'),
    helveticaMedium: require('./assets/fonts/Helvetica.otf'),
    helveticaBold: require('./assets/fonts/Helvetica-Bold.otf'),
  });

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      const storedDetails = await AsyncStorage.getItem('userDetails');

      if (storedToken && storedDetails) {
        authenticate(storedToken, JSON.parse(storedDetails));
      }
      setIsAuthenticating(false);
    };
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <AuthContextProvider>
        {firstTimeLaunch ? (
          <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style="dark" />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="HomeStack" component={TabNavigator} />
            </Stack.Navigator>
          </>
        ) : (
          <TabNavigator />
        )}
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <Root />
      </MenuProvider>
    </QueryClientProvider>
    // </AuthContextProvider>
  );
}
