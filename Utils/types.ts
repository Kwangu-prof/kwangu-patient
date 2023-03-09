import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  Onboarding: undefined;
  ServicesScreen: undefined;
  profile: undefined;
  EditProfileScreen: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
