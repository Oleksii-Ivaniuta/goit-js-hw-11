import axios from 'axios';

function fetchData(query) {
  const params = {
    key: '49512194-f753c2f34a7e7dbbd609db53f',
    q: query,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    url: 'https://pixabay.com/api/',
  };
  return axios.get(params.url, { params });
}

export default fetchData;