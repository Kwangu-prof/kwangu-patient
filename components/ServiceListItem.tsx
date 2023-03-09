import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Colors from '../Utils/Colors';

type Props = {
  service: {
    id: string;
    image: string;
    name: string;
    description: string;
    price?: string;
  };
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // paddingRight:""
    // backgroundColor: 'red',
    // alignItems: 'flex-start',
    // paddingVertical: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.textInputGray,
    marginBottom: 10,
    paddingVertical: 10,
    borderColor: Colors.textInputGray,
    borderBottomWidth: 1,
  },
  innerContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  imageContainer: {
    backgroundColor: Colors.secondaryLight,
    // borderColor: 'red',
    // borderWidth: 1,
    marginRight: 5,
    height: 100,
    width: 100,
    flex: 1,
  },

  textContainer: {
    // width: '100%',
    marginTop: Platform.OS === 'android' ? -8 : 0,
    // borderColor: 'blue',
    // borderWidth: 1,
    flex: 2,
    // paddingLeft: 10,
    // // paddingRight: 90,
    // overflow: 'hidden',
    // paddingVertical:
  },
  heading: {
    // fontFamily: 'helveticaMedium',
    // fontSize: 14,
    // lineHeight: 21,
    // marginBottom: 6,
    fontSize: 18,
    fontFamily: 'helveticaMedium',
    // marginBottom: 3,
  },
  description: {
    fontFamily: 'helvetica',
    // fontSize: 11,
    // lineHeight: 16,
    // color: Colors.gray,
    // marginBottom: 4,
  },
  feeContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  fee: {
    // fontFamily: 'helveticaMedium',
    // alignItems: 'center',
  },
});

const ServiceListItem = ({ service }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('ServiceDetailsScreen', { serviceId: service.id });
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={{ uri: service.image }}
            style={{ width: '100%', height: '100%', borderRadius: 5 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{service.name}</Text>
          <Text style={styles.description} numberOfLines={5}>
            {service.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ServiceListItem;
