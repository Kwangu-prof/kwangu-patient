import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from './Typography/Heading';
import AppointmentCalendar from './icons/AppointmentCalendar';
import Colors from '../Utils/Colors';

export interface Iprops {
  upcoming: boolean;
  styling?: object;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.lightGray,
  },
  // appointementContainer: {},
  upcomingAppointment: {
    backgroundColor: Colors.secondary,
  },
});

const Appointment: React.FunctionComponent<Iprops> = ({
  styling,
  upcoming,
}) => {
  return (
    <View>
      <Heading
        heading="Upcoming Service Appointments"
        styling={{ marginBottom: 16 }}
      />
      {/* <View style={[styles.appointementContainer, styling]}>
        <AppointmentCalendar />
        <Text>No upcoming appointments</Text>
      </View> */}
      <View style={[styles.container, styling]}>
        <AppointmentCalendar />
        <Text>No upcoming appointments</Text>
      </View>
      {/* <View style={styles.appointementContainer}></View> */}
    </View>
  );
};

export default Appointment;
