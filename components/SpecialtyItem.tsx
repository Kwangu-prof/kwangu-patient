import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

type Props = {
  specialty: {
    id: string;
    description: string;
    price: string;
    name: string;
  };
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    // paddingHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderColor: Colors.textInputGray,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'helveticaMedium',
    marginBottom: 3,
  },
  description: {
    fontFamily: 'helvetica',
    color: Colors.gray,
    // marginVertical: 100,
  },
  feeContainer: {
    backgroundColor: Colors.secondaryDark,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 4 : 0,
    borderRadius: 10,
    marginVertical: 5,
    // width: '',
  },
  fee: {
    fontFamily: 'helveticaMedium',
    color: Colors.secondaryLight,
    fontSize: 16,
  },
});

const SpecialtyItem = ({ specialty }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{specialty.name}</Text>
      <View style={{ marginVertical: 5 }}>
        <Text style={styles.description}>{specialty.description}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontFamily: 'helveticaMedium' }}>
          Consultation Fee:{' '}
        </Text>
        <View style={styles.feeContainer}>
          <Text style={styles.fee}>Ksh {specialty.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpecialtyItem;
