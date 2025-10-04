import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';

export const postApi: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/posts`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userApi: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/users`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
