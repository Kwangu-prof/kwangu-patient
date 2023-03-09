import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import RootHomeStackParamList from '../../types/navigationTypes';
import useFetchData from '../../Hooks/useFetch';
import Banner from '../../components/Layout/Banner';
import TextInputField from '../../components/UI/TextInputField';
import Colors from '../../Utils/Colors';
import ServiceListItem from '../../components/ServiceListItem';
import SpecialtyItem from '../../components/SpecialtyItem';
// import { RootHomeStackParamList } from '../../components/navigation/HomeStackNavigator';

// type Props = { text: string };
type ServiceRouteProps = RouteProp<
  RootHomeStackParamList,
  'ServiceDetailsScreen'
>;

const ServiceDetailScreen = () => {
  const { params } = useRoute<ServiceRouteProps>();
  const { data, error, isLoading } = useFetchData(
    ['service', params.serviceId],
    `/services/${params.serviceId}`,
    {},
    'Error getting service. Please try again',
    params.serviceId
  );

  const { data: spcialityData } = useFetchData(
    ['specialities', params.serviceId],
    `/services/specialty`,
    {
      params: {
        service_id: params.serviceId,
      },
    },
    'Error getting specialities. Please try again',
    params.serviceId
  );

  const service = data?.data.service;
  // console.log('spcialityData', spcialityData?.data?.specialty);

  return (
    <View style={{ paddingHorizontal: 16, flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={{ height: '100%' }}>
          <ScreenHeader heading={service?.name} />
          <TextInputField
            icon="search"
            reverse
            iconColor={Colors.secondary}
            config={{
              placeholder: 'Search Specialities',
            }}
            styling={{ marginBottom: 24 }}
          />
          <Banner text={service?.description} />
          {/* <View style={{ backgroundColor: 'red', height: '100%' }}> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 16, paddingBottom: 16, flex: 1 }}
            data={spcialityData?.data?.specialty}
            renderItem={({ item }) => <SpecialtyItem specialty={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
          {/* </View> */}
        </View>
      )}
    </View>
  );
};

export default ServiceDetailScreen;

const styles = StyleSheet.create({});
