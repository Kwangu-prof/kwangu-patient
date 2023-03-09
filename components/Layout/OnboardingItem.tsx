import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../../Utils/Colors';

interface Iprops {
  data: {
    id: number;
    logo: ImageSourcePropType;
    image: ImageSourcePropType;
    title: string;
    subtitle?: string;
    color: string;
    description: string;
  };
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  imageContainer: {
    marginBottom: 20,
    // width: '100%',
    borderRadius: 32,
    overflow: 'hidden',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: '100%',
  },

  logo: {
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'helveticaBold',
    fontSize: 30,
    marginBottom: 12,
  },
  text: {
    fontFamily: 'helvetica',
    lineHeight: 21,
    textAlign: 'left',
  },
});

const OnboardingItem: React.FunctionComponent<Iprops> = ({ data }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, maxWidth: width, height }]}>
      <View style={[styles.imageContainer, { width: width * 0.9 }]}>
        <Image style={[styles.image]} source={data.image} />
      </View>
      <View>
        <Image
          style={[styles.logo, { resizeMode: 'contain' }]}
          source={data.logo}
        />
        <Text style={styles.heading}>
          {data.title}{' '}
          <Text style={{ color: Colors.secondary }}>{data.subtitle}</Text>
        </Text>
        <Text style={styles.text}>{data.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
