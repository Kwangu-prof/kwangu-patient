import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

type Props = {
  service: {
    id: number;
    image: string;
    name: string;
    description: string;
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textInputGray,
  },
  icon: {
    backgroundColor: Colors.secondaryLight,
    height: 50,
    width: 50,
  },

  textContainer: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 60,
    overflow: 'hidden',
  },
  heading: {
    fontFamily: 'ubuntuMedium',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 11,
  },
  description: {
    fontFamily: 'ubuntu',
    fontSize: 11,
    lineHeight: 16,
    color: Colors.gray,
  },
});

const ServiceListItem = ({ service }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{service.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {service.description}
        </Text>
      </View>
    </View>
  );
};

export default ServiceListItem;
