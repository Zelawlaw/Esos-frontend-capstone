import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 1000,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` },
});

export default instance;
