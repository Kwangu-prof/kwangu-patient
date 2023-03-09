import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from 'App';
import Heading from './Typography/Heading';
import Redirect from './Typography/Redirect';
import ServiceItem from './ServiceItem';
import SectionHeading from './Layout/SectionHeading';

export interface Iprops {
  data: [
    {
      id: string;
      name: string;
      description: string;
      image: string;
      country: string;
      image_icon: string;
    }
  ];
  styling?: object;
}

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
  },
});

const ServicesList: React.FunctionComponent<Iprops> = ({ data, styling }) => {
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
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item }) => <ServiceItem service={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ServicesList;
