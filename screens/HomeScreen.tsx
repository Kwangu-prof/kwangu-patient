import { StyleSheet, View } from 'react-native';
import React, { useContext, useState } from 'react';
import ScreenHeader from '../components/ScreenHeader';
import Container from '../components/Layout/Container';
import Appointment from '../components/Appointment';
import ServicesList from '../components/ServicesList';
import BillsList from '../components/BillsList';
import { AuthContext } from '../store/Context/auth-context';
import useFetchData from '../Hooks/useFetch';

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

// type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;
function HomeScreen() {
  const [upcoming, setUpcoming] = useState(false);
  const { userDetails } = useContext(AuthContext);

  const { data, isLoading, error } = useFetchData(
    ['services'],
    '/services',
    {},
    'Error fetching services',
    true
  );

  return (
    <>
      <Container>
        <ScreenHeader
          heading={`Hello ${userDetails.firstname},`}
          subtitle="How are you feeling today?"
        />
        <View style={styles.section}>
          <Appointment upcoming={upcoming} />
        </View>
        <View style={styles.section}>
          <ServicesList data={data?.data?.data} />
        </View>
      </Container>
      <View style={styles.section}>
        <BillsList />
      </View>
    </>
  );
}

export default HomeScreen;
