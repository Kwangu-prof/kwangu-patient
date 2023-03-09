import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../components/Layout/Container';
import ScreenHeader from '../components/ScreenHeader';
import BillItem from '../components/BillItem';
import { bills } from '../components/BillsList';
import Colors from '../Utils/Colors';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: Colors.secondaryLight,
    // paddingVertical: 12,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'helveticaMedium',
  },
  text: {
    fontFamily: 'helveticaMedium',
    textAlign: 'center',
    fontSize: 16,
  },
});

function TransactionsScreen() {
  const [transactionType, setTransactionType] = useState('transactions');
  const [filteredBills, setFilteredBills] = useState(bills);

  const handleTransactionChange = () => {
    if (transactionType === 'transactions') {
      return setTransactionType('pending');
    }
    return setTransactionType('transactions');
  };

  useEffect(() => {
    if (transactionType === 'pending') {
      const pendingBills = bills.filter((bill) => bill.status === 'pending');
      return setFilteredBills(pendingBills);
    }
    return setFilteredBills(bills);
  }, [transactionType]);

  return (
    <Container>
      <ScreenHeader heading="My Transactions" />
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={handleTransactionChange}
          style={[
            styles.button,
            transactionType === 'transactions' && {
              backgroundColor: Colors.secondary,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              transactionType === 'transactions' && {
                color: Colors.white,
              },
            ]}
          >
            Transactions
          </Text>
        </Pressable>
        <Pressable
          onPress={handleTransactionChange}
          style={[
            styles.button,
            transactionType === 'pending' && {
              backgroundColor: Colors.secondary,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              transactionType === 'pending' && {
                color: Colors.white,
              },
            ]}
          >
            Pending Bills
          </Text>
        </Pressable>
      </View>
      {filteredBills.length === 0 ? (
        <Text style={styles.text}>No pending bills</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredBills}
          renderItem={({ item }) => (
            <BillItem bill={item} transactionType={transactionType} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Container>
  );
}

export default TransactionsScreen;
