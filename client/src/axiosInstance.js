import axios from 'axios';
import API_KEY from './config.js';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY
  }
});