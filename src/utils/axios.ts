import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ResponseDataType } from '@/types/axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const defaultConfig: AxiosRequestConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const instance: AxiosInstance = axios.create(defaultConfig);

instance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseDataType<T>> => {
  const { data } = await instance.request<ResponseDataType<T>>(config);
  const { code, message, status } = data;
  if (code !== 200) {
    window.$message[status](message);
  }
  return data;
};

export default request;
