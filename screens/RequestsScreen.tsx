import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';

function RequestsScreen() {
  return (
    <View>
      <ScreenHeader heading="My Requests" />
      <Text>RequestsScreen</Text>
    </View>
  );
}

export default RequestsScreen;

const styles = StyleSheet.create({});
