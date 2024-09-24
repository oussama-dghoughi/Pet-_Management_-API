import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // URL de ton backend NestJS
});

export default axiosInstance;
