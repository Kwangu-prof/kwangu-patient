/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

interface ServiceItemProps {
  service: {
    id: number;
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
    fontFamily: 'ubuntu',
    color: Colors.primary,
    lineHeight: 21,
    fontSize: 14,
    flexDirection: 'row',
  },
});

const ServiceItem: React.FunctionComponent<ServiceItemProps> = ({
  service,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={service?.image as ImageSourcePropType}
          resizeMode="contain"
        />
        {/* <Image style={styles.image} source={{ uri: service.image }} /> */}
        <Text style={styles.title} numberOfLines={1}>
          {service.name}
        </Text>
      </View>
    </View>
  );
};

export default ServiceItem;
