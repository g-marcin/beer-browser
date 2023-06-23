import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `https://api.punkapi.com/v2`,
  timeout: 4000,
});
