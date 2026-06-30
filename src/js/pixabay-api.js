import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54685682-80977b0b5ca1319a1902ced87';
export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
