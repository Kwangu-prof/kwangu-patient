import { StyleSheet, View } from 'react-native';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

const SectionHeading: React.FunctionComponent<IProps> = ({ children }) => {
  return <View style={styles.heading}>{children}</View>;
};

export default SectionHeading;
