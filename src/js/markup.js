import severalCountries from '../templates/severalCountries.hbs';
import singleCountry from '../templates/singleCountry.hbs';
import refs from './referals';
import { error, notice, success } from '../js/notification';

function inputLengthData(countries) {
  console.log('countries: ', countries);
  console.log('amount of countries: ', countries.length);

  if (countries.length === undefined) {
    error({
      title: 'There is no such country!',
      hide: true,
      delay: 2000,
    });
  } else if (countries.length === 1) {
    const markup = singleCountry(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
      text: 'Country info loaded',
    });
  } else if (countries.length > 1 && countries.length < 11) {
    const markup = severalCountries(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
      text: 'Look at the countries on your request',
    });
  } else {
    notice({
      title: 'Too many countries, try to specify the request!',
      hide: true,
      delay: 2000,
    });
  }
}

export default inputLengthData;
// function inputLengthData(data) {
//   if (data.length > 1 && data.length < 11) {
//     clearValueInput();
//     return appendMarkUpCountries(data);
//   } else if (data.legnth === 1) {
//     clearValueInput();
//     return appendMarkUpCountry(data);
//   } else if (data.length === undefined) {
//     error({
//       title: 'There is no such country',
//       hide: true,
//       delay: 2000,
//     });
//   } else {
//     notice({
//       title: 'Too many countries, try to specify the request!',
//       hide: true,
//       delay: 2000,
//     });
//   }
// }

// function appendMarkUpCountries(countries) {
//   refs.container.insertAdjacentHTML('beforeend', singleCountry(countries));
// }

// function appendMarkUpCountry(countries) {
//   refs.container.insertAdjacentHTML('beforeend', severalCountries(countries));
// }

// function clearValueInput() {
//   refs.input.value = '';
// }
