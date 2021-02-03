import axios from 'axios';

const baseUrl = `https://pixabay.com/api/`;
const key = `20134869-f642f32873dada644aca7b373`;

export default {
  apiService(pageQuery, pageNumber) {
    return axios(
      `${baseUrl}?image_type=photo&orientation=horizontal&q=${pageQuery}&page=${pageNumber}&per_page=12&key=${key}`,
    )
      .then(({ data }) => data.hits)
      .catch(error => console.log(error));
  },
};
