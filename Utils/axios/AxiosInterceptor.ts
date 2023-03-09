/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// const baseURL =
//   process.env.REACT_APP_BASE_URL || 'https://api.beta.v1.gateway.kwangu.health';

// set up config for courses api calls
const axiosInstance = axios.create({
  baseURL: 'https://api.beta.v1.gateway.kwangu.health',
});

// intercept every request and add the bearer token
axiosInstance.interceptors.request.use(
  async (requestConfig) => {
    const token = await AsyncStorage.getItem('token');
    requestConfig.headers.authorization = `Bearer ${token}`;
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (responseConfig) => {
    return responseConfig;
  },
  (error) => {
    // check if error from server is 401 then logout user

    if (error.response?.status === 401) {
      AsyncStorage.clear();
      //   AsyncStorage.removeItem('token');
      //   AsyncStorage.removeItem('userDetials');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
