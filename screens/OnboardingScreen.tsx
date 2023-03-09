/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';

import { OnboardingData } from '../Utils/onboardingData';
import OnboardingItem from '../components/Layout/OnboardingItem';
import Colors from '../Utils/Colors';

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 25,
    // paddingHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    borderRadius: 50,
    backgroundColor: Colors.primary,
  },
  footerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: Colors.white,
    height: 44,
    width: 44,
    borderRadius: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'helveticaMedium',
    marginHorizontal: 12,
  },
});

function OnboardingScreen() {
  const [curentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { width } = useWindowDimensions();
  // const navigation = useNavigation<StackNavigationProp<{ route: object }>>();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const ref = useRef<FlatList>(null);

  const handleCurrentIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const handleNextSlide = () => {
    const nextSlideIndex = curentSlideIndex + 1;
    if (nextSlideIndex === OnboardingData.length) {
      return;
    }
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(nextSlideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        horizontal
        data={OnboardingData}
        renderItem={({ item }) => <OnboardingItem data={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => handleCurrentIndex(event)}
        pagingEnabled
        bounces={false}
      />
      <View style={{ width: '100%', paddingHorizontal: 1 }}>
        <View style={styles.footer}>
          {/* <View>
          <Text>{'>>'}</Text>
        </View> */}
          <View style={styles.footerButtonsContainer}>
            <Pressable onPress={handleNextSlide} style={styles.footerButton}>
              <AntDesign
                name={curentSlideIndex === 0 ? 'doubleright' : 'doubleleft'}
                size={20}
                color={Colors.primary}
              />
            </Pressable>
            <Text
              style={[
                styles.buttonText,
                { display: curentSlideIndex === 0 ? 'none' : 'flex' },
              ]}
            >
              Previous
            </Text>
          </View>
          <View style={styles.footerButtonsContainer}>
            <Text style={styles.buttonText}>
              {curentSlideIndex === 2 ? 'Get Started' : 'Next'}
            </Text>
            <Pressable
              onPress={
                curentSlideIndex === OnboardingData.length - 1
                  ? () => navigation.replace('HomeScreen')
                  : handleNextSlide
              }
              style={[
                styles.footerButton,
                // {
                //   display:
                //     curentSlideIndex === 0 || curentSlideIndex === 2
                //       ? 'none'
                //       : 'flex',
                // },
              ]}
            >
              <AntDesign name="doubleright" size={20} color={Colors.primary} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
