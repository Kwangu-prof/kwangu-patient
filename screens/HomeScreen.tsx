import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import Container from '../components/Layout/Container';
import Appointment from '../components/Appointment';
import ServicesList from '../components/ServicesList';
import BillsList from '../components/BillsList';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    // paddingBottom: 16,
    backgroundColor: '#ffff',
  },
  section: {
    // marginVertical: 5,
  },
});

function HomeScreen() {
  const [upcoming, setUpcoming] = useState(false);
  return (
    <>
      <Container>
        <ScreenHeader
          heading="Hello Natalia,"
          subtitle="How are you feeling today?"
        />
        <View style={styles.section}>
          <Appointment upcoming={upcoming} />
        </View>
        <View style={styles.section}>
          <ServicesList />
        </View>
      </Container>
      <View style={styles.section}>
        <BillsList />
      </View>
    </>
  );
}

export default HomeScreen;
