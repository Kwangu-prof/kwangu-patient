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
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'ubuntuMedium',
    fontSize: 18,
    lineHeight: 27,
  },
  highlightText: {
    fontFamily: 'ubuntu',
    color: Colors.gray,
    fontSize: 16,
    lineHeight: 24,
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
        <SimpleLineIcons name="settings" size={24} color="black" />
      </View>
      <Text style={styles.highlightText}>{subtitle}</Text>
    </View>
  );
};

export default ScreenHeader;
