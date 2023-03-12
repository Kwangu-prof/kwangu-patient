import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';
import Heading from './Typography/Heading';
import Redirect from './Typography/Redirect';
import ServiceItem from './ServiceItem';
import SectionHeading from './Layout/SectionHeading';
import { HomeStackParamList } from './navigation/HomeStackNavigator';

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
  const { navigate } =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Home'>>();
  const handlePress = () => {
    navigate('ServicesScreen');
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
