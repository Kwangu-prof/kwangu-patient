import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FloatingButton from '../UI/FloatingButton';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      {/* <FloatingButton /> */}
    </View>
  );
};

export default Container;
