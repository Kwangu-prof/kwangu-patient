import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'App';
import Heading from './Typography/Heading';
import Redirect from './Typography/Redirect';
import ServiceItem from './ServiceItem';
import services from '../Utils/services';
import SectionHeading from './Layout/SectionHeading';

export interface Iprops {
  styling?: object;
}

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
  },
});

const ServicesList: React.FunctionComponent<Iprops> = ({ styling }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('ServicesScreen');
  };
  return (
    <View style={styling}>
      <SectionHeading>
        <Heading heading="Our Services" />
        <Redirect text="see all" onPress={handlePress} />
      </SectionHeading>
      <View style={styles.serviceContainer}>
        <FlatList
          horizontal
          data={services}
          renderItem={({ item }) => <ServiceItem service={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ServicesList;
