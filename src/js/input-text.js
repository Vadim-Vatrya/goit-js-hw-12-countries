import fetchCountries from './fetchCountries';
import refs from './referals';
import inputLengthData from './markup';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(countryInput, 500));

function countryInput() {
  const countryName = refs.input.value;

  if (countryName === '') {
    return;
  }

  refs.container.innerHTML = '';
  fetchCountries(countryName).then(data => inputLengthData(data));
}
