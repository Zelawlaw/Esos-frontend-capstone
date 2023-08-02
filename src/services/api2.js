import axios from 'axios';

const getAxiosInstance = (bearer) => {
  return axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    timeout: 1000,
    headers: { 'Authorization': `Bearer ${bearer}` },
  });
};

export default getAxiosInstance;
