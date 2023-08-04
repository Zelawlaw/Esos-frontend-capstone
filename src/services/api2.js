import axios from 'axios';

const getAxiosInstance = (bearer) => {
  return axios.create({
    baseURL: 'https://esos-backend-0c90497ee6b3.herokuapp.com/api/v1/',
    timeout: 5000,
    headers: { 'Authorization': `Bearer ${bearer}` },
  });
};

export default getAxiosInstance;
