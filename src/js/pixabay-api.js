import axios from 'axios';

export async function getImagesByQuery(searchQuery, page = 1) {
  const API_KEY = '54685682-80977b0b5ca1319a1902ced87';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
