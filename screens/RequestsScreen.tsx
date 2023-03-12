import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import Container from '../components/Layout/Container';

function RequestsScreen() {
  return (
    <Container>
      <ScreenHeader heading="My Requests" />
      <Text>RequestsScreen</Text>
    </Container>
  );
}

export default RequestsScreen;

const styles = StyleSheet.create({});
