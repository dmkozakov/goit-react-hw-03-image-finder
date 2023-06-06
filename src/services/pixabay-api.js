import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImage(query) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=35406729-d8fde4d78194a9b2786209d5b&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
}

export default fetchImage;
