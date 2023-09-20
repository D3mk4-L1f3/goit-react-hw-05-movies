import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '0eb5e646e9395809eb15661d4afcde1d';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

async function fetchGetInfo(operation, query = '', movieID = 0, page = 1) {
  try {
    let response;
    switch (operation) {
      case 'trendingIO':
        response = await instance.get('/trending/movie/day');
        break;

      case 'searchIO':
        response = await instance.get('/search/movie', {
          params: { query, include_adult: false, page },
        });
        break;

      case 'detailsIO':
        response = await instance.get(`/movie/${movieID}`);
        break;

      case 'castIO':
        response = await instance.get(`/movie/${movieID}/credits`);
        break;

      case 'reviewsIO':
        response = await instance.get(`/movie/${movieID}/reviews`, {
          params: { page },
        });
        break;

      default:
        throw new Error('Invalid operation');
    }

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error) {
    let errorMessage;
    switch (error.response ? error.response.status : null) {
      case 400:
        errorMessage = 'Oops! Check/correct your input';
        break;
      case 401:
        errorMessage =
          'Oops! Something went wrong with the API key. Contact the developer.';
        break;
      case 404:
        errorMessage = 'Oops! Page is not found!';
        break;

      default:
        errorMessage = 'Oops! Something went wrong. Please try again later!';
    }
    toast.error(errorMessage);
    throw error;
  }
}

export { fetchGetInfo };
