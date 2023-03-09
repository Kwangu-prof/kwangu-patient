import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import Heading from './Typography/Heading';

export interface Iprops {
  heading: string;
  subtitle?: string;
}

const styles = StyleSheet.create({
  headerContainer: {
    // marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'helveticaMedium',
    fontSize: 18,
    lineHeight: 27,
  },
  highlightText: {
    fontFamily: 'helvetica',
    color: Colors.gray,
    fontSize: 16,
    lineHeight: 24,
  },
  menu: {
    // marginRight: 5,
    width: 150,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    position: 'absolute',
    top: 30,
    zIndex: 100,
    elevation: 5,
  },
  menuText: {
    fontFamily: 'helveticaMedium',
  },
});

const ScreenHeader: React.FunctionComponent<Iprops> = ({
  heading,
  subtitle,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerContainer}>
        <Heading heading={heading} />
        <View style={{ alignItems: 'flex-end' }}>
          <SimpleLineIcons name="settings" size={24} color="black" />
          <View style={styles.menu}>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
          </View>
        </View>
      </View>
      <Text style={styles.highlightText}>{subtitle}</Text>
    </View>
  );
};

export default ScreenHeader;
