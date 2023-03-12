import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Redirect from './Typography/Redirect';
import Heading from './Typography/Heading';
import SectionHeading from './Layout/SectionHeading';
import BillItem from './BillItem';
import { TabNavigatorParamList } from './navigation/TabNavigator';

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

type BillScreenNavigationType = BottomTabNavigationProp<
  TabNavigatorParamList,
  'Transactions'
>;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'helveticaMedium',
    textAlign: 'center',
    fontSize: 16,
  },
});

const BillsList = () => {
  const navigation = useNavigation<BillScreenNavigationType>();

  const handlePress = () => {
    navigation.navigate('Transactions', { billType: 'pending' });
  };

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
    </View>
  );
};

export default BillsList;
