import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export interface Iprops {
  heading: string;
  styling?: object;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'helveticaMedium',
    fontSize: 18,
    lineHeight: 27,
  },
});

const Heading: React.FunctionComponent<Iprops> = ({ heading, styling }) => {
  return <Text style={[styles.title, styling]}>{heading}</Text>;
};

export default Heading;
