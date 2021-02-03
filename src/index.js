import './styles.css';
import apiService from './js/apiService.js';
import refs from './js/refs.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import galleryList from './tamplate/galleryList.hbs';
import photoContainer from './tamplate/photoContainer.hbs';
const materialIcons = require('material-design-icons');

const state = {
  searchValue: '',
  pageNumber: 1,
};

function getGlobalData(searchValue, pageNumber) {
  return apiService(searchValue, pageNumber).then(data => {
    let string = galleryList(data);
    return string;
  });
}

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  // refs.gallery.innerHTML = "";
  state.searchValue = event.target.query.value;
  state.pageNumber = 1;
  getGlobalData(state.searchValue, state.pageNumber).then(
    string => (refs.gallery.innerHTML = string),
  );
});

refs.button.addEventListener('click', event => {
  event.preventDefault();
  state.pageNumber += 1;
  getGlobalData(state.searchValue, state.pageNumber)
    .then(string => refs.gallery.insertAdjacentHTML('beforeend', string))
    .then(() => {
      const position = refs.button.offsetTop;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
});
