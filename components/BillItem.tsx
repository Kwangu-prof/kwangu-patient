import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

interface BillItemProps {
  bill: {
    id: number;
    name: string;
    date: string;
    status: string;
    amount: string;
    type: string;
  };
  transactionType?: string;
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGray,
    paddingVertical: 12,
    marginBottom: 10,
  },
  billContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  billName: {
    fontFamily: 'ubuntu',
    lineHeight: 21,
  },
  billAmount: {
    fontFamily: 'ubuntuMedium',
    lineHeight: 24,
  },
  billDate: {
    fontFamily: 'ubuntu',
    color: Colors.gray,
    fontSize: 11,
    lineHeight: 16,
  },
  billStatus: {
    fontFamily: 'ubuntu',
    fontSize: 11,
    lineHeight: 16,
    textTransform: 'capitalize',
  },
});

const BillItem: React.FunctionComponent<BillItemProps> = ({
  bill,
  transactionType,
}) => {
  let moreStyles = { color: Colors.orange };

  if (bill.status === 'paid') {
    moreStyles = { color: 'green' };
  }

  if (bill.type === 'credit' && transactionType === 'transactions') {
    moreStyles = { color: Colors.primary };
  }

  if (bill.type === 'debit' && transactionType === 'transactions') {
    moreStyles = { color: Colors.secondary };
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.billContainer}>
        <Text style={styles.billName}>{bill.name}</Text>
        <Text style={styles.billAmount}>{bill.amount}</Text>
      </View>
      <View style={styles.billContainer}>
        <Text style={styles.billDate}>{bill.date}</Text>
        <Text style={[styles.billStatus, moreStyles]}>
          {transactionType === 'pending' ? bill.status : bill.type}
        </Text>
      </View>
    </View>
  );
};

export default BillItem;
