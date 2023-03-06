import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../Utils/Colors';

type Props = {};
const styles = StyleSheet.create({
  container: { backgroundColor: Colors.primary },
});

const FloatingButton = (props: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="add" size={24} color="black" />
    </View>
  );
};

export default FloatingButton;
