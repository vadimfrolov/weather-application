import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost/weather',
});
api.interceptors.request.use(config => {
  config.url = config.url + '&appid=' + process.env.APP_ID;
  return config;
});
export default api;
