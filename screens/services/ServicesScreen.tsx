import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import Container from '../../components/Layout/Container';
import TextInputField from '../../components/UI/TextInputField';
import Colors from '../../Utils/Colors';
// import services from '../../Utils/services';
import ServiceListItem from '../../components/ServiceListItem';
import useFetchData from '../../Hooks/useFetch';

const ServicesScreen = () => {
  const { data, isLoading, error } = useFetchData(
    ['services'],
    '/services',
    {},
    'Error fetching services',
    true
  );
  return (
    <>
      <View style={{ paddingHorizontal: 16 }}>
        <ScreenHeader heading="Our Services" />
        <TextInputField
          icon="search"
          reverse
          iconColor={Colors.secondary}
          config={{
            placeholder: 'Search Services',
          }}
          styling={{ marginBottom: 24 }}
        />
      </View>
      <FlatList
        style={{ paddingHorizontal: 16, paddingBottom: 16 }}
        data={data?.data?.data}
        renderItem={({ item }) => <ServiceListItem service={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
