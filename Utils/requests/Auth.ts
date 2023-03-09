import axios from 'axios';

const url = 'https://api.beta.v1.gateway.kwangu.health';

export const createUser = async (values: object) => {
  try {
    const data = await axios.post(`${url}/patients`, values);
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (values: object) => {
  try {
    const data = await axios.post(`${url}/auth/patient/login`, values);

    return data.data.token;
  } catch (error) {
    return error;
  }
};

export const getUserProfile = async (token: string) => {
  try {
    const data = await axios.get(`${url}/patients/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('data from patientr', data.data.patient);
    return data.data.patient;
  } catch (error) {
    return error;
  }
};
