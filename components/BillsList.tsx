import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenNavigationProp } from '../Utils/types';
import Redirect from './Typography/Redirect';
import Heading from './Typography/Heading';
import SectionHeading from './Layout/SectionHeading';
import BillItem from './BillItem';

export const bills = [
  {
    id: 1,
    name: 'Convenience Fee',
    date: '22/10/2022',
    status: 'pending',
    amount: '200',
    type: 'credit',
  },
  {
    id: 2,
    name: 'M-PESA Payment',
    date: '22/10/2022',
    status: 'paid',
    amount: '500',
    type: 'debit',
  },
  {
    id: 3,
    name: 'Convenience Fee',
    date: '22/10/2022',
    status: 'pending',
    amount: '200',
    type: 'credit',
  },
  {
    id: 4,
    name: 'M-PESA Payment',
    date: '22/10/2022',
    status: 'paid',
    amount: '500',
    type: 'debit',
  },
  {
    id: 5,
    name: 'Convenience Fee',
    date: '22/10/2022',
    status: 'pending',
    amount: '200',
    type: 'credit',
  },
  {
    id: 6,
    name: 'Convenience Fee',
    date: '22/10/2022',
    status: 'pending',
    amount: '200',
    type: 'credit',
  },
  {
    id: 7,
    name: 'M-PESA Payment',
    date: '22/10/2022',
    status: 'paid',
    amount: '500',
    type: 'debit',
  },
];
const styles = StyleSheet.create({
  text: {
    fontFamily: 'helveticaMedium',
    textAlign: 'center',
    fontSize: 16,
  },
});

const BillsList = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ServicesScreen');
  };

  const pendingBills = bills?.slice(0, 5);

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <SectionHeading>
        <Heading heading="Pending Bills" />
        <Redirect text="see all" onPress={handlePress} />
      </SectionHeading>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bills}
        renderItem={({ item }) => <BillItem bill={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* <ScrollView>
        {pendingBills.length === 0 ? (
          <Text style={styles.text}>No pending bills</Text>
        ) : (
          pendingBills.map((pendingBill) => (
            <BillItem bill={pendingBill} key={pendingBill.id} />
          ))
        )}
      </ScrollView> */}
    </View>
  );
};

export default BillsList;
