import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import Container from '../../components/Layout/Container';
import TextInputField from '../../components/UI/TextInputField';
import Colors from '../../Utils/Colors';
import services from '../../Utils/services';
import ServiceListItem from '../../components/ServiceListItem';

const ServicesScreen = () => {
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
        data={services}
        renderItem={({ item }) => <ServiceListItem service={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});
