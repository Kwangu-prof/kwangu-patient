import { QueryKey, useQuery } from '@tanstack/react-query';
import { Alert } from 'react-native';
import axiosInstance from '../Utils/axios/AxiosInterceptor';

const useFetchData = (
  queryKey: QueryKey,
  url: string,
  config: object,
  errorMessage: string,
  dependecy?: boolean | string,
  noCache?: boolean
) => {
  const queryFunction = async () => {
    const response = await axiosInstance.get(url, config);
    return response;
  };

  const { data, isLoading, error } = useQuery(queryKey, queryFunction, {
    staleTime: noCache ? 0 : 3600 * 1000,
    cacheTime: noCache ? 0 : 3600 * 1000,
    enabled: !!dependecy,
    onError: () => {
      Alert.alert('Something went wrong', errorMessage);
    },
  });

  return { data, isLoading, error };
};

export default useFetchData;
