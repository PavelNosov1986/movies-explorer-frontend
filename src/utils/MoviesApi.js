import { BASE_MOVIES_URL } from './constants';

export const getMoviesApi = () =>
  fetch(BASE_MOVIES_URL)
    .then(async (response) => {
      let data = await response.json();
      return data
    })
    .catch((error) => {
      console.error(error);
    });