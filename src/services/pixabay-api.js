import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const parameters = new URLSearchParams({
  key: '35406729-d8fde4d78194a9b2786209d5b',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

async function fetchImages(query = '', page = 1) {
  const response = await axios.get(`?q=${query}&page=${page}&${parameters}`);

  if (response.data.total) {
    return response.data;
  }

  return Promise.reject(new Error(`We can\`t find image of ${query}`));
}

export default fetchImages;
