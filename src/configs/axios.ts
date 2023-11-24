import axios from 'axios';
import { API_URl, USER_CREDENTIAL } from 'src/utils/constant';

export const api = axios.create({
  baseURL: API_URl,
  headers: {},
});

api.interceptors.request.use(
  (config) => {
    const credential = localStorage.getItem(USER_CREDENTIAL);
    const accessToken = credential ? JSON.parse(credential).accessToken : null;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    // Handle error responses here
    return Promise.reject(error);
  }
);


