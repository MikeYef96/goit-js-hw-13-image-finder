import './styles.css';
import apiService from './js/apiService.js';
import refs from './js/refs.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import galleryList from './tamplate/galleryList.hbs';
import photoContainer from './tamplate/photoContainer.hbs';
const materialIcons = require('material-design-icons');

// const refs = {
//   countriesList: document.querySelector('.countries__list'),
//   searchInput: document.querySelector('.search__input'),
// };

// refs.searchInput.addEventListener('input', debounce(changeInputHandler, 500));

// function closeNotificationHandler() {
//   const notify = document.querySelector('.ui-pnotify');
//   notify.addEventListener('click', closeNotification);

//   function closeNotification(event) {
//     if (event.currentTarget) {
//       notify.remove('ui-pnotify');
//     }
//   }
// }

// function changeInputHandler(event) {
//   if (event.target.value === '' || event.target.value === ' ') {
//     PNotify.notice({
//       text: 'Please, enter country name!',
//       type: 'notice',
//       type: 'notice',
//       delay: 2000,
//     });
//     closeNotificationHandler();
//     return;
//   }
//   fetchApi
//     .fetchCountries(event.target.value)
//     .then(data => {
//       if (data.length === 1) {
//         refs.countriesList.innerHTML = `${countryItem(data)}`;
//         PNotify.success({
//           title: 'You found country!',
//           type: 'success',
//           text: 'You found country which you was searching',
//           delay: 2000,
//         });
//         closeNotificationHandler();
//       }
//       if (data.length >= 2 && data.length <= 10) {
//         refs.countriesList.innerHTML = `${countryList(data)}`;
//       }
//       if (data.length > 10) {
//         PNotify.error({
//           text: 'Tooooo many matches.Please enter more specific query!',
//           type: 'error',
//           delay: 2000,
//         });
//         closeNotificationHandler();
//       }
//     })
//     .catch(error => console.log(error));
// }
