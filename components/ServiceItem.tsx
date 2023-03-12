/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Colors from '../Utils/Colors';
import { HomeStackParamList } from './navigation/HomeStackNavigator';

export interface ServiceItemProps {
  service: {
    id: string;
    image: string;
    name: string;
    description: string;
  };
}

const styles = StyleSheet.create({
  container: {
    height: 135,
    width: 111,
    backgroundColor: Colors.primaryLight,
    borderRadius: 5,
    marginRight: 6,
    paddingTop: 6,
    paddingHorizontal: 8,
  },
  innerContainer: {
    alignItems: 'center',
  },
  image: {
    height: 96,
    width: 96,
    marginBottom: 5,
  },
  title: {
    fontFamily: 'helvetica',
    color: Colors.primary,
    lineHeight: 21,
    fontSize: 14,
    flexDirection: 'row',
  },
});

type ServiceItemScreenNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const ServiceItem: React.FunctionComponent<ServiceItemProps> = ({
  service,
}) => {
  const { navigate } = useNavigation<ServiceItemScreenNavigationProps>();

  const handleNavigation = () => {
    navigate('ServiceDetailsScreen', { serviceId: service.id });
  };

  return (
    <Pressable onPress={handleNavigation}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{ uri: service.image }}
            resizeMode="cover"
          />
          <Text style={styles.title} numberOfLines={1}>
            {service.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ServiceItem;
